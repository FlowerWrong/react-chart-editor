"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _ModalBox = _interopRequireDefault(require("./ModalBox"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

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

var MenuPanel = /*#__PURE__*/function (_Component) {
  _inherits(MenuPanel, _Component);

  var _super = _createSuper(MenuPanel);

  function MenuPanel() {
    var _this;

    _classCallCheck(this, MenuPanel);

    _this = _super.call(this);
    _this.state = {
      isOpen: false
    };
    _this.togglePanel = _this.togglePanel.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MenuPanel, [{
    key: "getIcon",
    value: function getIcon() {
      var _this$props = this.props,
          question = _this$props.question,
          Icon = _this$props.icon;

      if (question) {
        return {
          icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_plotlyIcons.QuestionIcon, {
            className: "menupanel__icon"
          }),
          spanClass: "menupanel__icon-span menupanel__icon-span--question"
        };
      }

      if (Icon) {
        return {
          icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
            className: "menupanel__icon"
          }),
          spanClass: "menupanel__icon-span"
        };
      }

      return {
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_plotlyIcons.CogIcon, {
          className: "menupanel__icon"
        }),
        spanClass: 'menupanel__icon-span menupanel__icon-span--cog'
      };
    }
  }, {
    key: "togglePanel",
    value: function togglePanel() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          show = _this$props2.show,
          ownline = _this$props2.ownline,
          label = _this$props2.label,
          children = _this$props2.children;
      var isOpen = show || this.state.isOpen;
      var containerClass = (0, _classnames.default)('menupanel', {
        'menupanel--ownline': ownline
      });

      var _this$getIcon = this.getIcon(),
          icon = _this$getIcon.icon,
          spanClass = _this$getIcon.spanClass;

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: containerClass,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: spanClass,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "menupanel__label",
            children: label
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "menupanel__icon__wrapper",
            onClick: this.togglePanel,
            children: icon
          })]
        }), isOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalBox.default, {
          onClose: this.togglePanel,
          children: children
        })]
      });
    }
  }]);

  return MenuPanel;
}(_react.Component);

exports.default = MenuPanel;
MenuPanel.propTypes = {
  children: _propTypes.default.node,
  icon: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
  label: _propTypes.default.string,
  ownline: _propTypes.default.bool,
  question: _propTypes.default.bool,
  show: _propTypes.default.bool
};
//# sourceMappingURL=MenuPanel.js.map