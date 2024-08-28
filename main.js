/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dom/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dom/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/Helvetica Bold Condensed/Helvetica Bold Condensed.otf */ \"./assets/fonts/Helvetica Bold Condensed/Helvetica Bold Condensed.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/Inconsolata/Inconsolata-VariableFont_wdth,wght.ttf */ \"./assets/fonts/Inconsolata/Inconsolata-VariableFont_wdth,wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/futura/Futura Heavy font.ttf */ \"./assets/fonts/futura/Futura Heavy font.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: Header;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n@font-face {\n    font-family: Inconsolata;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n@font-face {\n    font-family: futura;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n\n:root {\n    --gray-ship: #D1D2DE;\n    --gray-dot: #BCBDC8;\n    --locked-cell: blue;\n    --gray: #717C96;\n    --red: #FF0055;\n    --soft-blue: #BFDDF9;\n    --light-blue: rgba(97, 198, 255, 0.2);\n    --blue: rgba(97, 198, 255, 0.4);\n    --light-gray: rgba(157, 157, 157, 0.20);\n    --grid-font: rgba(113, 124, 150, 0.7);\n    --grid-enemy-cell: #EBEBEB;\n    --grid-devide: rgba(113, 124, 150, 0.4);\n    --background: #ffffff;\n    --header-background: #f5f5f5;\n    font-size: 40px;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    margin: 0;\n}\n\np {\n    margin: 0;\n}\n\n#header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: .5rem 1rem;\n    background-color: var(--header-background);\n}\n\n.header-text {\n    font-family: Header, sans-serif;\n}\n\n#github {\n    display: flex;\n    align-items: center;\n    gap: 1em;\n    font-family: Inconsolata;\n    font-weight: 350;\n    font-size: 0.5rem;\n}\n\n#github > a > img {\n    width: 35px;\n}\n\n#main {\n    background-color: var(--background);\n    padding: 1rem 5rem;\n    flex-grow: 1;\n}\n\n#game-grid {\n    width: 100%;\n    height: 100%;\n    background-color: var(--grid-devide);\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1px;\n}\n\n#game-grid > div {\n    background-color: var(--background);\n}\n\n.player {\n    padding-right: 5rem;\n}\n\n.enemy {\n    padding-left: 5rem;\n}\n\n.game-panel {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n.game-panel > button,\n.yard > button,\n.round,\nform > button {\n    appearance: none;\n    font-family: futura;\n    font-weight: bold;\n    font-size: .7rem;\n    letter-spacing: .15ch;\n    word-spacing: .5ch;\n    color: var(--background);\n    width: 100%;\n    border: none;\n    border-radius: 8px;\n    padding: 0.5rem 0;\n}\n\n.game-panel > button {\n    margin-left: .4rem;\n    width: 95%;\n}\n\n.round {\n    width: 200px;\n}\n\n.player > button,\n.yard > button,\n.round.player-round,\ndialog.player-won button {\n    background-color: var(--red);\n}\n\n.yard > button {\n    align-self: center;\n    justify-self: center;\n    width: 300px;\n    margin-left: 90px;\n}\n\n.enemy > button,\ndialog.enemy-won button {\n    background-color: var(--gray);\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    align-items: center;\n    justify-items: center;\n    width: 100%;\n    gap: 4px;\n}\n\n.board > * {\n    font-family: futura;\n    font-weight: bold;\n    font-size: .7rem;\n    color: var(--grid-font);\n}\n\n.cell {\n    width: 100%;\n    aspect-ratio: 1/1;\n    border-radius: 8px;\n}\n\n.player .cell {\n    background-color: var(--light-blue);\n}\n\n.player .cell.hover {\n    background-color: var(--blue);\n}\n\n.player .cell.dragover {\n    background-color: var(--soft-blue);\n}\n\n.cell.miss,\n.enemy .cell.miss {\n    background-color: var(--grid-devide);\n}\n\n.enemy .cell {\n    background-color: var(--grid-enemy-cell);\n}\n\n.enemy .cell.hover {\n    background-color: var(--grid-devide);\n}\n\n.player .cell.invalid,\n.cell.hit,\n.enemy .cell.hit {\n    background-color: var(--red);\n}\n\n.yard {\n    width: 100%;\n    height: 100px;\n    display: flex;\n}\n\n.yard > .name {\n    padding-top: 10px;\n    width: 50px;\n    height: 100%;\n    font-family: futura;\n    font-size: .5rem;\n    color: var(--grid-font);\n    transform: rotate(-90deg);\n    transform-origin: right;\n    display: inline-block;\n    margin: 0;\n}\n\n.ships {\n    display: flex;\n    flex-wrap: wrap;\n    gap: .5rem;\n}\n\n.ship-wrap {\n    position: relative;\n    background-color: var(--gray-ship);\n    will-change: transform;\n}\n\n.ship-wrap {\n    height: 35px;\n}\n\n.ship-wrap.locked.vertical {\n    width: 35px;\n}\n\n.ship-wrap > .ship {\n    position: absolute;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.ship-wrap > .ship {\n    left: -8px;\n    top: 10px;\n}\n\n.ship-wrap.locked.vertical > .ship {\n    left: 10px;\n    top: -8px;\n}\n\n.ship-dot {\n    border-radius: 9999px;\n    background-color: var(--gray-dot);\n    width: 15px;\n    aspect-ratio: 1/1;\n}\n\n.ship-wrap.two {\n    width: 95px;\n    border-radius: 50px;\n    border-top-right-radius: 120px 50px;\n    border-bottom-right-radius: 120px 50px;\n}\n\n.ship-wrap.two.locked.vertical {\n    height: 95px;\n    border-radius: 50px;\n    border-bottom-left-radius: 50px 120px;\n    border-bottom-right-radius: 50px 120px;\n}\n\n.ship-wrap.two > .ship {\n    grid-template-columns: repeat(2, 50px);\n}\n\n.ship-wrap.two.locked.vertical > .ship {\n    grid-template-rows: repeat(2, 50px);\n    grid-template-columns: 1fr\n}\n\n.ship-wrap.three-a {\n    width: 142px;\n    border-radius: 50px;\n}\n\n.ship-wrap.three-a.locked.vertical {\n    height: 142px;\n    border-radius: 50px;\n}\n\n.ship-wrap.three-b {\n    width: 142px;\n    border-radius: 50px;\n    border-top-right-radius: 120px 50px;\n    border-bottom-right-radius: 120px 50px;\n}\n\n.ship-wrap.three-b.locked.vertical {\n    height: 142px;\n    border-radius: 50px;\n    border-bottom-left-radius: 50px 120px;\n    border-bottom-right-radius: 50px 120px;\n}\n\n.ship-wrap.three-a > .ship,\n.ship-wrap.three-b > .ship {\n    grid-template-columns: repeat(3, 50px);\n}\n\n\n.ship-wrap.three-a.locked.vertical > .ship,\n.ship-wrap.three-b.locked.vertical > .ship {\n    grid-template-rows: repeat(3, 50px);\n    grid-template-columns: 1fr\n}\n\n.ship-wrap.four {\n    width: 190px;\n    border-radius: 50px;\n    border-top-right-radius: 120px 50px;\n    border-bottom-right-radius: 120px 50px;\n}\n\n.ship-wrap.four.locked.vertical {\n    height: 190px;\n    border-radius: 50px;\n    border-bottom-left-radius: 50px 120px;\n    border-bottom-right-radius: 50px 120px;\n}\n\n.ship-wrap.four > .ship {\n    grid-template-columns: repeat(4, 50px);\n}\n\n.ship-wrap.four.locked.vertical > .ship {\n    grid-template-rows: repeat(4, 50px);\n    grid-template-columns: 1fr\n}\n\n.ship-wrap.five {\n    width: 238px;\n    border-radius: 10px;\n}\n\n.ship-wrap.five.locked.vertical {\n    height: 238px;\n    border-radius: 10px;\n}\n\n.ship-wrap.five > .ship {\n    grid-template-columns: repeat(5, 50px);\n}\n\n.ship-wrap.five.locked.vertical > .ship {\n    grid-template-rows: repeat(5, 50px);\n    grid-template-columns: 1fr\n}\n\n.ship-wrap.locked {\n    position: absolute;\n}\n\n.ship-wrap.sunk {\n    background-color: var(--gray);\n}\n\n.cell.locked {\n    background-color: var(--locked-cell);\n}\n\n.round {\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    transform: translateX(-50%);\n    background-color: var(--gray);\n}\n\ndialog {\n    top: -300px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: .5rem;\n}\n\ndialog.player-won {\n    border-radius: 8px;\n}\n\ndialog > p {\n    font-family: futura;\n    font-size: .9rem;\n}\n\ndialog > form {\n    width: 100%;\n}\n\ndialog > form > button {\n    border: none;\n}\n\ndialog::backdrop {\n    background-color: rgba(0, 0, 0, .35);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/dom/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/dom/styles.css":
/*!****************************!*\
  !*** ./src/dom/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/dom/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/dom/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom/boardDom.js":
/*!*****************************!*\
  !*** ./src/dom/boardDom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BoardDom)\n/* harmony export */ });\nclass BoardDom {\n  board\n\n  sideLength\n\n  enterListener\n\n  constructor(className, enterListener, sideLength, onAttackReceive) {\n    if (new.target === BoardDom) {\n      throw new Error('Cannot instantiate an abstract class.')\n    }\n\n    this.board = document.createElement('div')\n    this.sideLength = sideLength\n    this.enterListener = enterListener\n    this.onAttackReceive = onAttackReceive\n\n    this.board.classList.add('board')\n    const emptyCell = document.createElement('div')\n    this.board.appendChild(emptyCell)\n    this.#addCells(this.board, this.sideLength)\n  }\n\n  getDomElement() {\n    return this.board\n  }\n\n  #addShipCell(boardDom, x, y) {\n    const cell = document.createElement('div')\n    cell.classList.add('cell')\n    cell.addEventListener('dragenter', this.enterListener)\n    cell.addEventListener('dragleave', this.leaveCellEventListener)\n    cell.addEventListener('mouseover', () => {\n      if (this.enabled) cell.classList.add('hover')\n    })\n    cell.addEventListener('mouseout', () => {\n      cell.classList.remove('hover')\n    })\n    cell.addEventListener('click', () => {\n      if (this.enabled) {\n        this.onAttackReceive([x, y])\n      }\n    })\n    cell.dataset.x = x\n    cell.dataset.y = y\n    boardDom.appendChild(cell)\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  #addRowCell(i, boardEnd) {\n    const rowNum = document.createElement('div')\n    rowNum.textContent = String(i)\n    boardEnd.appendChild(rowNum)\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  #addColumnCell(A, i, boardDom) {\n    const colName = document.createElement('div')\n    colName.textContent = String.fromCharCode(A + i)\n    boardDom.appendChild(colName)\n  }\n\n  #addCells(boardDom, sideLength) {\n    const A = 65\n    for (let i = 0; i < sideLength; i++) {\n      this.#addColumnCell(A, i, boardDom)\n    }\n    for (let i = 0; i < sideLength; i++) {\n      this.#addRowCell(i + 1, boardDom)\n      for (let j = 0; j < sideLength; j++) {\n        this.#addShipCell(boardDom, j, i)\n      }\n    }\n  }\n\n  markHit([x, y]) {\n    const cell = this.getCell([x, y])\n    cell.classList.add('hit')\n  }\n\n  markCellsMissed(coords) {\n    if (coords) {\n      coords.forEach(position => {\n        this.markMiss(position)\n      })\n    }\n  }\n\n  markMiss([x, y]) {\n    const cell = this.getCell([x, y])\n    cell.classList.add('miss')\n  }\n\n  getCell([x, y]) {\n    return this.board.querySelector(`[data-x=\"${x}\"][data-y=\"${y}\"]`)\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  leaveCellEventListener() {\n    const cells = document.querySelectorAll(\n      '.game-panel.player > .board > .cell'\n    )\n    cells.forEach(cell => {\n      cell.classList.remove('dragover')\n      cell.classList.remove('invalid')\n    })\n  }\n\n  markLocked(coords) {\n    if (!coords) {\n      return\n    }\n    coords.forEach(position => {\n      this.getCell(position).classList.add('locked')\n    })\n  }\n\n  enable() {\n    this.enabled = true\n  }\n\n  disable() {\n    this.enabled = false\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/dom/boardDom.js?");

/***/ }),

