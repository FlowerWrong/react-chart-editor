"use strict";

var _jsxRuntime = require("react/jsx-runtime");

var _ = require("..");

var _fields = require("../../fields");

var _testUtils = require("../../../lib/test-utils");

var _lib = require("../../../lib");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LayoutPanel = (0, _lib.connectLayoutToPlot)(_.PlotlyPanel);
describe('<AnnotationAccordion>', function () {
  it('generates annotation PlotlyFolds with name == text', function () {
    var fixture = _testUtils.fixtures.scatter({
      layout: {
        annotations: [{
          text: 'hodor'
        }, {
          text: 'rodoh'
        }]
      }
    });

    var folds = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, fixture), {}, {
      onUpdate: jest.fn()
    })), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(LayoutPanel, {
        name: "Annotations",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.AnnotationAccordion, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
            attr: "textangle"
          })
        })
      })
    }))).find(_.PlotlyFold);
    expect(folds.length).toBe(2);
    expect(folds.at(0).prop('name')).toBe('hodor');
    expect(folds.at(1).prop('name')).toBe('rodoh');
  });
  it('can add annotations', function () {
    var fixture = _testUtils.fixtures.scatter();

    var beforeUpdateLayout = jest.fn();
    var editor = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, fixture), {}, {
      beforeUpdateLayout: beforeUpdateLayout
    })), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(LayoutPanel, {
        name: "Annotations",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.AnnotationAccordion, {
          canAdd: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
            attr: "textangle"
          })
        })
      })
    })));
    editor.find('button.js-add-button').simulate('click');
    var payload = beforeUpdateLayout.mock.calls[0][0];
    expect(payload.update).toEqual({
      'annotations[0]': {
        text: 'new text'
      }
    });
  });
  it('can delete annotations', function () {
    var fixture = _testUtils.fixtures.scatter({
      layout: {
        annotations: [{
          text: 'hodor'
        }, {
          text: 'rodoh'
        }]
      }
    });

    var beforeDeleteAnnotation = jest.fn();
    var editor = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, fixture), {}, {
      beforeDeleteAnnotation: beforeDeleteAnnotation
    })), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(LayoutPanel, {
        name: "Annotations",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.AnnotationAccordion, {
          canAdd: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
            attr: "textangle"
          })
        })
      })
    })));
    editor.find('.js-fold__delete').at(0).simulate('click');
    var update = beforeDeleteAnnotation.mock.calls[0][0];
    expect(update.annotationIndex).toBe(0);
  });
});
//# sourceMappingURL=AnnotationAccordion-test.js.map