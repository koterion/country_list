(function ($) {
  'use strict'

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

    const allCountries = [
      ['Afghanistan', 'af', '93'],
      ['Albania', 'al', '355'],
      ['Algeria', 'dz', '213'],
      ['American Samoa', 'as', '1684'],
      ['Andorra', 'ad', '376'],
      ['Angola', 'ao', '244'],
      ['Anguilla', 'ai', '1264'],
      ['Antarctica', 'aq', '672'],
      ['Antigua and Barbuda', 'ag', '1268'],
      ['Argentina', 'ar', '54'],
      ['Armenia', 'am', '374'],
      ['Aruba', 'aw', '297'],
      ['Australia', 'au', '61'],
      ['Austria', 'at', '43'],
      ['Azerbaijan', 'az', '994'],
      ['Bahamas', 'bs', '1242'],
      ['Bahrain', 'bh', '973'],
      ['Bangladesh', 'bd', '880'],
      ['Barbados', 'bb', '1246'],
      ['Belarus', 'by', '375'],
      ['Belgium', 'be', '32'],
      ['Belize', 'bz', '501'],
      ['Benin', 'bj', '229'],
      ['Bermuda', 'bm', '1441'],
      ['Bhutan', 'bt', '975'],
      ['Bolivia', 'bo', '591'],
      ['Bosnia and Herzegovina', 'ba', '387'],
      ['Botswana', 'bw', '267'],
      ['Brazil', 'br', '55'],
      ['British Indian Ocean Territory', 'io', '246'],
      ['British Virgin Islands', 'vg', '1284'],
      ['Brunei', 'bn', '673'],
      ['Bulgaria', 'bg', '359'],
      ['Burkina Faso', 'bf', '226'],
      ['Burundi', 'bi', '257'],
      ['Cambodia', 'kh', '855'],
      ['Cameroon', 'cm', '237'],
      ['Canada', 'ca', '1'],
      ['Cape Verde', 'cv', '238'],
      ['Cayman Islands', 'ky', '1345'],
      ['Central African Republic', 'cf', '236'],
      ['Chad', 'td', '235'],
      ['Chile', 'cl', '56'],
      ['China', 'cn', '86'],
      ['Christmas Island', 'cx', '61'],
      ['Cocos Islands', 'cc', '61'],
      ['Colombia', 'co', '57'],
      ['Comoros', 'km', '269'],
      ['Cook Islands', 'ck', '682'],
      ['Costa Rica', 'cr', '506'],
      ['Croatia', 'hr', '385'],
      ['Cuba', 'cu', '53'],
      ['Cyprus', 'cy', '357'],
      ['Czech Republic', 'cz', '420'],
      ['Democratic Republic of the Congo', 'cd', '243'],
      ['Denmark', 'dk', '45'],
      ['Djibouti', 'dj', '253'],
      ['Dominica', 'dm', '1767'],
      ['Dominican Republic', 'do', '18'],
      ['East Timor', 'tl', '670'],
      ['Ecuador', 'ec', '593'],
      ['Egypt', 'eg', '20'],
      ['El Salvador', 'sv', '503'],
      ['Equatorial Guinea', 'gq', '240'],
      ['Eritrea', 'er', '291'],
      ['Estonia', 'ee', '372'],
      ['Ethiopia', 'et', '251'],
      ['Falkland Islands', 'fk', '500'],
      ['Faroe Islands', 'fo', '298'],
      ['Fiji', 'fj', '679'],
      ['Finland', 'fi', '358'],
      ['France', 'fr', '33'],
      ['French Polynesia', 'pf', '689'],
      ['Gabon', 'ga', '241'],
      ['Gambia', 'gm', '220'],
      ['Georgia', 'ge', '995'],
      ['Germany', 'de', '49'],
      ['Ghana', 'gh', '233'],
      ['Gibraltar', 'gi', '350'],
      ['Greece', 'gr', '30'],
      ['Greenland', 'gl', '299'],
      ['Grenada', 'gd', '1473'],
      ['Guam', 'gu', '1671'],
      ['Guatemala', 'gt', '502'],
      ['Guernsey', 'gg', '44'],
      ['Guinea', 'gn', '224'],
      ['Guinea-Bissau ', 'gw', '245'],
      ['Guyana', 'gy', '592'],
      ['Haiti', 'ht', '509'],
      ['Honduras', 'hn', '504'],
      ['Hong Kong', 'hk', '852'],
      ['Hungary', 'hu', '36'],
      ['Iceland', 'is', '354'],
      ['India', 'in', '91'],
      ['Indonesia', 'id', '62'],
      ['Iran', 'ir', '98'],
      ['Iraq', 'iq', '964'],
      ['Ireland', 'ie', '353'],
      ['Isle of Man', 'im', '44'],
      ['Israel', 'il', '972'],
      ['Italy', 'it', '39'],
      ['Jamaica', 'jm', '1876'],
      ['Japan', 'jp', '81'],
      ['Jersey', 'je', '44'],
      ['Jordan', 'jo', '962'],
      ['Kazakhstan', 'kz', '7'],
      ['Kenya', 'ke', '254'],
      ['Kiribati', 'ki', '686'],
      ['Kosovo', 'xk', '383'],
      ['Kuwait', 'kw', '965'],
      ['Kyrgyzstan', 'kg', '996'],
      ['Laos', 'la', '856'],
      ['Latvia', 'lv', '371'],
      ['Lebanon', 'lb', '961'],
      ['Lesotho', 'ls', '266'],
      ['Liberia', 'lr', '231'],
      ['Libya', 'ly', '218'],
      ['Liechtenstein', 'li', '423'],
      ['Lithuania', 'lt', '370'],
      ['Luxembourg', 'lu', '352'],
      ['Macau', 'mo', '853'],
      ['Macedonia', 'mk', '389'],
      ['Madagascar', 'mg', '261'],
      ['Malawi', 'mw', '265'],
      ['Malaysia', 'my', '60'],
      ['Maldives', 'mv', '960'],
      ['Mali', 'ml', '223'],
      ['Malta', 'mt', '356'],
      ['Marshall Islands', 'mh', '692'],
      ['Mauritania', 'mr', '222'],
      ['Mauritius', 'mu', '230'],
      ['Mayotte', 'yt', '262'],
      ['Mexico', 'mx', '52'],
      ['Micronesia', 'fm', '691'],
      ['Moldova', 'md', '373'],
      ['Monaco', 'mc', '377'],
      ['Mongolia', 'mn', '976'],
      ['Montenegro', 'me', '382'],
      ['Montserrat', 'ms', '1664'],
      ['Morocco', 'ma', '212'],
      ['Mozambique', 'mz', '258'],
      ['Myanmar', 'mm', '95'],
      ['Namibia', 'na', '264'],
      ['Nauru', 'nr', '674'],
      ['Nepal', 'np', '977'],
      ['Netherlands', 'nl', '31'],
      ['Netherlands Antilles', 'an', '599'],
      ['New Caledonia', 'nc', '687'],
      ['New Zealand', 'nz', '64'],
      ['Nicaragua', 'ni', '505'],
      ['Niger', 'ne', '227'],
      ['Nigeria', 'ng', '234'],
      ['Niue', 'nu', '683'],
      ['North Korea', 'kp', '850'],
      ['Northern Mariana Islands', 'mp', '1670'],
      ['Norway', 'no', '47'],
      ['Oman', 'om', '968'],
      ['Pakistan', 'pk', '92'],
      ['Palau', 'pw', '680'],
      ['Palestine', 'ps', '970'],
      ['Panama', 'pa', '507'],
      ['Papua New Guinea', 'pg', '675'],
      ['Paraguay', 'py', '595'],
      ['Peru', 'pe', '51'],
      ['Philippines', 'ph', '63'],
      ['Poland', 'pl', '48'],
      ['Portugal', 'pt', '351'],
      ['Puerto Rico', 'pr', '1'],
      ['Qatar', 'qa', '974'],
      ['Republic of the Congo', 'cg', '242'],
      ['Reunion', 're', '262'],
      ['Romania', 'ro', '40'],
      ['Russia', 'ru', '7'],
      ['Rwanda', 'rw', '250'],
      ['Saint Barthelemy', 'bl', '590'],
      ['Saint Helena', 'sh', '290'],
      ['Saint Kitts and Nevis', 'kn', '1869'],
      ['Saint Lucia', 'lc', '1758'],
      ['Saint Martin', 'mf', '590'],
      ['Saint Pierre and Miquelon', 'pm', '508'],
      ['Saint Vincent and the Grenadines', 'vc', '1784'],
      ['Samoa', 'ws', '685'],
      ['San Marino', 'sm', '378'],
      ['Sao Tome and Principe', 'st', '239'],
      ['Saudi Arabia', 'sa', '966'],
      ['Senegal', 'sn', '221'],
      ['Serbia', 'rs', '381'],
      ['Seychelles', 'sc', '248'],
      ['Sierra Leone', 'sl', '232'],
      ['Singapore', 'sg', '65'],
      ['Slovakia', 'sk', '421'],
      ['Slovenia', 'si', '386'],
      ['Solomon Islands', 'sb', '677'],
      ['Somalia', 'so', '252'],
      ['South Africa', 'za', '27'],
      ['South Korea', 'kr', '82'],
      ['South Sudan', 'ss', '211'],
      ['Spain', 'es', '34'],
      ['Sri Lanka', 'lk', '94'],
      ['Sudan', 'sd', '249'],
      ['Suriname', 'sr', '597'],
      ['Svalbard and Jan Mayen', 'sj', '47'],
      ['Swaziland', 'sz', '268'],
      ['Sweden', 'se', '46'],
      ['Switzerland', 'ch', '41'],
      ['Syria', 'sy', '963'],
      ['Taiwan', 'tw', '886'],
      ['Tajikistan', 'tj', '992'],
      ['Tanzania', 'tz', '255'],
      ['Thailand', 'th', '66'],
      ['Togo', 'tg', '228'],
      ['Tokelau', 'tk', '690'],
      ['Tonga', 'to', '676'],
      ['Trinidad and Tobago', 'tt', '1868'],
      ['Tunisia', 'tn', '216'],
      ['Turkey', 'tr', '90'],
      ['Turkmenistan', 'tm', '993'],
      ['Turks and Caicos Islands', 'tc', '1649'],
      ['Tuvalu', 'tv', '688'],
      ['U.S. Virgin Islands', 'vi', '1340'],
      ['Uganda', 'ug', '256'],
      ['Ukraine', 'ua', '380'],
      ['United Arab Emirates', 'ae', '971'],
      ['United Kingdom', 'gb', '44'],
      ['United States', 'us', '1'],
      ['Uruguay', 'uy', '598'],
      ['Uzbekistan', 'uz', '998'],
      ['Vanuatu', 'vu', '678'],
      ['Vatican', 'va', '379'],
      ['Venezuela', 've', '58'],
      ['Vietnam', 'vn', '84'],
      ['Wallis and Futuna', 'wf', '681'],
      ['Western Sahara', 'eh', '212'],
      ['Yemen', 'ye', '967'],
      ['Zambia', 'zm', '260'],
      ['Zimbabwe', 'zw', '263']
    ]
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
        phoneInput.val($(this).data('phone'))
      })
    } else if (options.select) {
      countryListItems.on('click', function () {
        wrapBlock.removeClass('active')
          .addClass('changed')
        $this.text($(this).data('name'))
        countryInput.val($(this).data('name'))
        phoneInput.val($(this).data('phone'))
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

      if (element.val() !== undefined && element.val() !== '' && element.val().length > 1) {
        element.addClass('valid')
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
            if (value.indexOf(iso) !== -1) {
              addCountryListItem($(this), flag)
            }
          })
        })
      } else if (options.delete) {
        $.each(allCountries, function (key, iso) {
          if (!checkForDelete(iso)) {
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
      $.each(options.countryAll, function (key, value) {
        return country.indexOf(value) !== -1
      })
    }

    function addCountryListItem (country, flag) {
      let countryParam = country
      let countryName = countryParam[0]
      let countryCode = countryParam[1]
      let phoneCode = countryParam[2]

      if (flag) {
        countryList.append('<li data-search="' + countryName.toLowerCase() + '" data-name="' + countryName + '" data-code="' + countryCode + '" data-phone="' + phoneCode + '"><span class="cntr-fl flag-' + countryCode + '"></span>' + countryName + '</li>')
      } else {
        countryList.append('<li data-search="' + countryName.toLowerCase() + '" data-name="' + countryName + '" data-code="' + countryCode + '" data-phone="' + phoneCode + '">' + countryName + '</li>')
      }
    }
  }
})(jQuery)
