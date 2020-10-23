"use strict";

var _jsxRuntime = require("react/jsx-runtime");

var _fields = require("../../fields");

var _ = require("..");

var _testUtils = require("../../../lib/test-utils");

var _lib = require("../../../lib");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TraceFold = (0, _lib.connectTraceToPlot)(_.PlotlyFold);
describe('<PlotlyFold>', function () {
  it('shows deleteContainer button when deleteContainer function present and canDelete is true', function () {
    var withoutDelete = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.PlotlyPanel, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.PlotlyFold, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
            attr: "opacity"
          })
        })
      })
    }))).find('.js-fold__delete');
    expect(withoutDelete.exists()).toBe(false);
    var withDelete = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.PlotlyPanel, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TraceFold, {
          traceIndexes: [0],
          canDelete: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
            attr: "opacity"
          })
        })
      })
    }))).find('.js-fold__delete');
    expect(withDelete.exists()).toBe(true);
  });
  it('calls deleteContainer when function present and canDelete is true', function () {
    var beforeDeleteTrace = jest.fn();
    (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
      beforeDeleteTrace: beforeDeleteTrace,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.PlotlyPanel, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TraceFold, {
          traceIndexes: [0],
          canDelete: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
            attr: "opacity"
          })
        })
      })
    }))).find('.js-fold__delete').simulate('click');
    var payload = beforeDeleteTrace.mock.calls[0][0];
    expect(payload).toEqual({
      axesToBeGarbageCollected: [],
      subplotToBeGarbageCollected: null,
      traceIndexes: [0]
    });
  });
});
//# sourceMappingURL=Fold-test.js.map