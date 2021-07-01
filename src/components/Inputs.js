import React, {useContext} from 'react'

import './Filters.scss'

import Jumbotron from 'react-bootstrap/Jumbotron'
import {Form, InputGroup} from 'react-bootstrap'
import InputsContext from '../contexts/inputs.context'

const Inputs = () => {
  const { inputs, setInputs } = useContext(InputsContext)

  const handleChange = event => {
    const { value, name } = event.target

    setInputs({...inputs, [name]: value })
  }

  const { capital } = inputs

  return (
    <Jumbotron className='filters'>
      <Form.Label>💰 Capital</Form.Label>
      <InputGroup className="mb-3" size="sm">
        <InputGroup.Prepend>
          <InputGroup.Text>$</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control name='capital' value={capital} type="number" placeholder="e.g. 1000" onChange={handleChange} />
      </InputGroup>
    </Jumbotron>
  )
}

export default Inputs
