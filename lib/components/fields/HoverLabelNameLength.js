"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UnconnectedHoverLabelNameLength = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lib = require("../../lib");

var _Field = _interopRequireDefault(require("./Field"));

var _RadioBlocks = _interopRequireDefault(require("../widgets/RadioBlocks"));

var _NumericInput = _interopRequireDefault(require("../widgets/NumericInput"));

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

var UnconnectedHoverLabelNameLength = /*#__PURE__*/function (_Component) {
  _inherits(UnconnectedHoverLabelNameLength, _Component);

  var _super = _createSuper(UnconnectedHoverLabelNameLength);

  function UnconnectedHoverLabelNameLength(props) {
    var _this;

    _classCallCheck(this, UnconnectedHoverLabelNameLength);

    _this = _super.call(this, props);
    _this.state = {
      currentOption: _this.getCurrentOption(props)
    };
    _this.onOptionChange = _this.onOptionChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UnconnectedHoverLabelNameLength, [{
    key: "getCurrentOption",
    value: function getCurrentOption(props) {
      return props.fullValue > 0 ? 'clip' : props.fullValue === 0 ? 'hide' : 'no-clip';
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.fullValue !== this.props.fullValue) {
        this.setState({
          currentOption: this.getCurrentOption(nextProps)
        });
      }
    }
  }, {
    key: "onOptionChange",
    value: function onOptionChange(option) {
      if (this.state.currentOption !== 'clip' && option === 'clip') {
        // this allows us to go back to plotly.js default if we've
        // clicked away from the 'clip' option.
        this.props.updatePlot(15); //eslint-disable-line

        return;
      }

      if (option === 'no-clip') {
        this.props.updatePlot(-1);
        return;
      }

      if (option === 'hide') {
        this.props.updatePlot(0);
        return;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _ = this.context.localize;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Field.default, _objectSpread(_objectSpread({}, this.props), {}, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RadioBlocks.default, {
          activeOption: this.state.currentOption,
          options: [{
            label: _('Clip To'),
            value: 'clip'
          }, {
            label: _('No Clip'),
            value: 'no-clip'
          }, {
            label: _('Hide'),
            value: 'hide'
          }],
          onOptionChange: this.onOptionChange
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: {
            height: '10px',
            width: '100%'
          }
        }), this.state.currentOption === 'clip' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_NumericInput.default, {
          value: this.props.fullValue,
          onChange: this.props.updatePlot,
          onUpdate: this.props.updatePlot,
          units: "px"
        }) : null]
      }));
    }
  }]);

  return UnconnectedHoverLabelNameLength;
}(_react.Component);

exports.UnconnectedHoverLabelNameLength = UnconnectedHoverLabelNameLength;
UnconnectedHoverLabelNameLength.propTypes = _objectSpread({
  fullValue: _propTypes.default.number,
  updatePlot: _propTypes.default.func
}, _Field.default.propTypes);
UnconnectedHoverLabelNameLength.contextTypes = {
  localize: _propTypes.default.func
};
UnconnectedHoverLabelNameLength.displayName = 'UnconnectedHoverLabelNameLength';

var _default = (0, _lib.connectToContainer)(UnconnectedHoverLabelNameLength, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var container = plotProps.container;
    plotProps.isVisible = container.hoverinfo && container.hoverinfo.includes('name') || container.hovertemplate || container.hovertemplate === ' ';
  }
});

exports.default = _default;
//# sourceMappingURL=HoverLabelNameLength.js.map