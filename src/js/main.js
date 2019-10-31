import React from 'react'
import ReactDOM from 'react-dom'
import CountryList from '../react/countryList'

const options = {
  // countryAll: ['ua'],
  // remove: true,
  flagInInput: true,
  // flagInSelect: true,
  // geo: {
  //   url: 'https://api.sypexgeo.net/',
  //   getIso: (response) => {
  //     return response.country.iso
  //   }
  // },
  // hasPhone: true,
  // inputCountryName: 'country',
  // inputPhoneName: 'phone',
  // closestForm: 'form',
  // list: true,
  // search: true,
  // select: true,
  // required: false,
  // disabledPhone: false,
  // cookies: true,
  // current: 'ua',
  // autocomplete: true,
  // enableGeoCheck: true
}

ReactDOM.render(
  <div className='main'>
    <h1>Country List</h1>
    <div className="list">
      <div className="block">
        <CountryList className='input' {...options}>
          {options.search || options.select ? 'Country' : 'Phone Number'}
        </CountryList>
        {options.hasPhone && <input name="phone" type="text" className="input" placeholder="Phone Number" />}
      </div>
    </div>
  </div>,
  document.getElementById('app')
)
