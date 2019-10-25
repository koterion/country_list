import React from 'react'
import PropTypes from 'prop-types'

export default class Input extends React.Component {
  constructor (props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.input = React.createRef()
  }

  componentDidUpdate () {
    this.input.current.focus()
  }

  handleInput (event) {
    const type = event.target.type
    const value = event.target.value
    const code = this.props.code
    let valid = true

    switch (type) {
      case 'text':
        if (value.match(/[A-zА-яЁё\s]+$/) === null || value.replace(/\s/g, '') === '') {
          valid = false
        }
        break
      case 'tel':
        if ((value.match(/[0-9]$/) === null || value.replace(/\s/g, '') === '') || value.match(new RegExp(code)) === null) {
          valid = false
        }
        break
      default:
        break
    }

    if (valid || value.length === 0) {
      if (type === 'tel') {
        this.props.change(value.length !== 0 ? value : code)
      } else {
        this.props.change(value)
      }
    }
  }

  render () {
    const param = {
      className: this.props.className,
      type: !this.props.search ? 'tel' : 'text',
      value: this.props.value,
      onClick: this.props.click,
      placeholder: this.props.text,
      name: this.props.name
    }

    if (!this.props.autocomplete) {
      param.autoComplete = 'off'
    }

    if (this.props.required) {
      param.required = true
    }

    return (
      <input {...param} onChange={this.handleInput} ref={this.input} />
    )
  }
}

Input.propTypes = {
  className: PropTypes.string.isRequired,
  search: PropTypes.bool,
  click: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  required: PropTypes.bool,
  text: PropTypes.string
}
