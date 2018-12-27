import './countryList.js'

countryList(document.querySelector('.phone'), {inputCountryName: 'country1', inputPhoneName: 'phone1'})
countryList(document.querySelector('.flags'), {flagInSelect: true, inputCountryName: 'country2', inputPhoneName: 'phone2'})
countryList(document.querySelector('.flag'), {flagInInput: true, inputCountryName: 'country3', inputPhoneName: 'phone3'})
countryList(document.querySelector('.select'), {select: true})
countryList(document.querySelector('.search'), {search: true, inputCountryName: 'country4'})
countryList(document.querySelector('.choose'), {select: true, list: true, countryAll: ['ar', 'fr']})
countryList(document.querySelector('.delete'), {select: true, delete: true, countryAll: ['ar', 'ua']})

