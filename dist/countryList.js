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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./src/country.json":
/*!**************************!*\
  !*** ./src/country.json ***!
  \**************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Afghanistan\",\"iso\":\"af\",\"code\":\"93\"},{\"name\":\"Albania\",\"iso\":\"al\",\"code\":\"355\"},{\"name\":\"Algeria\",\"iso\":\"dz\",\"code\":\"213\"},{\"name\":\"American Samoa\",\"iso\":\"as\",\"code\":\"1684\"},{\"name\":\"Andorra\",\"iso\":\"ad\",\"code\":\"376\"},{\"name\":\"Angola\",\"iso\":\"ao\",\"code\":\"244\"},{\"name\":\"Anguilla\",\"iso\":\"ai\",\"code\":\"1264\"},{\"name\":\"Antarctica\",\"iso\":\"aq\",\"code\":\"672\"},{\"name\":\"Antigua and Barbuda\",\"iso\":\"ag\",\"code\":\"1268\"},{\"name\":\"Argentina\",\"iso\":\"ar\",\"code\":\"54\"},{\"name\":\"Armenia\",\"iso\":\"am\",\"code\":\"374\"},{\"name\":\"Aruba\",\"iso\":\"aw\",\"code\":\"297\"},{\"name\":\"Australia\",\"iso\":\"au\",\"code\":\"61\"},{\"name\":\"Austria\",\"iso\":\"at\",\"code\":\"43\"},{\"name\":\"Azerbaijan\",\"iso\":\"az\",\"code\":\"994\"},{\"name\":\"Bahamas\",\"iso\":\"bs\",\"code\":\"1242\"},{\"name\":\"Bahrain\",\"iso\":\"bh\",\"code\":\"973\"},{\"name\":\"Bangladesh\",\"iso\":\"bd\",\"code\":\"880\"},{\"name\":\"Barbados\",\"iso\":\"bb\",\"code\":\"1246\"},{\"name\":\"Belarus\",\"iso\":\"by\",\"code\":\"375\"},{\"name\":\"Belgium\",\"iso\":\"be\",\"code\":\"32\"},{\"name\":\"Belize\",\"iso\":\"bz\",\"code\":\"501\"},{\"name\":\"Benin\",\"iso\":\"bj\",\"code\":\"229\"},{\"name\":\"Bermuda\",\"iso\":\"bm\",\"code\":\"1441\"},{\"name\":\"Bhutan\",\"iso\":\"bt\",\"code\":\"975\"},{\"name\":\"Bolivia\",\"iso\":\"bo\",\"code\":\"591\"},{\"name\":\"Bosnia and Herzegovina\",\"iso\":\"ba\",\"code\":\"387\"},{\"name\":\"Botswana\",\"iso\":\"bw\",\"code\":\"267\"},{\"name\":\"Brazil\",\"iso\":\"br\",\"code\":\"55\"},{\"name\":\"British Indian Ocean Territory\",\"iso\":\"io\",\"code\":\"246\"},{\"name\":\"British Virgin Islands\",\"iso\":\"vg\",\"code\":\"1284\"},{\"name\":\"Brunei\",\"iso\":\"bn\",\"code\":\"673\"},{\"name\":\"Bulgaria\",\"iso\":\"bg\",\"code\":\"359\"},{\"name\":\"Burkina Faso\",\"iso\":\"bf\",\"code\":\"226\"},{\"name\":\"Burundi\",\"iso\":\"bi\",\"code\":\"257\"},{\"name\":\"Cambodia\",\"iso\":\"kh\",\"code\":\"855\"},{\"name\":\"Cameroon\",\"iso\":\"cm\",\"code\":\"237\"},{\"name\":\"Canada\",\"iso\":\"ca\",\"code\":\"1\"},{\"name\":\"Cape Verde\",\"iso\":\"cv\",\"code\":\"238\"},{\"name\":\"Cayman Islands\",\"iso\":\"ky\",\"code\":\"1345\"},{\"name\":\"Central African Republic\",\"iso\":\"cf\",\"code\":\"236\"},{\"name\":\"Chad\",\"iso\":\"td\",\"code\":\"235\"},{\"name\":\"Chile\",\"iso\":\"cl\",\"code\":\"56\"},{\"name\":\"China\",\"iso\":\"cn\",\"code\":\"86\"},{\"name\":\"Christmas Island\",\"iso\":\"cx\",\"code\":\"61\"},{\"name\":\"Cocos Islands\",\"iso\":\"cc\",\"code\":\"61\"},{\"name\":\"Colombia\",\"iso\":\"co\",\"code\":\"57\"},{\"name\":\"Comoros\",\"iso\":\"km\",\"code\":\"269\"},{\"name\":\"Cook Islands\",\"iso\":\"ck\",\"code\":\"682\"},{\"name\":\"Costa Rica\",\"iso\":\"cr\",\"code\":\"506\"},{\"name\":\"Croatia\",\"iso\":\"hr\",\"code\":\"385\"},{\"name\":\"Cuba\",\"iso\":\"cu\",\"code\":\"53\"},{\"name\":\"Cyprus\",\"iso\":\"cy\",\"code\":\"357\"},{\"name\":\"Czech Republic\",\"iso\":\"cz\",\"code\":\"420\"},{\"name\":\"Democratic Republic of the Congo\",\"iso\":\"cd\",\"code\":\"243\"},{\"name\":\"Denmark\",\"iso\":\"dk\",\"code\":\"45\"},{\"name\":\"Djibouti\",\"iso\":\"dj\",\"code\":\"253\"},{\"name\":\"Dominica\",\"iso\":\"dm\",\"code\":\"1767\"},{\"name\":\"Dominican Republic\",\"iso\":\"do\",\"code\":\"18\"},{\"name\":\"East Timor\",\"iso\":\"tl\",\"code\":\"670\"},{\"name\":\"Ecuador\",\"iso\":\"ec\",\"code\":\"593\"},{\"name\":\"Egypt\",\"iso\":\"eg\",\"code\":\"20\"},{\"name\":\"El Salvador\",\"iso\":\"sv\",\"code\":\"503\"},{\"name\":\"Equatorial Guinea\",\"iso\":\"gq\",\"code\":\"240\"},{\"name\":\"Eritrea\",\"iso\":\"er\",\"code\":\"291\"},{\"name\":\"Estonia\",\"iso\":\"ee\",\"code\":\"372\"},{\"name\":\"Ethiopia\",\"iso\":\"et\",\"code\":\"251\"},{\"name\":\"Falkland Islands\",\"iso\":\"fk\",\"code\":\"500\"},{\"name\":\"Faroe Islands\",\"iso\":\"fo\",\"code\":\"298\"},{\"name\":\"Fiji\",\"iso\":\"fj\",\"code\":\"679\"},{\"name\":\"Finland\",\"iso\":\"fi\",\"code\":\"358\"},{\"name\":\"France\",\"iso\":\"fr\",\"code\":\"33\"},{\"name\":\"French Polynesia\",\"iso\":\"pf\",\"code\":\"689\"},{\"name\":\"Gabon\",\"iso\":\"ga\",\"code\":\"241\"},{\"name\":\"Gambia\",\"iso\":\"gm\",\"code\":\"220\"},{\"name\":\"Georgia\",\"iso\":\"ge\",\"code\":\"995\"},{\"name\":\"Germany\",\"iso\":\"de\",\"code\":\"49\"},{\"name\":\"Ghana\",\"iso\":\"gh\",\"code\":\"233\"},{\"name\":\"Gibraltar\",\"iso\":\"gi\",\"code\":\"350\"},{\"name\":\"Greece\",\"iso\":\"gr\",\"code\":\"30\"},{\"name\":\"Greenland\",\"iso\":\"gl\",\"code\":\"299\"},{\"name\":\"Grenada\",\"iso\":\"gd\",\"code\":\"1473\"},{\"name\":\"Guam\",\"iso\":\"gu\",\"code\":\"1671\"},{\"name\":\"Guatemala\",\"iso\":\"gt\",\"code\":\"502\"},{\"name\":\"Guernsey\",\"iso\":\"gg\",\"code\":\"44\"},{\"name\":\"Guinea\",\"iso\":\"gn\",\"code\":\"224\"},{\"name\":\"Guinea-Bissau \",\"iso\":\"gw\",\"code\":\"245\"},{\"name\":\"Guyana\",\"iso\":\"gy\",\"code\":\"592\"},{\"name\":\"Haiti\",\"iso\":\"ht\",\"code\":\"509\"},{\"name\":\"Honduras\",\"iso\":\"hn\",\"code\":\"504\"},{\"name\":\"Hong Kong\",\"iso\":\"hk\",\"code\":\"852\"},{\"name\":\"Hungary\",\"iso\":\"hu\",\"code\":\"36\"},{\"name\":\"Iceland\",\"iso\":\"is\",\"code\":\"354\"},{\"name\":\"India\",\"iso\":\"in\",\"code\":\"91\"},{\"name\":\"Indonesia\",\"iso\":\"id\",\"code\":\"62\"},{\"name\":\"Iran\",\"iso\":\"ir\",\"code\":\"98\"},{\"name\":\"Iraq\",\"iso\":\"iq\",\"code\":\"964\"},{\"name\":\"Ireland\",\"iso\":\"ie\",\"code\":\"353\"},{\"name\":\"Isle of Man\",\"iso\":\"im\",\"code\":\"44\"},{\"name\":\"Israel\",\"iso\":\"il\",\"code\":\"972\"},{\"name\":\"Italy\",\"iso\":\"it\",\"code\":\"39\"},{\"name\":\"Jamaica\",\"iso\":\"jm\",\"code\":\"1876\"},{\"name\":\"Japan\",\"iso\":\"jp\",\"code\":\"81\"},{\"name\":\"Jersey\",\"iso\":\"je\",\"code\":\"44\"},{\"name\":\"Jordan\",\"iso\":\"jo\",\"code\":\"962\"},{\"name\":\"Kazakhstan\",\"iso\":\"kz\",\"code\":\"7\"},{\"name\":\"Kenya\",\"iso\":\"ke\",\"code\":\"254\"},{\"name\":\"Kiribati\",\"iso\":\"ki\",\"code\":\"686\"},{\"name\":\"Kosovo\",\"iso\":\"xk\",\"code\":\"383\"},{\"name\":\"Kuwait\",\"iso\":\"kw\",\"code\":\"965\"},{\"name\":\"Kyrgyzstan\",\"iso\":\"kg\",\"code\":\"996\"},{\"name\":\"Laos\",\"iso\":\"la\",\"code\":\"856\"},{\"name\":\"Latvia\",\"iso\":\"lv\",\"code\":\"371\"},{\"name\":\"Lebanon\",\"iso\":\"lb\",\"code\":\"961\"},{\"name\":\"Lesotho\",\"iso\":\"ls\",\"code\":\"266\"},{\"name\":\"Liberia\",\"iso\":\"lr\",\"code\":\"231\"},{\"name\":\"Libya\",\"iso\":\"ly\",\"code\":\"218\"},{\"name\":\"Liechtenstein\",\"iso\":\"li\",\"code\":\"423\"},{\"name\":\"Lithuania\",\"iso\":\"lt\",\"code\":\"370\"},{\"name\":\"Luxembourg\",\"iso\":\"lu\",\"code\":\"352\"},{\"name\":\"Macau\",\"iso\":\"mo\",\"code\":\"853\"},{\"name\":\"Macedonia\",\"iso\":\"mk\",\"code\":\"389\"},{\"name\":\"Madagascar\",\"iso\":\"mg\",\"code\":\"261\"},{\"name\":\"Malawi\",\"iso\":\"mw\",\"code\":\"265\"},{\"name\":\"Malaysia\",\"iso\":\"my\",\"code\":\"60\"},{\"name\":\"Maldives\",\"iso\":\"mv\",\"code\":\"960\"},{\"name\":\"Mali\",\"iso\":\"ml\",\"code\":\"223\"},{\"name\":\"Malta\",\"iso\":\"mt\",\"code\":\"356\"},{\"name\":\"Marshall Islands\",\"iso\":\"mh\",\"code\":\"692\"},{\"name\":\"Mauritania\",\"iso\":\"mr\",\"code\":\"222\"},{\"name\":\"Mauritius\",\"iso\":\"mu\",\"code\":\"230\"},{\"name\":\"Mayotte\",\"iso\":\"yt\",\"code\":\"262\"},{\"name\":\"Mexico\",\"iso\":\"mx\",\"code\":\"52\"},{\"name\":\"Micronesia\",\"iso\":\"fm\",\"code\":\"691\"},{\"name\":\"Moldova\",\"iso\":\"md\",\"code\":\"373\"},{\"name\":\"Monaco\",\"iso\":\"mc\",\"code\":\"377\"},{\"name\":\"Mongolia\",\"iso\":\"mn\",\"code\":\"976\"},{\"name\":\"Montenegro\",\"iso\":\"me\",\"code\":\"382\"},{\"name\":\"Montserrat\",\"iso\":\"ms\",\"code\":\"1664\"},{\"name\":\"Morocco\",\"iso\":\"ma\",\"code\":\"212\"},{\"name\":\"Mozambique\",\"iso\":\"mz\",\"code\":\"258\"},{\"name\":\"Myanmar\",\"iso\":\"mm\",\"code\":\"95\"},{\"name\":\"Namibia\",\"iso\":\"na\",\"code\":\"264\"},{\"name\":\"Nauru\",\"iso\":\"nr\",\"code\":\"674\"},{\"name\":\"Nepal\",\"iso\":\"np\",\"code\":\"977\"},{\"name\":\"Netherlands\",\"iso\":\"nl\",\"code\":\"31\"},{\"name\":\"Netherlands Antilles\",\"iso\":\"an\",\"code\":\"599\"},{\"name\":\"New Caledonia\",\"iso\":\"nc\",\"code\":\"687\"},{\"name\":\"New Zealand\",\"iso\":\"nz\",\"code\":\"64\"},{\"name\":\"Nicaragua\",\"iso\":\"ni\",\"code\":\"505\"},{\"name\":\"Niger\",\"iso\":\"ne\",\"code\":\"227\"},{\"name\":\"Nigeria\",\"iso\":\"ng\",\"code\":\"234\"},{\"name\":\"Niue\",\"iso\":\"nu\",\"code\":\"683\"},{\"name\":\"North Korea\",\"iso\":\"kp\",\"code\":\"850\"},{\"name\":\"Northern Mariana Islands\",\"iso\":\"mp\",\"code\":\"1670\"},{\"name\":\"Norway\",\"iso\":\"no\",\"code\":\"47\"},{\"name\":\"Oman\",\"iso\":\"om\",\"code\":\"968\"},{\"name\":\"Pakistan\",\"iso\":\"pk\",\"code\":\"92\"},{\"name\":\"Palau\",\"iso\":\"pw\",\"code\":\"680\"},{\"name\":\"Palestine\",\"iso\":\"ps\",\"code\":\"970\"},{\"name\":\"Panama\",\"iso\":\"pa\",\"code\":\"507\"},{\"name\":\"Papua New Guinea\",\"iso\":\"pg\",\"code\":\"675\"},{\"name\":\"Paraguay\",\"iso\":\"py\",\"code\":\"595\"},{\"name\":\"Peru\",\"iso\":\"pe\",\"code\":\"51\"},{\"name\":\"Philippines\",\"iso\":\"ph\",\"code\":\"63\"},{\"name\":\"Poland\",\"iso\":\"pl\",\"code\":\"48\"},{\"name\":\"Portugal\",\"iso\":\"pt\",\"code\":\"351\"},{\"name\":\"Puerto Rico\",\"iso\":\"pr\",\"code\":\"1\"},{\"name\":\"Qatar\",\"iso\":\"qa\",\"code\":\"974\"},{\"name\":\"Republic of the Congo\",\"iso\":\"cg\",\"code\":\"242\"},{\"name\":\"Reunion\",\"iso\":\"re\",\"code\":\"262\"},{\"name\":\"Romania\",\"iso\":\"ro\",\"code\":\"40\"},{\"name\":\"Russia\",\"iso\":\"ru\",\"code\":\"7\"},{\"name\":\"Rwanda\",\"iso\":\"rw\",\"code\":\"250\"},{\"name\":\"Saint Barthelemy\",\"iso\":\"bl\",\"code\":\"590\"},{\"name\":\"Saint Helena\",\"iso\":\"sh\",\"code\":\"290\"},{\"name\":\"Saint Kitts and Nevis\",\"iso\":\"kn\",\"code\":\"1869\"},{\"name\":\"Saint Lucia\",\"iso\":\"lc\",\"code\":\"1758\"},{\"name\":\"Saint Martin\",\"iso\":\"mf\",\"code\":\"590\"},{\"name\":\"Saint Pierre and Miquelon\",\"iso\":\"pm\",\"code\":\"508\"},{\"name\":\"Saint Vincent and the Grenadines\",\"iso\":\"vc\",\"code\":\"1784\"},{\"name\":\"Samoa\",\"iso\":\"ws\",\"code\":\"685\"},{\"name\":\"San Marino\",\"iso\":\"sm\",\"code\":\"378\"},{\"name\":\"Sao Tome and Principe\",\"iso\":\"st\",\"code\":\"239\"},{\"name\":\"Saudi Arabia\",\"iso\":\"sa\",\"code\":\"966\"},{\"name\":\"Senegal\",\"iso\":\"sn\",\"code\":\"221\"},{\"name\":\"Serbia\",\"iso\":\"rs\",\"code\":\"381\"},{\"name\":\"Seychelles\",\"iso\":\"sc\",\"code\":\"248\"},{\"name\":\"Sierra Leone\",\"iso\":\"sl\",\"code\":\"232\"},{\"name\":\"Singapore\",\"iso\":\"sg\",\"code\":\"65\"},{\"name\":\"Slovakia\",\"iso\":\"sk\",\"code\":\"421\"},{\"name\":\"Slovenia\",\"iso\":\"si\",\"code\":\"386\"},{\"name\":\"Solomon Islands\",\"iso\":\"sb\",\"code\":\"677\"},{\"name\":\"Somalia\",\"iso\":\"so\",\"code\":\"252\"},{\"name\":\"South Africa\",\"iso\":\"za\",\"code\":\"27\"},{\"name\":\"South Korea\",\"iso\":\"kr\",\"code\":\"82\"},{\"name\":\"South Sudan\",\"iso\":\"ss\",\"code\":\"211\"},{\"name\":\"Spain\",\"iso\":\"es\",\"code\":\"34\"},{\"name\":\"Sri Lanka\",\"iso\":\"lk\",\"code\":\"94\"},{\"name\":\"Sudan\",\"iso\":\"sd\",\"code\":\"249\"},{\"name\":\"Suriname\",\"iso\":\"sr\",\"code\":\"597\"},{\"name\":\"Svalbard and Jan Mayen\",\"iso\":\"sj\",\"code\":\"47\"},{\"name\":\"Swaziland\",\"iso\":\"sz\",\"code\":\"268\"},{\"name\":\"Sweden\",\"iso\":\"se\",\"code\":\"46\"},{\"name\":\"Switzerland\",\"iso\":\"ch\",\"code\":\"41\"},{\"name\":\"Syria\",\"iso\":\"sy\",\"code\":\"963\"},{\"name\":\"Taiwan\",\"iso\":\"tw\",\"code\":\"886\"},{\"name\":\"Tajikistan\",\"iso\":\"tj\",\"code\":\"992\"},{\"name\":\"Tanzania\",\"iso\":\"tz\",\"code\":\"255\"},{\"name\":\"Thailand\",\"iso\":\"th\",\"code\":\"66\"},{\"name\":\"Togo\",\"iso\":\"tg\",\"code\":\"228\"},{\"name\":\"Tokelau\",\"iso\":\"tk\",\"code\":\"690\"},{\"name\":\"Tonga\",\"iso\":\"to\",\"code\":\"676\"},{\"name\":\"Trinidad and Tobago\",\"iso\":\"tt\",\"code\":\"1868\"},{\"name\":\"Tunisia\",\"iso\":\"tn\",\"code\":\"216\"},{\"name\":\"Turkey\",\"iso\":\"tr\",\"code\":\"90\"},{\"name\":\"Turkmenistan\",\"iso\":\"tm\",\"code\":\"993\"},{\"name\":\"Turks and Caicos Islands\",\"iso\":\"tc\",\"code\":\"1649\"},{\"name\":\"Tuvalu\",\"iso\":\"tv\",\"code\":\"688\"},{\"name\":\"U.S. Virgin Islands\",\"iso\":\"vi\",\"code\":\"1340\"},{\"name\":\"Uganda\",\"iso\":\"ug\",\"code\":\"256\"},{\"name\":\"Ukraine\",\"iso\":\"ua\",\"code\":\"380\"},{\"name\":\"United Arab Emirates\",\"iso\":\"ae\",\"code\":\"971\"},{\"name\":\"United Kingdom\",\"iso\":\"gb\",\"code\":\"44\"},{\"name\":\"United States\",\"iso\":\"us\",\"code\":\"1\"},{\"name\":\"Uruguay\",\"iso\":\"uy\",\"code\":\"598\"},{\"name\":\"Uzbekistan\",\"iso\":\"uz\",\"code\":\"998\"},{\"name\":\"Vanuatu\",\"iso\":\"vu\",\"code\":\"678\"},{\"name\":\"Vatican\",\"iso\":\"va\",\"code\":\"379\"},{\"name\":\"Venezuela\",\"iso\":\"ve\",\"code\":\"58\"},{\"name\":\"Vietnam\",\"iso\":\"vn\",\"code\":\"84\"},{\"name\":\"Wallis and Futuna\",\"iso\":\"wf\",\"code\":\"681\"},{\"name\":\"Western Sahara\",\"iso\":\"eh\",\"code\":\"212\"},{\"name\":\"Yemen\",\"iso\":\"ye\",\"code\":\"967\"},{\"name\":\"Zambia\",\"iso\":\"zm\",\"code\":\"260\"},{\"name\":\"Zimbabwe\",\"iso\":\"zw\",\"code\":\"263\"}]");

/***/ }),

