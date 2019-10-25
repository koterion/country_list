import React from 'react'
import allCountries from '../country.json'
import PropTypes from 'prop-types'
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
  }

  componentDidMount () {
    if (this.props.current) {
      const country = this.props.countries.find(el => {
        return el.iso === this.props.current
      })

      if (country) {
        this.changeCountry(country)
      }
    }
  }

  toggleActive () {
    if (!this.state.active) {
      document.addEventListener('mousedown', this.clickOutside)
    } else {
      document.removeEventListener('mousedown', this.clickOutside)
    }

    this.setState({
      active: !this.state.active
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

    if (this.props.search || this.props.select) {
      data.value = value.name

      if (this.props.hasPhone) {
        if (this.props.closestForm) {
          const parent = this.block.current.closest(this.props.closestForm)
          if (this.props.inputPhoneName && parent) {
            const phone = parent.querySelector(`[name=${this.props.inputPhoneName}]`)

            if (phone) {
              phone.value = value.code
            }
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
      value: value
    })
  }

  render () {
    let className = 'cntr-in'
    let parentClass = 'cntr-bl'

    if (this.props.className) {
      parentClass += ` ${this.props.className}`
    }

    if (this.state.changed) {
      className += ' cntr-check'
      parentClass += ' changed'
    }

    if (this.state.active) {
      parentClass += ' active'
    }

    if (this.props.flagInInput) {
      className += ' cntr-in-sl'
    }

    return (
      <div className={parentClass} ref={this.block}>
        {this.props.select
          ? (
            <div
              className={className}
              onClick={this.toggleActive.bind(this)}
            >
              {this.state.value ? this.state.value : this.props.children}
            </div>
          ) : (
            <Input
              className={className}
              search={this.props.search}
              click={this.toggleActive.bind(this)}
              value={this.state.value}
              text={this.props.children}
              autocomplete={this.props.autocomplete}
              required={this.props.required}
              name={this.props.search ? this.props.inputCountryName : this.props.inputPhoneName}
              change={this.changeInputValue.bind(this)}
              code={this.state.code}
            />
          )}
        <List
          flag={this.props.flagInSelect}
          countries={this.props.countries}
          click={this.clickCountry.bind(this)}
          countryAll={this.props.countryAll}
          remove={this.props.delete}
          list={this.props.list}
        />

        {this.props.flagInInput && <Flag click={this.toggleActive.bind(this)} iso={this.state.iso} />}

        {this.props.select && <span className='cntr-arrow' />}

        {!this.props.search && <input type='hidden' name={this.props.inputCountryName} value={this.state.country} />}
      </div>
    )
  }
}

CountryList.defaultProps = {
  countryAll: [],
  delete: false,
  flagInInput: false,
  flagInSelect: false,
  geo: {
    url: 'https://api.sypexgeo.net/',
    getIso: (response) => {
      return response.country.iso
    }
  },
  hasPhone: true,
  inputCountryName: 'country',
  inputPhoneName: 'phone',
  closestForm: 'form',
  list: false,
  search: false,
  select: false,
  required: false,
  countries: allCountries,
  disabledPhone: false,
  cookies: true,
  autocomplete: false,
  current: ''
}

CountryList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  countryAll: PropTypes.array,
  delete: PropTypes.bool,
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
  disabledPhone: PropTypes.bool,
  cookies: PropTypes.bool,
  autocomplete: PropTypes.bool,
  current: PropTypes.string
}

if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    const matches = (this.document || this.ownerDocument).querySelectorAll(s)
    let i
    let el = this
    do {
      i = matches.length
      while (--i >= 0 && matches.item(i) !== el) {
      }
    } while ((i < 0) && (el = el.parentElement))
    return el
  }
}

export default CountryList
