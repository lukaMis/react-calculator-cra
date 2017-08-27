
import React from 'react'
import PropTypes from 'prop-types'

const ScreenRow = (props) => {
  return (
    <input
      className={'screen-row'}
      type={'text'}
      readOnly
      value={props.value} />
  )
}

ScreenRow.propTypes = {
  value: PropTypes.string.isRequired
}

export default ScreenRow
