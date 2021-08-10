import React, {useContext} from 'react'

import './Filters.scss'

import Jumbotron from 'react-bootstrap/Jumbotron'
import {Form, InputGroup} from 'react-bootstrap'
import InputsContext from '../contexts/inputs.context'
import {formatAny} from '../utility/utils'

const Inputs = () => {
  const { inputs, setInputs } = useContext(InputsContext)

  const handleChange = event => {
    const { value, name } = event.target

    setInputs({...inputs, [name]: value })
  }

  const { capital, amountBefore, amountAfter } = inputs

  const amountDifference = amountAfter - amountBefore
  const pnl = amountDifference / amountBefore
  const fieldsAreValid = amountAfter !== '' && amountBefore !== ''
  const sign = pnl > 0 ? '+' : ''

  return (
    <Jumbotron className='filters'>
      <Form.Label>💰 Capital</Form.Label>
      <InputGroup className="mb-3" size="sm">
        <InputGroup.Prepend>
          <InputGroup.Text>$</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control name='capital' value={capital} type="number" placeholder="e.g. 1000" onChange={handleChange} />
      </InputGroup>

      <hr/>

      <Form.Label>🖩 Profit % Calculator </Form.Label>
      <InputGroup className="mb-3" size="sm">
        <InputGroup.Prepend>
          <InputGroup.Text>Before</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control name='amountBefore' value={amountBefore} type="number" placeholder="e.g. 1000" onChange={handleChange} />
        <InputGroup.Prepend>
          <InputGroup.Text>After</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control name='amountAfter' value={amountAfter} type="number" placeholder="e.g. 1000" onChange={handleChange} />
      </InputGroup>
      <Form.Label className={ !fieldsAreValid || pnl > 0 ? 'text-success' : pnl < 0 ? 'text-danger' : ''}>
        { fieldsAreValid ? 'P&L: ' + sign + formatAny(amountDifference, '0,0.[000]') + ' (' + sign + formatAny(pnl, '0.[000]%') + ')' :
          'Please fill the fields'}
      </Form.Label>
    </Jumbotron>
  )
}

export default Inputs
