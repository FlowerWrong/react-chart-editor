"use strict";

var _jsxRuntime = require("react/jsx-runtime");

var _NumericInput = _interopRequireDefault(require("../../components/widgets/NumericInput"));

var _components = require("../../components");

var _testUtils = require("../test-utils");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('Plot Connection', function () {
  it('can connect Field directly with full connection pipeline', function () {
    var beforeUpdateLayout = jest.fn();

    var fixtureProps = _testUtils.fixtures.scatter({
      layout: {
        xaxis: {
          range: [0, 10]
        }
      }
    });

    var LayoutAxesNumeric = (0, _.connectLayoutToPlot)((0, _.connectAxesToLayout)((0, _.connectToContainer)(_components.Numeric)));
    (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, fixtureProps), {}, {
      beforeUpdateLayout: beforeUpdateLayout
    })), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(LayoutAxesNumeric, {
        label: "Min",
        attr: "range[0]"
      })
    }))).find('[attr="range[0]"]').find(_NumericInput.default).find('.js-numeric-increase').simulate('click');
    expect(beforeUpdateLayout).toBeCalled();
    var payload = beforeUpdateLayout.mock.calls[0][0];
    expect(payload).toEqual({
      update: {
        'xaxis.range[0]': 1
      }
    });
  });
  it('can connect to layout when connected within trace context', function () {
    var beforeUpdateLayout = jest.fn();

    var fixtureProps = _testUtils.fixtures.scatter({
      layout: {
        width: 10
      }
    });

    var TraceLayoutNumeric = (0, _.connectTraceToPlot)((0, _.connectLayoutToPlot)((0, _.connectToContainer)(_components.Numeric)));
    (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, fixtureProps), {}, {
      beforeUpdateLayout: beforeUpdateLayout
    })), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TraceLayoutNumeric, {
        traceIndexes: [0],
        label: "Width",
        attr: "width"
      })
    }))).find('[attr="width"]').find(_NumericInput.default).find('.js-numeric-increase').simulate('click');
    expect(beforeUpdateLayout).toBeCalled();
    var payload = beforeUpdateLayout.mock.calls[0][0];
    expect(payload).toEqual({
      update: {
        width: 11
      }
    });
  }); // see https://github.com/plotly/react-chart-editor/issues/58#issuecomment-345492794

  it("can't find correct Container when PlotlySection divides Trace and Layout", function () {
    var fixtureProps = _testUtils.fixtures.scatter({
      layout: {
        width: 10
      }
    });

    var DeeplyConnectedNumeric = (0, _.connectTraceToPlot)((0, _.connectLayoutToPlot)((0, _.connectToContainer)(_components.Numeric, {
      modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
        plotProps.connectToContainerModifiedPlotProp = true;
      }
    })));
    var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _objectSpread({}, fixtureProps)), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
        name: "Canvas",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(DeeplyConnectedNumeric, {
          traceIndexes: [0],
          label: "Width",
          attr: "width"
        })
      })
    }))).find('[attr="width"]').find(_components.Numeric); // It is 0 because PlotlySection is passing _its_ context to unpackPlotProps.
    // The context of PlotlySection is Trace not layout and width isn't defined
    // in Trace. See next test for workaround.

    expect(wrapper.length).toBe(0);
  });
  it('can modify plotProps with <Trace><PlotlySection><LayoutComp>', function () {
    var fixtureProps = _testUtils.fixtures.scatter({
      layout: {
        width: 10
      }
    });

    var TracePanel = (0, _.connectTraceToPlot)(_components.PlotlyPanel);
    var MAXWIDTH = 1000;
    var LayoutSection = (0, _.connectLayoutToPlot)(_components.PlotlySection);
    var ModifiedNumeric = (0, _.connectToContainer)(_components.Numeric, {
      modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
        plotProps.max = MAXWIDTH;
      }
    });
    var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _objectSpread({}, fixtureProps)), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TracePanel, {
        traceIndexes: [0],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(LayoutSection, {
          name: "Canvas",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ModifiedNumeric, {
            traceIndexes: [0],
            label: "Width",
            attr: "width"
          })
        })
      })
    }))).find('[attr="width"]').find(_NumericInput.default);
    expect(wrapper.prop('max')).toBe(MAXWIDTH);
  });
});
//# sourceMappingURL=nestedContainerConnections-test.js.map