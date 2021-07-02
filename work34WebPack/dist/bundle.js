/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var myApp;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/content.js":
/*!***************************!*\
  !*** ./src/js/content.js ***!
  \***************************/
/***/ ((module) => {

eval("var content = 'hello'; // document.write(content)\n\nmodule.exports = content;\n\n//# sourceURL=webpack://myApp/./src/js/content.js?");

/***/ }),

/***/ "./src/js/log.js":
/*!***********************!*\
  !*** ./src/js/log.js ***!
  \***********************/
/***/ ((module) => {

eval("var moduleLog = function () {\n  var log = function log(message) {\n    console.log('log:' + message);\n  };\n\n  return {\n    log: log\n  };\n}();\n\nmodule.exports = moduleLog;\n\n//# sourceURL=webpack://myApp/./src/js/log.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news */ \"./src/js/news.js\");\n/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_news__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar app = function () {\n  console.log('blablabla');\n\n  var getContent = __webpack_require__(/*! ./content */ \"./src/js/content.js\");\n\n  var getModuleLog = __webpack_require__(/*! ./log */ \"./src/js/log.js\");\n\n  var getModuleNews = __webpack_require__(/*! ./news */ \"./src/js/news.js\");\n\n  var news1 = new getModuleNews('Title', '28.06.21', 'Lorem20dsafadsfdsa adfsdfds wefdsfsd');\n  news1.print();\n  getModuleLog.log(getContent);\n  console.log(getModuleNews);\n  return {\n    content: getContent,\n    log: getModuleLog\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://myApp/./src/js/main.js?");

/***/ }),

/***/ "./src/js/news.js":
/*!************************!*\
  !*** ./src/js/news.js ***!
  \************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar news = /*#__PURE__*/function () {\n  function News(title, date, content) {\n    _classCallCheck(this, News);\n\n    this.title = title;\n    this.date = date;\n    this.content = content;\n  }\n\n  _createClass(News, [{\n    key: \"print\",\n    value: function print() {\n      document.write(this.title);\n      document.write(this.date);\n      document.write(this.content);\n    }\n  }, {\n    key: \"content\",\n    get: function get() {\n      return this._content;\n    },\n    set: function set(value) {\n      if (value.length < 10) {\n        value = prompt('input text of content');\n      }\n\n      this._content = value;\n    }\n  }]);\n\n  return News;\n}();\n\nmodule.exports = news;\n\n//# sourceURL=webpack://myApp/./src/js/news.js?");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js!./src/css/style.css":
/*!******************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js!./src/css/style.css ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"11a44bf8802345ab32dc086ae5fa8f8a.css\");\n\n//# sourceURL=webpack://myApp/./src/css/style.css?./node_modules/file-loader/dist/cjs.js");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoLinkTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoLinkTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoLinkTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_file_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !!../../node_modules/file-loader/dist/cjs.js!./style.css */ \"./node_modules/file-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n\nvar options = {\"injectType\":\"linkTag\"};\n\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_1___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoLinkTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_file_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_2__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});\n\n//# sourceURL=webpack://myApp/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://myApp/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js":
/*!***************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === \"object\" ? options.attributes : {};\n\n  if (typeof options.attributes.nonce === \"undefined\") {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  var link = document.createElement(\"link\");\n  link.rel = \"stylesheet\";\n  link.href = url;\n  Object.keys(options.attributes).forEach(function (key) {\n    link.setAttribute(key, options.attributes[key]);\n  });\n  options.insert(link);\n  return function (newUrl) {\n    if (typeof newUrl === \"string\") {\n      link.href = newUrl;\n    } else {\n      link.parentNode.removeChild(link);\n    }\n  };\n};\n\n//# sourceURL=webpack://myApp/./node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	myApp = __webpack_exports__;
/******/ 	
/******/ })()
;