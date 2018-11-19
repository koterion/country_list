/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/country.json":
/*!*****************************!*\
  !*** ./src/js/country.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, default */
/***/ (function(module) {

module.exports = [{"country":"Afghanistan","iso_code":"af","country_code":"93"},{"country":"Albania","iso_code":"al","country_code":"355"},{"country":"Algeria","iso_code":"dz","country_code":"213"},{"country":"American Samoa","iso_code":"as","country_code":"1684"},{"country":"Andorra","iso_code":"ad","country_code":"376"},{"country":"Angola","iso_code":"ao","country_code":"244"},{"country":"Anguilla","iso_code":"ai","country_code":"1264"},{"country":"Antarctica","iso_code":"aq","country_code":"672"},{"country":"Antigua and Barbuda","iso_code":"ag","country_code":"1268"},{"country":"Argentina","iso_code":"ar","country_code":"54"},{"country":"Armenia","iso_code":"am","country_code":"374"},{"country":"Aruba","iso_code":"aw","country_code":"297"},{"country":"Australia","iso_code":"au","country_code":"61"},{"country":"Austria","iso_code":"at","country_code":"43"},{"country":"Azerbaijan","iso_code":"az","country_code":"994"},{"country":"Bahamas","iso_code":"bs","country_code":"1242"},{"country":"Bahrain","iso_code":"bh","country_code":"973"},{"country":"Bangladesh","iso_code":"bd","country_code":"880"},{"country":"Barbados","iso_code":"bb","country_code":"1246"},{"country":"Belarus","iso_code":"by","country_code":"375"},{"country":"Belgium","iso_code":"be","country_code":"32"},{"country":"Belize","iso_code":"bz","country_code":"501"},{"country":"Benin","iso_code":"bj","country_code":"229"},{"country":"Bermuda","iso_code":"bm","country_code":"1441"},{"country":"Bhutan","iso_code":"bt","country_code":"975"},{"country":"Bolivia","iso_code":"bo","country_code":"591"},{"country":"Bosnia and Herzegovina","iso_code":"ba","country_code":"387"},{"country":"Botswana","iso_code":"bw","country_code":"267"},{"country":"Brazil","iso_code":"br","country_code":"55"},{"country":"British Indian Ocean Territory","iso_code":"io","country_code":"246"},{"country":"British Virgin Islands","iso_code":"vg","country_code":"1284"},{"country":"Brunei","iso_code":"bn","country_code":"673"},{"country":"Bulgaria","iso_code":"bg","country_code":"359"},{"country":"Burkina Faso","iso_code":"bf","country_code":"226"},{"country":"Burundi","iso_code":"bi","country_code":"257"},{"country":"Cambodia","iso_code":"kh","country_code":"855"},{"country":"Cameroon","iso_code":"cm","country_code":"237"},{"country":"Canada","iso_code":"ca","country_code":"1"},{"country":"Cape Verde","iso_code":"cv","country_code":"238"},{"country":"Cayman Islands","iso_code":"ky","country_code":"1345"},{"country":"Central African Republic","iso_code":"cf","country_code":"236"},{"country":"Chad","iso_code":"td","country_code":"235"},{"country":"Chile","iso_code":"cl","country_code":"56"},{"country":"China","iso_code":"cn","country_code":"86"},{"country":"Christmas Island","iso_code":"cx","country_code":"61"},{"country":"Cocos Islands","iso_code":"cc","country_code":"61"},{"country":"Colombia","iso_code":"co","country_code":"57"},{"country":"Comoros","iso_code":"km","country_code":"269"},{"country":"Cook Islands","iso_code":"ck","country_code":"682"},{"country":"Costa Rica","iso_code":"cr","country_code":"506"},{"country":"Croatia","iso_code":"hr","country_code":"385"},{"country":"Cuba","iso_code":"cu","country_code":"53"},{"country":"Cyprus","iso_code":"cy","country_code":"357"},{"country":"Czech Republic","iso_code":"cz","country_code":"420"},{"country":"Democratic Republic of the Congo","iso_code":"cd","country_code":"243"},{"country":"Denmark","iso_code":"dk","country_code":"45"},{"country":"Djibouti","iso_code":"dj","country_code":"253"},{"country":"Dominica","iso_code":"dm","country_code":"1767"},{"country":"Dominican Republic","iso_code":"do","country_code":"18"},{"country":"East Timor","iso_code":"tl","country_code":"670"},{"country":"Ecuador","iso_code":"ec","country_code":"593"},{"country":"Egypt","iso_code":"eg","country_code":"20"},{"country":"El Salvador","iso_code":"sv","country_code":"503"},{"country":"Equatorial Guinea","iso_code":"gq","country_code":"240"},{"country":"Eritrea","iso_code":"er","country_code":"291"},{"country":"Estonia","iso_code":"ee","country_code":"372"},{"country":"Ethiopia","iso_code":"et","country_code":"251"},{"country":"Falkland Islands","iso_code":"fk","country_code":"500"},{"country":"Faroe Islands","iso_code":"fo","country_code":"298"},{"country":"Fiji","iso_code":"fj","country_code":"679"},{"country":"Finland","iso_code":"fi","country_code":"358"},{"country":"France","iso_code":"fr","country_code":"33"},{"country":"French Polynesia","iso_code":"pf","country_code":"689"},{"country":"Gabon","iso_code":"ga","country_code":"241"},{"country":"Gambia","iso_code":"gm","country_code":"220"},{"country":"Georgia","iso_code":"ge","country_code":"995"},{"country":"Germany","iso_code":"de","country_code":"49"},{"country":"Ghana","iso_code":"gh","country_code":"233"},{"country":"Gibraltar","iso_code":"gi","country_code":"350"},{"country":"Greece","iso_code":"gr","country_code":"30"},{"country":"Greenland","iso_code":"gl","country_code":"299"},{"country":"Grenada","iso_code":"gd","country_code":"1473"},{"country":"Guam","iso_code":"gu","country_code":"1671"},{"country":"Guatemala","iso_code":"gt","country_code":"502"},{"country":"Guernsey","iso_code":"gg","country_code":"44"},{"country":"Guinea","iso_code":"gn","country_code":"224"},{"country":"Guinea-Bissau ","iso_code":"gw","country_code":"245"},{"country":"Guyana","iso_code":"gy","country_code":"592"},{"country":"Haiti","iso_code":"ht","country_code":"509"},{"country":"Honduras","iso_code":"hn","country_code":"504"},{"country":"Hong Kong","iso_code":"hk","country_code":"852"},{"country":"Hungary","iso_code":"hu","country_code":"36"},{"country":"Iceland","iso_code":"is","country_code":"354"},{"country":"India","iso_code":"in","country_code":"91"},{"country":"Indonesia","iso_code":"id","country_code":"62"},{"country":"Iran","iso_code":"ir","country_code":"98"},{"country":"Iraq","iso_code":"iq","country_code":"964"},{"country":"Ireland","iso_code":"ie","country_code":"353"},{"country":"Isle of Man","iso_code":"im","country_code":"44"},{"country":"Israel","iso_code":"il","country_code":"972"},{"country":"Italy","iso_code":"it","country_code":"39"},{"country":"Jamaica","iso_code":"jm","country_code":"1876"},{"country":"Japan","iso_code":"jp","country_code":"81"},{"country":"Jersey","iso_code":"je","country_code":"44"},{"country":"Jordan","iso_code":"jo","country_code":"962"},{"country":"Kazakhstan","iso_code":"kz","country_code":"7"},{"country":"Kenya","iso_code":"ke","country_code":"254"},{"country":"Kiribati","iso_code":"ki","country_code":"686"},{"country":"Kosovo","iso_code":"xk","country_code":"383"},{"country":"Kuwait","iso_code":"kw","country_code":"965"},{"country":"Kyrgyzstan","iso_code":"kg","country_code":"996"},{"country":"Laos","iso_code":"la","country_code":"856"},{"country":"Latvia","iso_code":"lv","country_code":"371"},{"country":"Lebanon","iso_code":"lb","country_code":"961"},{"country":"Lesotho","iso_code":"ls","country_code":"266"},{"country":"Liberia","iso_code":"lr","country_code":"231"},{"country":"Libya","iso_code":"ly","country_code":"218"},{"country":"Liechtenstein","iso_code":"li","country_code":"423"},{"country":"Lithuania","iso_code":"lt","country_code":"370"},{"country":"Luxembourg","iso_code":"lu","country_code":"352"},{"country":"Macau","iso_code":"mo","country_code":"853"},{"country":"Macedonia","iso_code":"mk","country_code":"389"},{"country":"Madagascar","iso_code":"mg","country_code":"261"},{"country":"Malawi","iso_code":"mw","country_code":"265"},{"country":"Malaysia","iso_code":"my","country_code":"60"},{"country":"Maldives","iso_code":"mv","country_code":"960"},{"country":"Mali","iso_code":"ml","country_code":"223"},{"country":"Malta","iso_code":"mt","country_code":"356"},{"country":"Marshall Islands","iso_code":"mh","country_code":"692"},{"country":"Mauritania","iso_code":"mr","country_code":"222"},{"country":"Mauritius","iso_code":"mu","country_code":"230"},{"country":"Mayotte","iso_code":"yt","country_code":"262"},{"country":"Mexico","iso_code":"mx","country_code":"52"},{"country":"Micronesia","iso_code":"fm","country_code":"691"},{"country":"Moldova","iso_code":"md","country_code":"373"},{"country":"Monaco","iso_code":"mc","country_code":"377"},{"country":"Mongolia","iso_code":"mn","country_code":"976"},{"country":"Montenegro","iso_code":"me","country_code":"382"},{"country":"Montserrat","iso_code":"ms","country_code":"1664"},{"country":"Morocco","iso_code":"ma","country_code":"212"},{"country":"Mozambique","iso_code":"mz","country_code":"258"},{"country":"Myanmar","iso_code":"mm","country_code":"95"},{"country":"Namibia","iso_code":"na","country_code":"264"},{"country":"Nauru","iso_code":"nr","country_code":"674"},{"country":"Nepal","iso_code":"np","country_code":"977"},{"country":"Netherlands","iso_code":"nl","country_code":"31"},{"country":"Netherlands Antilles","iso_code":"an","country_code":"599"},{"country":"New Caledonia","iso_code":"nc","country_code":"687"},{"country":"New Zealand","iso_code":"nz","country_code":"64"},{"country":"Nicaragua","iso_code":"ni","country_code":"505"},{"country":"Niger","iso_code":"ne","country_code":"227"},{"country":"Nigeria","iso_code":"ng","country_code":"234"},{"country":"Niue","iso_code":"nu","country_code":"683"},{"country":"North Korea","iso_code":"kp","country_code":"850"},{"country":"Northern Mariana Islands","iso_code":"mp","country_code":"1670"},{"country":"Norway","iso_code":"no","country_code":"47"},{"country":"Oman","iso_code":"om","country_code":"968"},{"country":"Pakistan","iso_code":"pk","country_code":"92"},{"country":"Palau","iso_code":"pw","country_code":"680"},{"country":"Palestine","iso_code":"ps","country_code":"970"},{"country":"Panama","iso_code":"pa","country_code":"507"},{"country":"Papua New Guinea","iso_code":"pg","country_code":"675"},{"country":"Paraguay","iso_code":"py","country_code":"595"},{"country":"Peru","iso_code":"pe","country_code":"51"},{"country":"Philippines","iso_code":"ph","country_code":"63"},{"country":"Poland","iso_code":"pl","country_code":"48"},{"country":"Portugal","iso_code":"pt","country_code":"351"},{"country":"Puerto Rico","iso_code":"pr","country_code":"1"},{"country":"Qatar","iso_code":"qa","country_code":"974"},{"country":"Republic of the Congo","iso_code":"cg","country_code":"242"},{"country":"Reunion","iso_code":"re","country_code":"262"},{"country":"Romania","iso_code":"ro","country_code":"40"},{"country":"Russia","iso_code":"ru","country_code":"7"},{"country":"Rwanda","iso_code":"rw","country_code":"250"},{"country":"Saint Barthelemy","iso_code":"bl","country_code":"590"},{"country":"Saint Helena","iso_code":"sh","country_code":"290"},{"country":"Saint Kitts and Nevis","iso_code":"kn","country_code":"1869"},{"country":"Saint Lucia","iso_code":"lc","country_code":"1758"},{"country":"Saint Martin","iso_code":"mf","country_code":"590"},{"country":"Saint Pierre and Miquelon","iso_code":"pm","country_code":"508"},{"country":"Saint Vincent and the Grenadines","iso_code":"vc","country_code":"1784"},{"country":"Samoa","iso_code":"ws","country_code":"685"},{"country":"San Marino","iso_code":"sm","country_code":"378"},{"country":"Sao Tome and Principe","iso_code":"st","country_code":"239"},{"country":"Saudi Arabia","iso_code":"sa","country_code":"966"},{"country":"Senegal","iso_code":"sn","country_code":"221"},{"country":"Serbia","iso_code":"rs","country_code":"381"},{"country":"Seychelles","iso_code":"sc","country_code":"248"},{"country":"Sierra Leone","iso_code":"sl","country_code":"232"},{"country":"Singapore","iso_code":"sg","country_code":"65"},{"country":"Slovakia","iso_code":"sk","country_code":"421"},{"country":"Slovenia","iso_code":"si","country_code":"386"},{"country":"Solomon Islands","iso_code":"sb","country_code":"677"},{"country":"Somalia","iso_code":"so","country_code":"252"},{"country":"South Africa","iso_code":"za","country_code":"27"},{"country":"South Korea","iso_code":"kr","country_code":"82"},{"country":"South Sudan","iso_code":"ss","country_code":"211"},{"country":"Spain","iso_code":"es","country_code":"34"},{"country":"Sri Lanka","iso_code":"lk","country_code":"94"},{"country":"Sudan","iso_code":"sd","country_code":"249"},{"country":"Suriname","iso_code":"sr","country_code":"597"},{"country":"Svalbard and Jan Mayen","iso_code":"sj","country_code":"47"},{"country":"Swaziland","iso_code":"sz","country_code":"268"},{"country":"Sweden","iso_code":"se","country_code":"46"},{"country":"Switzerland","iso_code":"ch","country_code":"41"},{"country":"Syria","iso_code":"sy","country_code":"963"},{"country":"Taiwan","iso_code":"tw","country_code":"886"},{"country":"Tajikistan","iso_code":"tj","country_code":"992"},{"country":"Tanzania","iso_code":"tz","country_code":"255"},{"country":"Thailand","iso_code":"th","country_code":"66"},{"country":"Togo","iso_code":"tg","country_code":"228"},{"country":"Tokelau","iso_code":"tk","country_code":"690"},{"country":"Tonga","iso_code":"to","country_code":"676"},{"country":"Trinidad and Tobago","iso_code":"tt","country_code":"1868"},{"country":"Tunisia","iso_code":"tn","country_code":"216"},{"country":"Turkey","iso_code":"tr","country_code":"90"},{"country":"Turkmenistan","iso_code":"tm","country_code":"993"},{"country":"Turks and Caicos Islands","iso_code":"tc","country_code":"1649"},{"country":"Tuvalu","iso_code":"tv","country_code":"688"},{"country":"U.S. Virgin Islands","iso_code":"vi","country_code":"1340"},{"country":"Uganda","iso_code":"ug","country_code":"256"},{"country":"Ukraine","iso_code":"ua","country_code":"380"},{"country":"United Arab Emirates","iso_code":"ae","country_code":"971"},{"country":"United Kingdom","iso_code":"gb","country_code":"44"},{"country":"United States","iso_code":"us","country_code":"1"},{"country":"Uruguay","iso_code":"uy","country_code":"598"},{"country":"Uzbekistan","iso_code":"uz","country_code":"998"},{"country":"Vanuatu","iso_code":"vu","country_code":"678"},{"country":"Vatican","iso_code":"va","country_code":"379"},{"country":"Venezuela","iso_code":"ve","country_code":"58"},{"country":"Vietnam","iso_code":"vn","country_code":"84"},{"country":"Wallis and Futuna","iso_code":"wf","country_code":"681"},{"country":"Western Sahara","iso_code":"eh","country_code":"212"},{"country":"Yemen","iso_code":"ye","country_code":"967"},{"country":"Zambia","iso_code":"zm","country_code":"260"},{"country":"Zimbabwe","iso_code":"zw","country_code":"263"}];

/***/ }),