/***/ "./src/dom/enemyBoardDom.js":
/*!**********************************!*\
  !*** ./src/dom/enemyBoardDom.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EnemyBoardDom)\n/* harmony export */ });\n/* harmony import */ var _boardDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardDom */ \"./src/dom/boardDom.js\");\n\n\nclass EnemyBoardDom extends _boardDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(className, onAttackReceive, sideLen) {\n    super(className, () => {}, sideLen, onAttackReceive)\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/dom/enemyBoardDom.js?");

/***/ }),

/***/ "./src/dom/enemyShipyardDom.js":
/*!*************************************!*\
  !*** ./src/dom/enemyShipyardDom.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EnemyShipyardDom)\n/* harmony export */ });\n/* harmony import */ var _shipyardDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipyardDom */ \"./src/dom/shipyardDom.js\");\n\n\nclass EnemyShipyardDom extends _shipyardDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(dropListener, relocateShip, changeShipOrientation) {\n    super(dropListener, relocateShip, changeShipOrientation)\n    this.shipyard = this.createShipyard('GRAVEYARD', 'enemy')\n  }\n\n  markShipsAsVertical(ids) {\n    if (ids) {\n      ids.forEach(id => {\n        const ship = this.shipyard.querySelector(\n          `[data-ship-id*=\"${id}\"]`\n        ).parentElement\n        ship.classList.add('vertical')\n      })\n    }\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/dom/enemyShipyardDom.js?");

/***/ }),

