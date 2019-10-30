import React from 'react'
import PropTypes from 'prop-types'
import Item from './item'

export default function List (props) {
  const { flag, click, remove, list, countryAll, value, search } = props
  let { countries } = props

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

  if (search) {
    countries = countries.filter(country => {
      return country.name.toLowerCase().search(new RegExp(value.toLowerCase())) === 0
    })
  }

  return (
    <div className='cntr-ls'>
      <ul>
        {countries.map((el, index) => (
          <Item
            flag={flag}
            country={el}
            key={index}
            click={click}
          />
        ))}
      </ul>
    </div>
  )
}

List.propTypes = {
  flag: PropTypes.bool.isRequired,
  countries: PropTypes.array.isRequired,
  countryAll: PropTypes.array.isRequired,
  remove: PropTypes.bool.isRequired,
  list: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired
}
