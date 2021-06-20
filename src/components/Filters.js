import React, {useContext} from 'react'

import './Filters.scss'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

import {Form, ButtonGroup} from 'react-bootstrap'
import FiltersContext, {emptyFilters, defaultFilters} from '../contexts/filters.context'

const Filters = ({poolCount}) => {
  const { filters, setFilters } = useContext(FiltersContext)

  const handleChange = event => {
    const { value, name } = event.target

    setFilters({...filters, [name]: value })
  }

  const handleCheckBoxChange = event => {
    const { checked, name } = event.target

    setFilters({...filters, [name]: checked })
  }

  const { desiredCoins, strictFilter, exactMatch, desiredPlatforms, includeSingleAssets, includeLPs } = filters

  return (
      <Jumbotron className='filters'>
        <Form.Group>
          <Form.Label>Coins to Ride</Form.Label>
          <Form.Control name='desiredCoins' value={desiredCoins} defaultValue={desiredCoins} size="sm" type="text" placeholder="e.g. usdc dai busd" onChange={handleChange} />
          <Form.Check>
            <Form.Check.Input id='strictFilter' name='strictFilter' checked={strictFilter} defaultChecked={strictFilter} type="checkbox" onChange={handleCheckBoxChange} />
            <Form.Check.Label for='strictFilter'>Show ONLY these coins (USDC won't show USDC-DAI)</Form.Check.Label>
          </Form.Check>
          <Form.Check>
            <Form.Check.Input id='exactMatch' name='exactMatch' checked={exactMatch} defaultChecked={exactMatch} type="checkbox" onChange={handleCheckBoxChange} />
            <Form.Check.Label for='exactMatch'>Exact Match (USDC won't match ibUSDC)</Form.Check.Label>
          </Form.Check>
        </Form.Group>

        <hr/>

        <Form.Group>
          <Form.Check>
            <Form.Check.Input id='includeLPs' name='includeLPs' checked={includeLPs} defaultChecked={includeLPs} type="checkbox" onChange={handleCheckBoxChange} />
            <Form.Check.Label for='includeLPs'>Include Liquidity Pools</Form.Check.Label>
          </Form.Check>
          <Form.Check>
            <Form.Check.Input id='includeSingleAssets' name='includeSingleAssets' checked={includeSingleAssets} defaultChecked={includeSingleAssets} type="checkbox" onChange={handleCheckBoxChange} />
            <Form.Check.Label for='includeSingleAssets'>Include Single Assets</Form.Check.Label>
          </Form.Check>
        </Form.Group>

        <hr/>

        <Form.Group>
          <Form.Label>Platforms to Ride</Form.Label>
          <Form.Control name='desiredPlatforms' value={desiredPlatforms} defaultValue={desiredPlatforms} size="sm" type="text" placeholder="e.g. cake aave sushi" onChange={handleChange}/>
        </Form.Group>

        <hr/>

        <span>{poolCount === 0 ? 'No pools found, please check your filters' : `Found ${poolCount} pool${poolCount === 1 ? '' : 's'} on Beefy Finance.`}</span>
        <ButtonGroup className='reset-filters-btn'>
          <Button size='sm' variant='info' onClick={() => { setFilters(emptyFilters)}}>Clear Filters</Button>
          <Button size='sm' variant='success' onClick={() => { setFilters(defaultFilters)}}>Default Filters</Button>
        </ButtonGroup>
      </Jumbotron>
  )
}

export default Filters
