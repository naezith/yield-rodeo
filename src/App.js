import React, {useEffect, useState} from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSync} from '@fortawesome/free-solid-svg-icons'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

import './App.css'
import {loadWeb3, connectWallet } from './utility/web3_utils'
import {Col, Image, OverlayTrigger, Popover, Form, ButtonGroup} from 'react-bootstrap'
import {coinLogoUrl, getYields, getYieldsWithPrices} from './utility/api'
import {calcDaily, formatFiat, formatInteger, formatPercentage, getPoolName} from './utility/utils'
import {textHasAnyOfArray} from './utility/helpers'

const emptyFilters = {
  desiredCoins: '',
  strictFilter: true,
  exactMatch: false,
  desiredPlatforms: '',
  includeSingleAssets: true,
  includeLPs: true
}

const defaultFilters = {
  ...emptyFilters,
  desiredCoins: 'usdc dai busd',
  desiredPlatforms: 'cake auto aave sushi quick venus 1inch ellipsis mdex'
}

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [myAddress, setMyAddress] = useState('')
  const [yields, setYields] = useState([])
  const [filters, setFilters] = useState(defaultFilters)

  const resetFilters = () => {
    setFilters(defaultFilters)
  }

  const handleChange = event => {
    const { value, name } = event.target

    setFilters({...filters, [name]: value })
  }

  const handleCheckBoxChange = event => {
    const { checked, name } = event.target

    setFilters({...filters, [name]: checked })
  }

  const fetchInformation = async () => {
      console.log('Fetching information')

      // Get yields
      const _yields = await getYieldsWithPrices()
      setYields(_yields)
  }

  const loadWeb3AndConnectWallet = async () => {
    setIsLoading(true)

    const loaded = await loadWeb3()
    if (loaded) {
      setMyAddress(await connectWallet())
      await fetchInformation()
    }

    setIsLoading(false)
  }

  useEffect(() => {
    async function fetchData() {
      await fetchInformation()
    }
    fetchData()
  }, [])

  const { desiredCoins, strictFilter, exactMatch, desiredPlatforms, includeSingleAssets, includeLPs } = filters
  const desiredPlatformsArray = desiredPlatforms.trim().toUpperCase().split(' ')

  const filteredYields = yields.filter(pool => {
    const coinA = pool.coinA.toLowerCase()
    const coinB = !pool.coinB ? undefined : pool.coinB.toLowerCase()

    if(!includeLPs && coinB) return false
    if(!includeSingleAssets && !coinB) return false

    // Filter coins
    const desiredCoinsArray = desiredCoins.trim().toLowerCase().split(' ')
    if(desiredCoinsArray.length > 0) {
      // Single asset
      if(!pool.coinB) {
        if(!textHasAnyOfArray(coinA, desiredCoinsArray, exactMatch)) return false
      }
      // Liquidity Pool
      else {
        if(strictFilter) {
          if(!textHasAnyOfArray(coinA, desiredCoinsArray, exactMatch) || !textHasAnyOfArray(coinB, desiredCoinsArray, exactMatch)) return false
        }
        else {
          if(!textHasAnyOfArray(coinA, desiredCoinsArray, exactMatch) && !textHasAnyOfArray(coinB, desiredCoinsArray, exactMatch)) return false
        }
      }
    }

    // Filter platforms
    if(desiredPlatformsArray.length > 0)
      if(!textHasAnyOfArray(pool.platform.toUpperCase(), desiredPlatformsArray)) return false

    return true
  })

  return (
    <Container className="p-3 App full-height">
      <Jumbotron>
        <h1 className="header">yield.rodeo</h1>
        {/*
          isLoading ?
            <Spinner animation="border" role="status"/> :
            myAddress === '' ?
              <Button size="lg" onClick={loadWeb3AndConnectWallet}>Connect Wallet</Button> :
              <h5>{myAddress}</h5>
        */}

        {
          filteredYields.length > 0 &&
          <>
            <h5>{filteredYields.length} pools on Beefy</h5>
            <Button size="lg" variant="success" onClick={async () => {
              await fetchInformation()
            }}>
              <FontAwesomeIcon icon={faSync}/>
            </Button>
          </>
        }
      </Jumbotron>

      <Jumbotron className='filters'>
        <Form.Group>
          <Form.Label>Desired Coins</Form.Label>
          <Form.Control name='desiredCoins' value={desiredCoins} defaultValue={desiredCoins} size="sm" type="text" placeholder="eg. USDC DAI BUSD" onChange={handleChange} />
          <Form.Check name='strictFilter' checked={strictFilter} defaultChecked={strictFilter} type="checkbox" label="Show ONLY these coins (USDC won't show USDC-DAI)" onChange={handleCheckBoxChange} />
          <Form.Check name='exactMatch' checked={exactMatch} defaultChecked={exactMatch} type="checkbox" label="Exact Match (USDC won't match ibUSDC)" onChange={handleCheckBoxChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Desired Platforms</Form.Label>
          <Form.Control name='desiredPlatforms' value={desiredPlatforms} defaultValue={desiredPlatforms} size="sm" type="text" placeholder="eg. cake aave sushi" onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Check name='includeLPs' checked={includeLPs} defaultChecked={includeLPs} type="checkbox" label="Include Liquidity Pools" onChange={handleCheckBoxChange} />
          <Form.Check name='includeSingleAssets' checked={includeSingleAssets} defaultChecked={includeSingleAssets} type="checkbox" label="Include Single Assets" onChange={handleCheckBoxChange}  />
        </Form.Group>

        <hr/>
        <Form.Label>{filteredYields.length === 0 ? 'No pools found, please check your filters' : `Found ${filteredYields.length} pool${filteredYields.length === 1 ? '' : 's'} on Beefy Finance.`}</Form.Label>
        <ButtonGroup className='reset-filters-btn'>
          <Button size='sm' variant='info' onClick={() => { setFilters(emptyFilters)}}>Clear Filters</Button>
          <Button size='sm' variant='success' onClick={() => { setFilters(defaultFilters)}}>Default Filters</Button>
        </ButtonGroup>
      </Jumbotron>

      {
        filteredYields.length > 0 &&
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>Platform</th>
              <th>Pair</th>
              <th>APY</th>
              <th>Daily</th>
              <th>Trading Fees Included</th>
              <th>TVL</th>
            </tr>
            </thead>
            <tbody>
            {filteredYields.map(pool =>
              <tr key={pool.key}>
                <td>{pool.platform}</td>
                <td className='pool-name'>
                  <Container>
                  <Row>
                    <Col>
                      <Image src={coinLogoUrl(pool.coinA)} roundedCircle />
                    </Col>
                    <Col>
                      {getPoolName(pool)}
                    </Col>
                    <Col>
                      <Image src={coinLogoUrl(pool.coinB || pool.coinA)} roundedCircle />
                    </Col>
                  </Row>
                </Container>
                </td>
                <td>{formatPercentage(pool.totalApy)}</td>
                <td>{formatPercentage(calcDaily(pool.totalApy))}</td>
                <td>{pool.tradingApr ?
                  <OverlayTrigger
                    trigger="click"
                    overlay={
                      <Popover id="popover-basic">
                        <Popover.Title as="h3">APY Breakdown</Popover.Title>
                        <Popover.Content>
                          <Table striped bordered hover>
                            <tbody>
                            {pool.compoundingsPerYear && <tr>
                              <td>Compounds </td>
                              <td>{formatInteger(pool.compoundingsPerYear)}</td>
                            </tr>}
                            {pool.vaultApr && <tr>
                              <td>Vault APR</td>
                              <td>{formatPercentage(pool.vaultApr)}</td>
                            </tr>}
                            {pool.beefyPerformanceFee && <tr>
                              <td>Beefy Fee</td>
                              <td>{formatPercentage(pool.beefyPerformanceFee)}</td>
                            </tr>}
                            {pool.vaultApy && <tr>
                              <td>Vault APY</td>
                              <td>{formatPercentage(pool.vaultApy)}</td>
                            </tr>}
                            {pool.lpFee && <tr>
                              <td>LP Fee</td>
                              <td>{formatPercentage(pool.lpFee)}</td>
                            </tr>}
                            {pool.tradingApr && <tr>
                              <td>Trading APR</td>
                              <td>{formatPercentage(pool.tradingApr)}</td>
                            </tr>}
                            {pool.totalApy && <tr>
                              <td>Total APY</td>
                              <td>{formatPercentage(pool.totalApy)}</td>
                            </tr>}
                            </tbody>
                          </Table>
                        </Popover.Content>
                      </Popover>
                    }
                  >
                  <Button variant="success">Yes</Button>
                  </OverlayTrigger> : !pool.coinB ? '-' : "Unknown"}</td>
                <td>{formatFiat(pool.tvl)}</td>
              </tr>
            )}
            </tbody>
          </Table>
      }
    </Container>
  )
}

export default App
