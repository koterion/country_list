'use strict'

import allCountries from './country.json'

window.countryList = function (selector, options) {
  try {
    checkSelector(selector)
  } catch (e) {
    console.error(e.message)
    return false
  }

  let list = new CountryList(selector, options)
  list._init()
  return list
}

let defaults = {
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
  inputCountryName: 'country',
  inputPhoneName: 'phone',
  list: false,
  search: false,
  select: false,
  required: false
}

class CountryList {
  constructor (selector, options) {
    this.selector = selector
    this.className = 'cntr'

    let customOptions = options || {}
    this.options = {}
    forEachProp(defaults, (key, value) => {
      this.options[key] = (customOptions.hasOwnProperty(key)) ? customOptions[key] : value
    })
  }

  _init () {
    this._changeSelector()
    this._closeCountryList()
    this._addCountryList()
    this._addCountryListItems()

    if (!this.options.search) {
      this._createInputCountry()
      this._searchForCountry()

      if (!this.options.select) this._checkForNumber()
    }

    if (this.options.flagInInput) {
      this._addFlagToInput()
    } else {
      this._showCountryList(this.selector)
    }

    if (this.options.search || this.options.select) {
      this._findPhoneInput()
      this._addArrow()
    }

    this._checkCountry()
    this._currentGeo()
    this._changePosition()
  }

  _changeSelector () {
    if (this.selector.length > 0) this.selector = this.selector[0]
    this.selector.classList.add(this.className + '-in')

    this.currentCountry = this.selector.dataset.current
    this._wrapSelector()

    if (!this.options.select) this._changeDivForInput()
  }

  _wrapSelector () {
    this.wrapBlock = this._createEl('div', {
      'class': this.className + '-bl'
    })
    this.selector.parentNode.insertBefore(this.wrapBlock, this.selector)
    this.wrapBlock.appendChild(this.selector)
  }

  _changeDivForInput () {
    let input = this._createEl('input', {
      'class': this.selector.classList,
      'type': this.options.search ? 'text' : 'tel',
      'name': this.options.search ? this.options.inputCountryName : this.options.inputPhoneName,
      'placeholder': this.selector.innerHTML
    })
    for (let data in this.selector.dataset) {
      if (this.selector.dataset.hasOwnProperty(data)) {
        input.dataset[data] = this.selector.dataset[data]
      }
    }
    input.required = this.options.required

    this.wrapBlock.appendChild(input)
    this.wrapBlock.removeChild(this.selector)
    this.selector = input
  }

  _createInputCountry () {
    let input = this._createEl('input', {
      'type': 'hidden',
      'name': this.options.inputCountryName
    })
    this.wrapBlock.appendChild(input)
    this.countryInput = input
  }

  _addCountryList () {
    let block = this._createEl('div', {
      'class': this.className + '-ls'
    })
    this.wrapBlock.appendChild(block)
    this.countryList = document.createElement('ul')
    block.appendChild(this.countryList)
  }

  _addCountryListItem (country) {
    let countryName = country['country']
    let countryCode = country['iso_code']
    let phoneCode = country['country_code']
    let li = this._createEl('li', {
      'data-search': countryName.toLowerCase(),
      'data-name': countryName,
      'data-code': countryCode,
      'data-phone': phoneCode
    })

    if (this.options.flagInSelect) {
      let span = document.createElement('span')
      span.classList.add(this.className + '-flag')
      span.classList.add(this.className + '-flag-' + countryCode)
      li.appendChild(span)
      li.appendChild(document.createTextNode(countryName))
    } else {
      li.innerText = countryName
    }

    this.countryList.appendChild(li)
  }

  _addCountryListItems () {
    if (this.options.list) {
      for (let i = 0; i < this.options.countryAll.length; i++) {
        let iso = this.options.countryAll[i]
        for (let j = 0; j < allCountries.length; j++) {
          if (allCountries.hasOwnProperty(j) && allCountries[j]['iso_code'] === iso) {
            this._addCountryListItem(allCountries[j])
          }
        }
      }
    } else if (this.options.delete) {
      for (let key in allCountries) {
        if (allCountries.hasOwnProperty(key) && !this._checkForDelete(allCountries[key]['iso_code'])) {
          this._addCountryListItem(allCountries[key])
        }
      }
    } else {
      for (let key in allCountries) {
        if (allCountries.hasOwnProperty(key)) {
          this._addCountryListItem(allCountries[key])
        }
      }
    }
    this.countryListItems = this.countryList.querySelectorAll('li')
  }

