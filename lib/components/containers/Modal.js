"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalContent = exports.ModalHeader = exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _plotlyIcons = require("plotly-icons");

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

var ModalHeader = function ModalHeader(_ref) {
  var title = _ref.title,
      handleClose = _ref.handleClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "modal__header",
    children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "modal__header__title",
      children: title
    }) : null, handleClose ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "modal__header__close",
      onClick: handleClose ? function () {
        return handleClose();
      } : null,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_plotlyIcons.CloseIcon, {})
    }) : null]
  });
};

exports.ModalHeader = ModalHeader;

var ModalContent = function ModalContent(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "modal__content",
    children: children
  });
};

exports.ModalContent = ModalContent;

var Modal = /*#__PURE__*/function (_Component) {
  _inherits(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);
    _this.escFunction = _this.escFunction.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Modal, [{
    key: "escFunction",
    value: function escFunction(event) {
      var escKeyCode = 27;

      if (event.keyCode === escKeyCode) {
        this.context.handleClose();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.escFunction, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.escFunction, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          title = _this$props.title;
      var classes = 'modal';

      if (this.context.isAnimatingOut) {
        classes += ' modal--animate-out';
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: classes,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "modal__card",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ModalHeader, {
            title: title,
            handleClose: function handleClose() {
              return _this2.context.handleClose();
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ModalContent, {
            children: children
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "modal__backdrop",
          onClick: function onClick() {
            return _this2.context.handleClose();
          }
        })]
      });
    }
  }]);

  return Modal;
}(_react.Component);

ModalHeader.propTypes = {
  title: _propTypes.default.node,
  handleClose: _propTypes.default.func.isRequired
};
ModalContent.propTypes = {
  children: _propTypes.default.node.isRequired
};
Modal.propTypes = {
  children: _propTypes.default.node.isRequired,
  title: _propTypes.default.node
};
Modal.contextTypes = {
  handleClose: _propTypes.default.func,
  isAnimatingOut: _propTypes.default.bool
};
var _default = Modal;
exports.default = _default;
//# sourceMappingURL=Modal.js.map