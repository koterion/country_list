import React from 'react'
import PropTypes from 'prop-types'

export default function Item (props) {
  function chooseCountry () {
    props.onClick({
      code: props.country.country_code,
      name: props.country.country
    })
  }

  const { country, iso_code, country_code } = props.country

  return (
    <li
      data-search={country.toLowerCase()}
      data-name={country}
      data-phone={country_code}
      data-code={iso_code}
      onClick={chooseCountry}
    >
      {props.flag &&
        <span className={`cntr-flag cntr-flag-${iso_code}`} />}
      {country}
    </li>
  )
}

Item.propTypes = {
  flag: PropTypes.bool,
  country: PropTypes.shape({
    country: PropTypes.string.isRequired,
    iso_code: PropTypes.string.isRequired,
    country_code: PropTypes.string.isRequired
  }).isRequired
}