  _checkForDelete (country) {
    let check = false

    for (let i = 0; i < this.options.countryAll.length; i++) {
      if (country.indexOf(this.options.countryAll[i]) !== -1) {
        check = true
        break
      }
    }

    return check
  }

  _searchForCountry () {
    let _this = this
    on(document.body, 'keypress', function (event) {
      if (_this.wrapBlock.classList.contains('active') && !(event.key.search(/^[^\d+=()[\]{}\\/^$|?*!@#%:;&,_.'"\s]+$/) === -1)) {
        let scrollEl = _this.wrapBlock.querySelector('li[data-search^="' + String.fromCharCode(event.charCode).toLowerCase() + '"]')
        if (scrollEl !== null && scrollEl.length !== 0) {
          _this._scrollTo(_this.countryList, scrollEl.offsetTop - 20, 800)
        }
      }
    })
  }

  _checkForNumber () {
    let wrapBlock = this.wrapBlock
    on(this.selector, 'keyup', function (event) {
      if (!(event.key.search(/[^0-9]/ig) === -1)) {
        event.preventDefault()
      } else {
        wrapBlock.classList.remove('active')
      }
    })
  }

  _addFlagToInput () {
    let block = this._createEl('div', {
      'class': this.className + '-sl'
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
    let wrapBlock = this.wrapBlock
    on(document.body, 'click', function (event) {
      if (wrapBlock.classList.contains('active') && event.target !== wrapBlock && event.target.parentElement !== wrapBlock && event.target.parentElement.parentElement !== wrapBlock) {
        wrapBlock.classList.remove('active')
      }
    })
  }

  _findPhoneInput () {
    this.phoneInput = this.selector.closest('form').querySelector('input[name="' + this.options.inputPhoneName + '"]')
  }

  _addArrow () {
    let span = this._createEl('span', {
      'class': this.className + '-arrow'
    })
    this.wrapBlock.appendChild(span)
    this._showCountryList(span)
  }

  _createEl (el, options = {}) {
    let elem = document.createElement(el)
    for (let key in options) {
      if (options.hasOwnProperty(key)) {
        elem.setAttribute(key, options[key])
      }
    }

    return elem
  }

  _checkCountry () {
    let _this = this
    let items = this.countryListItems
    if (this.options.search) {
      on(this.selector, 'keyup', function (event) {
        _this.wrapBlock.classList.remove('changed')
        _this.wrapBlock.classList.add('active')

        if (this.value.length > 0) {
          for (let i = 0; i < items.length; i++) {
            items[i].style.display = 'none'
          }
          let currentItems = _this.countryList.querySelectorAll('li[data-search^="' + this.value.toLowerCase() + '"]')
          for (let i = 0; i < currentItems.length; i++) {
            currentItems[i].style.display = 'block'
          }
        } else {
          for (let i = 0; i < items.length; i++) {
            items[i].style.display = 'block'
          }
        }

        if (event.keyCode === 13) {
          let li = _this.countryList.querySelector('li[data-search^="' + this.value.toLowerCase() + '"]')
          if (li) li.click()
        }
      })

      for (let i = 0; i < items.length; i++) {
        let li = this.countryListItems[i]
        on(li, 'click', function () {
          _this.wrapBlock.classList.add('changed')
          _this.wrapBlock.classList.remove('active')
          _this.selector.value = this.dataset.name
          if (_this.phoneInput) {
            _this.phoneInput.value = this.dataset.phone
            _this.phoneInput.dataset.code = this.dataset.phone
          }
        })
      }
    } else if (this.options.select) {
      for (let i = 0; i < items.length; i++) {
        let li = this.countryListItems[i]
        on(li, 'click', function () {
          _this.wrapBlock.classList.add('changed')
          _this.wrapBlock.classList.remove('active')
          _this.selector.innerText = this.dataset.name
          _this.countryInput.value = this.dataset.name
          if (_this.phoneInput) {
            _this.phoneInput.value = this.dataset.phone
            _this.phoneInput.dataset.code = this.dataset.phone
          }
        })
      }
    } else if (this.options.flagInInput) {
      for (let i = 0; i < items.length; i++) {
        let li = this.countryListItems[i]
        on(li, 'click', function () {
          _this.wrapBlock.classList.add('changed')
          _this.wrapBlock.classList.remove('active')
          _this.countryInput.value = this.dataset.name
          _this.countryFlagsBlock.innerHTML = '<span class="cntr-flag cntr-flag-' + this.dataset.code + '"></span>'
          _this.selector.classList.add(_this.className + '_check')
          _this.selector.value = this.dataset.phone
          _this.selector.focus()
        })
      }
      on(this.selector, 'keyup', function () {
        if (this.value.search(/[0-9]/ig) === 0 && !this.classList.contains(_this.className + '_check')) {
          let countryFound = _this.countryList.querySelector('li[data-phone|="' + this.value + '"]')
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
      for (let i = 0; i < items.length; i++) {
        let li = this.countryListItems[i]
        on(li, 'click', function () {
          _this.wrapBlock.classList.add('changed')
          _this.wrapBlock.classList.remove('active')
          _this.countryInput.value = this.dataset.name
          _this.selector.value = this.dataset.phone
          _this.selector.focus()
        })
      }
    }
  }

  _currentGeo () {
    if (this.currentCountry === undefined || this.currentCountry === '') {
      if (window.sessionStorage && sessionStorage.getItem('iso')) {
        this.currentCountry = sessionStorage.getItem('iso')
        this.wrapBlock.classList.add('changed')
        this.selector.classList.add(this.className + '_check')
        this._checkGeo()
      } else {
        let Http = new XMLHttpRequest()
        Http.onreadystatechange = () => {
          if (Http.status === 200 && Http.readyState === 4) {
            let iso = this.options.geo.getIso(JSON.parse(Http.responseText))
            this.currentCountry = iso.toLowerCase()
            sessionStorage.setItem('iso', iso.toLowerCase())
            this.wrapBlock.classList.add('changed')
            this.selector.classList.add(this.className + '_check')
            this._checkGeo()
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
    } else {
      this.wrapBlock.classList.add('changed')
      this.selector.classList.add(this.className + '_check')
      this._checkGeo()
    }
  }

  _checkGeo () {
    if (this.options.flagInInput) {
      this.countryFlagsBlock.innerHTML = '<span class="' + this.className + '-flag ' + this.className + '-flag-' + this.currentCountry + '"></span>'
      this._changeValue(this.selector, 'phone')
      this._changeValue(this.countryInput, 'name')
    } else if (this.options.search) {
      this._changeValue(this.selector, 'name')
      if (this.phoneInput) this._changeValue(this.phoneInput, 'phone')
    } else if (this.options.select) {
      let li = this.countryList.querySelector('li[data-code="' + this.currentCountry + '"]')
      if (li) this.selector.innerText = li.dataset.name
      this._changeValue(this.countryInput, 'name')
      if (this.phoneInput) this._changeValue(this.phoneInput, 'phone')
    } else {
      this._changeValue(this.selector, 'phone')
      this._changeValue(this.countryInput, 'name')
    }
  }

  _changeValue (element, attribute) {
    let li = this.countryList.querySelector('li[data-code="' + this.currentCountry + '"]')
    if (li) element.value = li.dataset[attribute]

    if (attribute === 'phone') {
      if (element.value !== undefined && element.value !== '' && element.value.length > 1) {
        element.classList.add('valid')

        if (li) element.dataset.code = li.dataset[attribute]
      }
    }
  }

  _changePosition () {
    let ElHeight = this.selector.offsetHeight + 280
    let ElTop = this.selector.getBoundingClientRect().top + pageYOffset

    if (document.body.offsetHeight - ElTop < ElHeight) {
      this.countryList.parentElement.classList.add(this.className + '-top')
    }
  }

  _scrollTo (element, to, duration) {
    let start = element.scrollTop
    let change = to - start
    let currentTime = 0
    let increment = 20

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
    throw Error(`CountryList: Didn't find selector`)
  } else if (selector.length > 1) {
    throw Error(`CountryList: Please use one one selector, not more, in one connection
        You use ` + selector.length + ` selectors`)
  }
}

function forEachProp (obj, callback) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      callback(prop, obj[prop])
    }
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
  if (t < 1) return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

// For IE function closest https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest =
    function (s) {
      let matches = (this.document || this.ownerDocument).querySelectorAll(s)
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