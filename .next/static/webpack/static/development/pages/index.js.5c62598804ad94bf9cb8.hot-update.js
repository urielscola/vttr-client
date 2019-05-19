webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Grid */ "./src/components/Grid/index.js");
/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Header */ "./src/components/Header/index.js");
/* harmony import */ var _src_components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Card */ "./src/components/Card/index.js");
/* harmony import */ var _src_components_Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Actions */ "./src/components/Actions/index.js");
/* harmony import */ var _src_containers_Tools_withTools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/containers/Tools/withTools */ "./src/containers/Tools/withTools.js");







var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Grid__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Actions__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_containers_Tools_withTools__WEBPACK_IMPORTED_MODULE_5__["default"])(Home));

/***/ }),

/***/ "./src/containers/Tools/withTools.js":
/*!*******************************************!*\
  !*** ./src/containers/Tools/withTools.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withTools; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_ducks_tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/ducks/tools */ "./src/store/ducks/tools/index.js");











var mapStateToProps = function mapStateToProps(state) {
  return {
    tools: state.tools
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getTools: function getTools() {
      return dispatch(_store_ducks_tools__WEBPACK_IMPORTED_MODULE_9__["Creators"].getTools());
    },
    addTool: function addTool(payload) {
      return dispatch(_store_ducks_tools__WEBPACK_IMPORTED_MODULE_9__["Creators"].addTool(payload));
    },
    deleteTool: function deleteTool(payload) {
      return dispatch(_store_ducks_tools__WEBPACK_IMPORTED_MODULE_9__["Creators"].deleteTool(payload));
    }
  };
};

function withTools(Composed) {
  var withToolsComponent =
  /*#__PURE__*/
  function (_PureComponent) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(withToolsComponent, _PureComponent);

    function withToolsComponent() {
      var _getPrototypeOf2;

      var _this;

      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, withToolsComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(withToolsComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

      Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "render", function () {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Composed, _this.props);
      });

      return _this;
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(withToolsComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.getTools();
      }
    }]);

    return withToolsComponent;
  }(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(withToolsComponent);
}

/***/ })

})
//# sourceMappingURL=index.js.5c62598804ad94bf9cb8.hot-update.js.map