/***/ "./src/dom/mainPageDom.js":
/*!********************************!*\
  !*** ./src/dom/mainPageDom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addHeader: () => (/* binding */ addHeader),\n/* harmony export */   addMain: () => (/* binding */ addMain),\n/* harmony export */   showEnemyWon: () => (/* binding */ showEnemyWon),\n/* harmony export */   showGraveyard: () => (/* binding */ showGraveyard),\n/* harmony export */   showPlayerWon: () => (/* binding */ showPlayerWon),\n/* harmony export */   showRoundButton: () => (/* binding */ showRoundButton),\n/* harmony export */   toggleRoundButton: () => (/* binding */ toggleRoundButton)\n/* harmony export */ });\n/* harmony import */ var _assets_img_github_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/img/github.png */ \"./assets/img/github.png\");\n\n\n// Utility function to create an element with optional classes and content\nconst createElement = (\n  tag,\n  { classes = [], content = '', attributes = {} } = {}\n) => {\n  const element = document.createElement(tag)\n  if (classes.length) element.classList.add(...classes)\n  if (content) element.textContent = content\n  Object.keys(attributes).forEach(attr =>\n    element.setAttribute(attr, attributes[attr])\n  )\n  return element\n}\n\nconst addHeader = () => {\n  const header = document.querySelector('#header')\n  if (!header) return\n\n  const battleship = createElement('p', {\n    classes: ['header-text'],\n    content: 'BATTLESHIP'\n  })\n\n  const github = createElement('div', { attributes: { id: 'github' } })\n  const createdBy = createElement('p', { content: 'Created by Namlev1 @ 2024' })\n\n  const githubLink = createElement('a', {\n    attributes: {\n      href: 'https://github.com/Namlev1',\n      target: '_blank',\n      rel: 'noopener noreferrer'\n    }\n  })\n\n  const githubIcon = createElement('img', {\n    attributes: {\n      src: _assets_img_github_png__WEBPACK_IMPORTED_MODULE_0__,\n      alt: 'Github Icon'\n    }\n  })\n\n  githubLink.appendChild(githubIcon)\n  github.append(createdBy, githubLink)\n  header.append(battleship, github)\n}\n\nconst addMain = (playerDom, enemyDom) => {\n  const main = document.querySelector('#main')\n  if (!main) return\n\n  const gameGrid = createElement('div', { attributes: { id: 'game-grid' } })\n\n  const createGamePanel = (dom, label, panelClass) => {\n    const panel = createElement('div', { classes: ['game-panel', panelClass] })\n    const banner = createElement('button', {\n      content: label,\n      attributes: { disabled: true }\n    })\n    panel.append(banner, dom.boardDom.getDomElement())\n    if (panelClass === 'player') {\n      panel.appendChild(dom.shipyardDom.getDomElement())\n    }\n    return panel\n  }\n\n  const playerDiv = createGamePanel(playerDom, 'YOUR FLEET', 'player')\n  const enemyDiv = createGamePanel(enemyDom, 'OPPONENT', 'enemy')\n\n  gameGrid.append(playerDiv, enemyDiv)\n  main.appendChild(gameGrid)\n}\n\nconst showGraveyard = dom => {\n  const enemyPanel = document.querySelector('.game-panel.enemy')\n  enemyPanel.append(dom)\n}\n\nconst showRoundButton = () => {\n  const main = document.querySelector('#main')\n  if (!main) return\n\n  const button = createElement('button', {\n    classes: ['round', 'player-round'],\n    content: 'Player round'\n  })\n  main.appendChild(button)\n}\n\nconst toggleRoundButton = (() => {\n  let isPlayerRound = true\n\n  return () => {\n    const button = document.querySelector('.round')\n    if (!button) return\n\n    isPlayerRound = !isPlayerRound\n    button.textContent = isPlayerRound ? 'Player round' : 'Enemy round...'\n    button.classList.toggle('player-round', isPlayerRound)\n  }\n})()\n\nconst showDialog = (className, text) => {\n  const body = document.querySelector('body')\n  if (!body) return\n\n  const dialog = createElement('dialog', { classes: [className] })\n  const message = createElement('p', { content: text })\n\n  const form = createElement('form', { attributes: { method: 'dialog' } })\n  const button = createElement('button', { content: 'Play again' })\n\n  button.addEventListener('click', () => window.location.reload())\n\n  form.appendChild(button)\n  dialog.append(message, form)\n  body.appendChild(dialog)\n  dialog.showModal()\n  dialog.focus()\n}\n\nconst showEnemyWon = () => showDialog('enemy-won', 'Enemy has won!')\nconst showPlayerWon = () => showDialog('player-won', 'You have won!')\n\n\n//# sourceURL=webpack://todo/./src/dom/mainPageDom.js?");

/***/ }),

/***/ "./src/dom/playerBoardDom.js":
/*!***********************************!*\
  !*** ./src/dom/playerBoardDom.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PlayerBoardDom)\n/* harmony export */ });\n/* harmony import */ var _boardDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardDom */ \"./src/dom/boardDom.js\");\n\n\nclass PlayerBoardDom extends _boardDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(className, dropShipIntoCellEventListener, sideLen) {\n    super(className, dropShipIntoCellEventListener, sideLen, () => {})\n  }\n\n  clearAllCells() {\n    const cells = this.board.querySelectorAll('.cell')\n    cells.forEach(cell => {\n      cell.classList.remove('locked')\n    })\n  }\n\n  clearCells(coords) {\n    coords.forEach(position => {\n      this.getCell(position).classList.remove('locked')\n    })\n  }\n\n  placeShipByCoords(coords, shipDom) {\n    this.placeShip(this.getCell(coords), shipDom)\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  placeShip(cell, shipDom) {\n    const rect = cell.getBoundingClientRect()\n    const x = Math.floor(rect.left) + 6\n    const y = Math.floor(rect.top) + 6\n\n    shipDom.classList.add('locked')\n    // eslint-disable-next-line no-param-reassign\n    shipDom.style.top = `${y}px`\n    // eslint-disable-next-line no-param-reassign\n    shipDom.style.left = `${x}px`\n    // eslint-disable-next-line no-param-reassign\n    shipDom.dataset.x = cell.dataset.x\n    // eslint-disable-next-line no-param-reassign\n    shipDom.dataset.y = cell.dataset.y\n  }\n\n  markShipCellsAsInvalidHorizontally(x, y, shipLen) {\n    const start = x\n    const end = x + shipLen\n    for (let i = start; i < end; i++) {\n      this.getCell([i, y]).classList.add('invalid')\n    }\n  }\n\n  markShipCellsAsInvalidVertically(x, y, shipLen) {\n    const start = y\n    const end = y + shipLen\n    for (let i = start; i < end; i++) {\n      this.getCell([x, i]).classList.add('invalid')\n    }\n  }\n\n  markCellsToTheRightBorderAsInvalid(x, y) {\n    for (let i = x; i < this.sideLength; i++) {\n      this.getCell([i, y]).classList.add('invalid')\n    }\n  }\n\n  markCellsToTheBottomBorderAsInvalid(x, y) {\n    for (let i = y; i < this.sideLength; i++) {\n      this.getCell([x, i]).classList.add('invalid')\n    }\n  }\n\n  markShipCellsAsValidHorizontally(shipLen, x, y) {\n    for (let i = 0; i < shipLen; i++) {\n      this.getCell([x + i, y]).classList.add('dragover')\n    }\n  }\n\n  markShipCellsAsValidVertically(shipLen, x, y) {\n    for (let i = 0; i < shipLen; i++) {\n      this.getCell([x, y + i]).classList.add('dragover')\n    }\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/dom/playerBoardDom.js?");

/***/ }),

