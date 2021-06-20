import React, {useContext, useEffect, useState} from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

import './App.css'
import {getYieldsWithPrices} from './utility/api'
import YieldTable from './components/YieldTable'
import Filters from './components/Filters'
import FiltersContext, {defaultFilters} from './contexts/filters.context'

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

  return (
    <Container className="p-3 App full-height">
      <Jumbotron>
        <h1 className="header">yield.rodeo</h1>
      </Jumbotron>

      <FiltersContext.Provider value={{filters, setFilters}}>
        <Filters poolCount={yields.length}/>
        <YieldTable yields={yields} />
      </FiltersContext.Provider>
    </Container>
  )
}

export default App
