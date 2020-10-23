"use strict";

var _jsxRuntime = require("react/jsx-runtime");

var _NumericInput = _interopRequireDefault(require("../../components/widgets/NumericInput"));

var _fields = require("../../components/fields");

var _testUtils = require("../test-utils");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('connectAnnotationToLayout', function () {
  it('sends update to layout.annotation[index]', function () {
    var beforeUpdateLayout = jest.fn();

    var fixture = _testUtils.fixtures.scatter({
      layout: {
        annotations: [{
          text: 'hodor'
        }]
      }
    });

    var ConnectedNumeric = (0, _.connectLayoutToPlot)((0, _.connectAnnotationToLayout)(_fields.Numeric));
    (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, fixture), {}, {
      beforeUpdateLayout: beforeUpdateLayout
    })), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ConnectedNumeric, {
        annotationIndex: 0,
        label: "Angle",
        attr: "textangle"
      })
    }))).find(_NumericInput.default).find('.js-numeric-increase').simulate('click');
    var payload = beforeUpdateLayout.mock.calls[0][0];
    expect(payload.update).toEqual({
      'annotations[0].textangle': 1
    });
  });
});
//# sourceMappingURL=connectAnnotationToLayout-test.js.map