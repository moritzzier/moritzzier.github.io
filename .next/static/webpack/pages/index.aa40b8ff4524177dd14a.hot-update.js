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
      animate: controls,
      initial: "hidden",
      transition: {
        duration: 0.3
      },
      variants: {
        visible: {
          opacity: 1,
          x: 0
        },
        hidden: {
          opacity: 0,
          x: 300
        }
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProfileCard__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGVtcGxhdGUvSW50cm9CbG9jay50c3giXSwibmFtZXMiOlsiTW90aW9uQm94IiwibW90aW9uIiwiQm94IiwiSW50cm9CbG9jayIsInVzZUluVmlldyIsInJlZiIsImluVmlldyIsImNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwiUmVhY3QiLCJzdGFydCIsImR1cmF0aW9uIiwidmlzaWJsZSIsIm9wYWNpdHkiLCJ4IiwiaGlkZGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MscURBQU0sQ0FBQ0MsaURBQUQsQ0FBeEI7S0FBTUYsUztBQUVDLElBQU1HLFVBQW9CLEdBQUcsU0FBdkJBLFVBQXVCLEdBQU07QUFBQTs7QUFBQSxtQkFDaEJDLHNFQUFTLEVBRE87QUFBQSxNQUNoQ0MsR0FEZ0MsY0FDaENBLEdBRGdDO0FBQUEsTUFDM0JDLE1BRDJCLGNBQzNCQSxNQUQyQjs7QUFFeEMsTUFBTUMsUUFBUSxHQUFHQywyREFBWSxFQUE3QjtBQUVBQyw4Q0FBQSxDQUFnQixZQUFNO0FBQ3BCLFFBQUlILE1BQUosRUFBWTtBQUNWQyxjQUFRLENBQUNHLEtBQVQsQ0FBZSxTQUFmO0FBQ0Q7QUFDRixHQUpELEVBSUcsQ0FBQ0gsUUFBRCxFQUFXRCxNQUFYLENBSkg7QUFNQSxzQkFDRSw4REFBQyxpREFBRDtBQUFLLE9BQUcsRUFBRUQsR0FBVjtBQUFBLDRCQUNFLDhEQUFDLGlEQUFEO0FBQUssU0FBRyxFQUFDLFVBQVQ7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFNLGtCQUFVLEVBQUMsZUFBakI7QUFBaUMsZ0JBQVEsRUFBQyxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsaURBQUQ7QUFBSyxXQUFHLEVBQUMsVUFBVDtBQUFvQixZQUFJLEVBQUMsSUFBekI7QUFBQSwrQkFDRSw4REFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBT0UsOERBQUMsU0FBRDtBQUNFLGFBQU8sRUFBRUUsUUFEWDtBQUVFLGFBQU8sRUFBQyxRQUZWO0FBR0UsZ0JBQVUsRUFBRTtBQUFFSSxnQkFBUSxFQUFFO0FBQVosT0FIZDtBQUlFLGNBQVEsRUFBRTtBQUNSQyxlQUFPLEVBQUU7QUFBRUMsaUJBQU8sRUFBRSxDQUFYO0FBQWNDLFdBQUMsRUFBRTtBQUFqQixTQUREO0FBRVJDLGNBQU0sRUFBRTtBQUFFRixpQkFBTyxFQUFFLENBQVg7QUFBY0MsV0FBQyxFQUFFO0FBQWpCO0FBRkEsT0FKWjtBQUFBLDZCQVNFLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0EvQk07O0dBQU1YLFU7VUFDYUMsa0UsRUFDUEksdUQ7OztNQUZOTCxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFhNDBiOGZmNDUyNDE3N2RkMTRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9maWxlQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2ZpbGVDYXJkJ1xuaW1wb3J0IHsgQ3VybHlBcnJvd1JpZ2h0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdmcvQ3VybHlBcnJvd1JpZ2h0J1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcidcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuY29uc3QgTW90aW9uQm94ID0gbW90aW9uKEJveClcblxuZXhwb3J0IGNvbnN0IEludHJvQmxvY2s6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoKVxuICBjb25zdCBjb250cm9scyA9IHVzZUFuaW1hdGlvbigpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5WaWV3KSB7XG4gICAgICBjb250cm9scy5zdGFydCgndmlzaWJsZScpXG4gICAgfVxuICB9LCBbY29udHJvbHMsIGluVmlld10pXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHJlZj17cmVmfT5cbiAgICAgIDxCb3ggcG9zPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPFRleHQgZm9udEZhbWlseT1cIlJlZW5pZSBiZWFuaWVcIiBmb250U2l6ZT1cIjN4bFwiPntgVGhhdCdzIG1lIWB9PC9UZXh0PlxuICAgICAgICA8Qm94IHBvcz1cImFic29sdXRlXCIgbGVmdD1cIjEyXCI+XG4gICAgICAgICAgPEN1cmx5QXJyb3dSaWdodCAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgICAgPE1vdGlvbkJveFxuICAgICAgICBhbmltYXRlPXtjb250cm9sc31cbiAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMyB9fVxuICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeDogMCB9LFxuICAgICAgICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB4OiAzMDB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8UHJvZmlsZUNhcmQgLz5cbiAgICAgIDwvTW90aW9uQm94PlxuICAgIDwvQm94PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9