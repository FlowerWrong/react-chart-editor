"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DOWN_ARROW = exports.UP_ARROW = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _EditableText = _interopRequireDefault(require("./EditableText"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fastIsnumeric = _interopRequireDefault(require("fast-isnumeric"));

var _reactRangeslider = _interopRequireDefault(require("react-rangeslider"));

var _plotlyIcons = require("plotly-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var UP_ARROW = 38;
exports.UP_ARROW = UP_ARROW;
var DOWN_ARROW = 40;
exports.DOWN_ARROW = DOWN_ARROW;

var NumericInput = /*#__PURE__*/function (_Component) {
  _inherits(NumericInput, _Component);

  var _super = _createSuper(NumericInput);

  function NumericInput(props) {
    var _this;

    _classCallCheck(this, NumericInput);

    _this = _super.call(this, props);
    _this.state = {
      value: props.value,
      numericInputClassName: _this.getNumericInputClassName(props.value)
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.updateValue = _this.updateValue.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.onWheel = _this.onWheel.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NumericInput, [{
    key: "getNumericInputClassName",
    value: function getNumericInputClassName(value) {
      return (0, _fastIsnumeric.default)(value) || value === '' ? "numeric-input__number ".concat(this.props.editableClassName ? this.props.editableClassName : '') : "numeric-input__number +error ".concat(this.props.editableClassName ? this.props.editableClassName : '');
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.state.value) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      switch (e.keyCode) {
        case UP_ARROW:
          this.incrementValue('increase');
          break;

        case DOWN_ARROW:
          this.incrementValue('decrease');
          break;

        default:
          break;
      }
    }
  }, {
    key: "onWheel",
    value: function onWheel(e) {
      e.stopPropagation();
      e.preventDefault();

      if (e.deltaY > 0) {
        this.incrementValue('increase');
      } else {
        this.incrementValue('decrease');
      }
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      this.setState({
        value: value,
        numericInputClassName: this.getNumericInputClassName(value)
      });
    }
  }, {
    key: "updateValue",
    value: function updateValue(newValue) {
      var _this$props = this.props,
          max = _this$props.max,
          min = _this$props.min,
          integerOnly = _this$props.integerOnly;
      var updatedValue = newValue;

      if (updatedValue === '') {
        this.setState({
          value: this.props.value,
          numericInputClassName: this.getNumericInputClassName(this.props.value)
        });
        return;
      } // When the user blurs on non-numeric data reset the component
      // to the last known good value (this.props.value).


      if (!(0, _fastIsnumeric.default)(updatedValue)) {
        this.setState({
          value: updatedValue,
          numericInputClassName: this.getNumericInputClassName(updatedValue)
        });
        return;
      }

      updatedValue = Number(updatedValue);

      if (integerOnly) {
        updatedValue = Math.floor(updatedValue);
      }

      if ((0, _fastIsnumeric.default)(min)) {
        updatedValue = Math.max(min, updatedValue);
      }

      if ((0, _fastIsnumeric.default)(max)) {
        updatedValue = Math.min(max, updatedValue);
      }

      this.props.onUpdate(updatedValue);
    }
  }, {
    key: "incrementValue",
    value: function incrementValue(direction) {
      var _this$props2 = this.props,
          defaultValue = _this$props2.defaultValue,
          min = _this$props2.min,
          _this$props2$step = _this$props2.step,
          step = _this$props2$step === void 0 ? 1 : _this$props2$step,
          _this$props2$stepmode = _this$props2.stepmode,
          stepmode = _this$props2$stepmode === void 0 ? 'absolute' : _this$props2$stepmode;
      var value = this.state.value;
      var valueUpdate;

      if ((0, _fastIsnumeric.default)(value)) {
        var x = parseFloat(value);
        var absMode = stepmode === 'absolute';

        if (direction === 'increase') {
          valueUpdate = absMode ? x + step : x * (1 + step);
        } else {
          valueUpdate = absMode ? x - step : x / (1 + step);
        }
      } else {
        // if we are multi-valued and the user is incrementing or decrementing
        // update with some sane value so we can "break" out of multi-valued mode.
        if ((0, _fastIsnumeric.default)(defaultValue)) {
          valueUpdate = defaultValue;
        } else {
          // TODO smarter handling depending if user decrements or increments?
          valueUpdate = min || 0;
        }
      } // incrementers blur the line between blur and onChange.


      this.updateValue(valueUpdate);
    }
  }, {
    key: "renderArrows",
    value: function renderArrows() {
      if (!this.props.showArrows || this.props.showSlider) {
        return null;
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "numeric-input__caret-box",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "numeric-input__caret js-numeric-increase",
          onClick: this.incrementValue.bind(this, 'increase'),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_plotlyIcons.CarretUpIcon, {
            className: "numeric-top-caret-modifier"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "numeric-input__caret js-numeric-decrease",
          onClick: this.incrementValue.bind(this, 'decrease'),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_plotlyIcons.CarretDownIcon, {
            className: "numeric-bottom-caret-modifier"
          })
        })]
      });
    }
  }, {
    key: "renderSlider",
    value: function renderSlider() {
      if (!this.props.showSlider) {
        return null;
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRangeslider.default, {
        min: this.props.min,
        max: this.props.max,
        step: this.props.step,
        value: parseFloat(this.state.value),
        onChange: this.updateValue,
        tooltip: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "numeric-input__wrapper",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_EditableText.default, {
          className: this.state.numericInputClassName,
          placeholder: this.props.placeholder,
          text: this.state.value,
          type: "text",
          onChange: this.onChange,
          onUpdate: this.updateValue,
          onKeyDown: this.onKeyDown,
          onWheel: this.onWheel
        }), this.renderArrows(), this.renderSlider(), this.props.units ? this.props.units : null]
      });
    }
  }]);

  return NumericInput;
}(_react.Component);

exports.default = NumericInput;
NumericInput.propTypes = {
  defaultValue: _propTypes.default.any,
  editableClassName: _propTypes.default.string,
  integerOnly: _propTypes.default.bool,
  max: _propTypes.default.number,
  min: _propTypes.default.number,
  onUpdate: _propTypes.default.func.isRequired,
  placeholder: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  showArrows: _propTypes.default.bool,
  showSlider: _propTypes.default.bool,
  step: _propTypes.default.number,
  stepmode: _propTypes.default.string,
  value: _propTypes.default.any,
  units: _propTypes.default.string
};
NumericInput.defaultProps = {
  showArrows: true
};
//# sourceMappingURL=NumericInput.js.map