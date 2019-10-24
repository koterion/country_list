import React from 'react'
import PropTypes from 'prop-types'

export default function Flag (props) {
  let flag = 'cntr-flag'

  if (props.iso) {
    flag += ` cntr-flag-${props.iso}`
  }

  return (
    <div className='cntr-sl' onClick={props.click.bind()}>
      <span className={flag} />
    </div>
  )
}

Flag.propTypes = {
  click: PropTypes.func.isRequired,
  iso: PropTypes.string
}
