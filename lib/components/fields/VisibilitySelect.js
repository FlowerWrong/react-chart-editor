"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UnconnectedVisibilitySelect = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lib = require("../../lib");

var _constants = require("../../lib/constants");

var _Field = _interopRequireDefault(require("./Field"));

var _Radio = _interopRequireDefault(require("./Radio"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

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

var UnconnectedVisibilitySelect = /*#__PURE__*/function (_Component) {
  _inherits(UnconnectedVisibilitySelect, _Component);

  var _super = _createSuper(UnconnectedVisibilitySelect);

  function UnconnectedVisibilitySelect(props, context) {
    var _this;

    _classCallCheck(this, UnconnectedVisibilitySelect);

    _this = _super.call(this, props, context);
    _this.setMode = _this.setMode.bind(_assertThisInitialized(_this));
    _this.setLocals = _this.setLocals.bind(_assertThisInitialized(_this));

    _this.setLocals(props);

    return _this;
  }

  _createClass(UnconnectedVisibilitySelect, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(props) {
      this.setLocals(props);
    }
  }, {
    key: "setLocals",
    value: function setLocals(props) {
      this.mode = props.fullValue === undefined || props.fullValue === _constants.MULTI_VALUED_PLACEHOLDER // eslint-disable-line no-undefined
      ? this.props.defaultOpt : props.fullValue;
    }
  }, {
    key: "setMode",
    value: function setMode(mode) {
      this.props.updateContainer(_defineProperty({}, this.props.attr, mode));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dropdown = _this$props.dropdown,
          clearable = _this$props.clearable,
          options = _this$props.options,
          showOn = _this$props.showOn,
          attr = _this$props.attr,
          label = _this$props.label;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [dropdown ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown.default, {
          attr: attr,
          label: label,
          options: options,
          fullValue: this.mode,
          updatePlot: this.setMode,
          clearable: clearable
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Radio.default, {
          attr: attr,
          label: label,
          options: options,
          fullValue: this.mode,
          updatePlot: this.setMode
        }), Array.isArray(showOn) && showOn.includes(this.mode) || this.mode === showOn ? this.props.children : null]
      });
    }
  }]);

  return UnconnectedVisibilitySelect;
}(_react.Component);

exports.UnconnectedVisibilitySelect = UnconnectedVisibilitySelect;
UnconnectedVisibilitySelect.propTypes = _objectSpread({
  fullValue: _propTypes.default.any,
  updatePlot: _propTypes.default.func,
  dropdown: _propTypes.default.bool,
  clearable: _propTypes.default.bool,
  showOn: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool, _propTypes.default.string, _propTypes.default.array]),
  defaultOpt: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool, _propTypes.default.string]),
  label: _propTypes.default.string,
  attr: _propTypes.default.string
}, _Field.default.propTypes);
UnconnectedVisibilitySelect.contextTypes = {
  updateContainer: _propTypes.default.func
};
UnconnectedVisibilitySelect.displayName = 'UnconnectedVisibilitySelect';

var _default = (0, _lib.connectToContainer)(UnconnectedVisibilitySelect);

exports.default = _default;
//# sourceMappingURL=VisibilitySelect.js.map