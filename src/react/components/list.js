import React from 'react'
import PropTypes from 'prop-types'
import Item from './item'

export default function List (props) {
  let { countries, flag, click, remove, list, countryAll } = props

  if (remove) {
    countryAll.forEach(el => {
      countries = countries.filter(country => country.iso !== el)
    })
  } else if (list) {
    const arr = []
    countryAll.forEach(el => {
      const item = countries.find(country => country.iso === el)

      if (item) {
        arr.push(item)
      }
    })

    countries = arr
  }

  return (
    <div className='cntr-ls'>
      <ul>
        {countries.map((el, index) =>
          <Item
            flag={flag}
            country={el}
            key={index}
            click={click}
          />)}
      </ul>
    </div>
  )
}

List.propTypes = {
  flag: PropTypes.bool.isRequired,
  countries: PropTypes.array.isRequired,
  countryAll: PropTypes.array,
  remove: PropTypes.bool,
  list: PropTypes.bool,
  click: PropTypes.func.isRequired
}
