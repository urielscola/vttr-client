webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/store/sagas/tools/index.js":
/*!****************************************!*\
  !*** ./src/store/sagas/tools/index.js ***!
  \****************************************/
/*! exports provided: getTools, addTool, deleteTool, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTools", function() { return getTools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTool", function() { return addTool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTool", function() { return deleteTool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toolsSaga; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _services_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/index.js */ "./src/services/index.js");
/* harmony import */ var _ducks_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ducks/tools */ "./src/store/ducks/tools/index.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getTools),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addTool),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deleteTool),
    _marked4 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(toolsSaga);





function getTools() {
  var _ref, data;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getTools$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services_index_js__WEBPACK_IMPORTED_MODULE_2__["ToolsService"].list);

        case 3:
          _ref = _context.sent;
          data = _ref.data;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_ducks_tools__WEBPACK_IMPORTED_MODULE_3__["Creators"].getToolsSuccess(data));

        case 7:
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log('getTools err: ', _context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 9]]);
}
function addTool(_ref2) {
  var tool, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addTool$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          tool = _ref2.tool;
          _context2.prev = 1;
          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services_index_js__WEBPACK_IMPORTED_MODULE_2__["ToolsService"].post, tool);

        case 4:
          data = _context2.sent;
          console.log(data);
          _context2.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_ducks_tools__WEBPACK_IMPORTED_MODULE_3__["Creators"].addToolSuccess(data));

        case 8:
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          console.log('addTool err: ', _context2.t0);

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 10]]);
}
function deleteTool(_ref3) {
  var id, _ref4, data;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deleteTool$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = _ref3.id;
          _context3.prev = 1;
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services_index_js__WEBPACK_IMPORTED_MODULE_2__["ToolsService"].delete, id);

        case 4:
          _ref4 = _context3.sent;
          data = _ref4.data;
          _context3.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_ducks_tools__WEBPACK_IMPORTED_MODULE_3__["Creators"].deleteToolSuccess(id));

        case 8:
          _context3.next = 13;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          console.log('deleteTool err: ', _context3.t0);

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 10]]);
}
function toolsSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function toolsSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_ducks_tools__WEBPACK_IMPORTED_MODULE_3__["Types"].GET_TOOLS, getTools), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_ducks_tools__WEBPACK_IMPORTED_MODULE_3__["Types"].ADD_TOOL, addTool), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_ducks_tools__WEBPACK_IMPORTED_MODULE_3__["Types"].DELETE_TOOL, deleteTool)]);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

/***/ })

})
//# sourceMappingURL=_app.js.4c3d5a441b904e0555b2.hot-update.js.map