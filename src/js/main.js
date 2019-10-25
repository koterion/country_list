import React from 'react'
import ReactDOM from 'react-dom'
import CountryList from '../react/countryList'
import './countryList.js'

const options = {
  // countryAll: ['ua'],
  // delete: true,
  // flagInInput: true,
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
  // autocomplete: false
}

ReactDOM.render(
  <CountryList className='form__input' {...options}>Phone Number</CountryList>,
  document.getElementById('app')
)

countryList(document.querySelector('.phone'), { inputCountryName: 'country1', inputPhoneName: 'phone1' })
countryList(document.querySelector('.flags'), { flagInSelect: true })
countryList(document.querySelector('.flag'), { flagInInput: true })
countryList(document.querySelector('.select'), { select: true })
countryList(document.querySelector('.search'), { search: true, inputCountryName: 'country4', hasPhone: false })
countryList(document.querySelector('.choose'), { select: true, list: true, countryAll: ['ar', 'fr'], hasPhone: false })
countryList(document.querySelector('.delete'), {
  select: true,
  delete: true,
  countryAll: ['ar', 'ua'],
  hasPhone: false
})