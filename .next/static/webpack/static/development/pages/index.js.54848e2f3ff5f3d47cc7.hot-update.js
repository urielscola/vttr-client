webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Card/index.js":
/*!**************************************!*\
  !*** ./src/components/Card/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tag */ "./src/components/Tag/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/Card/styles.js");




var remove = function remove(id) {
  console.log(id);
};

var Card = function Card(_ref) {
  var _ref$card = _ref.card,
      title = _ref$card.title,
      description = _ref$card.description,
      tags = _ref$card.tags;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["CardDescription"], null, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["CardTags"], null, tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tag__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: tag,
      name: tag
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Remove"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/close.svg",
    alt: "Remove"
  }), "remove"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Card));

/***/ })

})
//# sourceMappingURL=index.js.54848e2f3ff5f3d47cc7.hot-update.js.map