"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PanelMessage = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _plotlyIcons = require("plotly-icons");

var _lib = require("../../lib");

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

var PanelMessage = /*#__PURE__*/function (_Component) {
  _inherits(PanelMessage, _Component);

  var _super = _createSuper(PanelMessage);

  function PanelMessage() {
    _classCallCheck(this, PanelMessage);

    return _super.apply(this, arguments);
  }

  _createClass(PanelMessage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          Icon = _this$props.icon;
      var heading = this.props.heading || '';
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "panel__empty__message",
        children: [Boolean(Icon) && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "panel__empty__message__icon",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {})
        }), Boolean(heading) && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "panel__empty__message__heading",
          children: heading
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "panel__empty__message__content",
          children: children
        })]
      });
    }
  }]);

  return PanelMessage;
}(_react.Component);

exports.PanelMessage = PanelMessage;
PanelMessage.defaultProps = {
  icon: _plotlyIcons.ChartLineIcon
};
PanelMessage.propTypes = {
  heading: _propTypes.default.string,
  children: _propTypes.default.node,
  icon: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func])
};

var PanelEmpty = /*#__PURE__*/function (_Component2) {
  _inherits(PanelEmpty, _Component2);

  var _super2 = _createSuper(PanelEmpty);

  function PanelEmpty() {
    _classCallCheck(this, PanelEmpty);

    return _super2.apply(this, arguments);
  }

  _createClass(PanelEmpty, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _lib.bem)('panel', 'empty'),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(PanelMessage, _objectSpread({}, this.props))
      });
    }
  }]);

  return PanelEmpty;
}(_react.Component);

PanelEmpty.propTypes = {
  heading: _propTypes.default.string,
  children: _propTypes.default.node,
  icon: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func])
};
var _default = PanelEmpty;
exports.default = _default;
//# sourceMappingURL=PanelEmpty.js.map