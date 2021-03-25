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
___CSS_LOADER_EXPORT___.push([module.i, ".Moments_head__JRr8X{\r\n    color: red;\r\n    position: relative;\r\n}\r\n\r\n.Moments_head__JRr8X img{\r\n    width: 100%;\r\n}\r\n\r\n.Moments_owner-info__3HQ0N{\r\n    background-color: #eee;\r\n    position: absolute;\r\n    right: 20px;\r\n    bottom: -20px;\r\n}\r\n.Moments_avatar__Q4rnU{\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 8px;\r\n\r\n}\r\n", "",{"version":3,"sources":["webpack://pages/moments/Moments.module.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,aAAa;AACjB;AACA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;;AAEtB","sourcesContent":[".head{\r\n    color: red;\r\n    position: relative;\r\n}\r\n\r\n.head img{\r\n    width: 100%;\r\n}\r\n\r\n.owner-info{\r\n    background-color: #eee;\r\n    position: absolute;\r\n    right: 20px;\r\n    bottom: -20px;\r\n}\r\n.avatar{\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 8px;\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"head": "Moments_head__JRr8X",
	"owner-info": "Moments_owner-info__3HQ0N",
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
      className: _Moments_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.onwerInfo
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9tZW50cy9Nb21lbnRzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vbWVudHMvaW5kZXguanMiXSwibmFtZXMiOlsiTW9tZW50cyIsInN0eWxlcyIsImhlYWQiLCJvbndlckluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsb0hBQXlEO0FBQ25HO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyx3QkFBd0IsbUJBQW1CLDJCQUEyQixLQUFLLGlDQUFpQyxvQkFBb0IsS0FBSyxtQ0FBbUMsK0JBQStCLDJCQUEyQixvQkFBb0Isc0JBQXNCLEtBQUssMkJBQTJCLG9CQUFvQixxQkFBcUIsMkJBQTJCLFNBQVMsV0FBVyxpR0FBaUcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsYUFBYSxnQ0FBZ0MsbUJBQW1CLDJCQUEyQixLQUFLLGtCQUFrQixvQkFBb0IsS0FBSyxvQkFBb0IsK0JBQStCLDJCQUEyQixvQkFBb0Isc0JBQXNCLEtBQUssWUFBWSxvQkFBb0IscUJBQXFCLDJCQUEyQixTQUFTLHVCQUF1QjtBQUN4Z0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUM5QixzQkFDSTtBQUFLLGFBQVMsRUFBRUMsMERBQU0sQ0FBQ0MsSUFBdkI7QUFBQSw0QkFDSTtBQUFLLFNBQUcsRUFBQyxjQUFUO0FBQXdCLFNBQUcsRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBRUQsMERBQU0sQ0FBQ0U7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7S0FQdUJILE87QUFPdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW9tZW50cy5mYzk1Zjg3OGJiNmZmZGU5NWIxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLk1vbWVudHNfaGVhZF9fSlJyOFh7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLk1vbWVudHNfaGVhZF9fSlJyOFggaW1ne1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLk1vbWVudHNfb3duZXItaW5mb19fM0hRME57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGJvdHRvbTogLTIwcHg7XFxyXFxufVxcclxcbi5Nb21lbnRzX2F2YXRhcl9fUTRyblV7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG5cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3BhZ2VzL21vbWVudHMvTW9tZW50cy5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCOztBQUV0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZCBpbWd7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ub3duZXItaW5mb3tcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMjBweDtcXHJcXG4gICAgYm90dG9tOiAtMjBweDtcXHJcXG59XFxyXFxuLmF2YXRhcntcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGhlaWdodDogODBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcblxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoZWFkXCI6IFwiTW9tZW50c19oZWFkX19KUnI4WFwiLFxuXHRcIm93bmVyLWluZm9cIjogXCJNb21lbnRzX293bmVyLWluZm9fXzNIUTBOXCIsXG5cdFwiYXZhdGFyXCI6IFwiTW9tZW50c19hdmF0YXJfX1E0cm5VXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL01vbWVudHMubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vbWVudHMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPScvbW9tZW50cy5qcGcnIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vbndlckluZm99PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9