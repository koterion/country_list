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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

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
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _country_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country.json */ "./src/js/country.json");
var _country_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./country.json */ "./src/js/country.json", 1);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



if (typeof window === 'undefined') {
  global.countryList = countryList;
} else {
  window.countryList = countryList;
}

function countryList(selector, options) {
  try {
    checkSelector(selector);
  } catch (e) {
    console.error(e.message);
    return false;
  }

  var list = new CountryList(selector, options);

  list._init();

  return list;
}

var defaults = {
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
  hasPhone: true,
  inputCountryName: 'country',
  inputPhoneName: 'phone',
  closestForm: 'form',
  list: false,
  search: false,
  select: false,
  required: false
};

var CountryList =
/*#__PURE__*/
function () {
  function CountryList(selector, options) {
    var _this2 = this;

    _classCallCheck(this, CountryList);

    this.selector = selector;
    this.className = 'cntr';
    var customOptions = options || {};
    this.options = {};
    forEachObj(defaults, function (key, value) {
      _this2.options[key] = customOptions.hasOwnProperty(key) ? customOptions[key] : value;
    });
  }

  _createClass(CountryList, [{
    key: "_init",
    value: function _init() {
      this._changeSelector();

      this._closeCountryList();

      this._addCountryList();

      this._addCountryListItems();

      if (!this.options.search) {
        this._createInputCountry();

        this._searchForCountry();

        if (!this.options.select) this._checkForNumber();
      }

      if (this.options.flagInInput) {
        this._addFlagToInput();
      } else {
        this._showCountryList(this.selector);
      }

      if (this.options.search || this.options.select) {
        if (this.options.hasPhone) {
          this._findPhoneInput();
        }

        this._addArrow();
      }

      this._checkCountry();

      this._currentGeo();

      this._changePosition();
    }
  }, {
    key: "_changeSelector",
    value: function _changeSelector() {
      if (this.selector.length > 0) this.selector = this.selector[0];
      this.selector.classList.add(this.className + '-in');
      this.currentCountry = this.selector.dataset.current;

      this._wrapSelector();

      if (!this.options.select) this._changeDivForInput();
    }
  }, {
    key: "_wrapSelector",
    value: function _wrapSelector() {
      this.wrapBlock = this._createEl('div', {
        'class': this.className + '-bl'
      });
      this.selector.parentNode.insertBefore(this.wrapBlock, this.selector);
      this.wrapBlock.appendChild(this.selector);
    }
  }, {
    key: "_changeDivForInput",
    value: function _changeDivForInput() {
      var input = this._createEl('input', {
        'class': this.selector.classList,
        'type': this.options.search ? 'text' : 'tel',
        'name': this.options.search ? this.options.inputCountryName : this.options.inputPhoneName,
        'placeholder': this.selector.innerHTML
      });

      forEachObj(this.selector.dataset, function (key, value) {
        input.dataset[key] = value;
      });
      input.required = this.options.required;
      this.wrapBlock.appendChild(input);
      this.wrapBlock.removeChild(this.selector);
      this.selector = input;
    }
  }, {
    key: "_createInputCountry",
    value: function _createInputCountry() {
      var input = this._createEl('input', {
        'type': 'hidden',
        'name': this.options.inputCountryName
      });

      this.wrapBlock.appendChild(input);
      this.countryInput = input;
    }
  }, {
    key: "_addCountryList",
    value: function _addCountryList() {
      var block = this._createEl('div', {
        'class': this.className + '-ls'
      });

      this.wrapBlock.appendChild(block);
      this.countryList = this._createEl('ul');
      block.appendChild(this.countryList);
    }
  }, {
    key: "_addCountryListItem",
    value: function _addCountryListItem(country) {
      var _ref = [country['country'], country['iso_code'], country['country_code']],
          countryName = _ref[0],
          countryCode = _ref[1],
          phoneCode = _ref[2];

      var li = this._createEl('li', {
        'data-search': countryName.toLowerCase(),
        'data-name': countryName,
        'data-code': countryCode,
        'data-phone': phoneCode
      });

      if (this.options.flagInSelect) {
        var span = this._createEl('span', {
          'class': this.className + '-flag ' + this.className + '-flag-' + countryCode
        });

        li.appendChild(span);
        li.appendChild(document.createTextNode(countryName));
      } else {
        li.innerText = countryName;
      }

      this.countryList.appendChild(li);
    }
  }, {
    key: "_addCountryListItems",
    value: function _addCountryListItems() {
      var _this3 = this;

      if (this.options.list) {
        forEachArr(this.options.countryAll, function (value) {
          var iso = value;
          forEachArr(_country_json__WEBPACK_IMPORTED_MODULE_0__, function (value) {
            if (value['iso_code'] === iso) {
              _this3._addCountryListItem(value);
            }
          });
        });
      } else if (this.options.delete) {
        forEachArr(_country_json__WEBPACK_IMPORTED_MODULE_0__, function (value) {
          if (!_this3._checkForDelete(value['iso_code'])) {
            _this3._addCountryListItem(value);
          }
        });
      } else {
        forEachArr(_country_json__WEBPACK_IMPORTED_MODULE_0__, function (value) {
          _this3._addCountryListItem(value);
        });
      }

      this.countryListItems = this.countryList.querySelectorAll('li');
    }
  }, {
    key: "_checkForDelete",
    value: function _checkForDelete(country) {
      var check = false;
      forEachArr(this.options.countryAll, function (value) {
        if (country.indexOf(value) !== -1) {
          check = true;
          return false;
        }
      });
      return check;
    }
  }, {
    key: "_searchForCountry",
    value: function _searchForCountry() {
      var _this = this;

      on(document.body, 'keypress', function (event) {
        if (_this.wrapBlock.classList.contains('active') && !(event.key.search(/^[^\d+=()[\]{}\\/^$|?*!@#%:;&,_.'"\s]+$/) === -1)) {
          var scrollEl = _this.wrapBlock.querySelector('li[data-search^="' + String.fromCharCode(event.charCode).toLowerCase() + '"]');

          if (scrollEl !== null && scrollEl.length !== 0) {
            _this._scrollTo(_this.countryList, scrollEl.offsetTop - 20, 800);
          }
        }
      });
    }
  }, {
    key: "_checkForNumber",
    value: function _checkForNumber() {
      var wrapBlock = this.wrapBlock;
      on(this.selector, 'keyup', function (event) {
        if (!(event.key.search(/[^0-9]/ig) === -1)) {
          event.preventDefault();
        } else {
          wrapBlock.classList.remove('active');
        }
      });
    }
  }, {
    key: "_addFlagToInput",
    value: function _addFlagToInput() {
      var block = this._createEl('div', {
        'class': this.className + '-sl'
      });

      this.wrapBlock.appendChild(block);
      this.selector.classList.add(this.className + '-in-sl');
      this.countryFlagsBlock = this.wrapBlock.querySelector('.' + this.className + '-sl');

      this._showCountryList(this.countryFlagsBlock);
    }
  }, {
    key: "_showCountryList",
    value: function _showCountryList(elem) {
      on(elem, 'click', function () {
        this.parentElement.classList.toggle('active');
      });
    }
  }, {
    key: "_closeCountryList",
    value: function _closeCountryList() {
      var wrapBlock = this.wrapBlock;
      on(document.body, 'click', function (event) {
        if (wrapBlock.classList.contains('active') && event.target !== wrapBlock && event.target.parentElement !== wrapBlock && event.target.parentElement.parentElement !== wrapBlock) {
          wrapBlock.classList.remove('active');
        }
      });
    }
  }, {
    key: "_findPhoneInput",
    value: function _findPhoneInput() {
      if (this.selector.closest(this.options.closestForm).length === 1) {
        this.phoneInput = this.selector.closest(this.options.closestForm).querySelector('input[name="' + this.options.inputPhoneName + '"]');
      } else {
        console.warn('Use closestForm option for setup current, unique closest selector');
        this.phoneInput = this.selector.closest(this.options.closestForm).querySelector('input[name="' + this.options.inputPhoneName + '"]');
      }
    }
  }, {
    key: "_addArrow",
    value: function _addArrow() {
      var span = this._createEl('span', {
        'class': this.className + '-arrow'
      });

      this.wrapBlock.appendChild(span);

      this._showCountryList(span);
    }
  }, {
    key: "_createEl",
    value: function _createEl(el) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var elem = document.createElement(el);
      forEachObj(options, function (key, value) {
        elem.setAttribute(key, value);
      });
      return elem;
    }
  }, {
    key: "_checkCountry",
    value: function _checkCountry() {
      var _ref2 = [this, this.countryListItems],
          _this = _ref2[0],
          items = _ref2[1];

      if (this.options.search) {
        on(this.selector, 'keyup', function (event) {
          _this.wrapBlock.classList.remove('changed');

          _this.wrapBlock.classList.add('active');

          if (this.value.length > 0) {
            forEachArr(items, function (value) {
              value.style.display = 'none';
            });

            var currentItems = _this.countryList.querySelectorAll('li[data-search^="' + this.value.toLowerCase() + '"]');

            forEachArr(currentItems, function (value) {
              value.style.display = 'block';
            });
          } else {
            forEachArr(items, function (value) {
              value.style.display = 'block';
            });
          }

          if (event.keyCode === 13) {
            var li = _this.countryList.querySelector('li[data-search^="' + this.value.toLowerCase() + '"]');

            if (li) li.click();
          }
        });
        forEachArr(items, function (value) {
          on(value, 'click', function () {
            _this.wrapBlock.classList.add('changed');

            _this.wrapBlock.classList.remove('active');

            _this.selector.value = this.dataset.name;

            if (_this.phoneInput) {
              _this.phoneInput.value = this.dataset.phone;
              _this.phoneInput.dataset.code = this.dataset.phone;

              _this.phoneInput.classList.add('valid');
            }
          });
        });
      } else if (this.options.select) {
        forEachArr(items, function (value) {
          on(value, 'click', function () {
            _this.wrapBlock.classList.add('changed');

            _this.wrapBlock.classList.remove('active');

            _this.selector.innerText = this.dataset.name;
            _this.countryInput.value = this.dataset.name;

            if (_this.phoneInput) {
              _this.phoneInput.value = this.dataset.phone;
              _this.phoneInput.dataset.code = this.dataset.phone;

              _this.phoneInput.classList.add('valid');
            }
          });
        });
      } else if (this.options.flagInInput) {
        forEachArr(items, function (value) {
          on(value, 'click', function () {
            _this.wrapBlock.classList.add('changed');

            _this.wrapBlock.classList.remove('active');

            _this.countryInput.value = this.dataset.name;
            _this.countryFlagsBlock.innerHTML = '<span class="cntr-flag cntr-flag-' + this.dataset.code + '"></span>';

            _this.selector.classList.add(_this.className + '_check');

            _this.selector.value = this.dataset.phone;

            _this.selector.focus();
          });
        });
        on(this.selector, 'keyup', function () {
          if (this.value.search(/[0-9]/ig) === 0 && !this.classList.contains(_this.className + '_check')) {
            var countryFound = _this.countryList.querySelector('li[data-phone|="' + this.value + '"]');

            if (countryFound && countryFound.dataset.code !== undefined) {
              _this.countryFlagsBlock.innerHTML = '<span class="cntr-flag cntr-flag-' + countryFound.dataset.code + '"></span>';
              _this.countryInput.value = countryFound.dataset.name;
            }
          }

          if (this.value.length === 0) {
            this.classList.remove(_this.className + '_check');
          }
        });
      } else {
        forEachArr(items, function (value) {
          on(value, 'click', function () {
            _this.wrapBlock.classList.add('changed');

            _this.wrapBlock.classList.remove('active');

            _this.countryInput.value = this.dataset.name;
            _this.selector.value = this.dataset.phone;

            _this.selector.focus();
          });
        });
      }
    }
  }, {
    key: "_currentGeo",
    value: function _currentGeo() {
      var _this4 = this;

      if (this.currentCountry === undefined || this.currentCountry === '') {
        if (window.sessionStorage && sessionStorage.getItem('iso')) {
          this.currentCountry = sessionStorage.getItem('iso');
          this.wrapBlock.classList.add('changed');
          this.selector.classList.add(this.className + '_check');

          this._checkGeo();
        } else {
          var Http = new XMLHttpRequest();

          Http.onreadystatechange = function () {
            if (Http.status === 200 && Http.readyState === 4) {
              var iso = _this4.options.geo.getIso(JSON.parse(Http.responseText));

              _this4.currentCountry = iso.toLowerCase();
              sessionStorage.setItem('iso', iso.toLowerCase());

              _this4.wrapBlock.classList.add('changed');

              _this4.selector.classList.add(_this4.className + '_check');

              _this4._checkGeo();
            } else if (Http.status !== 200) {
              if (_this4.options.flagInInput) {
                _this4.countryFlagsBlock.innerHTML = '<span class="' + _this4.className + '-flag ' + _this4.className + '-flag-us"></span>';
                _this4.countryInput.value = 'United States';
              }
            }
          };

          Http.open('GET', this.options.geo.url, true);
          Http.send();
        }
      } else {
        this.wrapBlock.classList.add('changed');
        this.selector.classList.add(this.className + '_check');

        this._checkGeo();
      }
    }
  }, {
    key: "_checkGeo",
    value: function _checkGeo() {
      if (this.options.flagInInput) {
        this.countryFlagsBlock.innerHTML = '<span class="' + this.className + '-flag ' + this.className + '-flag-' + this.currentCountry + '"></span>';

        this._changeValue(this.selector, 'phone');

        this._changeValue(this.countryInput, 'name');
      } else if (this.options.search) {
        this._changeValue(this.selector, 'name');

        if (this.phoneInput) this._changeValue(this.phoneInput, 'phone');
      } else if (this.options.select) {
        var li = this.countryList.querySelector('li[data-code="' + this.currentCountry + '"]');
        if (li) this.selector.innerText = li.dataset.name;

        this._changeValue(this.countryInput, 'name');

        if (this.phoneInput) this._changeValue(this.phoneInput, 'phone');
      } else {
        this._changeValue(this.selector, 'phone');

        this._changeValue(this.countryInput, 'name');
      }
    }
  }, {
    key: "_changeValue",
    value: function _changeValue(element, attribute) {
      var li = this.countryList.querySelector('li[data-code="' + this.currentCountry + '"]');
      if (li) element.value = li.dataset[attribute];

      if (attribute === 'phone') {
        if (element.value !== undefined && element.value !== '' && element.value.length > 1) {
          element.classList.add('valid');
          if (li) element.dataset.code = li.dataset[attribute];
        }
      }
    }
  }, {
    key: "_changePosition",
    value: function _changePosition() {
      var ElHeight = this.selector.offsetHeight + 280;
      var ElTop = this.selector.getBoundingClientRect().top + pageYOffset;

      if (document.body.offsetHeight - ElTop < ElHeight) {
        this.countryList.parentElement.classList.add(this.className + '-top');
      }
    }
  }, {
    key: "_scrollTo",
    value: function _scrollTo(element, to, duration) {
      var _ref3 = [element.scrollTop, 0, 20],
          start = _ref3[0],
          currentTime = _ref3[1],
          increment = _ref3[2];
      var change = to - start;

      function animateScroll() {
        currentTime += increment;
        element.scrollTop = Math.easeInOutQuad(currentTime, start, change, duration);

        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      }

      animateScroll();
    }
  }]);

  return CountryList;
}();

function checkSelector(selector) {
  if (selector === undefined || selector.length === 0) {
    throw Error("CountryList: Didn't find selector");
  } else if (selector.length > 1) {
    throw Error("CountryList: Please use one one selector, not more, in one connection\n        You use " + selector.length + " selectors");
  }
}

function forEachObj(obj, callback) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      callback(prop, obj[prop]);
    }
  }
}