/***/ "./src/dom/playerShipyardDom.js":
/*!**************************************!*\
  !*** ./src/dom/playerShipyardDom.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PlayerShipyardDom)\n/* harmony export */ });\n/* harmony import */ var _shipyardDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipyardDom */ \"./src/dom/shipyardDom.js\");\n\n\nclass PlayerShipyardDom extends _shipyardDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  playButton\n\n  constructor(dropListener, relocateShip, changeShipOrientation) {\n    super(dropListener, relocateShip, changeShipOrientation)\n    this.shipyard = this.createShipyard('SHIPYARD', 'player')\n  }\n\n  showPlayButton(callback) {\n    if (!this.playButton) {\n      this.playButton = document.createElement('button')\n      this.playButton.textContent = 'PLAY'\n      this.playButton.addEventListener('click', callback)\n      this.shipyard.appendChild(this.playButton)\n    }\n  }\n\n  hidePlayButton() {\n    if (this.playButton) {\n      this.playButton.remove()\n      this.playButton = undefined\n    }\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/dom/playerShipyardDom.js?");

/***/ }),

/***/ "./src/dom/shipyardDom.js":
/*!********************************!*\
  !*** ./src/dom/shipyardDom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ShipyardDom {\n  shipyard\n\n  constructor(dropListener, relocateShip, changeShipOrientation) {\n    if (new.target === ShipyardDom) {\n      throw new Error('Cannot instantiate an abstract class.')\n    }\n    this.dropListener = dropListener\n    this.relocateShip = relocateShip\n    this.changeShipOrientation = changeShipOrientation\n    this.isGameStarted = false\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  #addShipDots(ship, count) {\n    while (count) {\n      const dot = document.createElement('div')\n      dot.classList.add('ship-dot')\n      ship.appendChild(dot)\n      count--\n    }\n  }\n\n  #resetShip(shipWrap) {\n    shipWrap.classList.remove('locked')\n    shipWrap.classList.remove('vertical')\n    shipWrap.removeAttribute('style')\n    shipWrap.removeAttribute('data-x')\n    shipWrap.removeAttribute('data-y')\n  }\n\n  #createShip(className, shipId, shipLen) {\n    const shipWrap = document.createElement('div')\n    shipWrap.classList.add('ship-wrap', className)\n    shipWrap.draggable = true\n    shipWrap.addEventListener('dragstart', () => {\n      if (this.isGameStarted) {\n        return\n      }\n      if (shipWrap.classList.contains('locked')) {\n        const { x, y } = shipWrap.dataset\n        const isVertical = shipWrap.classList.contains('vertical')\n        this.relocateShip([x, y], shipLen, isVertical)\n      }\n      shipWrap.classList.add('dragging')\n    })\n    shipWrap.addEventListener('dragend', () => {\n      if (this.isGameStarted) {\n        return\n      }\n      const cell = document.querySelector('.cell:hover')\n      if (cell) {\n        this.dropListener(shipWrap, cell)\n      } else {\n        this.#resetShip(shipWrap)\n      }\n      shipWrap.classList.remove('dragging')\n    })\n    shipWrap.addEventListener('click', () => {\n      if (this.isGameStarted) {\n        return\n      }\n      if (shipWrap.classList.contains('locked')) {\n        this.changeShipOrientation(shipWrap)\n      }\n    })\n\n    const shipField = document.createElement('div')\n    shipField.classList.add('ship')\n    shipField.dataset.shipId = shipId\n    this.#addShipDots(shipField, shipLen)\n    shipWrap.appendChild(shipField)\n    return shipWrap\n  }\n\n  #createShips(className) {\n    const fiveShip = this.#createShip('five', `5 ${className}`, 5)\n    const fourShip = this.#createShip('four', `4 ${className}`, 4)\n    const threeShipA = this.#createShip('three-a', `3a ${className}`, 3)\n    const threeShipB = this.#createShip('three-b', `3b ${className}`, 3)\n    const twoShip = this.#createShip('two', `2 ${className}`, 2)\n\n    const shipsDiv = document.createElement('div')\n    shipsDiv.classList.add('ships')\n    shipsDiv.appendChild(fourShip)\n    shipsDiv.appendChild(threeShipA)\n    shipsDiv.appendChild(twoShip)\n    shipsDiv.appendChild(fiveShip)\n    shipsDiv.appendChild(threeShipB)\n\n    return shipsDiv\n  }\n\n  createShipyard(name, id) {\n    const shipyard = document.createElement('div')\n    shipyard.classList.add('yard')\n\n    const header = document.createElement('p')\n    header.classList.add('name')\n    header.textContent = name\n\n    const ships = this.#createShips(id)\n\n    shipyard.appendChild(header)\n    shipyard.append(ships)\n    return shipyard\n  }\n\n  getDomElement() {\n    return this.shipyard\n  }\n\n  markSunk(shipId) {\n    const shipDom = this.shipyard.querySelector(\n      `[data-ship-id*=\"${shipId}\"]`\n    ).parentElement\n    shipDom.classList.add('sunk')\n    return shipDom.classList.contains('vertical')\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  toggleVertical(shipDom) {\n    shipDom.classList.toggle('vertical')\n  }\n\n  disableDragging() {\n    const ships = document.querySelectorAll('.ship-wrap')\n    ships.forEach(ship => {\n      ship.draggable = false\n    })\n    this.isGameStarted = true\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipyardDom);\n\n\n//# sourceURL=webpack://todo/./src/dom/shipyardDom.js?");

/***/ }),

/***/ "./src/dom/utils.js":
/*!**************************!*\
  !*** ./src/dom/utils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDraggedShipDom: () => (/* binding */ getDraggedShipDom),\n/* harmony export */   getDraggedShipLength: () => (/* binding */ getDraggedShipLength)\n/* harmony export */ });\nfunction getDraggedShipLength() {\n  const ship = document.querySelector('.dragging').firstChild\n  const length = Number.parseInt(ship.dataset.shipId, 10)\n  return length\n}\n\nfunction getDraggedShipDom() {\n  return document.querySelector('.dragging')\n}\n\n//# sourceURL=webpack://todo/./src/dom/utils.js?");

/***/ }),

/***/ "./src/game/board.js":
/*!***************************!*\
  !*** ./src/game/board.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _logic_boardLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/boardLogic */ \"./src/logic/boardLogic.js\");\n\n\nclass Board {\n  boardDom\n\n  boardLogic\n\n  shipyardDom\n\n  constructor() {\n    if (new.target === Board) {\n      throw new Error('Cannot instantiate an abstract class.')\n    }\n    this.boardLogic = new _logic_boardLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n  }\n\n  get sideLength() {\n    return this.boardLogic.sideLength\n  }\n\n  startGame() {\n    this.shipyardDom.disableDragging()\n  }\n\n  isAvailableToHit([x, y]) {\n    return this.boardLogic.isAvailableToHit([x, y])\n  }\n\n  isAllShipsSunk() {\n    return this.boardLogic.isAllShipsSunk()\n  }\n\n  receiveAttack([x, y]) {\n    const { isHit, isSunk, shipId } = this.boardLogic.receiveAttack([x, y])\n    if (isHit) {\n      this.boardDom.markHit([x, y])\n      if (isSunk) {\n        const isVertical = this.shipyardDom.markSunk(shipId)\n        const shipLen = Number.parseInt(shipId, 10)\n        const affectedCells = this.boardLogic.markSurroundingMiss(\n          [x, y],\n          shipLen,\n          isVertical\n        )\n        this.boardDom.markCellsMissed(affectedCells)\n      }\n    } else {\n      this.boardDom.markMiss([x, y])\n    }\n    return isHit\n  }\n\n  enable() {\n    this.boardDom.enable()\n  }\n\n  disable() {\n    this.boardDom.disable()\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/game/board.js?");

