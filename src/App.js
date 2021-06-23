import React, {useEffect, useState} from 'react'

import Container from 'react-bootstrap/Container'

import './App.css'
import {getYieldsWithPrices} from './utility/api'
import YieldTable from './components/YieldTable'
import Filters from './components/Filters'
import FiltersContext, {defaultFilters} from './contexts/filters.context'
import TopNavbar from './components/TopNavbar'
import {filterPools} from './utility/utils'
import {Spinner} from 'react-bootstrap'

const App = () => {
  const [yields, setYields] = useState([])
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

  const filteredYields = filterPools(yields, filters).map(pool => ({ ...pool, self: pool }))
  return (
    <div className='full-height'>
      <Container className="p-3 App">
        <TopNavbar />
      </Container>

      <Container className="p-3 App">
        <FiltersContext.Provider value={{filters, setFilters}}>
          <Filters loading={loading} poolCount={filteredYields.length}/>
          <></>
          { loading ?
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner> :

            <YieldTable yields={filteredYields} />
          }
        </FiltersContext.Provider>
      </Container>
    </div>
  )
}

export default App
