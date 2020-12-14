"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _StyleButton = _interopRequireDefault(require("./StyleButton"));

var _configuration = require("./configuration");

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

var StyleButtonGroup = /*#__PURE__*/function (_Component) {
  _inherits(StyleButtonGroup, _Component);

  var _super = _createSuper(StyleButtonGroup);

  function StyleButtonGroup() {
    _classCallCheck(this, StyleButtonGroup);

    return _super.apply(this, arguments);
  }

  _createClass(StyleButtonGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentStyle = _this$props.currentStyle,
          linkIsSelected = _this$props.linkIsSelected,
          styles = _this$props.styles,
          onToggle = _this$props.onToggle;

      var isActive = function isActive(currentStyle, value) {
        if (value === _configuration.LINK) {
          return linkIsSelected;
        }

        if (typeof currentStyle.has === 'function') {
          return currentStyle.has(value);
        }

        return Boolean(currentStyle.value);
      };

      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "rich-text-editor__controls",
        children: styles.map(function (_ref) {
          var label = _ref.label,
              value = _ref.value;
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_StyleButton.default, {
            active: isActive(currentStyle, value),
            label: label,
            onToggle: onToggle,
            value: value
          }, value);
        })
      });
    }
  }]);

  return StyleButtonGroup;
}(_react.Component);

StyleButtonGroup.propTypes = {
  onToggle: _propTypes.default.func.isRequired,
  styles: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.element.isRequired,
    value: _propTypes.default.string.isRequired
  })).isRequired,
  // A draft-js DraftInlineStyle instance
  // https://facebook.github.io/draft-js/docs/api-reference-editor-state.html#getcurrentinlinestyle
  currentStyle: _propTypes.default.object,
  linkIsSelected: _propTypes.default.bool
};
var _default = StyleButtonGroup;
exports.default = _default;
//# sourceMappingURL=StyleButtonGroup.js.map