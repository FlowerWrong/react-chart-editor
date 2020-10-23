"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UnconnectedDualNumericFraction = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _Field = _interopRequireDefault(require("./Field"));

var _NumericInput = _interopRequireDefault(require("../widgets/NumericInput"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _lib = require("../../lib");

var _nested_property = _interopRequireDefault(require("plotly.js/src/lib/nested_property"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var UnconnectedDualNumericFraction = /*#__PURE__*/function (_Component) {
  _inherits(UnconnectedDualNumericFraction, _Component);

  var _super = _createSuper(UnconnectedDualNumericFraction);

  function UnconnectedDualNumericFraction(props, context) {
    var _this;

    _classCallCheck(this, UnconnectedDualNumericFraction);

    _this = _super.call(this, props, context);
    _this.updatePlot = _this.updatePlot.bind(_assertThisInitialized(_this));
    _this.updatePlot2 = _this.updatePlot2.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UnconnectedDualNumericFraction, [{
    key: "updatePlot",
    value: function updatePlot(value) {
      this.props.updatePlot(this.props.percentage ? value / 100 : value);
    }
  }, {
    key: "updatePlot2",
    value: function updatePlot2(value) {
      this.props.updateContainer(_defineProperty({}, this.props.attr2, this.props.percentage ? value / 100 : value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          percentage = _this$props.percentage,
          multiValued = _this$props.multiValued,
          attr2 = _this$props.attr2,
          step = _this$props.step,
          min = _this$props.min,
          max = _this$props.max;
      var fullValue = percentage ? Math.round(100 * this.props.fullValue) : this.props.fullValue;
      var fullValue2 = (0, _nested_property.default)(this.context.fullContainer, attr2).get();

      if (percentage) {
        fullValue2 = Math.round(100 * fullValue2);
      }

      var placeholder;
      var placeholder2;

      if (multiValued) {
        placeholder = fullValue;
        placeholder2 = fullValue2;
        fullValue = '';
        fullValue2 = '';
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, _objectSpread(_objectSpread({}, this.props), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "numeric-input__wrapper",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_NumericInput.default, {
            value: fullValue,
            defaultValue: this.props.defaultValue,
            placeholder: placeholder,
            step: step,
            min: min,
            max: max,
            onChange: this.updatePlot,
            onUpdate: this.updatePlot,
            showArrows: !this.props.hideArrows,
            showSlider: false
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_NumericInput.default, {
            value: fullValue2,
            defaultValue: this.props.defaultValue,
            placeholder: placeholder2,
            step: step,
            min: min,
            max: max,
            onChange: this.updatePlot2,
            onUpdate: this.updatePlot2,
            showArrows: !this.props.hideArrows,
            showSlider: false
          })]
        })
      }));
    }
  }]);

  return UnconnectedDualNumericFraction;
}(_react.Component);

exports.UnconnectedDualNumericFraction = UnconnectedDualNumericFraction;
UnconnectedDualNumericFraction.propTypes = _objectSpread({
  defaultValue: _propTypes.default.any,
  fullValue: _propTypes.default.any,
  min: _propTypes.default.number,
  max: _propTypes.default.number,
  multiValued: _propTypes.default.bool,
  hideArrows: _propTypes.default.bool,
  showSlider: _propTypes.default.bool,
  step: _propTypes.default.number,
  updatePlot: _propTypes.default.func,
  attr2: _propTypes.default.any,
  percentage: _propTypes.default.bool
}, _Field.default.propTypes);
UnconnectedDualNumericFraction.contextTypes = {
  fullContainer: _propTypes.default.object
};
UnconnectedDualNumericFraction.displayName = 'UnconnectedDualNumericFraction';

var _default = (0, _lib.connectToContainer)(UnconnectedDualNumericFraction);

exports.default = _default;
//# sourceMappingURL=DualNumeric.js.map