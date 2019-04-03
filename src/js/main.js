import './countryList.js'

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