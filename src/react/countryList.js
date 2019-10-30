import React from 'react'
import PropTypes from 'prop-types'
import allCountries from '../country.json'
import List from './components/list'
import Input from './components/input'
import Flag from './components/flag'

class CountryList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      changed: false,
      active: false,
      value: '',
      country: '',
      code: '',
      ico: ''
    }

    this.block = React.createRef()
    this.clickOutside = this.clickOutside.bind(this)
    this.clickCountry = this.clickCountry.bind(this)
    this.toggleActive = this.toggleActive.bind(this)
    this.changeInputValue = this.changeInputValue.bind(this)
  }

  componentDidMount () {
    const { current, enableGeoCheck, geo } = this.props
    if (current) {
      this.findCountry(current)
    } else if (enableGeoCheck) {
      this.checkGeo(geo)
        .then(data => this.findCountry(data))
    }
  }

  async checkGeo (settings) {
    const response = await fetch(settings.url, { method: 'GET' })
    const json = await response.json()
    return settings.getIso(json)
  }

  findCountry (iso) {
    const { countries } = this.props
    const country = countries.find(el => {
      return el.iso === iso.toLowerCase()
    })

    if (country) {
      this.changeCountry(country)
    }
  }

  toggleActive () {
    const { active } = this.state
    if (!active) {
      document.addEventListener('mousedown', this.clickOutside)
    } else {
      document.removeEventListener('mousedown', this.clickOutside)
    }

    this.setState({
      active: !active
    })
  }

  clickOutside (event) {
    if (this.block && !this.block.current.contains(event.target)) {
      this.toggleActive()
    }
  }

  clickCountry (value) {
    this.changeCountry(value)
    this.toggleActive()
  }

  changeCountry (value) {
    const data = {
      changed: true,
      country: value.name,
      iso: value.iso,
      code: value.code
    }

    const { search, select, hasPhone, closestForm, inputPhoneName } = this.props

    if (search || select) {
      data.value = value.name

      if (hasPhone) {
        const parent = document.querySelector(closestForm)
        if (parent) {
          const phone = parent.querySelector(`[name=${inputPhoneName}]`)
          if (inputPhoneName && phone) {
            phone.value = value.code
          } else {
            console.warn('Please add correct inputPhoneName.')
          }
        } else {
          console.warn('Please add correct closestForm.')
        }
      }
    } else {
      data.value = value.code
    }

    this.setState(data)
  }

  changeInputValue (value) {
    this.setState({
      value
    })
  }

  render () {
    const {
      className,
      flagInInput,
      flagInSelect,
      select,
      children,
      search,
      autocomplete,
      required,
      inputCountryName,
      inputPhoneName,
      countries,
      countryAll,
      remove,
      list
    } = this.props
    const { changed, active, value, code, country, iso } = this.state
    let inputClsName = 'cntr-in'
    let parentClass = 'cntr-bl'

    if (className) {
      parentClass += ` ${className}`
    }

    if (changed) {
      inputClsName += ' cntr-check'
      parentClass += ' changed'
    }

    if (active) {
      parentClass += ' active'
    }

    if (flagInInput) {
      inputClsName += ' cntr-in-sl'
    }

    return (
      <div className={parentClass} ref={this.block}>
        {select
          ? (
            <div
              className={inputClsName}
              onClick={this.toggleActive}
              role="none"
            >
              {value || children}
            </div>
          ) : (
            <Input
              className={inputClsName}
              search={search}
              click={this.toggleActive}
              value={value}
              text={children}
              autocomplete={autocomplete}
              required={required}
              name={search ? inputCountryName : inputPhoneName}
              change={this.changeInputValue}
              code={code}
              active={active}
            />
          )}
        <List
          flag={flagInSelect}
          countries={countries}
          click={this.clickCountry}
          countryAll={countryAll}
          remove={remove}
          list={list}
          value={value}
          search={search}
        />

        {flagInInput && <Flag click={this.toggleActive} iso={iso} />}

        {select && <span className='cntr-arrow' />}

        {!search && <input type='hidden' name={inputCountryName} value={country} />}
      </div>
    )
  }
}

CountryList.defaultProps = {
  className: '',
  children: '',
  countryAll: [],
  remove: false,
  flagInInput: false,
  flagInSelect: false,
  enableGeoCheck: false,
  geo: {
    url: 'https://api.sypexgeo.net/',
    getIso: (response) => {
      return response.country.iso
    }
  },
  hasPhone: false,
  inputCountryName: 'country',
  inputPhoneName: 'phone',
  closestForm: 'form',
  list: false,
  search: false,
  select: false,
  required: false,
  countries: allCountries,
  autocomplete: false,
  current: ''
}

CountryList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  countryAll: PropTypes.array,
  remove: PropTypes.bool,
  flagInInput: PropTypes.bool,
  flagInSelect: PropTypes.bool,
  hasPhone: PropTypes.bool,
  inputCountryName: PropTypes.string,
  inputPhoneName: PropTypes.string,
  closestForm: PropTypes.string,
  list: PropTypes.bool,
  search: PropTypes.bool,
  select: PropTypes.bool,
  required: PropTypes.bool,
  countries: PropTypes.array,
  autocomplete: PropTypes.bool,
  current: PropTypes.string,
  enableGeoCheck: PropTypes.bool,
  geo: PropTypes.shape({
    url: PropTypes.string,
    getIso: PropTypes.func
  })
}

export default CountryList
