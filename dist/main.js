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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./alunosComMediaEStatus.js":
/*!**********************************!*\
  !*** ./alunosComMediaEStatus.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar listaAlunos = [{\n  nome: \"Jonas\",\n  notas: [1, 4, 10, 8]\n}, {\n  nome: \"Adam\",\n  notas: [10, 5, 6, 8]\n}, {\n  nome: \"Marta\",\n  notas: [7, 7, 8, 8]\n}];\n\nfunction soma() {\n  var listaNumeros = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  return listaNumeros.reduce(function (acumulado, numeroAtual) {\n    return acumulado + numeroAtual;\n  });\n}\n\nfunction calcularMedia() {\n  var listaNotas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var quantidadeElementos = listaNotas.length;\n  var media = soma(listaNotas) / quantidadeElementos;\n  return media;\n}\n\nfunction definirStatus() {\n  var media = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  return media < 7 ? \"reprovado\" : \"aprovado\";\n}\n\nvar listaAlunosComMediaEStatus = function listaAlunosComMediaEStatus() {\n  return listaAlunos.map(function (aluno) {\n    var media = calcularMedia(aluno.notas);\n    var status = definirStatus(media);\n    var alunoComMediaEStatus = {\n      nome: aluno.nome,\n      media: media,\n      status: status\n    };\n    return alunoComMediaEStatus;\n  });\n};\n\nvar listaAlunosFinal = listaAlunosComMediaEStatus();\n/* harmony default export */ __webpack_exports__[\"default\"] = (listaAlunosFinal);\n\n//# sourceURL=webpack:///./alunosComMediaEStatus.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/css/reset.css */ \"./src/css/reset.css\");\n/* harmony import */ var _src_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _src_components_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/components/Table */ \"./src/components/Table.js\");\n/* harmony import */ var _alunosComMediaEStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alunosComMediaEStatus */ \"./alunosComMediaEStatus.js\");\n\n\n\n\n\nvar app = document.querySelector(\"#app\");\napp.innerHTML = Object(_src_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nObject(_src_components_Table__WEBPACK_IMPORTED_MODULE_3__[\"Table\"])(app, _alunosComMediaEStatus__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"*{\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  font-family: 'Roboto', sans-serif;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"#app{\\n  width: 100%;\\n  height: 100%;\\n  padding: 0 0 30px;\\n}\\n\\n.app-header {\\n  background-color: #000;\\n  display: flex;\\n  place-content: center;\\n  padding: 16px 0;\\n}\\n\\n.app-header img {\\n  width: 120px;\\n}\\n\\n.table-alunos_wrapper {\\n  padding: 32px 90px;\\n}\\n\\n.table-alunos_wrapper table {\\n  width: 100%;\\n  border-collapse: collapse;\\n}\\n\\ntr, td {\\n  border: solid 1px #dddddd;\\n  padding: 8px;\\n}\\n\\ntr:nth-child(odd) {\\n  background-color: #f4f4f4;\\n}\\n\\n.td-head {\\n  text-transform: uppercase;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/estartandodevs.png":
/*!***************************************!*\
  !*** ./src/assets/estartandodevs.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/png;base64,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\");\n\n//# sourceURL=webpack:///./src/assets/estartandodevs.png?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var _assets_estartandodevs_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/estartandodevs.png */ \"./src/assets/estartandodevs.png\");\n\nfunction Header() {\n  return \"\\n    <header class=\\\"app-header\\\">\\n      jonatas\\n      <img\\n        src=\\\"\".concat(_assets_estartandodevs_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \"\\\"\\n        alt=\\\"estartandodevs\\\"\\n      />\\n    </header>\\n  \");\n}\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/components/Table.js":
/*!*********************************!*\
  !*** ./src/components/Table.js ***!
  \*********************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Table\", function() { return Table; });\nfunction createTd(dataTableTd) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';\n  var td = document.createElement('td');\n  td.classList.add(\"td-\".concat(type));\n  td.textContent = dataTableTd;\n  return td;\n}\n\nfunction createTr(dataTableTr) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';\n  var tr = document.createElement('tr');\n\n  for (var dataTd in dataTableTr) {\n    var td = createTd(dataTableTr[dataTd], type);\n    tr.appendChild(td);\n  }\n\n  return tr;\n}\n\nfunction Table(reference, dataTable) {\n  var tableAlunos = document.createElement('table', {\n    \"class\": '.table-alunos'\n  });\n  var keys = Object.keys(dataTable[0]);\n  var tHead = createTr(keys, 'head');\n  tableAlunos.appendChild(tHead);\n  dataTable.map(function (dataTableBody) {\n    var values = Object.values(dataTableBody);\n    var tBody = createTr(values);\n    tableAlunos.appendChild(tBody);\n  });\n  var container = document.createElement('div');\n  container.classList.add('table-alunos_wrapper');\n  container.appendChild(tableAlunos);\n  reference.append(container);\n}\n\n//# sourceURL=webpack:///./src/components/Table.js?");

/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/reset.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/css/reset.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ })

/******/ });