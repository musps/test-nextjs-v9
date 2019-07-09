(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/user/[name]/comments.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fuser%2F%5Bname%5D%2Fcomments&absolutePagePath=%2FUsers%2Fysercanz%2FWorkspaces%2Fworkspace.own%2Ftest-nextjs-v9%2Fpages%2Fuser%2F%5Bname%5D%2Fcomments.js!./":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fuser%2F%5Bname%5D%2Fcomments&absolutePagePath=%2FUsers%2Fysercanz%2FWorkspaces%2Fworkspace.own%2Ftest-nextjs-v9%2Fpages%2Fuser%2F%5Bname%5D%2Fcomments.js ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[name]/comments", function() {
      var page = __webpack_require__(/*! ./pages/user/[name]/comments.js */ "./pages/user/[name]/comments.js")
      if(true) {
        module.hot.accept(/*! ./pages/user/[name]/comments.js */ "./pages/user/[name]/comments.js", function() {
          if(!next.router.components["/user/[name]/comments"]) return
          var updatedPage = __webpack_require__(/*! ./pages/user/[name]/comments.js */ "./pages/user/[name]/comments.js")
          next.router.update("/user/[name]/comments", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_7aff549c98b978433226 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_7aff549c98b978433226 */ "dll-reference dll_7aff549c98b978433226"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/user/[name]/comments.js":
/*!***************************************!*\
  !*** ./pages/user/[name]/comments.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ysercanz/Workspaces/workspace.own/test-nextjs-v9/pages/user/[name]/comments.js";


var Home = function Home(_ref) {
  var name = _ref.name;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1
    },
    __self: this
  }, "Comments of ", name);
};

Home.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  var name = query.name;
  return {
    name: name
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 2:
/*!********************************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fuser%2F%5Bname%5D%2Fcomments&absolutePagePath=%2FUsers%2Fysercanz%2FWorkspaces%2Fworkspace.own%2Ftest-nextjs-v9%2Fpages%2Fuser%2F%5Bname%5D%2Fcomments.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fuser%2F%5Bname%5D%2Fcomments&absolutePagePath=%2FUsers%2Fysercanz%2FWorkspaces%2Fworkspace.own%2Ftest-nextjs-v9%2Fpages%2Fuser%2F%5Bname%5D%2Fcomments.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fuser%2F%5Bname%5D%2Fcomments&absolutePagePath=%2FUsers%2Fysercanz%2FWorkspaces%2Fworkspace.own%2Ftest-nextjs-v9%2Fpages%2Fuser%2F%5Bname%5D%2Fcomments.js!./");


/***/ }),

/***/ "dll-reference dll_7aff549c98b978433226":
/*!*******************************************!*\
  !*** external "dll_7aff549c98b978433226" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_7aff549c98b978433226;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=comments.js.map