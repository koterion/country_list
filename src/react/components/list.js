import React from 'react'
import PropTypes from 'prop-types'
import Item from './item'

export default function List (props) {
  return (
    <div className='cntr-ls'>
      <ul>
        {props.countries.map((el, index) =>
          <Item
            flag={props.flag}
            country={el}
            key={index}
            onClick={props.onClick}
          />)}
      </ul>
    </div>
  )
}

List.propTypes = {
  flag: PropTypes.bool,
  countries: PropTypes.array.isRequired
}