/***/ "./src/js/countryList.js":
/*!*******************************!*\
  !*** ./src/js/countryList.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _country_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country.json */ "./src/js/country.json");
var _country_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./country.json */ "./src/js/country.json", 1);




(function ($) {
  jQuery.fn.cntr = function (options) {
    options = $.extend({
      countryAll: [],
      delete: false,
      flagInInput: false,
      flagInSelect: false,
      geo: {
        url: 'https://api.sypexgeo.net/',
        getIso: function getIso(response) {
          return response.country.iso;
        }
      },
      inputCountryName: 'country',
      inputPhoneName: 'phone',
      list: false,
      search: false,
      select: false,
      required: false
    }, options);
    var body = $('body');
    var $this = $(this);

    if ($this !== undefined && $this.length > 1) {
      console.warn($this);
      console.error("CNTR: Please use one one selector, not more, in one connection\n        You use " + $this.length + " selectors");
      return false;
    }

    var currentCountry = $this.data('current');
    var phoneInput, countryFlagsBlock, countryInput;
    $this.addClass('cntr-in').wrap('<div class="cntr-bl"></div>');
    var wrapBlock = $this.parent();

    if (!options.select) {
      wrapBlock.append("<input class=\"".concat($this.attr('class'), "\" placeholder=\"").concat($this.text(), "\"/>"));
      var inputCountry = $this.next('input');
      inputCountry.data($this.data());
      $this.remove();
      $this = inputCountry;

      if (options.required) {
        $this.attr('required', 'required');
      }

      if (options.search) {
        $this.attr('name', options.inputCountryName);
        $this.attr('type', 'text');
      } else {
        $this.attr('name', options.inputPhoneName);
        $this.attr('type', 'tel');
      }
    }

    wrapBlock.append('<div class="cntr-ls"><ul></ul></div>');
    var countryList = wrapBlock.find('.cntr-ls').find('ul');

    if (!options.search) {
      wrapBlock.append('<input type="hidden" name="' + options.inputCountryName + '">');
      countryInput = wrapBlock.find('input[name="' + options.inputCountryName + '"]');
      body.on('keydown', function (event) {
        if (wrapBlock.hasClass('active') && !(event.key.search(/^[^\d+=()[\]{}\\/^$|?*!@#%:;&,_.'"\s]+$/) === -1)) {
          var scrollElement = wrapBlock.find('.cntr-ls').find('li[data-search^=' + String.fromCharCode(event.keyCode).toLowerCase() + ']');

          if (scrollElement.length !== 0) {
            countryList.animate({
              scrollTop: scrollElement[0].offsetTop - 20
            }, 500);
          }
        }
      });

      if (!options.select && !options.search) {
        $this.on('keypress', function (event) {
          if (!(event.key.search(/[^0-9]/ig) === -1)) {
            event.preventDefault();
          } else {
            $this.parent().removeClass('active');
          }
        });
      }
    }

    createCountryList(options.flagInSelect);
    var countryListItems = countryList.find('li');

    if (options.flagInInput) {
      wrapBlock.append('<div class="cntr-sl"></div>');
      $this.addClass('cntr-in-sl');
      countryFlagsBlock = wrapBlock.find('.cntr-sl');
      countryFlagsBlock.css('height', $this.height());
      countryFlagsBlock.on('click', function () {
        $(this).parent().toggleClass('active');
      });
    } else {
      $this.on('click', function () {
        $(this).parent().toggleClass('active');
      });
    }

    body.on('click', function (event) {
      if (wrapBlock.hasClass('active') && !wrapBlock.is(event.target) && wrapBlock.has(event.target).length === 0) {
        wrapBlock.removeClass('active');
      }
    });

    if (options.search || options.select) {
      phoneInput = $this.closest('form').find('input[name="' + options.inputPhoneName + '"]');
      wrapBlock.append('<span class="cntr-arrow"></span>');
      var dropDownArrow = wrapBlock.find('.cntr-arrow');
      dropDownArrow.on('click', function () {
        $this.click();
      });
    }

    if (options.search) {
      $this.on('keyup', function (e) {
        wrapBlock.removeClass('changed').addClass('active');

        if ($this.val().length > 0) {
          countryListItems.hide();
          countryList.find('li[data-search^="' + $this.val().toLowerCase() + '"]').show();
        } else {
          countryListItems.show();
        }

        if (e.originalEvent.keyCode === 13) {
          $.each(countryListItems, function () {
            if ($(this).css('display') !== 'none') {
              $(this).click();
              return false;
            }
          });
        }
      });
      $this.on('keypress', function (e) {
        if (e.charCode === 13) {
          return false;
        }
      });
      countryListItems.on('click', function () {
        wrapBlock.removeClass('active').addClass('changed');
        $this.val($(this).data('name'));
        phoneInput.val($(this).data('phone')).attr('data-code', $(this).data('phone'));
      });
    } else if (options.select) {
      countryListItems.on('click', function () {
        wrapBlock.removeClass('active').addClass('changed');
        $this.text($(this).data('name'));
        countryInput.val($(this).data('name'));
        phoneInput.val($(this).data('phone')).attr('data-code', $(this).data('phone'));
      });
    } else if (options.flagInInput) {
      countryListItems.on('click', function () {
        wrapBlock.removeClass('active').addClass('changed');
        countryInput.val($(this).data('name'));
        countryFlagsBlock.html('<span class="cntr-flag cntr-flag-' + $(this).data('code') + '"></span>');
        $this.addClass('cntr_check').val($(this).data('phone')).focus();
      });
      $this.on('keyup', function () {
        if (!($this.val().search(/[^0-9]/ig) === 0) && $this.val().length > 0 && !$this.hasClass('cntr_check')) {
          var countryFound = wrapBlock.find('.cntr-ls').find('li[data-phone|=' + $this.val() + ']');

          if (countryFound.data('code') !== undefined) {
            countryFlagsBlock.html('<span class="cntr-flag cntr-flag-' + countryFound.data('code') + '"></span>');
            countryInput.val(countryFound.data('name'));
          }
        }

        if ($this.val().length < 1) {
          $this.removeClass('cntr_check');
        }
      });
    } else {
      countryListItems.on('click', function () {
        wrapBlock.removeClass('active').addClass('changed');
        countryInput.val($(this).data('name'));
        $this.val($(this).data('phone')).focus();
      });
    }

    if (currentCountry === undefined || currentCountry === '') {
      if (window.sessionStorage && sessionStorage.getItem('iso')) {
        currentCountry = sessionStorage.getItem('iso');
        wrapBlock.addClass('changed');
        $this.addClass('cntr_check');
        checkGeo();
      } else {
        $.ajax({
          url: options.geo.url,
          method: 'GET',
          dataType: 'json',
          error: function error() {
            if (options.flagInInput) {
              countryFlagsBlock.html('<span class="cntr-flag cntr-flag-us"></span>');
              countryInput.val('United States');
            }
          },
          success: function success(response) {
            var iso = options.geo.getIso(response);
            currentCountry = iso.toLowerCase();
            sessionStorage.setItem('iso', iso.toLowerCase());
            wrapBlock.addClass('changed');
            $this.addClass('cntr_check');
            checkGeo();
          }
        });
      }
    } else {
      wrapBlock.addClass('changed');
      $this.addClass('cntr_check');
      checkGeo();
    }

    if (body.prop('scrollHeight') - $this.offset().top < 360 && body.prop('scrollHeight') - $this.offset().top > 281) {
      countryList.parent().addClass('cntr-middle');
    } else if (body.prop('scrollHeight') - $this.offset().top < 280) {
      countryList.parent().addClass('cntr-top');
    }

    function changeValue(element, attribute) {
      element.val(countryList.find('li[data-code="' + currentCountry + '"]').data(attribute));

      if (attribute === 'phone') {
        if (element.val() !== undefined && element.val() !== '' && element.val().length > 1) {
          element.addClass('valid').attr('data-code', countryList.find('li[data-code="' + currentCountry + '"]').data(attribute));
        }
      }
    }

    function checkGeo() {
      if (options.flagInInput) {
        countryFlagsBlock.html('<span class="cntr-flag cntr-flag-' + currentCountry + '"></span>');
        changeValue($this, 'phone');
        changeValue(countryInput, 'name');
      } else if (options.search) {
        changeValue($this, 'name');
        changeValue(phoneInput, 'phone');
      } else if (options.select) {
        $this.text(countryList.find('li[data-code="' + currentCountry + '"]').data('name'));
        changeValue(countryInput, 'name');
        changeValue(phoneInput, 'phone');
      } else {
        changeValue($this, 'phone');
        changeValue(countryInput, 'name');
      }
    }

    function createCountryList(flag) {
      if (options.list) {
        $.each(options.countryAll, function (key, iso) {
          $.each(_country_json__WEBPACK_IMPORTED_MODULE_0__, function (key, value) {
            if (value['iso_code'].indexOf(iso) !== -1) {
              addCountryListItem(value, flag);
            }
          });
        });
      } else if (options.delete) {
        $.each(_country_json__WEBPACK_IMPORTED_MODULE_0__, function (key, iso) {
          if (!checkForDelete(iso['iso_code'])) {
            addCountryListItem(iso, flag);
          }
        });
      } else {
        for (var i = 0; i < _country_json__WEBPACK_IMPORTED_MODULE_0__.length; i++) {
          addCountryListItem(_country_json__WEBPACK_IMPORTED_MODULE_0__[i], flag);
        }
      }
    }

    function checkForDelete(country) {
      var check = false;
      $.each(options.countryAll, function (key, value) {
        if (country.indexOf(value) !== -1) {
          check = true;
        }
      });
      return check;
    }

    function addCountryListItem(country, flag) {
      var countryName = country['country'];
      var countryCode = country['iso_code'];
      var phoneCode = country['country_code'];

      if (flag) {
        countryList.append('<li data-search="' + countryName.toLowerCase() + '" data-name="' + countryName + '" data-code="' + countryCode + '" data-phone="' + phoneCode + '"><span class="cntr-flag cntr-flag-' + countryCode + '"></span>' + countryName + '</li>');
      } else {
        countryList.append('<li data-search="' + countryName.toLowerCase() + '" data-name="' + countryName + '" data-code="' + countryCode + '" data-phone="' + phoneCode + '">' + countryName + '</li>');
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./src/sass/countryList.sass":
/*!***********************************!*\
  !*** ./src/sass/countryList.sass ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1:
/*!*****************************************************************!*\
  !*** multi ./src/js/countryList.js ./src/sass/countryList.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/countryList.js */"./src/js/countryList.js");
module.exports = __webpack_require__(/*! ./src/sass/countryList.sass */"./src/sass/countryList.sass");


/***/ })

/******/ });
//# sourceMappingURL=countryList.js.map