/***/ "./src/js/countryList.js":
/*!*******************************!*\
  !*** ./src/js/countryList.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _country_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../country.json */ "./src/country.json");
var _country_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../country.json */ "./src/country.json", 1);


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}



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
  "delete": false,
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
  required: false,
  countries: _country_json__WEBPACK_IMPORTED_MODULE_0__,
  disabledPhone: false,
  cookies: true
};

var CountryList =
/*#__PURE__*/
function () {
  function CountryList(selector, options) {
    _classCallCheck(this, CountryList);

    this.selector = selector;
    this.className = 'cntr';
    var customOptions = options || {};
    this.options = _objectSpread({}, defaults, {}, customOptions);
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

        if (!this.options.select) {
          this._checkForNumber();
        }
      }

      if (this.options.flagInInput) {
        this._addFlagToInput();

        if (this.options.select) {
          this._showCountryList(this.selector);
        }
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
      if (this.selector.length > 0) {
        this.selector = this.selector[0];
      }

      this.selector.classList.add(this.className + '-in');
      this.currentCountry = this.selector.dataset.current;

      this._wrapSelector();

      if (!this.options.select) {
        this._changeDivForInput();
      }
    }
  }, {
    key: "_wrapSelector",
    value: function _wrapSelector() {
      this.wrapBlock = this._createEl('div', {
        "class": this.className + '-bl'
      });
      this.selector.parentNode.insertBefore(this.wrapBlock, this.selector);
      this.wrapBlock.appendChild(this.selector);
    }
  }, {
    key: "_changeDivForInput",
    value: function _changeDivForInput() {
      var input = this._createEl('input', {
        "class": this.selector.classList,
        type: this.options.search ? 'text' : 'tel',
        name: this.options.search ? this.options.inputCountryName : this.options.inputPhoneName,
        placeholder: this.selector.innerHTML
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
        type: 'hidden',
        name: this.options.inputCountryName
      });

      this.wrapBlock.appendChild(input);
      this.countryInput = input;
    }
  }, {
    key: "_addCountryList",
    value: function _addCountryList() {
      var block = this._createEl('div', {
        "class": this.className + '-ls'
      });

      this.wrapBlock.appendChild(block);
      this.countryList = this._createEl('ul');
      block.appendChild(this.countryList);
    }
  }, {
    key: "_addCountryListItem",
    value: function _addCountryListItem(country) {
      var name = country.name,
          iso = country.iso,
          code = country.code;

      var li = this._createEl('li', {
        'data-search': name.toLowerCase(),
        'data-name': name,
        'data-code': iso,
        'data-phone': code
      });

      if (this.options.flagInSelect) {
        var span = this._createEl('span', {
          "class": this.className + '-flag ' + this.className + '-flag-' + iso
        });

        li.appendChild(span);
        li.appendChild(document.createTextNode(name));
      } else {
        li.innerText = name;
      }

      this.countryList.appendChild(li);
    }
  }, {
    key: "_addCountryListItems",
    value: function _addCountryListItems() {
      var _this2 = this;

      if (this.options.list) {
        forEachArr(this.options.countryAll, function (iso) {
          forEachArr(_this2.options.countries, function (value) {
            if (value.iso === iso) {
              _this2._addCountryListItem(value);
            }
          });
        });
      } else if (this.options["delete"]) {
        forEachArr(this.options.countries, function (value) {
          if (!_this2._checkForDelete(value.iso)) {
            _this2._addCountryListItem(value);
          }
        });
      } else {
        forEachArr(this.options.countries, function (value) {
          _this2._addCountryListItem(value);
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
        if (_this.wrapBlock.classList.contains('active') && !(event.key.search(/^[^\d+=()[\]{}\\/^$|?*!@#%:;&,_.'"\s]+$/) === -1) && event.which !== 13) {
          var scrollEl = _this.wrapBlock.querySelector('li[data-search^="' + String.fromCharCode(event.which).toLowerCase() + '"]');

          if (scrollEl && scrollEl.length !== 0) {
            _this._scrollTo(_this.countryList, scrollEl.offsetTop - 20, 800);
          }
        }
      });
    }
  }, {
    key: "_checkForNumber",
    value: function _checkForNumber() {
      var wrapBlock = this.wrapBlock;
      on(this.selector, 'keypress', function (event) {
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
        "class": this.className + '-sl'
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
      if (this.selector.closest(this.options.closestForm) && this.selector.closest(this.options.closestForm).length) {
        this.phoneInput = this.selector.closest(this.options.closestForm).querySelector('input[name="' + this.options.inputPhoneName + '"]');

        if (this.options.disabledPhone) {
          this.phoneInput.setAttribute('disabled', 'true');
        }
      } else {
        console.error('Use closestForm option for setup current, unique closest selector');
      }
    }
  }, {
    key: "_addArrow",
    value: function _addArrow() {
      var span = this._createEl('span', {
        "class": this.className + '-arrow'
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
      var _ref = [this, this.countryListItems],
          _this = _ref[0],
          items = _ref[1];

      if (this.options.search) {
        on(this.selector, 'keyup', function (event) {
          var _this3 = this;

          _this.wrapBlock.classList.remove('changed');

          _this.wrapBlock.classList.add('active');

          forEachArr(items, function (value) {
            if (_this3.value.length > 0 && value.dataset.search.search(new RegExp(_this3.value.toLowerCase(), 'i')) !== 0) {
              value.style.display = 'none';
            } else {
              value.style.display = 'block';
            }
          });

          if (event.which === 13) {
            var li = _this.countryList.querySelector('li[data-search^="' + this.value.toLowerCase() + '"]');

            if (li) {
              li.click();
            }
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

              _this.phoneInput.removeAttribute('disabled');
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

              _this.phoneInput.removeAttribute('disabled');
            }

            if (_this.options.flagInInput) {
              _this.countryFlagsBlock.innerHTML = '<span class="cntr-flag cntr-flag-' + this.dataset.code + '"></span>';
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

      var changeIso = function changeIso() {
        var iso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

        if (iso) {
          _this4.currentCountry = iso;
        }

        var hasCurrent = _this4.options.countryAll.find(function (el) {
          return el === _this4.currentCountry;
        }) !== undefined;

        if (!hasCurrent && !_this4.options["delete"] || _this4.options.list && hasCurrent) {
          _this4.wrapBlock.classList.add('changed');

          _this4.selector.classList.add(_this4.className + '_check');

          _this4._checkGeo();
        }
      };

      if (this.currentCountry === undefined || this.currentCountry === '') {
        if (this.options.cookies && cookies.get('iso')) {
          changeIso(cookies.get('iso'));
        } else if (window.sessionStorage && sessionStorage.getItem('iso')) {
          changeIso(sessionStorage.getItem('iso'));
        } else {
          var Http = new XMLHttpRequest();

          Http.onreadystatechange = function () {
            if (Http.status === 200 && Http.readyState === 4) {
              var iso = _this4.options.geo.getIso(JSON.parse(Http.responseText));

              if (_this4.options.cookies) {
                cookies.set('iso', iso.toLowerCase(), 7);
              } else {
                sessionStorage.setItem('iso', iso.toLowerCase());
              }

              changeIso(iso.toLowerCase());
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
      }
    }
  }, {
    key: "_checkGeo",
    value: function _checkGeo() {
      if (this.options.flagInInput) {
        this.countryFlagsBlock.innerHTML = '<span class="' + this.className + '-flag ' + this.className + '-flag-' + this.currentCountry + '"></span>';

        this._changeValue(this.selector, 'phone');

        this._changeValue(this.countryInput, 'name');

        if (this.options.select) {
          var li = this.countryList.querySelector('li[data-code="' + this.currentCountry + '"]');

          if (li) {
            this.selector.innerText = li.dataset.name;
          }

          if (this.phoneInput) {
            this._changeValue(this.phoneInput, 'phone');
          }
        }
      } else if (this.options.search) {
        this._changeValue(this.selector, 'name');

        if (this.phoneInput) {
          this._changeValue(this.phoneInput, 'phone');
        }
      } else if (this.options.select) {
        var _li = this.countryList.querySelector('li[data-code="' + this.currentCountry + '"]');

        if (_li) {
          this.selector.innerText = _li.dataset.name;
        }

        this._changeValue(this.countryInput, 'name');

        if (this.phoneInput) {
          this._changeValue(this.phoneInput, 'phone');
        }
      } else {
        this._changeValue(this.selector, 'phone');

        this._changeValue(this.countryInput, 'name');
      }
    }
  }, {
    key: "_changeValue",
    value: function _changeValue(element, attribute) {
      var li = this.countryList.querySelector('li[data-code="' + this.currentCountry + '"]');

      if (li) {
        element.value = li.dataset[attribute];
      }

      if (attribute === 'phone' && element.value !== undefined && element.value !== '' && element.value.length > 1) {
        element.classList.add('valid');
        element.removeAttribute('disabled');

        if (li) {
          element.dataset.code = li.dataset[attribute];
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
      var _ref2 = [element.scrollTop, 0, 20],
          start = _ref2[0],
          currentTime = _ref2[1],
          increment = _ref2[2];
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
    throw Error('CountryList: Didn\'t find selector');
  } else if (selector.length > 1) {
    throw Error("CountryList: Please use one one selector, not more, in one connection\n        You use " + selector.length + ' selectors');
  }
}

function forEachObj(obj, callback) {
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
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

  if (t < 1) {
    return c / 2 * t * t + b;
  }

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

var cookies = {
  set: function set(name, value, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  },
  get: function get(name) {
    var matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[]\\\/+^])/g, '\\$1') + '=([^;]*)'));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/sass/countryList.sass":
/*!***********************************!*\
  !*** ./src/sass/countryList.sass ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/main.sass":
/*!****************************!*\
  !*** ./src/sass/main.sass ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**************************************************************************************!*\
  !*** multi ./src/js/countryList.js ./src/sass/countryList.sass ./src/sass/main.sass ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Admin\Desktop\my\countryList\src\js\countryList.js */"./src/js/countryList.js");
__webpack_require__(/*! C:\Users\Admin\Desktop\my\countryList\src\sass\countryList.sass */"./src/sass/countryList.sass");
module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\my\countryList\src\sass\main.sass */"./src/sass/main.sass");


/***/ })

/******/ });