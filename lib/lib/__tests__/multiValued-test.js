"use strict";

var _jsxRuntime = require("react/jsx-runtime");

var _components = require("../../components");

var _testUtils = require("../test-utils");

var _ = require("..");

var _enzyme = require("enzyme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('multiValued Numeric', function () {
  it('uses multiValued defaultContainer as default increment value', function () {
    var beforeUpdateLayout = jest.fn();
    var xaxisLowerRange = -30;

    var fixtureProps = _testUtils.fixtures.scatter({
      layout: {
        xaxis: {
          range: [xaxisLowerRange, 3]
        },
        yaxis: {
          range: [0, 3]
        }
      }
    });

    var AxesNumeric = (0, _.connectLayoutToPlot)((0, _.connectAxesToLayout)(_components.Numeric));
    (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, fixtureProps), {}, {
      beforeUpdateLayout: beforeUpdateLayout,
      plotly: _testUtils.plotly
    })), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(AxesNumeric, {
        attr: "range[0]"
      })
    }))).find('.js-numeric-increase').simulate('click');
    expect(beforeUpdateLayout).toBeCalled();
    var payload = beforeUpdateLayout.mock.calls[0][0];
    expect(payload.update).toEqual({
      'xaxis.range[0]': xaxisLowerRange + 1
    });
  });
});
//# sourceMappingURL=multiValued-test.js.map