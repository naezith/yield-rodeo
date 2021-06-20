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
import {Col, Image, OverlayTrigger, Popover, Form} from 'react-bootstrap'
import {coinLogoUrl, getYields} from './utility/api'
import {calcDaily, formatInteger, formatPercentage, getPoolName} from './utility/utils'

// const ApyTooltip = ({pool}) =>
//   <Tooltip id={pool.key + '-tooltip'}>
//     Hello!
//   </Tooltip>

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [myAddress, setMyAddress] = useState('')
  const [yields, setYields] = useState([])
  const [filters, setFilters] = useState({
    desiredCoins: 'usdc dai busd',
    strictFilter: true,
    includeSingleAssets: true,
    includeLPs: true
  })

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
      const _yields = await getYields()
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

  const { strictFilter, includeSingleAssets, includeLPs } = filters
  const desiredCoins = filters.desiredCoins.toUpperCase()

  const filteredYields = yields.filter(pool => {
    return  (includeLPs || !pool.coinB) &&
            (includeSingleAssets || pool.coinB) &&
            (desiredCoins === '' || (
              (
                strictFilter &&
                ((desiredCoins.indexOf(pool.coinA) !== -1 && desiredCoins.indexOf(pool.coinB) !== -1) ||
                 (desiredCoins.indexOf(pool.coinA) !== -1 && !pool.coinB))
              ) || (
                !strictFilter &&
                (desiredCoins.indexOf(pool.coinA) !== -1 || desiredCoins.indexOf(pool.coinB) !== -1)
              )
            ))
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

        <Form.Group className='filters'>
          <Form.Label>Filters</Form.Label>
          <Form.Control name='desiredCoins' defaultValue={desiredCoins} size="sm" type="text" placeholder="Desired coins" onChange={handleChange}/>
          <Form.Check name='strictFilter' defaultChecked={strictFilter} type="checkbox" label="Show ONLY these coins (USDC won't show USDC-DAI)" onChange={handleCheckBoxChange} />
          <Form.Check name='includeLPs' defaultChecked={includeLPs} type="checkbox" label="Include Single Assets" onChange={handleCheckBoxChange} />
          <Form.Check name='includeSingleAssets' defaultChecked={includeSingleAssets} type="checkbox" label="Include Liquidity Pools" onChange={handleCheckBoxChange}  />
        </Form.Group>
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
              </tr>
            )}
            </tbody>
          </Table>
      }
    </Container>
  )
}

export default App
