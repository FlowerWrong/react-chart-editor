"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var FoldEmpty = /*#__PURE__*/function (_Component) {
  _inherits(FoldEmpty, _Component);

  var _super = _createSuper(FoldEmpty);

  function FoldEmpty() {
    _classCallCheck(this, FoldEmpty);

    return _super.apply(this, arguments);
  }

  _createClass(FoldEmpty, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          Icon = _this$props.icon,
          messagePrimary = _this$props.messagePrimary,
          messageSecondary = _this$props.messageSecondary;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "fold__content__empty",
        children: [Icon ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "fold__content__empty__icon",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {})
        }) : null, messagePrimary ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "fold__content__empty__message__primary",
          children: messagePrimary
        }) : null, messageSecondary ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "fold__content__empty__message__secondary",
          children: messageSecondary
        }) : null, children ? children : null]
      });
    }
  }]);

  return FoldEmpty;
}(_react.Component);

exports.default = FoldEmpty;
FoldEmpty.propTypes = {
  messagePrimary: _propTypes.default.string,
  messageSecondary: _propTypes.default.string,
  children: _propTypes.default.node,
  icon: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func])
};
//# sourceMappingURL=FoldEmpty.js.map