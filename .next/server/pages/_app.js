(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _fontsource_reenie_beanie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fontsource/reenie-beanie */ "./node_modules/@fontsource/reenie-beanie/index.css");
/* harmony import */ var _fontsource_reenie_beanie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fontsource_reenie_beanie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fontsource_poppins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fontsource/poppins */ "./node_modules/@fontsource/poppins/index.css");
/* harmony import */ var _fontsource_poppins__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fontsource_poppins__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\morit\\Documents\\projekte\\moritzzier.github.io\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
// theme.ts
// 1. import `extendTheme` function
 // 2. Add your color mode config

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}; // 3. extend the theme

const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
  config,
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./node_modules/@fontsource/poppins/index.css":
/*!****************************************************!*\
  !*** ./node_modules/@fontsource/poppins/index.css ***!
  \****************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/@fontsource/reenie-beanie/index.css":
/*!**********************************************************!*\
  !*** ./node_modules/@fontsource/reenie-beanie/index.css ***!
  \**********************************************************/
/***/ (function() {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zdHlsZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJjb25maWciLCJpbml0aWFsQ29sb3JNb2RlIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwiZXh0ZW5kVGhlbWUiLCJmb250cyIsImhlYWRpbmciLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUFtRDtBQUNqRCxzQkFDRSw4REFBQyw0REFBRDtBQUFnQixTQUFLLEVBQUVDLGtEQUF2QjtBQUFBLDJCQUNFLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUNELCtEQUFlRixLQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFFQTtDQUdBOztBQUNBLE1BQU1JLE1BQW1CLEdBQUc7QUFDMUJDLGtCQUFnQixFQUFFLE9BRFE7QUFFMUJDLG9CQUFrQixFQUFFO0FBRk0sQ0FBNUIsQyxDQUtBOztBQUNBLE1BQU1ILEtBQUssR0FBR0ksNkRBQVcsQ0FBQztBQUN4QkgsUUFEd0I7QUFFeEJJLE9BQUssRUFBRTtBQUNMQyxXQUFPLEVBQUUsU0FESjtBQUVMQyxRQUFJLEVBQUU7QUFGRDtBQUZpQixDQUFELENBQXpCO0FBUUEsK0RBQWVQLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcclxuaW1wb3J0IFwiQGZvbnRzb3VyY2UvcmVlbmllLWJlYW5pZVwiXHJcbmltcG9ydCBcIkBmb250c291cmNlL3BvcHBpbnNcIlxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9DaGFrcmFQcm92aWRlcj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIiwiLy8gdGhlbWUudHNcblxuLy8gMS4gaW1wb3J0IGBleHRlbmRUaGVtZWAgZnVuY3Rpb25cbmltcG9ydCB7IGV4dGVuZFRoZW1lLCBUaGVtZUNvbmZpZyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbi8vIDIuIEFkZCB5b3VyIGNvbG9yIG1vZGUgY29uZmlnXG5jb25zdCBjb25maWc6IFRoZW1lQ29uZmlnID0ge1xuICBpbml0aWFsQ29sb3JNb2RlOiAnbGlnaHQnLFxuICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWUsXG59XG5cbi8vIDMuIGV4dGVuZCB0aGUgdGhlbWVcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICBjb25maWcsXG4gIGZvbnRzOiB7XG4gICAgaGVhZGluZzogJ1BvcHBpbnMnLFxuICAgIGJvZHk6ICdQb3BwaW5zJyxcbiAgfSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=