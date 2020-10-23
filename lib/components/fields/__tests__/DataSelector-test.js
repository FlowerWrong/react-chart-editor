"use strict";

var _jsxRuntime = require("react/jsx-runtime");

var _DataSelector = _interopRequireDefault(require("../DataSelector"));

var _Dropdown = _interopRequireDefault(require("../../widgets/Dropdown"));

var _testUtils = require("../../../lib/test-utils");

var _connectTraceToPlot = _interopRequireDefault(require("../../../lib/connectTraceToPlot"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function render() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var children = arguments.length > 1 ? arguments[1] : undefined;

  var _overrides$attr = overrides.attr,
      attr = _overrides$attr === void 0 ? 'x' : _overrides$attr,
      props = _objectWithoutProperties(overrides, ["attr"]);

  var editorProps = _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
    onUpdate: jest.fn()
  }, props); // return the inner-most plot connected dropdown (last)


  return (0, _enzyme.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, editorProps), {}, {
    plotly: _testUtils.plotly,
    children: children
  }))).find("[attr=\"".concat(attr, "\"]")).last();
}

describe('DataSelector', function () {
  it('contains options defined by dataSources', function () {
    var _fixtures$scatter = _testUtils.fixtures.scatter(),
        dataSources = _fixtures$scatter.dataSources;

    var wrapper = render({
      dataSources: dataSources
    }).find(_Dropdown.default);
    expect(wrapper.prop('options')).toEqual([{
      label: 'xCol',
      value: 'x1'
    }, {
      label: 'yCol',
      value: 'y1'
    }, {
      label: 'yCol2',
      value: 'y2'
    }]);
  });
  it('uses gd.data dataSrc value not fullValue when data_array', function () {
    var wrapper = render().find(_Dropdown.default);
    expect(wrapper.prop('value')).toBe('x1');
  }); // arrayOk not implemented in defaultEditor yet

  it('uses gd.data dataSrc value not fullValue when arrayOk', function () {});
  it('calls updatePlot with srcAttr and data when present', function () {
    var beforeUpdateTraces = jest.fn();
    var wrapper = render({
      beforeUpdateTraces: beforeUpdateTraces
    }).find(_Dropdown.default);
    beforeUpdateTraces.mockClear();
    wrapper.prop('onChange')('y1');
    expect(beforeUpdateTraces.mock.calls[0][0]).toEqual({
      update: {
        'meta.columnNames.x': 'yCol',
        xsrc: 'y1',
        x: [2, 3, 4]
      },
      traceIndexes: [1]
    });
  });
  it('is invisible when a data src does not exist for trace type', function () {
    var wrapper = render().find(_Dropdown.default);
    expect(wrapper.exists()).toBe(true);
    wrapper = render(_objectSpread(_objectSpread({}, _testUtils.fixtures.pie()), {}, {
      attr: 'x'
    })).find(_Dropdown.default);
    expect(wrapper.exists()).toBe(false);
  });
  it('uses trace specific label', function () {
    var TraceDataSelector = (0, _connectTraceToPlot.default)(_DataSelector.default);
    var wrapper = render({}, /*#__PURE__*/(0, _jsxRuntime.jsx)(TraceDataSelector, {
      traceIndexes: [0],
      label: {
        pie: 'hodor',
        '*': 'rodoh'
      },
      attr: "x"
    }));
    expect(wrapper.find('.field__title-text').text()).toContain('rodoh');
  });
});
//# sourceMappingURL=DataSelector-test.js.map