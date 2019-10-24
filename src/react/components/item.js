import React from 'react'
import PropTypes from 'prop-types'

export default function Item (props) {
  function chooseCountry () {
    props.click(props.country)
  }

  const { name, iso, code } = props.country

  return (
    <li
      data-name={name}
      data-phone={code}
      data-code={iso}
      onClick={chooseCountry}
    >
      {props.flag &&
        <span className={`cntr-flag cntr-flag-${iso}`} />}
      {name}
    </li>
  )
}

Item.propTypes = {
  flag: PropTypes.bool,
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    iso: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired
  }).isRequired
}
