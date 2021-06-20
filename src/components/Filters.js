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
          <Form.Check name='strictFilter' checked={strictFilter} defaultChecked={strictFilter} type="checkbox" label="Show ONLY these coins (USDC won't show USDC-DAI)" onChange={handleCheckBoxChange} />
          <Form.Check name='exactMatch' checked={exactMatch} defaultChecked={exactMatch} type="checkbox" label="Exact Match (USDC won't match ibUSDC)" onChange={handleCheckBoxChange} />
        </Form.Group>

        <hr/>

        <Form.Group>
          <Form.Check name='includeLPs' checked={includeLPs} defaultChecked={includeLPs} type="checkbox" label="Include Liquidity Pools" onChange={handleCheckBoxChange} />
          <Form.Check name='includeSingleAssets' checked={includeSingleAssets} defaultChecked={includeSingleAssets} type="checkbox" label="Include Single Assets" onChange={handleCheckBoxChange}  />
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
