
import React from 'react'
import PropTypes from 'prop-types'

import Button from './button'
import Screen from './screen'

const Calculator = (props) => {
  return (
    <div>
      <div className={'button-row'}>
        <Screen question={props.question} answer={props.answer} />
      </div>
      <div className={'button-row'}>
        <Button label={'('} type={'input'} handleClick={props.handleClick} />
        <Button label={')'} type={'input'} handleClick={props.handleClick} />
        <Button label={'del'} type={'action'} handleClick={props.handleClick} />
        <Button label={'clr'} type={'action'} handleClick={props.handleClick} />
      </div>
      <div className={'button-row'}>
        <Button label={'9'} type={'input'} handleClick={props.handleClick} />
        <Button label={'8'} type={'input'} handleClick={props.handleClick} />
        <Button label={'7'} type={'input'} handleClick={props.handleClick} />
        <Button label={'+'} type={'action'} handleClick={props.handleClick} />
      </div>
      <div className={'button-row'}>
        <Button label={'4'} type={'input'} handleClick={props.handleClick} />
        <Button label={'5'} type={'input'} handleClick={props.handleClick} />
        <Button label={'6'} type={'input'} handleClick={props.handleClick} />
        <Button label={'-'} type={'action'} handleClick={props.handleClick} />
      </div>
      <div className={'button-row'}>
        <Button label={'1'} type={'input'} handleClick={props.handleClick} />
        <Button label={'2'} type={'input'} handleClick={props.handleClick} />
        <Button label={'3'} type={'input'} handleClick={props.handleClick} />
        <Button label={'÷'} type={'action'} handleClick={props.handleClick} />
      </div>
      <div className={'button-row'}>
        <Button label={'.'} type={'input'} handleClick={props.handleClick} />
        <Button label={'0'} type={'input'} handleClick={props.handleClick} />
        <Button label={'='} type={'action'} handleClick={props.handleClick} />
        <Button label={'*'} type={'action'} handleClick={props.handleClick} />
      </div>
    </div>
  )
}

Calculator.propTypes = {
  handleClick: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
}

export default Calculator
