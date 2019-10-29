import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

export default function Input (props) {
  const { className, search, value, click, text, name, code, autocomplete, required } = props
  const input = useRef(null)

  function handleInput (event) {
    const { type } = event.target
    const { value: targetValue } = event.target
    let valid = true

    switch (type) {
      case 'text':
        if (targetValue.match(/[A-zА-яЁё\s]+$/) === null || targetValue.replace(/\s/g, '') === '') {
          valid = false
        }
        break
      case 'tel':
        if ((targetValue.match(/[0-9]$/) === null || targetValue.replace(/\s/g, '') === '') || targetValue.match(new RegExp(code)) === null) {
          valid = false
        }
        break
      default:
        break
    }

    if (valid || targetValue.length === 0) {
      if (type === 'tel') {
        props.change(targetValue.length !== 0 ? targetValue : code)
      } else {
        props.change(targetValue)
      }
    }
  }

  useEffect(() => {
    if (!search) {
      input.current.focus()
    }
  }, [value])

  return (
    <input
      className={className}
      value={value}
      name={name}
      type={!search ? 'tel' : 'text'}
      placeholder={text}
      required={required}
      autoComplete={!autocomplete ? 'off' : 'on'}
      onClick={click}
      onChange={handleInput}
      ref={input}
    />
  )
}

Input.propTypes = {
  className: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  required: PropTypes.bool.isRequired,
  autocomplete: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
}
