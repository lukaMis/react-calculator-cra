
import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <input 
      type='button'
      className={ props.type === 'action' ? 'button action-button': 'button input-button' }
      value={props.label}
      onClick={props.handleClick}
    />
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Button
