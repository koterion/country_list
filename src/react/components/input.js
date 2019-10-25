import React, { useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'

export default function Input (props) {
  const param = {
    className: props.className,
    type: !props.search ? 'tel' : 'text',
    value: props.value,
    onClick: props.click,
    placeholder: props.text,
    name: props.name
  }

  const input = useRef(null)

  function handleInput (event) {
    const type = event.target.type
    const value = event.target.value
    const code = props.code
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
        props.change(value.length !== 0 ? value : code)
      } else {
        props.change(value)
      }
    }
  }

  useLayoutEffect(() => {
    if (param.type === 'tel') {
      input.current.focus()
    }
  }, [props.value])

  if (!props.autocomplete) {
    param.autoComplete = 'off'
  }

  if (props.required) {
    param.required = true
  }

  return (
    <input {...param} onChange={handleInput} ref={input} />
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
