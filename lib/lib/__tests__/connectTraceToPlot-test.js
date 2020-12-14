"use strict";

var _jsxRuntime = require("react/jsx-runtime");

var _NumericInput = _interopRequireDefault(require("../../components/widgets/NumericInput"));

var _connectTraceToPlot = _interopRequireDefault(require("../connectTraceToPlot"));

var _containers = require("../../components/containers");

var _fields = require("../../components/fields");

var _testUtils = require("../test-utils");

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Traces = [_containers.PlotlyPanel, _containers.PlotlyFold, _containers.PlotlySection].map(_connectTraceToPlot.default);

var Editor = function Editor(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread({}, _objectSpread({
    plotly: _testUtils.plotly,
    onUpdate: jest.fn()
  }, props)));
};

var defaultMarkerSize = 6;
Traces.forEach(function (Trace) {
  describe("<".concat(Trace.displayName, ">"), function () {
    it('wraps container with fullValue pointing to gd._fullData[i]', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(Editor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_containers.PlotlyPanel, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Trace, {
            traceIndexes: [0],
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
              label: "Marker Size",
              attr: "marker.size"
            })
          })
        })
      }))).find('[attr="marker.size"]').find(_NumericInput.default);
      expect(wrapper.prop('value')).toBe(defaultMarkerSize);
    });
    it('sends updates to gd.data', function () {
      var beforeUpdateTraces = jest.fn();
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(Editor, _objectSpread(_objectSpread({
        beforeUpdateTraces: beforeUpdateTraces
      }, _testUtils.fixtures.scatter()), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_containers.PlotlyPanel, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Trace, {
            traceIndexes: [0],
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
              label: "Marker Size",
              attr: "marker.size"
            })
          })
        })
      }))).find('[attr="marker.size"]').find(_NumericInput.default);
      var sizeUpdate = 200;
      wrapper.prop('onChange')(sizeUpdate);
      var payload = beforeUpdateTraces.mock.calls[0][0];
      expect(payload).toEqual({
        update: {
          'marker.size': sizeUpdate
        },
        traceIndexes: [0]
      });
    });
    it('automatically computes min and max defaults', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(Editor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_containers.PlotlyPanel, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Trace, {
            traceIndexes: [0],
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
              label: "marker size",
              attr: "marker.size"
            })
          })
        })
      }))).find('[attr="marker.size"]').find(_NumericInput.default);
      expect(wrapper.prop('min')).toBe(0);
      expect(wrapper.prop('max')).toBe(void 0);
    });
    it('has the correct name', function () {
      var name = 'Voldemort';
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(Editor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter({
        data: [{
          name: name
        }]
      })), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_containers.PlotlyPanel, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Trace, {
            traceIndexes: [0]
          })
        })
      }))).find(Trace).childAt(0);
      expect(wrapper.props().name).toBe(name);
    });
  });
});
//# sourceMappingURL=connectTraceToPlot-test.js.map