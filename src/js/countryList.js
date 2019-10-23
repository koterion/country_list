'use strict'

import allCountries from '../country.json'

if (typeof window === 'undefined') {
  global.countryList = countryList
} else {
  window.countryList = countryList
}

function countryList (selector, options) {
  try {
    checkSelector(selector)
  } catch (e) {
    console.error(e.message)
    return false
  }

  const list = new CountryList(selector, options)
  list._init()
  return list
}

const defaults = {
  countryAll: [],
  delete: false,
  flagInInput: false,
  flagInSelect: false,
  geo: {
    url: 'https://api.sypexgeo.net/',
    getIso: function (response) {
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

class CountryList {
  constructor (selector, options) {
    this.selector = selector
    this.className = 'cntr'

    const customOptions = options || {}
    this.options = { ...defaults, ...customOptions }
  }

  _init () {
    this._changeSelector()
    this._closeCountryList()
    this._addCountryList()
    this._addCountryListItems()

    if (!this.options.search) {
      this._createInputCountry()
      this._searchForCountry()

      if (!this.options.select) {
        this._checkForNumber()
      }
    }

    if (this.options.flagInInput) {
      this._addFlagToInput()

      if (this.options.select) {
        this._showCountryList(this.selector)
      }
    } else {
      this._showCountryList(this.selector)
    }

    if (this.options.search || this.options.select) {
      if (this.options.hasPhone) {
        this._findPhoneInput()
      }

      this._addArrow()
    }

    this._checkCountry()
    this._currentGeo()
    this._changePosition()
  }

  _changeSelector () {
    if (this.selector.length > 0) {
      this.selector = this.selector[0]
    }
    this.selector.classList.add(this.className + '-in')

    this.currentCountry = this.selector.dataset.current
    this._wrapSelector()

    if (!this.options.select) {
      this._changeDivForInput()
    }
  }

  _wrapSelector () {
    this.wrapBlock = this._createEl('div', {
      class: this.className + '-bl'
    })
    this.selector.parentNode.insertBefore(this.wrapBlock, this.selector)
    this.wrapBlock.appendChild(this.selector)
  }

  _changeDivForInput () {
    const input = this._createEl('input', {
      class: this.selector.classList,
      type: this.options.search ? 'text' : 'tel',
      name: this.options.search ? this.options.inputCountryName : this.options.inputPhoneName,
      placeholder: this.selector.innerHTML
    })

    forEachObj(this.selector.dataset, (key, value) => {
      input.dataset[key] = value
    })

    input.required = this.options.required

    this.wrapBlock.appendChild(input)
    this.wrapBlock.removeChild(this.selector)
    this.selector = input
  }

  _createInputCountry () {
    const input = this._createEl('input', {
      type: 'hidden',
      name: this.options.inputCountryName
    })
    this.wrapBlock.appendChild(input)
    this.countryInput = input
  }

  _addCountryList () {
    const block = this._createEl('div', {
      class: this.className + '-ls'
    })
    this.wrapBlock.appendChild(block)
    this.countryList = this._createEl('ul')
    block.appendChild(this.countryList)
  }

  _addCountryListItem (country) {
    const [countryName, countryCode, phoneCode] = [country.country, country.iso_code, country.country_code]
    const li = this._createEl('li', {
      'data-search': countryName.toLowerCase(),
      'data-name': countryName,
      'data-code': countryCode,
      'data-phone': phoneCode
    })

    if (this.options.flagInSelect) {
      const span = this._createEl('span', {
        class: this.className + '-flag ' + this.className + '-flag-' + countryCode
      })
      li.appendChild(span)
      li.appendChild(document.createTextNode(countryName))
    } else {
      li.innerText = countryName
    }

    this.countryList.appendChild(li)
  }

  _addCountryListItems () {
    if (this.options.list) {
      forEachArr(this.options.countryAll, (iso) => {
        forEachArr(this.options.countries, (value) => {
          if (value.iso_code === iso) {
            this._addCountryListItem(value)
          }
        })
      })
    } else if (this.options.delete) {
      forEachArr(this.options.countries, (value) => {
        if (!this._checkForDelete(value.iso_code)) {
          this._addCountryListItem(value)
        }
      })
    } else {
      forEachArr(this.options.countries, (value) => {
        this._addCountryListItem(value)
      })
    }
    this.countryListItems = this.countryList.querySelectorAll('li')
  }

  _checkForDelete (country) {
    let check = false

    forEachArr(this.options.countryAll, (value) => {
      if (country.indexOf(value) !== -1) {
        check = true
        return false
      }
    })

    return check
  }

  _searchForCountry () {
    const _this = this
    on(document.body, 'keypress', function (event) {
      if (_this.wrapBlock.classList.contains('active') && !(event.key.search(/^[^\d+=()[\]{}\\/^$|?*!@#%:;&,_.'"\s]+$/) === -1) && event.which !== 13) {
        const scrollEl = _this.wrapBlock.querySelector('li[data-search^="' + String.fromCharCode(event.which).toLowerCase() + '"]')

        if (scrollEl && scrollEl.length !== 0) {
          _this._scrollTo(_this.countryList, scrollEl.offsetTop - 20, 800)
        }
      }
    })
  }

  _checkForNumber () {
    const wrapBlock = this.wrapBlock
    on(this.selector, 'keypress', function (event) {
      if (!(event.key.search(/[^0-9]/ig) === -1)) {
        event.preventDefault()
      } else {
        wrapBlock.classList.remove('active')
      }
    })
  }

  _addFlagToInput () {
    const block = this._createEl('div', {
      class: this.className + '-sl'
    })
    this.wrapBlock.appendChild(block)
    this.selector.classList.add(this.className + '-in-sl')
    this.countryFlagsBlock = this.wrapBlock.querySelector('.' + this.className + '-sl')
    this._showCountryList(this.countryFlagsBlock)
  }

  _showCountryList (elem) {
    on(elem, 'click', function () {
      this.parentElement.classList.toggle('active')
    })
  }

  _closeCountryList () {
    const wrapBlock = this.wrapBlock
    on(document.body, 'click', function (event) {
      if (wrapBlock.classList.contains('active') && event.target !== wrapBlock && event.target.parentElement !== wrapBlock && event.target.parentElement.parentElement !== wrapBlock) {
        wrapBlock.classList.remove('active')
      }
    })
  }

  _findPhoneInput () {
    if (this.selector.closest(this.options.closestForm) && this.selector.closest(this.options.closestForm).length) {
      this.phoneInput = this.selector.closest(this.options.closestForm).querySelector('input[name="' + this.options.inputPhoneName + '"]')
      if (this.options.disabledPhone) {
        this.phoneInput.setAttribute('disabled', 'true')
      }
    } else {
      console.error('Use closestForm option for setup current, unique closest selector')
    }
  }

  _addArrow () {
    const span = this._createEl('span', {
      class: this.className + '-arrow'
    })
    this.wrapBlock.appendChild(span)
    this._showCountryList(span)
  }

  _createEl (el, options = {}) {
    const elem = document.createElement(el)
    forEachObj(options, (key, value) => {
      elem.setAttribute(key, value)
    })

    return elem
  }

  _checkCountry () {
    const [_this, items] = [this, this.countryListItems]

    if (this.options.search) {
      on(this.selector, 'keyup', function (event) {
        _this.wrapBlock.classList.remove('changed')
        _this.wrapBlock.classList.add('active')

        forEachArr(items, (value) => {
          if (this.value.length > 0 && value.dataset.search.search(new RegExp(this.value.toLowerCase(), 'i')) !== 0) {
            value.style.display = 'none'
          } else {
            value.style.display = 'block'
          }
        })

        if (event.which === 13) {
          const li = _this.countryList.querySelector('li[data-search^="' + this.value.toLowerCase() + '"]')
          if (li) {
            li.click()
          }
        }
      })
      forEachArr(items, (value) => {
        on(value, 'click', function () {
          _this.wrapBlock.classList.add('changed')
          _this.wrapBlock.classList.remove('active')
          _this.selector.value = this.dataset.name

          if (_this.phoneInput) {
            _this.phoneInput.value = this.dataset.phone
            _this.phoneInput.dataset.code = this.dataset.phone
            _this.phoneInput.classList.add('valid')
            _this.phoneInput.removeAttribute('disabled')
          }
        })
      })
    } else if (this.options.select) {
      forEachArr(items, (value) => {
        on(value, 'click', function () {
          _this.wrapBlock.classList.add('changed')
          _this.wrapBlock.classList.remove('active')
          _this.selector.innerText = this.dataset.name
          _this.countryInput.value = this.dataset.name

          if (_this.phoneInput) {
            _this.phoneInput.value = this.dataset.phone
            _this.phoneInput.dataset.code = this.dataset.phone
            _this.phoneInput.classList.add('valid')
            _this.phoneInput.removeAttribute('disabled')
          }

          if (_this.options.flagInInput) {
            _this.countryFlagsBlock.innerHTML = '<span class="cntr-flag cntr-flag-' + this.dataset.code + '"></span>'
          }
        })
      })
    } else if (this.options.flagInInput) {
      forEachArr(items, (value) => {
        on(value, 'click', function () {
          _this.wrapBlock.classList.add('changed')
          _this.wrapBlock.classList.remove('active')
          _this.countryInput.value = this.dataset.name
          _this.countryFlagsBlock.innerHTML = '<span class="cntr-flag cntr-flag-' + this.dataset.code + '"></span>'
          _this.selector.classList.add(_this.className + '_check')
          _this.selector.value = this.dataset.phone
          _this.selector.focus()
        })
      })

      on(this.selector, 'keyup', function () {
        if (this.value.search(/[0-9]/ig) === 0 && !this.classList.contains(_this.className + '_check')) {
          const countryFound = _this.countryList.querySelector('li[data-phone|="' + this.value + '"]')

          if (countryFound && countryFound.dataset.code !== undefined) {
            _this.countryFlagsBlock.innerHTML = '<span class="cntr-flag cntr-flag-' + countryFound.dataset.code + '"></span>'
            _this.countryInput.value = countryFound.dataset.name
          }
        }

        if (this.value.length === 0) {
          this.classList.remove(_this.className + '_check')
        }
      })
    } else {
      forEachArr(items, (value) => {
        on(value, 'click', function () {
          _this.wrapBlock.classList.add('changed')
          _this.wrapBlock.classList.remove('active')
          _this.countryInput.value = this.dataset.name
          _this.selector.value = this.dataset.phone
          _this.selector.focus()
        })
      })
    }
  }

  _currentGeo () {
    const changeIso = (iso = undefined) => {
      if (iso) {
        this.currentCountry = iso
      }

      const hasCurrent = this.options.countryAll.find(el => { return el === this.currentCountry }) !== undefined

      if ((!hasCurrent && !this.options.delete) || (this.options.list && hasCurrent)) {
        this.wrapBlock.classList.add('changed')
        this.selector.classList.add(this.className + '_check')
        this._checkGeo()
      }
    }

    if (this.currentCountry === undefined || this.currentCountry === '') {
      if (this.options.cookies && cookies.get('iso')) {
        changeIso(cookies.get('iso'))
      } else if (window.sessionStorage && sessionStorage.getItem('iso')) {
        changeIso(sessionStorage.getItem('iso'))
      } else {
        const Http = new XMLHttpRequest()
        Http.onreadystatechange = () => {
          if (Http.status === 200 && Http.readyState === 4) {
            const iso = this.options.geo.getIso(JSON.parse(Http.responseText))

            if (this.options.cookies) {
              cookies.set('iso', iso.toLowerCase(), 7)
            } else {
              sessionStorage.setItem('iso', iso.toLowerCase())
            }

            changeIso(iso.toLowerCase())
          } else if (Http.status !== 200) {
            if (this.options.flagInInput) {
              this.countryFlagsBlock.innerHTML = '<span class="' + this.className + '-flag ' + this.className + '-flag-us"></span>'
              this.countryInput.value = 'United States'
            }
          }
        }
        Http.open('GET', this.options.geo.url, true)
        Http.send()
      }
    }
  }

  _checkGeo () {
    if (this.options.flagInInput) {
      this.countryFlagsBlock.innerHTML = '<span class="' + this.className + '-flag ' + this.className + '-flag-' + this.currentCountry + '"></span>'
      this._changeValue(this.selector, 'phone')
      this._changeValue(this.countryInput, 'name')

      if (this.options.select) {
        const li = this.countryList.querySelector('li[data-code="' + this.currentCountry + '"]')
        if (li) {
          this.selector.innerText = li.dataset.name
        }
        if (this.phoneInput) {
          this._changeValue(this.phoneInput, 'phone')
        }
      }
    } else if (this.options.search) {
      this._changeValue(this.selector, 'name')
      if (this.phoneInput) {
        this._changeValue(this.phoneInput, 'phone')
      }
    } else if (this.options.select) {
      const li = this.countryList.querySelector('li[data-code="' + this.currentCountry + '"]')
      if (li) {
        this.selector.innerText = li.dataset.name
      }
      this._changeValue(this.countryInput, 'name')
      if (this.phoneInput) {
        this._changeValue(this.phoneInput, 'phone')
      }
    } else {
      this._changeValue(this.selector, 'phone')
      this._changeValue(this.countryInput, 'name')
    }
  }

  _changeValue (element, attribute) {
    const li = this.countryList.querySelector('li[data-code="' + this.currentCountry + '"]')
    if (li) {
      element.value = li.dataset[attribute]
    }

    if (attribute === 'phone' && element.value !== undefined && element.value !== '' && element.value.length > 1) {
      element.classList.add('valid')
      element.removeAttribute('disabled')

      if (li) {
        element.dataset.code = li.dataset[attribute]
      }
    }
  }

  _changePosition () {
    const ElHeight = this.selector.offsetHeight + 280
    const ElTop = this.selector.getBoundingClientRect().top + pageYOffset

    if (document.body.offsetHeight - ElTop < ElHeight) {
      this.countryList.parentElement.classList.add(this.className + '-top')
    }
  }

  _scrollTo (element, to, duration) {
    let [start, currentTime, increment] = [element.scrollTop, 0, 20]
    const change = to - start

    function animateScroll () {
      currentTime += increment
      element.scrollTop = Math.easeInOutQuad(currentTime, start, change, duration)
      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      }
    }

    animateScroll()
  }
}

function checkSelector (selector) {
  if (selector === undefined || selector.length === 0) {
    throw Error('CountryList: Didn\'t find selector')
  } else if (selector.length > 1) {
    throw Error(`CountryList: Please use one one selector, not more, in one connection
        You use ` + selector.length + ' selectors')
  }
}

function forEachObj (obj, callback) {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      callback(prop, obj[prop])
    }
  }
}

function forEachArr (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], arr)
  }
}

function on (elem, event, func) {
  if (elem.addEventListener) {
    elem.addEventListener(event, func)
  } else {
    elem.attachEvent('on' + event, func)
  }
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2
  if (t < 1) {
    return c / 2 * t * t + b
  }
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

// For IE function closest https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

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

const cookies = {
  set: function (name, value, exdays) {
    const d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    const expires = 'expires=' + d.toUTCString()
    document.cookie = name + '=' + value + ';' + expires + ';path=/'
  },
  get: function (name) {
    const matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[]\\\/+^])/g, '\\$1') + '=([^;]*)'
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
  }
}