/***/ }),

/***/ "./src/game/enemyBoard.js":
/*!********************************!*\
  !*** ./src/game/enemyBoard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EnemyBoard)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/game/board.js\");\n/* harmony import */ var _dom_enemyBoardDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/enemyBoardDom */ \"./src/dom/enemyBoardDom.js\");\n/* harmony import */ var _dom_enemyShipyardDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/enemyShipyardDom */ \"./src/dom/enemyShipyardDom.js\");\n/* harmony import */ var _dom_mainPageDom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/mainPageDom */ \"./src/dom/mainPageDom.js\");\n\n\n\n\n\nclass EnemyBoard extends _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(onAttackReceive) {\n    super()\n    this.boardDom = new _dom_enemyBoardDom__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n      'enemy',\n      onAttackReceive,\n      this.boardLogic.sideLength\n    )\n    this.shipyardDom = new _dom_enemyShipyardDom__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\n  }\n\n  placeRandomly() {\n    const verticalShips = this.boardLogic.placeRandomly()\n    this.shipyardDom.markShipsAsVertical(verticalShips)\n  }\n\n  showGraveyard() {\n    (0,_dom_mainPageDom__WEBPACK_IMPORTED_MODULE_3__.showGraveyard)(this.shipyardDom.getDomElement())\n  }\n\n  clearCellsColor() {\n    this.boardLogic.clearNotShipCells()\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/game/enemyBoard.js?");

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _dom_mainPageDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/mainPageDom */ \"./src/dom/mainPageDom.js\");\n/* harmony import */ var _playerBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerBoard */ \"./src/game/playerBoard.js\");\n/* harmony import */ var _enemyBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemyBoard */ \"./src/game/enemyBoard.js\");\n\n\n\n\nclass Game {\n  constructor() {\n    this.playerBoard = new _playerBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.onAllShipsPlaced.bind(this))\n    this.enemyBoard = new _enemyBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.handlePlayerAttack.bind(this))\n\n    this.initializeBoards()\n  }\n\n  initializeBoards() {\n    this.playerBoard.enable()\n    this.enemyBoard.disable()\n  }\n\n  handlePlayerAttack([x, y]) {\n    if (!this.enemyBoard.isAvailableToHit([x, y])) return\n\n    const isHit = this.enemyBoard.receiveAttack([x, y])\n    if (isHit) {\n      if (this.enemyBoard.isAllShipsSunk()) {\n        (0,_dom_mainPageDom__WEBPACK_IMPORTED_MODULE_0__.showPlayerWon)()\n      }\n      return\n    }\n\n    this.switchToEnemyTurn()\n  }\n\n  handleEnemyAttack([x, y]) {\n    const isHit = this.playerBoard.receiveAttack([x, y])\n    if (isHit) {\n      if (this.playerBoard.isAllShipsSunk()) {\n        (0,_dom_mainPageDom__WEBPACK_IMPORTED_MODULE_0__.showEnemyWon)()\n        return\n      }\n      this.attackRandomPlayerField()\n    } else {\n      this.switchToPlayerTurn()\n    }\n  }\n\n  onAllShipsPlaced() {\n    this.startGame()\n  }\n\n  startGame() {\n    this.playerBoard.hidePlayButton()\n    this.playerBoard.clearCellsColor()\n    this.playerBoard.disable()\n    this.enemyBoard.showGraveyard()\n    this.enemyBoard.placeRandomly()\n    this.enemyBoard.clearCellsColor()\n    this.enemyBoard.enable()\n\n    this.setGameStarted()\n    ;(0,_dom_mainPageDom__WEBPACK_IMPORTED_MODULE_0__.showRoundButton)()\n  }\n\n  attackRandomPlayerField() {\n    setTimeout(() => {\n      const attackCoords = this.getRandomCoords()\n      this.handleEnemyAttack(attackCoords)\n    }, 1000)\n  }\n\n  getRandomCoords() {\n    let coords\n    do {\n      const x = Math.floor(Math.random() * this.enemyBoard.sideLength)\n      const y = Math.floor(Math.random() * this.enemyBoard.sideLength)\n      coords = [x, y]\n    } while (!this.playerBoard.isAvailableToHit(coords))\n    return coords\n  }\n\n  switchToEnemyTurn() {\n    this.enemyBoard.disable()\n    this.playerBoard.enable()\n    this.attackRandomPlayerField()\n    ;(0,_dom_mainPageDom__WEBPACK_IMPORTED_MODULE_0__.toggleRoundButton)()\n  }\n\n  switchToPlayerTurn() {\n    this.playerBoard.disable()\n    this.enemyBoard.enable()\n    ;(0,_dom_mainPageDom__WEBPACK_IMPORTED_MODULE_0__.toggleRoundButton)()\n  }\n\n  setGameStarted() {\n    this.playerBoard.startGame()\n    this.enemyBoard.startGame()\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/game/game.js?");

/***/ }),

