webpackHotUpdate_N_E("pages/moments",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/moments/Moments.module.css":
/*!******************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./pages/moments/Moments.module.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Moments_head__JRr8X{\r\n    color: red;\r\n    position: relative;\r\n}\r\n\r\n.Moments_head__JRr8X img{\r\n    width: 100%;\r\n}\r\n\r\n.Moments_owner___SV0X{\r\n    background-color: #eee;\r\n    position: absolute;\r\n    right: 20px;\r\n    bottom: -20px;\r\n}\r\n.Moments_avatar__Q4rnU{\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 8px;\r\n\r\n}\r\n", "",{"version":3,"sources":["webpack://pages/moments/Moments.module.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,aAAa;AACjB;AACA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;;AAEtB","sourcesContent":[".head{\r\n    color: red;\r\n    position: relative;\r\n}\r\n\r\n.head img{\r\n    width: 100%;\r\n}\r\n\r\n.owner{\r\n    background-color: #eee;\r\n    position: absolute;\r\n    right: 20px;\r\n    bottom: -20px;\r\n}\r\n.avatar{\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 8px;\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"head": "Moments_head__JRr8X",
	"owner": "Moments_owner___SV0X",
	"avatar": "Moments_avatar__Q4rnU"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./pages/moments/index.js":
/*!********************************!*\
  !*** ./pages/moments/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Moments; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Moments_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Moments.module.css */ "./pages/moments/Moments.module.css");
/* harmony import */ var _Moments_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Moments_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\projects\\moments\\pages\\moments\\index.js";

function Moments() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Moments_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.head,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "/moments.jpg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Moments_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.owner,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}
_c = Moments;
;

var _c;

$RefreshReg$(_c, "Moments");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9tZW50cy9Nb21lbnRzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vbWVudHMvaW5kZXguanMiXSwibmFtZXMiOlsiTW9tZW50cyIsInN0eWxlcyIsImhlYWQiLCJvd25lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHdCQUF3QixtQkFBbUIsMkJBQTJCLEtBQUssaUNBQWlDLG9CQUFvQixLQUFLLDhCQUE4QiwrQkFBK0IsMkJBQTJCLG9CQUFvQixzQkFBc0IsS0FBSywyQkFBMkIsb0JBQW9CLHFCQUFxQiwyQkFBMkIsU0FBUyxXQUFXLGlHQUFpRyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLGdDQUFnQyxtQkFBbUIsMkJBQTJCLEtBQUssa0JBQWtCLG9CQUFvQixLQUFLLGVBQWUsK0JBQStCLDJCQUEyQixvQkFBb0Isc0JBQXNCLEtBQUssWUFBWSxvQkFBb0IscUJBQXFCLDJCQUEyQixTQUFTLHVCQUF1QjtBQUM5L0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUM5QixzQkFDSTtBQUFLLGFBQVMsRUFBRUMsMERBQU0sQ0FBQ0MsSUFBdkI7QUFBQSw0QkFDSTtBQUFLLFNBQUcsRUFBQyxjQUFUO0FBQXdCLFNBQUcsRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBRUQsMERBQU0sQ0FBQ0UsS0FBdkI7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUg7S0FUdUJILE87QUFTdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW9tZW50cy41NzFiZTVmYjVlOWQ5MTMxYjBlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLk1vbWVudHNfaGVhZF9fSlJyOFh7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLk1vbWVudHNfaGVhZF9fSlJyOFggaW1ne1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLk1vbWVudHNfb3duZXJfX19TVjBYe1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgICBib3R0b206IC0yMHB4O1xcclxcbn1cXHJcXG4uTW9tZW50c19hdmF0YXJfX1E0cm5Ve1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuXFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wYWdlcy9tb21lbnRzL01vbWVudHMubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjs7QUFFdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWR7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQgaW1ne1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm93bmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgICBib3R0b206IC0yMHB4O1xcclxcbn1cXHJcXG4uYXZhdGFye1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuXFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhlYWRcIjogXCJNb21lbnRzX2hlYWRfX0pScjhYXCIsXG5cdFwib3duZXJcIjogXCJNb21lbnRzX293bmVyX19fU1YwWFwiLFxuXHRcImF2YXRhclwiOiBcIk1vbWVudHNfYXZhdGFyX19RNHJuVVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb21lbnRzLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb21lbnRzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz0nL21vbWVudHMuanBnJyBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3duZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=