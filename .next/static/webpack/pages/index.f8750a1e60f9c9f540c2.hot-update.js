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
      transition: {
        type: 'spring'
      },
      variants: {
        visible: {
          opacity: 1,
          x: 0
        },
        hidden: {
          opacity: 0,
          x: 50
        }
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProfileCard__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGVtcGxhdGUvSW50cm9CbG9jay50c3giXSwibmFtZXMiOlsiTW90aW9uQm94IiwibW90aW9uIiwiQm94IiwiSW50cm9CbG9jayIsInVzZUluVmlldyIsInJlZiIsImluVmlldyIsImNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwiUmVhY3QiLCJzdGFydCIsImJhc2UiLCJtZCIsInR5cGUiLCJ2aXNpYmxlIiwib3BhY2l0eSIsIngiLCJoaWRkZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxxREFBTSxDQUFXQyxpREFBWCxDQUF4QjtLQUFNRixTO0FBRUMsSUFBTUcsVUFBb0IsR0FBRyxTQUF2QkEsVUFBdUIsR0FBTTtBQUFBOztBQUFBLG1CQUNoQkMsc0VBQVMsRUFETztBQUFBLE1BQ2hDQyxHQURnQyxjQUNoQ0EsR0FEZ0M7QUFBQSxNQUMzQkMsTUFEMkIsY0FDM0JBLE1BRDJCOztBQUV4QyxNQUFNQyxRQUFRLEdBQUdDLDJEQUFZLEVBQTdCO0FBRUFDLDhDQUFBLENBQWdCLFlBQU07QUFDcEIsUUFBSUgsTUFBSixFQUFZO0FBQ1ZDLGNBQVEsQ0FBQ0csS0FBVCxDQUFlLFNBQWY7QUFDRDtBQUNGLEdBSkQsRUFJRyxDQUFDSCxRQUFELEVBQVdELE1BQVgsQ0FKSDtBQU1BLHNCQUNFLDhEQUFDLGlEQUFEO0FBQUssT0FBRyxFQUFFRCxHQUFWO0FBQWUsT0FBRyxNQUFsQjtBQUFBLDRCQUNFLDhEQUFDLGlEQUFEO0FBQUssU0FBRyxFQUFDLFVBQVQ7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFNLGtCQUFVLEVBQUMsZUFBakI7QUFBaUMsZ0JBQVEsRUFBQyxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsaURBQUQ7QUFBSyxXQUFHLEVBQUMsVUFBVDtBQUFvQixZQUFJLEVBQUMsSUFBekI7QUFBQSwrQkFDRSw4REFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBT0UsOERBQUMsU0FBRDtBQUNFLGFBQU8sRUFBQyxNQURWO0FBRUUsb0JBQWMsRUFBRTtBQUFDTSxZQUFJLEVBQUUsUUFBUDtBQUFpQkMsVUFBRSxFQUFFO0FBQXJCLE9BRmxCO0FBR0UsYUFBTyxFQUFFTCxRQUhYO0FBSUUsYUFBTyxFQUFDLFFBSlY7QUFLRSxnQkFBVSxFQUFFO0FBQUVNLFlBQUksRUFBRTtBQUFSLE9BTGQ7QUFNRSxjQUFRLEVBQUU7QUFDUkMsZUFBTyxFQUFFO0FBQUVDLGlCQUFPLEVBQUUsQ0FBWDtBQUFjQyxXQUFDLEVBQUU7QUFBakIsU0FERDtBQUVSQyxjQUFNLEVBQUU7QUFBRUYsaUJBQU8sRUFBRSxDQUFYO0FBQWNDLFdBQUMsRUFBRTtBQUFqQjtBQUZBLE9BTlo7QUFBQSw2QkFXRSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBakNNOztHQUFNYixVO1VBQ2FDLGtFLEVBQ1BJLHVEOzs7TUFGTkwsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mODc1MGExZTYwZjljOWY1NDBjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZmlsZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9maWxlQ2FyZCdcbmltcG9ydCB7IEN1cmx5QXJyb3dSaWdodCB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3ZnL0N1cmx5QXJyb3dSaWdodCdcbmltcG9ydCB7IEJveCwgVGV4dCwgQm94UHJvcHMgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJ1xuaW1wb3J0IHsgbW90aW9uLCB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCBNb3Rpb25Cb3ggPSBtb3Rpb248Qm94UHJvcHM+KEJveClcblxuZXhwb3J0IGNvbnN0IEludHJvQmxvY2s6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoKVxuICBjb25zdCBjb250cm9scyA9IHVzZUFuaW1hdGlvbigpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5WaWV3KSB7XG4gICAgICBjb250cm9scy5zdGFydCgndmlzaWJsZScpXG4gICAgfVxuICB9LCBbY29udHJvbHMsIGluVmlld10pXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHJlZj17cmVmfSBhbGk+XG4gICAgICA8Qm94IHBvcz1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxUZXh0IGZvbnRGYW1pbHk9XCJSZWVuaWUgYmVhbmllXCIgZm9udFNpemU9XCIzeGxcIj57YFRoYXQncyBtZSFgfTwvVGV4dD5cbiAgICAgICAgPEJveCBwb3M9XCJhYnNvbHV0ZVwiIGxlZnQ9XCIxMlwiPlxuICAgICAgICAgIDxDdXJseUFycm93UmlnaHQgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICAgIDxNb3Rpb25Cb3hcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD17e2Jhc2U6ICdjZW50ZXInLCBtZDogJ2ZsZXgtZW5kJ319XG4gICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiAnc3ByaW5nJyB9fVxuICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeDogMCB9LFxuICAgICAgICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB4OiA1MCB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8UHJvZmlsZUNhcmQgLz5cbiAgICAgIDwvTW90aW9uQm94PlxuICAgIDwvQm94PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9