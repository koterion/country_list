import React from 'react'
import PropTypes from 'prop-types'

export default function Flag (props) {
  let flag = 'cntr-flag'
  const { iso, click } = props

  if (iso) {
    flag += ` cntr-flag-${props.iso}`
  } else {
    flag += ' cntr-flag-none'
  }

  return (
    <div className='cntr-sl' onClick={click} role="none">
      <span className={flag} />
    </div>
  )
}

Flag.defaultProps = {
  iso: ''
}

Flag.propTypes = {
  click: PropTypes.func.isRequired,
  iso: PropTypes.string
}
