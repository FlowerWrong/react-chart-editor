"use strict";

var _jsxRuntime = require("react/jsx-runtime");

var _Dropdown = _interopRequireDefault(require("../../widgets/Dropdown"));

var _TraceSelector = _interopRequireDefault(require("../TraceSelector"));

var _containers = require("../../containers");

var _testUtils = require("../../../lib/test-utils");

var _lib = require("../../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('TraceSelector', function () {
  var TraceSection = (0, _lib.connectTraceToPlot)(_containers.PlotlySection);
  it('sets mode to markers if trace scatter, no data or mode provided', function () {
    var editorProps = _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter({
      data: [{
        mode: null,
        xsrc: null,
        ysrc: null
      }]
    })), {}, {
      onUpdate: jest.fn()
    });

    var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, editorProps), {}, {
      plotly: _testUtils.plotly,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TraceSection, {
        traceIndexes: [0],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TraceSelector.default, {
          attr: "type"
        })
      })
    }))).find(_TraceSelector.default);
    var innerDropdown = wrapper.find(_Dropdown.default);
    expect(innerDropdown.prop('value')).toEqual('scatter');
  });
  it('if no data provided, but mode is provided, displays correct trace type', function () {
    var editorProps = _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter({
      data: [{
        mode: 'lines+markers',
        xsrc: null,
        ysrc: null
      }]
    })), {}, {
      onUpdate: jest.fn()
    });

    var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, editorProps), {}, {
      plotly: _testUtils.plotly,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TraceSection, {
        traceIndexes: [0],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TraceSelector.default, {
          attr: "type"
        })
      })
    }))).find(_TraceSelector.default);
    var innerDropdown = wrapper.find(_Dropdown.default);
    expect(innerDropdown.prop('value')).toEqual('line');
  });
  it('if data provided, but no mode is provided, chooses mode according to fullData', function () {
    var editorProps = _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
      onUpdate: jest.fn()
    });

    expect(!editorProps.graphDiv.data[0].mode).toBe(true);
    expect(editorProps.graphDiv._fullData[0].mode).toBe('lines+markers');
    var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, editorProps), {}, {
      plotly: _testUtils.plotly,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TraceSection, {
        traceIndexes: [0],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TraceSelector.default, {
          attr: "type"
        })
      })
    }))).find(_TraceSelector.default);
    var innerDropdown = wrapper.find(_Dropdown.default);
    expect(innerDropdown.prop('value')).toEqual('line');
  });
  it('interprets scatter + fill as type=area', function () {
    var editorProps = _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter({
      data: [{
        fill: 'tonexty'
      }]
    })), {}, {
      onUpdate: jest.fn()
    });

    var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, editorProps), {}, {
      plotly: _testUtils.plotly,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TraceSection, {
        traceIndexes: [0],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TraceSelector.default, {
          attr: "type"
        })
      })
    }))).find(_TraceSelector.default);
    var innerDropdown = wrapper.find(_Dropdown.default);
    expect(innerDropdown.prop('value')).toEqual('area');
  });
  it('interprets scatter + mode=lines as type=line', function () {
    var editorProps = _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter({
      data: [{
        mode: 'lines'
      }]
    })), {}, {
      onUpdate: jest.fn()
    });

    var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, editorProps), {}, {
      plotly: _testUtils.plotly,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TraceSection, {
        traceIndexes: [0],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TraceSelector.default, {
          attr: "type"
        })
      })
    }))).find(_TraceSelector.default);
    var innerDropdown = wrapper.find(_Dropdown.default);
    expect(innerDropdown.prop('value')).toEqual('line');
  });
  it('interprets scatter + mode=lines+markers as type=line', function () {
    var editorProps = _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter({
      data: [{
        mode: 'lines+markers'
      }]
    })), {}, {
      onUpdate: jest.fn()
    });

    var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, editorProps), {}, {
      plotly: _testUtils.plotly,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TraceSection, {
        traceIndexes: [0],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TraceSelector.default, {
          attr: "type"
        })
      })
    }))).find(_TraceSelector.default);
    var innerDropdown = wrapper.find(_Dropdown.default);
    expect(innerDropdown.prop('value')).toEqual('line');
  });
  it('updates type=scatter mode=lines when type=line', function () {
    var beforeUpdateTraces = jest.fn();

    var editorProps = _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter({
      data: [{
        type: 'scatter',
        mode: 'markers'
      }]
    })), {}, {
      beforeUpdateTraces: beforeUpdateTraces,
      plotly: _testUtils.plotly
    });

    var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, editorProps), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TraceSection, {
        traceIndexes: [0],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TraceSelector.default, {
          attr: "type"
        })
      })
    }))).find(_TraceSelector.default);
    var innerDropdown = wrapper.find(_Dropdown.default);
    innerDropdown.prop('onChange')('line');
    var payload = beforeUpdateTraces.mock.calls[0][0];
    expect(payload.update).toEqual({
      stackgroup: null,
      mode: 'lines',
      type: 'scatter'
    });
  });
  it('updates type=scatter stackgroup=1 when type=area', function () {
    var beforeUpdateTraces = jest.fn();

    var editorProps = _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter({
      data: [{
        type: 'scatter',
        mode: 'markers'
      }]
    })), {}, {
      beforeUpdateTraces: beforeUpdateTraces,
      plotly: _testUtils.plotly
    });

    var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, editorProps), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TraceSection, {
        traceIndexes: [0],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TraceSelector.default, {
          attr: "type"
        })
      })
    }))).find(_TraceSelector.default);
    var innerDropdown = wrapper.find(_Dropdown.default);
    innerDropdown.prop('onChange')('area');
    var payload = beforeUpdateTraces.mock.calls[0][0];
    expect(payload.update).toEqual({
      type: 'scatter',
      mode: 'lines',
      stackgroup: 1
    });
  });
});
//# sourceMappingURL=TraceSelector-test.js.map