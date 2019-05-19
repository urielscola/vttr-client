webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/store/ducks/tools/index.js":
/*!****************************************!*\
  !*** ./src/store/ducks/tools/index.js ***!
  \****************************************/
/*! exports provided: Types, Creators, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Types", function() { return Types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creators", function() { return Creators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tools; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");


var Types = {
  GET_TOOLS: 'tools/GET_TOOLS',
  GET_TOOLS_SUCCESS: 'tools/GET_TOOLS_SUCCESS',
  ADD_TOOL: 'tools/ADD_TOOL',
  ADD_TOOL_SUCCESS: 'tools/ADD_CARD_SUCCESS',
  DELETE_TOOL: 'tools/DELETE_TOOL',
  DELETE_TOOL_SUCCESS: 'tools/DELETE_TOOL_SUCCESS'
};
var INITIAL_STATE = {
  list: null,
  loading: false
};
var Creators = {
  getTools: function getTools() {
    return {
      type: Types.GET_TOOLS
    };
  },
  getToolsSuccess: function getToolsSuccess(payload) {
    return {
      type: Types.GET_TOOLS_SUCCESS,
      payload: payload
    };
  },
  addTool: function addTool(fields) {
    return {
      type: Types.ADD_TOOL,
      payload: {
        fields: fields
      }
    };
  },
  addToolSuccess: function addToolSuccess(payload) {
    return {
      type: Types.ADD_TOOL_SUCCESS,
      payload: payload
    };
  },
  deleteTool: function deleteTool(id) {
    return {
      type: Types.DELETE_TOOL,
      payload: {
        id: id
      }
    };
  },
  deleteToolSuccess: function deleteToolSuccess(id) {
    return {
      type: Types.DELETE_TOOL_SUCCESS,
      payload: {
        id: id
      }
    };
  }
};
function tools() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case Types.GET_TOOLS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        loading: true
      });

    case Types.GET_TOOLS_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        list: payload.data,
        loading: false
      });

    case Types.ADD_TOOL:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        loading: true
      });

    case Types.ADD_TOOL_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        list: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.list), [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, payload.data)]),
        loading: false
      });

    case Types.DELETE_TOOL:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        loading: true
      });

    case Types.DELETE_TOOL_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        list: state.list.filter(function (item) {
          return item.id !== payload.id;
        }),
        loading: false
      });

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.c70298b018cc972e2355.hot-update.js.map