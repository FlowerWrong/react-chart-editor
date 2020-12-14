"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FieldDelete = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _MenuPanel = _interopRequireDefault(require("../containers/MenuPanel"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _lib = require("../../lib");

var _constants = require("../../lib/constants");

var _plotlyIcons = require("plotly-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var FieldDelete = /*#__PURE__*/function (_Component) {
  _inherits(FieldDelete, _Component);

  var _super = _createSuper(FieldDelete);

  function FieldDelete() {
    _classCallCheck(this, FieldDelete);

    return _super.apply(this, arguments);
  }

  _createClass(FieldDelete, [{
    key: "render",
    value: function render() {
      var onClick = this.props.onClick;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "field__delete",
        onClick: onClick,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_plotlyIcons.CloseIcon, {})
      });
    }
  }]);

  return FieldDelete;
}(_react.Component);

exports.FieldDelete = FieldDelete;

var Field = /*#__PURE__*/function (_Component2) {
  _inherits(Field, _Component2);

  var _super2 = _createSuper(Field);

  function Field() {
    _classCallCheck(this, Field);

    return _super2.apply(this, arguments);
  }

  _createClass(Field, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          center = _this$props.center,
          children = _this$props.children,
          label = _this$props.label,
          multiValued = _this$props.multiValued,
          suppressMultiValuedMessage = _this$props.suppressMultiValuedMessage,
          units = _this$props.units,
          extraComponent = _this$props.extraComponent,
          fieldContainerClassName = _this$props.fieldContainerClassName,
          labelWidth = _this$props.labelWidth;
      var _ = this.context.localize;
      var fieldClass;

      if (!label) {
        fieldClass = (0, _classnames2.default)('field__no-title', {
          'field__no-title--center': center
        });
      } else {
        fieldClass = (0, _classnames2.default)('field__widget', {
          'field__widget--units': Boolean(units)
        });
      }

      var tooltip = this.context.attr;

      if (this.context.description) {
        tooltip += ' – ' + this.context.description.replace(/`/g, '"').replace(/\*/g, '"');
      }

      var containerClassName = (0, _classnames2.default)((0, _lib.bem)('field'), _defineProperty({}, fieldContainerClassName, Boolean(fieldContainerClassName)));
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: containerClassName,
        children: [label ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _lib.bem)('field', 'title'),
          style: labelWidth ? {
            minWidth: labelWidth + 'px'
          } : {},
          children: this.context.showFieldTooltips ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _lib.bem)('field', 'title-text'),
            "aria-label": tooltip,
            "data-microtip-position": "bottom-right",
            "data-microtip-size": "large",
            role: "tooltip",
            children: label
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _lib.bem)('field', 'title-text'),
            children: label
          })
        }) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: fieldClass,
          children: [children, extraComponent ? extraComponent : null, multiValued && !suppressMultiValuedMessage ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuPanel.default, {
            label: (0, _constants.getMultiValueText)('title', _),
            ownline: true,
            question: true,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "info__title",
              children: (0, _constants.getMultiValueText)('title', _)
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "info__text",
              children: (0, _constants.getMultiValueText)('text', _)
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "info__sub-text",
              children: (0, _constants.getMultiValueText)('subText', _)
            })]
          }) : null]
        }), units ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _lib.bem)('field', 'units'),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _lib.bem)('field', 'units-text'),
            children: units
          })
        }) : null]
      });
    }
  }]);

  return Field;
}(_react.Component);

Field.propTypes = {
  labelWidth: _propTypes.default.number,
  center: _propTypes.default.bool,
  label: _propTypes.default.any,
  units: _propTypes.default.string,
  multiValued: _propTypes.default.bool,
  suppressMultiValuedMessage: _propTypes.default.bool,
  children: _propTypes.default.node,
  extraComponent: _propTypes.default.any,
  fieldContainerClassName: _propTypes.default.string
};
Field.contextTypes = {
  localize: _propTypes.default.func,
  description: _propTypes.default.string,
  attr: _propTypes.default.string,
  showFieldTooltips: _propTypes.default.bool
};
Field.defaultProps = {
  center: false,
  multiValued: false
};
FieldDelete.propTypes = {
  onClick: _propTypes.default.func
};
var _default = Field;
exports.default = _default;
//# sourceMappingURL=Field.js.map