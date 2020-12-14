"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var RadioBlocks = /*#__PURE__*/function (_Component) {
  _inherits(RadioBlocks, _Component);

  var _super = _createSuper(RadioBlocks);

  function RadioBlocks(props) {
    var _this;

    _classCallCheck(this, RadioBlocks);

    _this = _super.call(this, props);
    _this.state = {
      activeOption: _this.props.activeOption
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.renderOption = _this.renderOption.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RadioBlocks, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      // Reset the value to the graph's actual value
      if (nextProps.activeOption !== this.state.activeOption) {
        this.setState({
          activeOption: nextProps.activeOption
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(newValue) {
      this.setState({
        activeOption: newValue
      });
      this.props.onOptionChange(newValue);
    }
  }, {
    key: "renderOption",
    value: function renderOption(optionName) {
      var _this2 = this;

      var label = optionName.label,
          value = optionName.value,
          Icon = optionName.icon;
      var defaultActive = this.state.activeOption === value;
      var optionClass = (0, _classnames.default)('radio-block__option', {
        'radio-block__option--active': defaultActive
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: optionClass,
        checked: defaultActive,
        onClick: function onClick() {
          return _this2.handleChange(value);
        },
        children: [Icon ? /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
          className: "radio-block__icon"
        }) : null, label ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: label
        }) : null]
      }, value);
    }
  }, {
    key: "render",
    value: function render() {
      var optionList = this.props.options.map(this.renderOption);
      var groupClass = (0, _classnames.default)('radio-block', 'radio-block__group', {
        'radio-block__group--center': this.props.alignment === 'center'
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: groupClass,
        children: optionList
      });
    }
  }]);

  return RadioBlocks;
}(_react.Component);

RadioBlocks.propTypes = {
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool, _propTypes.default.number]).isRequired,
    label: _propTypes.default.string,
    icon: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
    disabled: _propTypes.default.bool
  })),
  onOptionChange: _propTypes.default.func.isRequired,
  activeOption: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool, _propTypes.default.number]),
  radioClassName: _propTypes.default.string,
  // One of right, left, center
  alignment: _propTypes.default.string
};
var _default = RadioBlocks;
exports.default = _default;
//# sourceMappingURL=RadioBlocks.js.map