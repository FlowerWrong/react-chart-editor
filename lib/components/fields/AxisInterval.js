"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UnconnectedAxisInterval = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _Field = _interopRequireDefault(require("./Field"));

var _Dropdown = _interopRequireDefault(require("../widgets/Dropdown"));

var _NumericInput = _interopRequireDefault(require("../widgets/NumericInput"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lib = require("../../lib");

var _lib2 = require("plotly.js/src/lib");

var _dates = require("plotly.js/src/lib/dates");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var MILLISECONDS_IN_SECOND = 1000;
var MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * 60; // eslint-disable-line

var MILLISECONDS_IN_DAY = MILLISECONDS_IN_MINUTE * 60 * 24; // eslint-disable-line

var DAYS_IN_MONTH = 30;
var MONTHS_IN_YEAR = 12; //eslint-disable-line

function twoDecimalsRound(value) {
  return Math.round(value * 100) / 100;
}

function getSmallestUnit(milliseconds) {
  var units = {
    seconds: MILLISECONDS_IN_SECOND,
    minutes: MILLISECONDS_IN_MINUTE,
    days: MILLISECONDS_IN_DAY
  };
  var smallestUnit = 'milliseconds';
  ['seconds', 'minutes', 'days'].forEach(function (unit) {
    if (milliseconds % units[unit] === 0 && (smallestUnit === 'milliseconds' || smallestUnit !== 'milliseconds' && milliseconds / units[smallestUnit] > milliseconds / units[unit])) {
      smallestUnit = unit;
    }
  });
  return smallestUnit;
}

var UnconnectedAxisInterval = /*#__PURE__*/function (_Component) {
  _inherits(UnconnectedAxisInterval, _Component);

  var _super = _createSuper(UnconnectedAxisInterval);

  function UnconnectedAxisInterval(props) {
    var _this;

    _classCallCheck(this, UnconnectedAxisInterval);

    _this = _super.call(this, props);
    var initialUnit = props.fullValue && typeof props.fullValue === 'string' && props.fullValue[0] === 'M' ? parseInt(props.fullValue.substring(1), 10) % MONTHS_IN_YEAR === 0 ? 'years' : 'months' : getSmallestUnit(props.fullValue);
    _this.state = {
      units: initialUnit
    };
    return _this;
  }

  _createClass(UnconnectedAxisInterval, [{
    key: "update",
    value: function update(value) {
      var adjustedValue = value < 0 ? 0 : value;
      var isValueInteger = adjustedValue % 1 === 0;

      if (this.state.units === 'years') {
        if (isValueInteger) {
          adjustedValue = 'M' + adjustedValue * MONTHS_IN_YEAR;
        } else {
          adjustedValue = adjustedValue * MONTHS_IN_YEAR * DAYS_IN_MONTH * MILLISECONDS_IN_DAY;
        }
      }

      if (this.state.units === 'months') {
        if (isValueInteger) {
          adjustedValue = 'M' + adjustedValue;
        } else {
          adjustedValue = adjustedValue * DAYS_IN_MONTH * MILLISECONDS_IN_DAY;
        }
      }

      if (this.state.units === 'days') {
        adjustedValue = adjustedValue * MILLISECONDS_IN_DAY;
      }

      if (this.state.units === 'minutes') {
        adjustedValue = adjustedValue * MILLISECONDS_IN_MINUTE;
      }

      if (this.state.units === 'seconds') {
        adjustedValue = adjustedValue * MILLISECONDS_IN_SECOND;
      }

      this.props.updatePlot(adjustedValue);
    }
  }, {
    key: "onUnitChange",
    value: function onUnitChange(value) {
      var isFullValueMonthFormat = typeof this.props.fullValue === 'string' && this.props.fullValue[0] === 'M';
      var milliseconds = isFullValueMonthFormat ? parseInt(this.props.fullValue.substring(1), 10) * DAYS_IN_MONTH * MILLISECONDS_IN_DAY : this.props.fullValue;
      this.setState({
        units: value
      });

      if (['years', 'months'].includes(value)) {
        var nbMonths = milliseconds / MILLISECONDS_IN_DAY / DAYS_IN_MONTH;

        if (nbMonths % 1 === 0) {
          this.props.updatePlot('M' + nbMonths);
        } else {
          this.props.updatePlot(milliseconds);
        }
      } else {
        this.props.updatePlot(milliseconds);
      }
    }
  }, {
    key: "getDisplayValue",
    value: function getDisplayValue(value) {
      var numericValue = typeof value === 'string' && value[0] === 'M' ? parseInt(value.substring(1), 10) : value;

      if (this.state.units === 'years') {
        if (typeof value === 'string') {
          return twoDecimalsRound(numericValue / MONTHS_IN_YEAR);
        }

        return twoDecimalsRound(numericValue / MILLISECONDS_IN_DAY / DAYS_IN_MONTH / MONTHS_IN_YEAR);
      }

      if (this.state.units === 'months') {
        if (typeof value === 'string') {
          return twoDecimalsRound(numericValue);
        }

        return twoDecimalsRound(numericValue / MILLISECONDS_IN_DAY / DAYS_IN_MONTH);
      }

      if (this.state.units === 'days') {
        return twoDecimalsRound(numericValue / MILLISECONDS_IN_DAY);
      }

      if (this.state.units === 'minutes') {
        return twoDecimalsRound(numericValue / MILLISECONDS_IN_MINUTE);
      }

      if (this.state.units === 'seconds') {
        return twoDecimalsRound(numericValue / MILLISECONDS_IN_SECOND);
      }

      if (this.state.units === 'milliseconds') {
        return numericValue;
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _ = this.context.localize;
      var attrHead = this.props.attr.split('.')[0];
      var binStartValue = this.props.fullContainer[attrHead].start;
      var BinStartIsDate = typeof binStartValue === 'string' && ((0, _lib2.isDateTime)(binStartValue) || (0, _dates.isJSDate)(binStartValue));
      var tick0 = this.props.fullContainer.tick0 && (this.props.fullContainer.tick0 || this.props.fullContainer.colorbar.tick0);
      var tick0IsDate = tick0 && ((0, _lib2.isDateTime)(tick0) || (0, _dates.isJSDate)(tick0));
      return BinStartIsDate || tick0IsDate ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Field.default, _objectSpread(_objectSpread({}, this.props), {}, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown.default, {
          options: [{
            value: 'years',
            label: _('Years')
          }, {
            value: 'months',
            label: _('Months')
          }, {
            value: 'days',
            label: _('Days')
          }, {
            value: 'minutes',
            label: _('Minutes')
          }, {
            value: 'seconds',
            label: _('Seconds')
          }, {
            value: 'milliseconds',
            label: _('Milliseconds')
          }],
          clearable: false,
          onChange: function onChange(value) {
            return _this2.onUnitChange(value);
          },
          value: this.state.units
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: {
            width: '100%',
            display: 'block'
          },
          children: " "
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_NumericInput.default, {
          value: this.getDisplayValue(this.props.fullValue),
          onUpdate: function onUpdate(value) {
            return _this2.update(value);
          },
          editableClassName: "AxisInterval-milliseconds"
        })]
      })) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, _objectSpread(_objectSpread({}, this.props), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_NumericInput.default, {
          value: this.props.fullValue,
          onUpdate: function onUpdate(value) {
            return _this2.props.updatePlot(value);
          }
        })
      }));
    }
  }]);

  return UnconnectedAxisInterval;
}(_react.Component);

exports.UnconnectedAxisInterval = UnconnectedAxisInterval;
UnconnectedAxisInterval.contextTypes = {
  localize: _propTypes.default.func
};
UnconnectedAxisInterval.propTypes = _objectSpread({
  fullValue: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  updatePlot: _propTypes.default.func,
  attr: _propTypes.default.string,
  fullContainer: _propTypes.default.object
}, _Field.default.propTypes);

var _default = (0, _lib.connectToContainer)(UnconnectedAxisInterval);

exports.default = _default;
//# sourceMappingURL=AxisInterval.js.map