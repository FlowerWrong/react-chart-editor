"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _PanelEmpty = _interopRequireDefault(require("./PanelEmpty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _derived = require("./derived");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var TraceRequiredPanel = /*#__PURE__*/function (_Component) {
  _inherits(TraceRequiredPanel, _Component);

  var _super = _createSuper(TraceRequiredPanel);

  function TraceRequiredPanel() {
    _classCallCheck(this, TraceRequiredPanel);

    return _super.apply(this, arguments);
  }

  _createClass(TraceRequiredPanel, [{
    key: "hasTrace",
    value: function hasTrace() {
      return this.context.fullData.filter(function (trace) {
        return trace.visible;
      }).length > 0;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _ = this.context.localize;

      var _this$props = this.props,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["children"]);

      if (!this.props.visible) {
        return null;
      }

      return this.hasTrace() ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_derived.LayoutPanel, _objectSpread(_objectSpread({}, rest), {}, {
        children: children
      })) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_PanelEmpty.default, {
        heading: _("Looks like there aren't any traces defined yet."),
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: [_('Go to the '), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            onClick: function onClick() {
              return _this.context.setPanel('Structure', 'Traces');
            },
            children: _('Traces')
          }), _(' panel under Structure to define traces.')]
        })
      });
    }
  }]);

  return TraceRequiredPanel;
}(_react.Component);

TraceRequiredPanel.propTypes = {
  children: _propTypes.default.node,
  visible: _propTypes.default.bool
};
TraceRequiredPanel.defaultProps = {
  visible: true
};
TraceRequiredPanel.contextTypes = {
  fullData: _propTypes.default.array,
  localize: _propTypes.default.func,
  setPanel: _propTypes.default.func
};
var _default = TraceRequiredPanel;
exports.default = _default;
//# sourceMappingURL=TraceRequiredPanel.js.map