/***/ "./src/game/playerBoard.js":
/*!*********************************!*\
  !*** ./src/game/playerBoard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PlayerBoard)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/game/board.js\");\n/* harmony import */ var _dom_playerBoardDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/playerBoardDom */ \"./src/dom/playerBoardDom.js\");\n/* harmony import */ var _dom_playerShipyardDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/playerShipyardDom */ \"./src/dom/playerShipyardDom.js\");\n/* harmony import */ var _dom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/utils */ \"./src/dom/utils.js\");\n\n\n\n\n\nclass PlayerBoard extends _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(onAllShipsPlaced) {\n    super(onAllShipsPlaced)\n    this.boardName = 'player'\n    this.boardDom = new _dom_playerBoardDom__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n      this.boardName,\n      this.dragShipIntoCellEventListener.bind(this),\n      this.boardLogic.sideLength\n    )\n    this.shipyardDom = new _dom_playerShipyardDom__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n      this.placeShipIfValid.bind(this),\n      this.relocateShip.bind(this),\n      this.changeShipOrientation.bind(this)\n    )\n    this.onAllShipsPlaced = onAllShipsPlaced\n  }\n\n  clearCellsColor() {\n    this.boardDom.clearAllCells()\n    this.boardLogic.clearNotShipCells()\n  }\n\n  dragShipIntoCellEventListener(e) {\n    const shipLen = (0,_dom_utils__WEBPACK_IMPORTED_MODULE_3__.getDraggedShipLength)()\n    const shipDom = (0,_dom_utils__WEBPACK_IMPORTED_MODULE_3__.getDraggedShipDom)()\n    const x = Number(e.target.dataset.x)\n    const y = Number(e.target.dataset.y)\n    const isVertical = shipDom.classList.contains('vertical')\n\n    if (!isVertical) {\n      if (!this.boardLogic.willShipFitHorizontally(shipLen, x)) {\n        this.boardDom.markCellsToTheRightBorderAsInvalid(x, y)\n      } else if (!this.boardLogic.isPlaceAvailableHorizontally(shipLen, x, y)) {\n        this.boardDom.markShipCellsAsInvalidHorizontally(x, y, shipLen)\n      } else {\n        this.boardDom.markShipCellsAsValidHorizontally(shipLen, x, y)\n      }\n    } else {\n      if (!this.boardLogic.willShipFitVertically(shipLen, y)) {\n        this.boardDom.markCellsToTheBottomBorderAsInvalid(x, y)\n      } else if (!this.boardLogic.isPlaceAvailableVertically(shipLen, x, y)) {\n        this.boardDom.markShipCellsAsInvalidVertically(x, y, shipLen)\n      } else {\n        this.boardDom.markShipCellsAsValidVertically(shipLen, x, y)\n      }\n    }\n  }\n\n  placeShipIfValid(shipDom, cell) {\n    const cellX = Number(cell.dataset.x)\n    const cellY = Number(cell.dataset.y)\n    const shipX = Number(shipDom.dataset.x)\n    const shipY = Number(shipDom.dataset.y)\n    const shipId = shipDom.firstChild.dataset.shipId.split(' ')[0]\n    const isVertical = shipDom.classList.contains('vertical')\n\n    let affectedPositions\n    try {\n      affectedPositions = this.boardLogic.place(\n        [cellX, cellY],\n        shipId,\n        isVertical\n      )\n      this.boardDom.placeShip(cell, shipDom)\n    } catch (e) {\n      if (shipX && shipY) {\n        affectedPositions = this.boardLogic.place(\n          [shipX, shipY],\n          shipId,\n          isVertical\n        )\n        this.boardDom.placeShipByCoords([shipX, shipY], shipDom)\n      }\n    }\n    this.boardDom.markLocked(affectedPositions)\n    if (this.boardLogic.isAllShipsPlaced()) {\n      this.shipyardDom.showPlayButton(this.onAllShipsPlaced)\n    }\n  }\n\n  relocateShip([x, y], shipLen, vertical) {\n    const affectedCells = this.boardLogic.removeShip(\n      [Number(x), Number(y)],\n      shipLen,\n      vertical\n    )\n    this.boardDom.clearCells(affectedCells)\n    if (!this.boardLogic.isAllShipsPlaced()) {\n      this.shipyardDom.hidePlayButton()\n    }\n  }\n\n  changeShipOrientation(shipDom) {\n    if (this._isGameStarted) {\n      return\n    }\n    const x = Number(shipDom.dataset.x)\n    const y = Number(shipDom.dataset.y)\n    const shipId = shipDom.firstChild.dataset.shipId.split(' ')[0]\n    const shipLen = Number.parseInt(shipId, 10)\n    const isVertical = shipDom.classList.contains('vertical')\n\n    const affectedCells = this.boardLogic.removeShip(\n      [Number(x), Number(y)],\n      shipLen,\n      isVertical\n    )\n    this.boardDom.clearCells(affectedCells)\n\n    let affectedPositions\n    try {\n      affectedPositions = this.boardLogic.place([x, y], shipId, !isVertical)\n      this.shipyardDom.toggleVertical(shipDom)\n    } catch (e) {\n      affectedPositions = this.boardLogic.place([x, y], shipId, isVertical)\n    }\n\n    this.boardDom.markLocked(affectedPositions)\n    this.boardDom.placeShipByCoords([x, y], shipDom)\n    if (this.boardLogic.isAllShipsPlaced()) {\n      this.shipyardDom.showPlayButton(this.onAllShipsPlaced)\n    }\n  }\n\n  hidePlayButton() {\n    this.shipyardDom.hidePlayButton()\n  }\n\n  isAllShipsPlaced() {\n    return this.boardLogic.isAllShipsPlaced()\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/game/playerBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_mainPageDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/mainPageDom */ \"./src/dom/mainPageDom.js\");\n/* harmony import */ var _dom_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/styles.css */ \"./src/dom/styles.css\");\n/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/game */ \"./src/game/game.js\");\n\n\n\n\nconst game = new _game_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\n\n;(0,_dom_mainPageDom__WEBPACK_IMPORTED_MODULE_0__.addHeader)()\n;(0,_dom_mainPageDom__WEBPACK_IMPORTED_MODULE_0__.addMain)(game.playerBoard, game.enemyBoard)\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/logic/boardLogic.js":
