import React from 'react'
import allCountries from '../country.json'
import PropTypes from 'prop-types'
import List from './components/list'

class CountryList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      changed: false,
      active: false,
      value: '',
      country: ''
    }

    this.block = React.createRef()
    this.clickOutside = this.clickOutside.bind(this)
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
    const data = {
      changed: true,
      country: value.name
    }

    if (this.props.search || this.props.select) {
      data.value = value.name
    } else {
      data.value = value.code
    }

    this.setState(data)

    this.toggleActive()
  }

  render () {
    let className = 'cntr-in'
    let parentClass = 'cntr-bl'

    if (this.props.className) {
      className += ` ${this.props.className}`
    }

    if (this.state.changed) {
      className += ' cntr-check'
      parentClass += ' changed'
    }

    if (this.state.active) {
      parentClass += ' active'
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
            <input
              className={className}
              type={!this.props.search ? 'tel' : 'text'}
              onClick={this.toggleActive.bind(this)}
              defaultValue={this.state.value}
              placeholder={this.props.children}
            />
          )}
        <List
          flag={this.props.flagInSelect}
          countries={this.props.countries}
          onClick={this.clickCountry.bind(this)}
          select={this.props.select}
          search={this.props.search}
        />
        <input type='hidden' name={this.props.inputCountryName} value={this.state.country}/>
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
  cookies: true
}

CountryList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
}

export default CountryList
