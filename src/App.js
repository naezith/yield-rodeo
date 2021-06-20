import React, {useEffect, useState} from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import './App.css'
import {Form, ButtonGroup} from 'react-bootstrap'
import {getYieldsWithPrices} from './utility/api'
import {textHasAnyOfArray} from './utility/helpers'
import YieldTable from './components/YieldTable'

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
  const [yields, setYields] = useState([])
  const [filters, setFilters] = useState(defaultFilters)


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

      </Jumbotron>

      <Jumbotron className='filters'>
        <Form.Group>
          <Form.Label>Desired Coins</Form.Label>
          <Form.Control name='desiredCoins' value={desiredCoins} defaultValue={desiredCoins} size="sm" type="text" placeholder="eg. usdc dai busd" onChange={handleChange} />
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

      <YieldTable yields={filteredYields} />
    </Container>
  )
}

export default App
