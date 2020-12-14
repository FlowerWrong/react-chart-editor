"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var ModalProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(ModalProvider, _React$Component);

  var _super = _createSuper(ModalProvider);

  function ModalProvider(props) {
    var _this;

    _classCallCheck(this, ModalProvider);

    _this = _super.call(this, props);
    _this.state = {
      component: null,
      componentProps: {},
      open: false,
      isAnimatingOut: false
    };
    return _this;
  }

  _createClass(ModalProvider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var body = document.body;
      var open = this.state.open; // Toggle scroll on document body if modal is open

      var hasClass = body.classList.contains('no-scroll');

      if (open && !hasClass) {
        body.classList.add('no-scroll');
      }

      if (!open && hasClass) {
        body.classList.remove('no-scroll');
      }
    }
  }, {
    key: "openModal",
    value: function openModal(component, componentProps) {
      var _ = this.context.localize;

      if (!component) {
        throw Error(_('You need to provide a component for the modal to open!'));
      }

      var open = this.state.open;

      if (!open) {
        this.setState({
          component: component,
          componentProps: componentProps,
          open: true
        });
      }
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      var open = this.state.open;

      if (open) {
        this.setState({
          open: false,
          component: null
        });
      }
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      var _this2 = this;

      this.setState({
        isAnimatingOut: true
      });
      var animationDuration = 600;
      setTimeout(function () {
        _this2.setState({
          isAnimatingOut: false
        });

        _this2.closeModal();
      }, animationDuration);
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      var _this3 = this;

      return {
        openModal: function openModal(c, p) {
          return _this3.openModal(c, p);
        },
        closeModal: function closeModal() {
          return _this3.closeModal();
        },
        handleClose: function handleClose() {
          return _this3.handleClose();
        },
        isAnimatingOut: this.state.isAnimatingOut
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          Component = _this$state.component,
          componentProps = _this$state.componentProps,
          isAnimatingOut = _this$state.isAnimatingOut;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [this.props.children, this.state.open ? /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, _objectSpread({
          isAnimatingOut: isAnimatingOut
        }, componentProps)) : null]
      });
    }
  }]);

  return ModalProvider;
}(React.Component);

ModalProvider.propTypes = {
  children: _propTypes.default.node
};
ModalProvider.contextTypes = {
  localize: _propTypes.default.func
};
ModalProvider.childContextTypes = {
  openModal: _propTypes.default.func,
  closeModal: _propTypes.default.func,
  handleClose: _propTypes.default.func,
  isAnimatingOut: _propTypes.default.bool
};
var _default = ModalProvider;
exports.default = _default;
//# sourceMappingURL=ModalProvider.js.map