"use strict";

var _jsxRuntime = require("react/jsx-runtime");

var _PlotlySection = _interopRequireDefault(require("../PlotlySection"));

var _derived = require("../derived");

var _fields = require("../../fields");

var _testUtils = require("../../../lib/test-utils");

var _lib = require("../../../lib");

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TraceSection = (0, _lib.connectTraceToPlot)(_PlotlySection.default);
describe('PlotlySection', function () {
  it('is visible if it contains any visible children', function () {
    // mode is visible with scatter. Hole is not visible. PlotlySection should show.
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({
      onUpdate: jest.fn()
    }, _testUtils.fixtures.scatter()), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(TraceSection, {
        name: "test-section",
        traceIndexes: [0],
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Flaglist, {
          attr: "mode",
          options: [{
            label: 'Lines',
            value: 'lines'
          }, {
            label: 'Points',
            value: 'markers'
          }]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
          attr: "hole",
          min: 0,
          max: 1,
          step: 0.1
        })]
      })
    }))).find(_PlotlySection.default);
    expect(wrapper.children().length).toBe(1);
  });
  it('is visible if it contains any non attr children', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({
      onUpdate: jest.fn()
    }, _testUtils.fixtures.scatter()), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PlotlySection.default, {
        name: "test-section",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "extra",
          children: "special extra"
        })
      })
    }))).find(_PlotlySection.default);
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.find('.extra').text()).toBe('special extra');
  });
  it('is not visible if it contains no visible children', function () {
    // pull and hole are not scatter attrs. PlotlySection should not show.
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({
      onUpdate: jest.fn()
    }, _testUtils.fixtures.scatter()), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(TraceSection, {
        name: "test-section",
        traceIndexes: [0],
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
          attr: "pull",
          min: 0,
          max: 1,
          step: 0.1,
          traceIndexes: [0]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
          attr: "hole",
          min: 0,
          max: 1,
          step: 0.1,
          traceIndexes: [0]
        })]
      })
    }))).find(_PlotlySection.default);
    expect(wrapper.find(_fields.Numeric).exists()).toBe(false);
  });
  it('will hide with Info children when attrs not defined', function () {
    var TraceSection = (0, _lib.connectTraceToPlot)(_PlotlySection.default);
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({
      onUpdate: jest.fn()
    }, _testUtils.fixtures.scatter()), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(TraceSection, {
        name: "test-section",
        traceIndexes: [0],
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
          attr: "badattr",
          traceIndexes: [0]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Info, {
          children: "INFO"
        })]
      })
    }))).find(_PlotlySection.default);
    expect(wrapper.find(_fields.Info).length).toBe(0);
  });
});
describe('TraceTypeSection', function () {
  it('will show when the type is right', function () {
    var TraceSection = (0, _lib.connectTraceToPlot)(_derived.TraceTypeSection);
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({
      onUpdate: jest.fn()
    }, _testUtils.fixtures.scatter()), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TraceSection, {
        name: "test-section",
        traceIndexes: [0],
        traceTypes: ['scatter'],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Flaglist, {
          attr: "mode",
          options: [{
            label: 'Lines',
            value: 'lines'
          }, {
            label: 'Points',
            value: 'markers'
          }]
        })
      })
    }))).find(_PlotlySection.default);
    expect(wrapper.find(_fields.Flaglist).length).toBe(1);
  });
  it('will hide when the type is wrong', function () {
    var TraceSection = (0, _lib.connectTraceToPlot)(_derived.TraceTypeSection);
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({
      onUpdate: jest.fn()
    }, _testUtils.fixtures.scatter()), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TraceSection, {
        name: "test-section",
        traceIndexes: [0],
        traceTypes: ['heatmap'],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Flaglist, {
          attr: "mode",
          options: [{
            label: 'Lines',
            value: 'lines'
          }, {
            label: 'Points',
            value: 'markers'
          }]
        })
      })
    }))).find(_PlotlySection.default);
    expect(wrapper.find(_fields.Flaglist).length).toBe(0);
  });
});
//# sourceMappingURL=PlotlySection-test.js.map