/*!*********************************!*\
  !*** ./src/logic/boardLogic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BoardLogic)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/logic/ship.js\");\n\n\nclass BoardLogic {\n  #SENTRY = true\n\n  #board\n\n  #hitBoard\n\n  #ships\n\n  constructor() {\n    this.sideLength = 10\n    this.missCount = 0\n    this.shipCount = 0\n    this.sunkCount = 0\n    this.#board = new Array(this.sideLength)\n    this.#hitBoard = new Array(this.sideLength)\n    for (let i = 0; i < this.sideLength; i++) {\n      this.#board[i] = new Array(this.sideLength)\n      this.#hitBoard[i] = new Array(this.sideLength)\n      for (let j = 0; j < this.sideLength; j++) {\n        this.#hitBoard[i][j] = false\n        this.#board[i][j] = false\n      }\n    }\n\n    this.#ships = []\n    this.#ships.push(new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, '2'))\n    this.#ships.push(new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, '3a'))\n    this.#ships.push(new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, '3b'))\n    this.#ships.push(new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, '4'))\n    this.#ships.push(new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5, '5'))\n  }\n\n  isAllShipsPlaced() {\n    return this.shipCount === this.#ships.length\n  }\n\n  #isOccupied(x, y) {\n    return this.#board[x][y]\n  }\n\n  #isOutOfBounds(x, y) {\n    return x >= this.sideLength || y >= this.sideLength\n  }\n\n  #throwIfInvalid(ship, x, y, getNextCoord) {\n    for (let i = 0; i < ship.length; i++) {\n      const [nextX, nextY] = getNextCoord(x, y, i)\n      if (this.#isOccupied(nextX, nextY)) {\n        throw new Error('Ships overlap')\n      }\n      if (this.#isOutOfBounds(nextX, nextY)) {\n        throw new Error('Ship placed out of board bounds')\n      }\n    }\n  }\n\n  #throwIfInvalidVertically(ship, x, y) {\n    this.#throwIfInvalid(ship, x, y, (x, y, i) => [x, y + i])\n  }\n\n  #throwIfInvalidHorizontally(ship, x, y) {\n    this.#throwIfInvalid(ship, x, y, (x, y, i) => [x + i, y])\n  }\n\n  #placeVertically(x, y, ship) {\n    const affectedPositions = []\n    this.#throwIfInvalidVertically(ship, x, y)\n\n    this.#putShipOnBoardVertically(ship, x, y, affectedPositions)\n    this.#adjustAdjacentCellsVertically(x, ship, y, affectedPositions)\n\n    this.shipCount += 1\n    return affectedPositions\n  }\n\n  #placeHorizontally(x, y, ship) {\n    const affectedPositions = []\n    this.#throwIfInvalidHorizontally(ship, x, y)\n\n    this.#putShipOnBoardHorizontally(ship, x, y, affectedPositions)\n    this.#adjustAdjacentCellsHorizontally(x, ship, y, affectedPositions)\n\n    this.shipCount += 1\n    return affectedPositions\n  }\n\n  #adjustAdjacentCellsVertically(x, ship, y, affectedPositions) {\n    const start = y === 0 ? y : y - 1\n    const end =\n      y + ship.length >= this.sideLength ? this.sideLength - 1 : y + ship.length\n\n    if (x > 0) this.#affectColumn(start, end, affectedPositions, x - 1)\n    if (y > 0) this.#affectCell(affectedPositions, x, y - 1)\n    if (x + 1 < this.sideLength)\n      this.#affectColumn(start, end, affectedPositions, x + 1)\n    if (y + ship.length < this.sideLength)\n      this.#affectCell(affectedPositions, x, y + ship.length)\n  }\n\n  #adjustAdjacentCellsHorizontally(x, ship, y, affectedPositions) {\n    const start = x === 0 ? x : x - 1\n    const end =\n      x + ship.length >= this.sideLength ? this.sideLength - 1 : x + ship.length\n\n    if (y > 0) this.#affectRow(start, end, affectedPositions, y - 1)\n    if (x > 0) this.#affectCell(affectedPositions, x - 1, y)\n    if (x + ship.length < this.sideLength)\n      this.#affectCell(affectedPositions, x + ship.length, y)\n    if (y + 1 < this.sideLength)\n      this.#affectRow(start, end, affectedPositions, y + 1)\n  }\n\n  #putShipOnBoardVertically(ship, x, y, affectedPositions) {\n    for (let i = 0; i < ship.length; i++) {\n      this.#board[x][y + i] = ship\n      affectedPositions.push([x, y + i])\n    }\n  }\n\n  #putShipOnBoardHorizontally(ship, x, y, affectedPositions) {\n    for (let i = 0; i < ship.length; i++) {\n      this.#board[x + i][y] = ship\n      affectedPositions.push([x + i, y])\n    }\n  }\n\n  #affectCell(affectedPositions, x, y) {\n    affectedPositions.push([x, y])\n    this.#board[x][y] = this.#SENTRY\n  }\n\n  #affectColumn(start, end, affectedPositions, x) {\n    for (let i = start; i <= end; i++) {\n      this.#affectCell(affectedPositions, x, i)\n    }\n  }\n\n  #affectRow(start, end, affectedPositions, y) {\n    for (let i = start; i <= end; i++) {\n      this.#affectCell(affectedPositions, i, y)\n    }\n  }\n\n  place([x, y], id, vertical) {\n    const ship = this.#ships.find(findShip => findShip.id === id)\n    if (vertical) return this.#placeVertically(x, y, ship)\n    return this.#placeHorizontally(x, y, ship)\n  }\n\n  receiveAttack([x, y]) {\n    let isHit = false\n    let isSunk = false\n    let shipId = null\n    this.#hitBoard[x][y] = true\n    if (this.#isOccupied(x, y)) {\n      const ship = this.#board[x][y]\n      isHit = true\n      shipId = ship.id\n      ship.hit()\n      if (ship.isSunk()) {\n        this.sunkCount += 1\n        isSunk = true\n      }\n    }\n    return { isHit, isSunk, shipId }\n  }\n\n  isAllShipsSunk() {\n    return this.sunkCount === this.#ships.length\n  }\n\n  willShipFitHorizontally(len, x) {\n    return x + len <= this.sideLength\n  }\n\n  willShipFitVertically(len, y) {\n    return y + len <= this.sideLength\n  }\n\n  isPlaceAvailableHorizontally(len, x, y) {\n    const start = x\n    const end = x + len > this.sideLength ? this.sideLength : x + len\n    for (let i = start; i < end; i++) {\n      if (this.#isOccupied(i, y)) {\n        return false\n      }\n    }\n    return true\n  }\n\n  isPlaceAvailableVertically(len, x, y) {\n    const start = y\n    const end = y + len > this.sideLength ? this.sideLength : y + len\n    for (let i = start; i < end; i++) {\n      if (this.#isOccupied(x, i)) {\n        return false\n      }\n    }\n    return true\n  }\n\n  #placeRandomlyVertically([x, y], ship) {\n    if (this.isPlaceAvailableVertically(ship.length, x, y)) {\n      this.#placeVertically(x, y, ship)\n      return true\n    }\n    return false\n  }\n\n  #placeRandomlyHorizontally([x, y], ship) {\n    if (this.isPlaceAvailableHorizontally(ship.length, x, y)) {\n      this.#placeHorizontally(x, y, ship)\n      return true\n    }\n    return false\n  }\n\n  #placeShipRandomly(ship, verticalShips) {\n    while (true) {\n      const isVertical = Math.random() >= 0.5\n      const x = Math.floor(Math.random() * this.sideLength)\n      const y = Math.floor(Math.random() * this.sideLength)\n      try {\n        this.place([x, y], ship.id, isVertical)\n        if (isVertical) {\n          verticalShips.push(ship.id)\n        }\n        return\n      } catch (e) {}\n    }\n  }\n\n  placeRandomly() {\n    const verticalShips = []\n    this.#placeShipRandomly(this.#ships[4], verticalShips)\n    this.#placeShipRandomly(this.#ships[3], verticalShips)\n    this.#placeShipRandomly(this.#ships[2], verticalShips)\n    this.#placeShipRandomly(this.#ships[1], verticalShips)\n    this.#placeShipRandomly(this.#ships[0], verticalShips)\n    return verticalShips\n  }\n\n  isAvailableToHit([x, y]) {\n    return !this.#hitBoard[x][y]\n  }\n\n  clearNotShipCells() {\n    for (let x = 0; x < this.sideLength; x++) {\n      for (let y = 0; y < this.sideLength; y++) {\n        if (this.#board[x][y] === this.#SENTRY) {\n          this.#board[x][y] = false\n        }\n      }\n    }\n  }\n\n  #hasNeighbourShip([x, y]) {\n    const hasTopNeighbours = y !== 0\n    const hasBottomNeighbours = y !== this.sideLength - 1\n    const hasLeftNeighbours = x !== 0\n    const hasRightNeighbours = x !== this.sideLength - 1\n\n    if (hasTopNeighbours) {\n      const start = hasLeftNeighbours ? x - 1 : x\n      const end = hasRightNeighbours ? x + 1 : x\n      for (let i = start; i <= end; i++) {\n        if (this.#board[i][y - 1] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n          return true\n        }\n      }\n    }\n    if (hasLeftNeighbours && this.#board[x - 1][y] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      return true\n    }\n    if (hasRightNeighbours && this.#board[x + 1][y] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      return true\n    }\n    if (hasBottomNeighbours) {\n      const start = hasLeftNeighbours ? x - 1 : x\n      const end = hasRightNeighbours ? x + 1 : x\n      for (let i = start; i <= end; i++) {\n        if (this.#board[i][y + 1] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n          return true\n        }\n      }\n    }\n    return false\n  }\n\n  #checkColumn([start, end], affectedPositions, x) {\n    for (let i = start; i <= end; i++) {\n      if (!this.#hasNeighbourShip([x, i])) {\n        affectedPositions.push([x, i])\n        this.#board[x][i] = false\n      }\n    }\n  }\n\n  #checkRow([start, end], affectedPositions, y) {\n    for (let i = start; i <= end; i++) {\n      if (!this.#hasNeighbourShip([i, y])) {\n        affectedPositions.push([i, y])\n        this.#board[i][y] = false\n      }\n    }\n  }\n\n  #checkCell([x, y], affectedPositions) {\n    if (!this.#hasNeighbourShip([x, y])) {\n      affectedPositions.push([x, y])\n      this.#board[x][y] = false\n    }\n  }\n\n  removeShipVertically([x, y], shipLen) {\n    const affectedPositions = []\n    for (let i = 0; i < shipLen; i++) {\n      this.#board[x][y + i] = false\n      affectedPositions.push([x, y + i])\n    }\n    const start = y === 0 ? y : y - 1\n    const end =\n      y + shipLen >= this.sideLength ? this.sideLength - 1 : y + shipLen\n\n    if (x > 0) this.#checkColumn([start, end], affectedPositions, x - 1)\n    if (y > 0) this.#checkCell([x, y - 1], affectedPositions)\n    if (x + 1 < this.sideLength)\n      this.#checkColumn([start, end], affectedPositions, x + 1)\n    if (y + shipLen < this.sideLength)\n      this.#checkCell([x, y + shipLen], affectedPositions)\n\n    return affectedPositions\n  }\n\n  removeShipHorizontally([x, y], shipLen) {\n    const affectedPositions = []\n    for (let i = 0; i < shipLen; i++) {\n      this.#board[x + i][y] = false\n      affectedPositions.push([x + i, y])\n    }\n    const start = x === 0 ? x : x - 1\n    const end =\n      x + shipLen >= this.sideLength ? this.sideLength - 1 : x + shipLen\n\n    if (y > 0) this.#checkRow([start, end], affectedPositions, y - 1)\n    if (x > 0) this.#checkCell([start, y], affectedPositions)\n    if (x + shipLen < this.sideLength)\n      this.#checkCell([end, y], affectedPositions)\n    if (y + 1 < this.sideLength)\n      this.#checkRow([start, end], affectedPositions, y + 1)\n\n    return affectedPositions\n  }\n\n  #markCellHit([x, y], affectedPositions) {\n    affectedPositions.push([x, y])\n    this.#hitBoard[x][y] = true\n  }\n\n  #markRowHit([start, end], affectedPositions, y) {\n    for (let i = start; i <= end; i++) {\n      this.#markCellHit([i, y], affectedPositions)\n    }\n  }\n\n  #markColumnHit([start, end], affectedPositions, x) {\n    for (let i = start; i <= end; i++) {\n      this.#markCellHit([x, i], affectedPositions)\n    }\n  }\n\n  markSurroundingMissVertically([x, y], shipLen) {\n    const affectedPositions = []\n    const beginY = this.#findShipYBeginning([x, y])\n    const start = beginY === 0 ? beginY : beginY - 1\n    const end =\n      beginY + shipLen >= this.sideLength\n        ? this.sideLength - 1\n        : beginY + shipLen\n\n    if (x > 0) this.#markColumnHit([start, end], affectedPositions, x - 1)\n    if (beginY > 0) this.#markCellHit([x, beginY - 1], affectedPositions)\n    if (x + 1 < this.sideLength)\n      this.#markColumnHit([start, end], affectedPositions, x + 1)\n    if (beginY + shipLen < this.sideLength)\n      this.#markCellHit([x, beginY + shipLen], affectedPositions)\n\n    return affectedPositions\n  }\n\n  markSurroundingMissHorizontally([x, y], shipLen) {\n    const affectedPositions = []\n    const beginX = this.#findShipXBeginning([x, y])\n    const start = beginX === 0 ? beginX : beginX - 1\n    const end =\n      beginX + shipLen >= this.sideLength\n        ? this.sideLength - 1\n        : beginX + shipLen\n\n    if (y > 0) this.#markRowHit([start, end], affectedPositions, y - 1)\n    if (beginX > 0) this.#markCellHit([start, y], affectedPositions)\n    if (beginX + shipLen < this.sideLength)\n      this.#markCellHit([end, y], affectedPositions)\n    if (y + 1 < this.sideLength)\n      this.#markRowHit([start, end], affectedPositions, y + 1)\n\n    return affectedPositions\n  }\n\n  markSurroundingMiss([x, y], shipLen, isVertical) {\n    if (isVertical) {\n      return this.markSurroundingMissVertically([x, y], shipLen)\n    }\n    return this.markSurroundingMissHorizontally([x, y], shipLen)\n  }\n\n  removeShip(coords, shipLen, vertical) {\n    this.shipCount -= 1\n    if (vertical) {\n      return this.removeShipVertically(coords, shipLen)\n    }\n    return this.removeShipHorizontally(coords, shipLen)\n  }\n\n  #findShipXBeginning([x, y]) {\n    let beginX = x\n    while (beginX > 0 && this.#board[beginX - 1][y]) {\n      beginX--\n    }\n    return beginX\n  }\n\n  #findShipYBeginning([x, y]) {\n    let beginY = y\n    while (beginY > 0 && this.#board[x][beginY - 1]) {\n      beginY--\n    }\n    return beginY\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/logic/boardLogic.js?");

/***/ }),

