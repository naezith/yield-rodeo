import React, {useEffect, useState} from 'react'

import Container from 'react-bootstrap/Container'

import './App.css'
import {getYieldsWithPrices} from './utility/api'
import YieldTable from './components/YieldTable'
import Filters from './components/Filters'
import FiltersContext, {defaultFilters} from './contexts/filters.context'
import TopNavbar from './components/TopNavbar'
import {addApyValues, filterPools} from './utility/utils'
import {Col, Spinner} from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Inputs from './components/Inputs'
import InputsContext, {defaultInputs} from './contexts/inputs.context'

const App = () => {
  const [yields, setYields] = useState([])
  const [inputs, setInputs] = useState(defaultInputs)
  const [filters, setFilters] = useState(defaultFilters)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      // Get yields
      setLoading(true)
      const _yields = await getYieldsWithPrices()
      setLoading(false)
      setYields(_yields)
    }
    fetchData()
  }, [])

  const finalYields = addApyValues(filterPools(yields, filters).map(pool => ({ ...pool, self: pool })), inputs.capital)
  return (
    <div className='full-height'>
      <Container className="p-3 App">
        <Row>
          <Col>
          <TopNavbar />
          </Col>
        </Row>
      </Container>

      <InputsContext.Provider value={{inputs, setInputs}}>
      <FiltersContext.Provider value={{filters, setFilters}}>
      <Container className="p-3 App">
        <Row>
          <Col>
            <Inputs />
            <Filters loading={loading} poolCount={finalYields.length}/>
          </Col>
        </Row>
          { loading ?
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner> :

            <Row>
              <Col>
                <YieldTable yields={finalYields} />
              </Col>
            </Row>
          }
      </Container>
      </FiltersContext.Provider>
      </InputsContext.Provider>
    </div>
  )
}

export default App
