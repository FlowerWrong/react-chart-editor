"use strict";

var _jsxRuntime = require("react/jsx-runtime");

var _Field = _interopRequireDefault(require("../Field"));

var _Radio = _interopRequireDefault(require("../Radio"));

var _containers = require("../../containers");

var _testUtils = require("../../../lib/test-utils");

var _lib = require("../../../lib");

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Trace = (0, _lib.connectTraceToPlot)(_containers.PlotlySection);
describe('<Radio>', function () {
  it('enables <Field> centering by default', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({
      plotly: _testUtils.plotly
    }, _testUtils.fixtures.area()), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Trace, {
        traceIndexes: [0],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Radio.default, {
          label: "Connect Gaps",
          attr: "connectgaps",
          options: [{
            label: 'Connect',
            value: true
          }, {
            label: 'Blank',
            value: false
          }]
        })
      })
    }))).find(_Field.default);
    expect(wrapper.prop('center')).toBe(true);
  });
  it('permits <Field> centering to be disabled', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({
      plotly: _testUtils.plotly
    }, _testUtils.fixtures.area()), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Trace, {
        traceIndexes: [0],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Radio.default, {
          center: false,
          label: "Connect Gaps",
          attr: "connectgaps",
          options: [{
            label: 'Connect',
            value: true
          }, {
            label: 'Blank',
            value: false
          }]
        })
      })
    }))).find(_Field.default);
    expect(wrapper.prop('center')).toBe(false);
  });
});
//# sourceMappingURL=Radio-test.js.map