function forEachArr(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], arr);
  }
}

function on(elem, event, func) {
  if (elem.addEventListener) {
    elem.addEventListener(event, func);
  } else {
    elem.attachEvent('on' + event, func);
  }
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}; // For IE function closest https://developer.mozilla.org/en-US/docs/Web/API/Element/closest


if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s);
    var i;
    var el = this;

    do {
      i = matches.length;

      while (--i >= 0 && matches.item(i) !== el) {}
    } while (i < 0 && (el = el.parentElement));

    return el;
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _countryList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countryList.js */ "./src/js/countryList.js");

countryList(document.querySelector('.phone'), {
  inputCountryName: 'country1',
  inputPhoneName: 'phone1'
});
countryList(document.querySelector('.flags'), {
  flagInSelect: true
});
countryList(document.querySelector('.flag'), {
  flagInInput: true
});
countryList(document.querySelector('.select'), {
  select: true
});
countryList(document.querySelector('.search'), {
  search: true,
  inputCountryName: 'country4',
  hasPhone: false
});
countryList(document.querySelector('.choose'), {
  select: true,
  list: true,
  countryAll: ['ar', 'fr'],
  hasPhone: false
});
countryList(document.querySelector('.delete'), {
  select: true,
  delete: true,
  countryAll: ['ar', 'ua'],
  hasPhone: false
});

/***/ }),

/***/ 1:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\Desktop\111\Plugins\countryList\src\js\main.js */"./src/js/main.js");


/***/ })

/******/ });