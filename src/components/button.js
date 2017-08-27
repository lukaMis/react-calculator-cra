
import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const customClass = (props.customClass) ? props.customClass : ''
  const htmlClass = (props.type === 'action') ? `button action-button ${customClass}` : `button input-button ${customClass}`
  
  return (
    <input 
      type='button'
      className={htmlClass}
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
