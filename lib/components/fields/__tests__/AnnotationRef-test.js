"use strict";

var _jsxRuntime = require("react/jsx-runtime");

var _derived = require("../derived");

var _Dropdown = _interopRequireDefault(require("../../widgets/Dropdown"));

var _ = require("../../");

var _testUtils = require("../../../lib/test-utils");

var _lib = require("../../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LayoutAnnoPanel = (0, _lib.connectLayoutToPlot)((0, _lib.connectAnnotationToLayout)(_.PlotlyPanel));
describe('<AnnotationRef>', function () {
  function render(props) {
    return (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({
      onUpdate: jest.fn()
    }, props), {}, {
      plotly: _testUtils.plotly
    })), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(LayoutAnnoPanel, {
        name: "Layout",
        annotationIndex: 0,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_derived.AnnotationRef, {
          attr: "yref"
        })
      })
    })));
  }

  it('computes axes options for all axes using title and ids as labels', function () {
    var fixtureProps = _testUtils.fixtures.scatter({
      layout: {
        annotations: [{
          text: 'thor'
        }]
      }
    });

    var drop = render(_objectSpread({}, fixtureProps)).find(_Dropdown.default);
    var options = drop.first().prop('options');
    expect(options.length).toBe(3);
    expect(options[0]).toEqual({
      label: 'Canvas',
      value: 'paper'
    });
    expect(options[1]).toEqual({
      label: 'Y 1',
      value: 'y'
    });
    expect(options[2]).toEqual({
      label: 'Y: yaxis2 title',
      value: 'y2'
    });
  });
  it('sends update for a[x|y]ref attr on [x|y]ref change', function () {
    var beforeUpdateLayout = jest.fn();

    var fixtureProps = _testUtils.fixtures.scatter({
      layout: {
        annotations: [{
          text: 'thor',
          ayref: 'y'
        }]
      }
    });

    var drop = render(_objectSpread({
      beforeUpdateLayout: beforeUpdateLayout
    }, fixtureProps)).find(_Dropdown.default);
    drop.prop('onChange')('y2');
    var update = beforeUpdateLayout.mock.calls[0][0].update;
    expect(update).toEqual({
      'annotations[0].ayref': 'y2',
      'annotations[0].yref': 'y2'
    });
  });
  it('does not send update for a[x|y]ref attr on "paper" change', function () {
    var beforeUpdateLayout = jest.fn();

    var fixtureProps = _testUtils.fixtures.scatter({
      layout: {
        annotations: [{
          text: 'thor',
          ayref: 'y'
        }]
      }
    });

    var drop = render(_objectSpread({
      beforeUpdateLayout: beforeUpdateLayout
    }, fixtureProps)).find(_Dropdown.default);
    drop.prop('onChange')('paper');
    var update = beforeUpdateLayout.mock.calls[0][0].update;
    expect(update).toEqual({
      'annotations[0].yref': 'paper'
    });
  });
  it('does not send update for a[x|y]ref when a[x|y]ref is pixel', function () {
    var beforeUpdateLayout = jest.fn();

    var fixtureProps = _testUtils.fixtures.scatter({
      layout: {
        annotations: [{
          text: 'thor',
          yref: 'y',
          ayref: 'pixel'
        }]
      }
    });

    var drop = render(_objectSpread({
      beforeUpdateLayout: beforeUpdateLayout
    }, fixtureProps)).find(_Dropdown.default);
    drop.prop('onChange')('y2');
    var update = beforeUpdateLayout.mock.calls[0][0].update;
    expect(update).toEqual({
      'annotations[0].yref': 'y2'
    });
  });
});
describe('<AnnotationArrowRef>', function () {
  function render(props) {
    return (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({
      onUpdate: jest.fn()
    }, props), {}, {
      plotly: _testUtils.plotly
    })), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(LayoutAnnoPanel, {
        name: "Layout",
        annotationIndex: 0,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_derived.AnnotationArrowRef, {
          attr: "ayref"
        })
      })
    })));
  }

  it('uses current value of axis ref as axes option when [x|y]ref set', function () {
    var fixtureProps = _testUtils.fixtures.scatter({
      layout: {
        annotations: [{
          text: 'thor',
          yref: 'y'
        }]
      }
    });

    var drop = render(_objectSpread({}, fixtureProps)).find(_Dropdown.default);
    var options = drop.first().prop('options');
    expect(options.length).toBe(2);
    expect(options[0]).toEqual({
      label: 'in pixels',
      value: 'pixel'
    });
    expect(options[1]).toEqual({
      label: 'according to axis',
      value: 'y'
    });
  });
  it('provides all axes options when [x|y]ref set to paper', function () {
    var fixtureProps = _testUtils.fixtures.scatter({
      layout: {
        annotations: [{
          text: 'thor',
          yref: 'paper'
        }]
      }
    });

    var drop = render(_objectSpread({}, fixtureProps)).find(_Dropdown.default);
    var options = drop.first().prop('options');
    expect(options.length).toBe(3);
    expect(options[0]).toEqual({
      label: 'in pixels',
      value: 'pixel'
    });
    expect(options[1]).toEqual({
      label: 'Y 1',
      value: 'y'
    });
    expect(options[2]).toEqual({
      label: 'Y: yaxis2 title',
      value: 'y2'
    });
  });
});
//# sourceMappingURL=AnnotationRef-test.js.map