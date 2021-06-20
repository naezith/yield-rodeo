import React, {useEffect, useState} from 'react'

import Container from 'react-bootstrap/Container'

import './App.css'
import {getYieldsWithPrices} from './utility/api'
import YieldTable from './components/YieldTable'
import Filters from './components/Filters'
import FiltersContext, {defaultFilters} from './contexts/filters.context'
import TopNavbar from './components/TopNavbar'
import {filterPools} from './utility/utils'

const App = () => {
  const [yields, setYields] = useState([])
  const [filters, setFilters] = useState(defaultFilters)

  useEffect(() => {
    async function fetchData() {
      // Get yields
      const _yields = await getYieldsWithPrices()
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
          <Filters poolCount={filteredYields.length}/>
          <YieldTable yields={filteredYields} />
        </FiltersContext.Provider>
      </Container>
    </div>
  )
}

export default App
