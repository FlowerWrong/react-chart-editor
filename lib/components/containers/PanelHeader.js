"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _Button = _interopRequireDefault(require("../widgets/Button"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

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

var PanelHeader = /*#__PURE__*/function (_Component) {
  _inherits(PanelHeader, _Component);

  var _super = _createSuper(PanelHeader);

  function PanelHeader() {
    var _this;

    _classCallCheck(this, PanelHeader);

    _this = _super.call(this);
    _this.state = {
      addPanelOpen: false
    };
    _this.togglePanel = _this.togglePanel.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PanelHeader, [{
    key: "togglePanel",
    value: function togglePanel() {
      this.setState({
        addPanelOpen: !this.state.addPanelOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _ = this.context.localize;
      var _this$props = this.props,
          children = _this$props.children,
          addAction = _this$props.addAction,
          allowCollapse = _this$props.allowCollapse,
          toggleFolds = _this$props.toggleFolds,
          hasOpen = _this$props.hasOpen; // dropdown is styled with same styles as react-select component - see _dropdown.scss

      var icon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_plotlyIcons.PlusIcon, {});
      return !children && !addAction && !allowCollapse ? null : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "panel__header",
        children: [children && children.length ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "panel__header__content",
          children: children
        }) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "panel__header__actions__container",
          children: [allowCollapse ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "panel__header__collapse",
            onClick: toggleFolds,
            children: hasOpen ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_plotlyIcons.ResizeDownIcon, {}), _('Collapse All')]
            }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_plotlyIcons.ResizeUpIcon, {}), _('Expand All')]
            })
          }) : null, addAction ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "panel__header__action dropdown-container",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
              variant: "primary",
              className: "js-add-button",
              onClick: Array.isArray(addAction.handler) ? this.togglePanel : function () {
                return addAction.handler(_this2.context);
              },
              icon: icon,
              label: addAction.label
            }), this.state.addPanelOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "Select",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "Select-menu-outer",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "Select-menu",
                  children: addAction.handler.map(function (_ref) {
                    var label = _ref.label,
                        handler = _ref.handler;
                    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "Select-option",
                      onClick: function onClick() {
                        handler(_this2.context);

                        _this2.togglePanel();
                      },
                      children: label
                    }, label);
                  })
                })
              })
            })]
          }) : null]
        })]
      });
    }
  }]);

  return PanelHeader;
}(_react.Component);

PanelHeader.contextTypes = {
  layout: _propTypes.default.object,
  fullContainer: _propTypes.default.object,
  onUpdate: _propTypes.default.func,
  updateContainer: _propTypes.default.func,
  localize: _propTypes.default.func
};
PanelHeader.propTypes = {
  addAction: _propTypes.default.object,
  allowCollapse: _propTypes.default.bool,
  children: _propTypes.default.node,
  hasOpen: _propTypes.default.bool,
  toggleFolds: _propTypes.default.func
};
var _default = PanelHeader;
exports.default = _default;
//# sourceMappingURL=PanelHeader.js.map