import React, {useContext} from 'react'

import './Filters.scss'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

import {Form, ButtonGroup} from 'react-bootstrap'
import FiltersContext, {emptyFilters, defaultFilters} from '../contexts/filters.context'

const Filters = ({loading, poolCount}) => {
  const { filters, setFilters } = useContext(FiltersContext)

  const handleChange = event => {
    const { value, name } = event.target

    setFilters({...filters, [name]: value })
  }

  const handleCheckBoxChange = event => {
    const { checked, name } = event.target

    setFilters({...filters, [name]: checked })
  }

  const { desiredCoins, strictFilter, exactMatch, desiredPlatforms, desiredNetworks, includeSingleAssets, includeLPs } = filters

  return (
      <Jumbotron className='filters'>
        <Form.Group>
          <Form.Label>💎 Coins to Ride</Form.Label>
          <Form.Control name='desiredCoins' value={desiredCoins}size="sm" type="text" placeholder="e.g. usdc dai busd" onChange={handleChange} />
          <Form.Check>
            <Form.Check.Input id='strictFilter' name='strictFilter' checked={strictFilter} type="checkbox" onChange={handleCheckBoxChange} />
            <Form.Check.Label htmlFor='strictFilter'>Show ONLY these coins <span className='silent'>(USDC won't show USDC-DAI)</span></Form.Check.Label>
          </Form.Check>
          <Form.Check>
            <Form.Check.Input id='exactMatch' name='exactMatch' checked={exactMatch} type="checkbox" onChange={handleCheckBoxChange} />
            <Form.Check.Label htmlFor='exactMatch'>Exact Match <span className='silent'>(USDT won't match fUSDT)</span></Form.Check.Label>
          </Form.Check>
        </Form.Group>

        <hr/>

        <Form.Group>
          <Form.Check>
            <Form.Check.Input id='includeLPs' name='includeLPs' checked={includeLPs}  type="checkbox" onChange={handleCheckBoxChange} />
            <Form.Check.Label htmlFor='includeLPs'>Include Liquidity Pools</Form.Check.Label>
          </Form.Check>
          <Form.Check>
            <Form.Check.Input id='includeSingleAssets' name='includeSingleAssets' checked={includeSingleAssets} type="checkbox" onChange={handleCheckBoxChange} />
            <Form.Check.Label htmlFor='includeSingleAssets'>Include Single Assets</Form.Check.Label>
          </Form.Check>
        </Form.Group>

        <hr/>

        <Form.Group>
          <Form.Label>🏰 Platforms to Ride</Form.Label>
          <Form.Control name='desiredPlatforms' value={desiredPlatforms} size="sm" type="text" placeholder="e.g. cake aave sushi" onChange={handleChange}/>
        </Form.Group>

        <hr/>

        <Form.Group>
          <Form.Label>🌐 Networks to Ride</Form.Label>
          <Form.Control name='desiredNetworks' value={desiredNetworks} size="sm" type="text" placeholder="e.g. bsc polygon" onChange={handleChange}/>
        </Form.Group>

        <hr/>

        <span>{loading ? "Loading pools..." : poolCount === 0 ? 'No pools found, please check your filters' : `Found ${poolCount} pool${poolCount === 1 ? '' : 's'} on 🐮 Beefy Finance.`}</span>
        <ButtonGroup className='reset-filters-btn'>
          <Button size='sm' variant='info' onClick={() => { setFilters(emptyFilters)}}>Clear Filters</Button>
          <Button size='sm' variant='success' onClick={() => { setFilters(defaultFilters)}}>Default Filters</Button>
        </ButtonGroup>
      </Jumbotron>
  )
}

export default Filters