/***/ "./src/logic/ship.js":
/*!***************************!*\
  !*** ./src/logic/ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length, id) {\n    this.length = length\n    this.hitCount = 0\n    this.id = id\n  }\n\n  hit() {\n    this.hitCount += 1\n  }\n\n  isSunk() {\n    return this.hitCount >= this.length\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/logic/ship.js?");

/***/ }),

/***/ "./assets/fonts/Helvetica Bold Condensed/Helvetica Bold Condensed.otf":
/*!****************************************************************************!*\
  !*** ./assets/fonts/Helvetica Bold Condensed/Helvetica Bold Condensed.otf ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cae18e8b9bf2fdb0e4a0.otf\";\n\n//# sourceURL=webpack://todo/./assets/fonts/Helvetica_Bold_Condensed/Helvetica_Bold_Condensed.otf?");

/***/ }),

/***/ "./assets/fonts/Inconsolata/Inconsolata-VariableFont_wdth,wght.ttf":
/*!*************************************************************************!*\
  !*** ./assets/fonts/Inconsolata/Inconsolata-VariableFont_wdth,wght.ttf ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f2f0207973661b7491ba.ttf\";\n\n//# sourceURL=webpack://todo/./assets/fonts/Inconsolata/Inconsolata-VariableFont_wdth,wght.ttf?");

/***/ }),

/***/ "./assets/fonts/futura/Futura Heavy font.ttf":
/*!***************************************************!*\
  !*** ./assets/fonts/futura/Futura Heavy font.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"af72c25a6945b0f48abb.ttf\";\n\n//# sourceURL=webpack://todo/./assets/fonts/futura/Futura_Heavy_font.ttf?");

/***/ }),

/***/ "./assets/img/github.png":
/*!*******************************!*\
  !*** ./assets/img/github.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7615be16eed41f806def.png\";\n\n//# sourceURL=webpack://todo/./assets/img/github.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;