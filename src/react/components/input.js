import React from 'react'
import PropTypes from 'prop-types'

export default function Input (props) {
  const param = {
    className: props.className,
    type: !props.search ? 'tel' : 'text',
    onClick: props.click.bind(),
    defaultValue: props.value,
    placeholder: props.text,
    name: props.name
  }

  if (!props.autocomplete) {
    param.autoComplete = 'off'
  }

  if (props.required) {
    param.required = true
  }

  return (
    <input {...param} />
  )
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
