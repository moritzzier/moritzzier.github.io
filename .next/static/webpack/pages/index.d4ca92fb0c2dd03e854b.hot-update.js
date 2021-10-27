self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./template/IntroBlock.tsx":
/*!*********************************!*\
  !*** ./template/IntroBlock.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroBlock": function() { return /* binding */ IntroBlock; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ProfileCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProfileCard */ "./components/ProfileCard.tsx");
/* harmony import */ var _components_svg_CurlyArrowRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/svg/CurlyArrowRight */ "./components/svg/CurlyArrowRight.tsx");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\morit\\Documents\\projekte\\moritzzier.github.io\\template\\IntroBlock.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var MotionBox = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box);
_c = MotionBox;
var IntroBlock = function IntroBlock() {
  _s();

  var _useInView = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)(),
      ref = _useInView.ref,
      inView = _useInView.inView;

  var controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
    ref: ref,
    ali: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
      pos: "relative",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
        fontFamily: "Reenie beanie",
        fontSize: "3xl",
        children: "That's me!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
        pos: "absolute",
        left: "12",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_svg_CurlyArrowRight__WEBPACK_IMPORTED_MODULE_3__.CurlyArrowRight, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionBox, {
      display: "flex",
      justifyContent: {
        base: 'center',
        md: 'flex-end'
      },
      animate: controls,
      initial: "hidden",
      variants: {
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            type: 'spring',
            duration: 1.5,
            delay: 0.5
          }
        },
        hidden: {
          opacity: 0,
          x: 50
        }
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProfileCard__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_s(IntroBlock, "YRhVMUv0zoaRLNH/Grm7wLz2KX0=", false, function () {
  return [react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView, framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation];
});

_c2 = IntroBlock;

var _c, _c2;

$RefreshReg$(_c, "MotionBox");
$RefreshReg$(_c2, "IntroBlock");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGVtcGxhdGUvSW50cm9CbG9jay50c3giXSwibmFtZXMiOlsiTW90aW9uQm94IiwibW90aW9uIiwiQm94IiwiSW50cm9CbG9jayIsInVzZUluVmlldyIsInJlZiIsImluVmlldyIsImNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwiUmVhY3QiLCJzdGFydCIsImJhc2UiLCJtZCIsInZpc2libGUiLCJvcGFjaXR5IiwieCIsInRyYW5zaXRpb24iLCJ0eXBlIiwiZHVyYXRpb24iLCJkZWxheSIsImhpZGRlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHFEQUFNLENBQVdDLGlEQUFYLENBQXhCO0tBQU1GLFM7QUFFQyxJQUFNRyxVQUFvQixHQUFHLFNBQXZCQSxVQUF1QixHQUFNO0FBQUE7O0FBQUEsbUJBQ2hCQyxzRUFBUyxFQURPO0FBQUEsTUFDaENDLEdBRGdDLGNBQ2hDQSxHQURnQztBQUFBLE1BQzNCQyxNQUQyQixjQUMzQkEsTUFEMkI7O0FBRXhDLE1BQU1DLFFBQVEsR0FBR0MsMkRBQVksRUFBN0I7QUFFQUMsOENBQUEsQ0FBZ0IsWUFBTTtBQUNwQixRQUFJSCxNQUFKLEVBQVk7QUFDVkMsY0FBUSxDQUFDRyxLQUFULENBQWUsU0FBZjtBQUNEO0FBQ0YsR0FKRCxFQUlHLENBQUNILFFBQUQsRUFBV0QsTUFBWCxDQUpIO0FBTUEsc0JBQ0UsOERBQUMsaURBQUQ7QUFBSyxPQUFHLEVBQUVELEdBQVY7QUFBZSxPQUFHLE1BQWxCO0FBQUEsNEJBQ0UsOERBQUMsaURBQUQ7QUFBSyxTQUFHLEVBQUMsVUFBVDtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sa0JBQVUsRUFBQyxlQUFqQjtBQUFpQyxnQkFBUSxFQUFDLEtBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxpREFBRDtBQUFLLFdBQUcsRUFBQyxVQUFUO0FBQW9CLFlBQUksRUFBQyxJQUF6QjtBQUFBLCtCQUNFLDhEQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRSw4REFBQyxTQUFEO0FBQ0UsYUFBTyxFQUFDLE1BRFY7QUFFRSxvQkFBYyxFQUFFO0FBQUVNLFlBQUksRUFBRSxRQUFSO0FBQWtCQyxVQUFFLEVBQUU7QUFBdEIsT0FGbEI7QUFHRSxhQUFPLEVBQUVMLFFBSFg7QUFJRSxhQUFPLEVBQUMsUUFKVjtBQUtFLGNBQVEsRUFBRTtBQUNSTSxlQUFPLEVBQUU7QUFDUEMsaUJBQU8sRUFBRSxDQURGO0FBRVBDLFdBQUMsRUFBRSxDQUZJO0FBR1BDLG9CQUFVLEVBQUU7QUFDVkMsZ0JBQUksRUFBRSxRQURJO0FBRVZDLG9CQUFRLEVBQUUsR0FGQTtBQUdWQyxpQkFBSyxFQUFFO0FBSEc7QUFITCxTQUREO0FBVVJDLGNBQU0sRUFBRTtBQUFFTixpQkFBTyxFQUFFLENBQVg7QUFBY0MsV0FBQyxFQUFFO0FBQWpCO0FBVkEsT0FMWjtBQUFBLDZCQWtCRSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThCRCxDQXhDTTs7R0FBTVosVTtVQUNhQyxrRSxFQUNQSSx1RDs7O01BRk5MLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDRjYTkyZmIwYzJkZDAzZTg1NGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2ZpbGVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZUNhcmQnXG5pbXBvcnQgeyBDdXJseUFycm93UmlnaHQgfSBmcm9tICcuLi9jb21wb25lbnRzL3N2Zy9DdXJseUFycm93UmlnaHQnXG5pbXBvcnQgeyBCb3gsIFRleHQsIEJveFByb3BzIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcidcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuY29uc3QgTW90aW9uQm94ID0gbW90aW9uPEJveFByb3BzPihCb3gpXG5cbmV4cG9ydCBjb25zdCBJbnRyb0Jsb2NrOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyByZWYsIGluVmlldyB9ID0gdXNlSW5WaWV3KClcbiAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluVmlldykge1xuICAgICAgY29udHJvbHMuc3RhcnQoJ3Zpc2libGUnKVxuICAgIH1cbiAgfSwgW2NvbnRyb2xzLCBpblZpZXddKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCByZWY9e3JlZn0gYWxpPlxuICAgICAgPEJveCBwb3M9XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8VGV4dCBmb250RmFtaWx5PVwiUmVlbmllIGJlYW5pZVwiIGZvbnRTaXplPVwiM3hsXCI+e2BUaGF0J3MgbWUhYH08L1RleHQ+XG4gICAgICAgIDxCb3ggcG9zPVwiYWJzb2x1dGVcIiBsZWZ0PVwiMTJcIj5cbiAgICAgICAgICA8Q3VybHlBcnJvd1JpZ2h0IC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgICA8TW90aW9uQm94XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9e3sgYmFzZTogJ2NlbnRlcicsIG1kOiAnZmxleC1lbmQnIH19XG4gICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICB2aXNpYmxlOiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3NwcmluZycsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgICAgICAgIGRlbGF5OiAwLjVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeDogNTAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFByb2ZpbGVDYXJkIC8+XG4gICAgICA8L01vdGlvbkJveD5cbiAgICA8L0JveD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==