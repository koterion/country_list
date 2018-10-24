'use strict'

import allCountries from './country.json'

(function ($) {
  jQuery.fn.cntr = function (options) {
    options = $.extend({
      select: false,
      flagInInput: false,
      flagInSelect: false,
      search: false,
      list: false,
      delete: false,
      countryAll: []
    }, options)

    const body = $('body')
    let $this = $(this)

    if ($this !== undefined && $this.length > 1) {
      console.warn($this)
      console.error(`CNTR: Please use one one selector, not more, in one connection
        You use ` + $this.length + ` selectors`)
      return false
    }

    let currentCountry = $this.data('current')
    let phoneInput, countryFlagsBlock, countryInput

    $this.addClass('cntr-in')
      .wrap('<div class="cntr-bl"></div>')

    const wrapBlock = $this.parent()
    wrapBlock.append('<div class="cntr-ls"><ul></ul></div>')
    const countryList = wrapBlock.find('.cntr-ls').find('ul')

    if (!options.search) {
      wrapBlock.append('<input type="hidden" name="country">')
      countryInput = wrapBlock.find('input[name=country]')

      body.on('keydown', function (event) {
        if (wrapBlock.hasClass('active') && !(event.key.search(/^[^\d+=()[\]{}\\/^$|?*!@#%:;&,_.'"\s]+$/) === -1)) {
          let scrollElement = wrapBlock.find('.cntr-ls')
            .find('li[data-search^=' + String.fromCharCode(event.keyCode).toLowerCase() + ']')

          if (scrollElement.length !== 0) {
            countryList.animate({scrollTop: scrollElement[0].offsetTop - 20}, 500)
          }
        }
      })

      if (!options.select && !options.search) {
        $this.on('keypress', function (event) {
          if (!(event.key.search(/[^0-9]/ig) === -1)) {
            event.preventDefault()
          } else {
            $this.parent().removeClass('active')
          }
        })
      }
    }

    createCountryList(options.flagInSelect)
    let countryListItems = countryList.find('li')

    if (options.flagInInput) {
      wrapBlock.append('<div class="cntr-sl"></div>')
      $this.addClass('cntr-in-sl')

      countryFlagsBlock = wrapBlock.find('.cntr-sl')
      countryFlagsBlock.css('height', $this.height())
      countryFlagsBlock.on('click', function () {
        $(this).parent().toggleClass('active')
      })
    } else {
      $this.on('click', function () {
        $(this).parent().toggleClass('active')
      })
    }

    body.on('click', function (event) {
      if (wrapBlock.hasClass('active') && !wrapBlock.is(event.target) && wrapBlock.has(event.target).length === 0) {
        wrapBlock.removeClass('active')
      }
    })

    if (options.search || options.select) {
      phoneInput = $this.closest('form').find('input[type="tel"]')
      wrapBlock.append('<span class="cntr-arrow"></span>')
      let dropDownArrow = wrapBlock.find('.cntr-arrow')

      dropDownArrow.on('click', function () {
        $this.click()
      })
    }

    if (options.search) {
      $this.on('keyup', function (e) {
        wrapBlock.removeClass('changed').addClass('active')

        if ($this.val().length > 0) {
          countryListItems.hide()
          countryList.find('li[data-search^="' + $this.val().toLowerCase() + '"]').show()
        } else {
          countryListItems.show()
        }

        if (e.originalEvent.keyCode === 13) {
          $.each(countryListItems, function () {
            if ($(this).css('display') !== 'none') {
              $(this).click()
              return false
            }
          })
        }
      })
      $this.on('keypress', function (e) {
        if (e.charCode === 13) {
          return false
        }
      })
      countryListItems.on('click', function () {
        wrapBlock.removeClass('active')
          .addClass('changed')
        $this.val($(this).data('name'))
        phoneInput.val($(this).data('phone')).attr('data-code', $(this).data('phone'))
      })
    } else if (options.select) {
      countryListItems.on('click', function () {
        wrapBlock.removeClass('active')
          .addClass('changed')
        $this.text($(this).data('name'))
        countryInput.val($(this).data('name'))
        phoneInput.val($(this).data('phone')).attr('data-code', $(this).data('phone'))
      })
    } else if (options.flagInInput) {
      countryListItems.on('click', function () {
        wrapBlock.removeClass('active')
          .addClass('changed')
        countryInput.val($(this).data('name'))
        countryFlagsBlock.html('<span class="flag-' + $(this).data('code') + '"></span>')
        $this.addClass('cntr_check')
          .val($(this).data('phone'))
          .focus()
      })

      $this.on('keyup', function () {
        if (!($this.val().search(/[^0-9]/ig) === 0) && $this.val().length > 0 && !$this.hasClass('cntr_check')) {
          let countryFound = wrapBlock.find('.cntr-ls').find('li[data-phone|=' + $this.val() + ']')

          if (countryFound.data('code') !== undefined) {
            countryFlagsBlock.html('<span class="flag-' + countryFound.data('code') + '"></span>')
            countryInput.val(countryFound.data('name'))
          }
        }

        if ($this.val().length < 1) {
          $this.removeClass('cntr_check')
        }
      })
    } else {
      countryListItems.on('click', function () {
        wrapBlock.removeClass('active')
          .addClass('changed')
        countryInput.val($(this).data('name'))
        $this.val($(this).data('phone'))
          .focus()
      })
    }

    if (currentCountry === undefined || currentCountry === '') {
      if (window.sessionStorage && sessionStorage.getItem('iso')) {
        currentCountry = sessionStorage.getItem('iso')
        wrapBlock.addClass('changed')
        $this.addClass('cntr_check')
        checkGeo()
      } else {
        $.ajax({
          url: 'https://api.sypexgeo.net/',
          method: 'GET',
          dataType: 'json',
          error: function () {
            if (options.flagInInput) {
              countryFlagsBlock.html('<span class="flag-us"></span>')
              countryInput.val('United States')
            }
          },
          success: function (response) {
            currentCountry = response.country.iso.toLowerCase()
            sessionStorage.setItem('iso', response.country.iso.toLowerCase())
            wrapBlock.addClass('changed')
            $this.addClass('cntr_check')
            checkGeo()
          }
        })
      }
    } else {
      wrapBlock.addClass('changed')
      $this.addClass('cntr_check')
      checkGeo()
    }

    if (body.scrollHeight - $this.offset().top < 360 && body.scrollHeight - $this.offset().top > 281) {
      countryList.parent().addClass('cntr-middle')
    } else if (body.scrollHeight - $this.offset().top < 280) {
      countryList.parent().addClass('cntr-top')
    }

    function changeValue (element, attribute) {
      element.val(countryList.find('li[data-code="' + currentCountry + '"]').data(attribute))

      if (attribute === 'phone') {
        if (element.val() !== undefined && element.val() !== '' && element.val().length > 1) {
          element.addClass('valid')
            .attr('data-code', countryList.find('li[data-code="' + currentCountry + '"]').data(attribute))
        }
      }
    }

    function checkGeo () {
      if (options.flagInInput) {
        countryFlagsBlock.html('<span class="flag-' + currentCountry + '"></span>')
        changeValue($this, 'phone')
        changeValue(countryInput, 'name')
      } else if (options.search) {
        changeValue($this, 'name')
        changeValue(phoneInput, 'phone')
      } else if (options.select) {
        $this.text(countryList.find('li[data-code="' + currentCountry + '"]').data('name'))
        changeValue(countryInput, 'name')
        changeValue(phoneInput, 'phone')
      } else {
        changeValue($this, 'phone')
        changeValue(countryInput, 'name')
      }
    }

    function createCountryList (flag) {
      if (options.list) {
        $.each(options.countryAll, function (key, iso) {
          $.each(allCountries, function (key, value) {
            if (value['iso_code'].indexOf(iso) !== -1) {
              addCountryListItem(value, flag)
            }
          })
        })
      } else if (options.delete) {
        $.each(allCountries, function (key, iso) {
          if (!checkForDelete(iso['iso_code'])) {
            addCountryListItem(iso, flag)
          }
        })
      } else {
        for (let i = 0; i < allCountries.length; i++) {
          addCountryListItem(allCountries[i], flag)
        }
      }
    }

    function checkForDelete (country) {
      let check = false
      $.each(options.countryAll, function (key, value) {
        if (country.indexOf(value) !== -1) {
          check = true
        }
      })
      return check
    }

    function addCountryListItem (country, flag) {
      let countryName = country['country']
      let countryCode = country['iso_code']
      let phoneCode = country['country_code']

      if (flag) {
        countryList.append('<li data-search="' + countryName.toLowerCase() + '" data-name="' + countryName + '" data-code="' + countryCode + '" data-phone="' + phoneCode + '"><span class="cntr-fl flag-' + countryCode + '"></span>' + countryName + '</li>')
      } else {
        countryList.append('<li data-search="' + countryName.toLowerCase() + '" data-name="' + countryName + '" data-code="' + countryCode + '" data-phone="' + phoneCode + '">' + countryName + '</li>')
      }
    }
  }
})(jQuery)
