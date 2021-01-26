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

var CheckboxGroup = /*#__PURE__*/function (_Component) {
  _inherits(CheckboxGroup, _Component);

  var _super = _createSuper(CheckboxGroup);

  function CheckboxGroup(props) {
    var _this;

    _classCallCheck(this, CheckboxGroup);

    _this = _super.call(this, props);
    _this.state = {
      options: _this.props.options
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CheckboxGroup, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState({
        options: nextProps.options
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(i) {
      var newOptions = this.props.options.slice();
      newOptions[i] = Object.assign(newOptions[i], {
        checked: !newOptions[i].checked
      });
      this.props.onChange(newOptions);
    }
  }, {
    key: "renderOptions",
    value: function renderOptions() {
      var _this2 = this;

      return this.state.options.map(function (option, i) {
        var checkClass = (0, _classnames.default)(['checkbox__check', 'icon'], {
          'checkbox__check--checked': option.checked
        });
        var itemClass = (0, _classnames.default)('checkbox__item', {
          'checkbox__item--vertical': _this2.props.orientation === 'vertical',
          'checkbox__item--horizontal': _this2.props.orientation === 'horizontal'
        });
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: itemClass,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "checkbox__box".concat(option.checked ? ' checkbox__box--checked' : ''),
            onClick: function onClick() {
              return _this2.handleChange(i);
            },
            children: option.checked && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: checkClass,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_plotlyIcons.CheckIcon, {})
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "checkbox__label",
            onClick: function onClick() {
              return _this2.handleChange(i);
            },
            children: option.label
          })]
        }, i);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var boxClass = (0, _classnames.default)('checkbox__group', this.props.className, {
        checkbox__group_horizontal: this.props.orientation === 'horizontal'
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: boxClass,
        children: this.renderOptions()
      });
    }
  }]);

  return CheckboxGroup;
}(_react.Component);

CheckboxGroup.propTypes = {
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.string.isRequired,
    checked: _propTypes.default.bool.isRequired
  })).isRequired,
  onChange: _propTypes.default.func,
  className: _propTypes.default.string,
  orientation: _propTypes.default.string
};
CheckboxGroup.defaultProps = {
  className: ''
};
var _default = CheckboxGroup;
exports.default = _default;
//# sourceMappingURL=CheckboxGroup.js.map