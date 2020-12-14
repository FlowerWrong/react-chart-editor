"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _SketchFields = _interopRequireDefault(require("react-color/lib/components/sketch/SketchFields"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tinycolor = _interopRequireDefault(require("tinycolor2"));

var _common = require("react-color/lib/components/common");

var _reactColor = require("react-color");

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

// Utility functions for converting ColorPicker color objects or raw strings
// into TinyColor objects.
var extractRGB = function extractRGB(c) {
  return c.rgb || c;
};

var getColorSource = function getColorSource(c) {
  return c.source === 'hex' ? c.hex : extractRGB(c);
};

var toTinyColor = function toTinyColor(c) {
  return (0, _tinycolor.default)(getColorSource(c));
};

var Custom = /*#__PURE__*/function (_Component) {
  _inherits(Custom, _Component);

  var _super = _createSuper(Custom);

  function Custom() {
    _classCallCheck(this, Custom);

    return _super.apply(this, arguments);
  }

  _createClass(Custom, [{
    key: "render",
    value: function render() {
      var onChangeComplete = this.props.onChangeComplete;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "colorpicker__outer",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "colorpicker__controls +flex",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "colorpicker__sliders",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "colorpicker__slider",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_common.Hue, _objectSpread({}, this.props))
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "colorpicker__saturation",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_common.Saturation, _objectSpread({}, this.props))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "colorpicker__custom-input",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SketchFields.default, _objectSpread(_objectSpread({}, this.props), {}, {
            onChange: onChangeComplete
          }))
        })]
      });
    }
  }]);

  return Custom;
}(_react.Component);

Custom.propTypes = {
  rgb: _propTypes.default.object,
  onChangeComplete: _propTypes.default.func
};
var CustomColorPicker = (0, _reactColor.CustomPicker)(Custom);

var ColorPicker = /*#__PURE__*/function (_Component2) {
  _inherits(ColorPicker, _Component2);

  var _super2 = _createSuper(ColorPicker);

  function ColorPicker(props) {
    var _this;

    _classCallCheck(this, ColorPicker);

    _this = _super2.call(this, props);
    _this.state = {
      isVisible: false
    };
    _this.onSelectedColorChange = _this.onSelectedColorChange.bind(_assertThisInitialized(_this));
    _this.toggleVisible = _this.toggleVisible.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ColorPicker, [{
    key: "onSelectedColorChange",
    value: function onSelectedColorChange(newColor) {
      // We use our own toTinyColor because this value is a ColorPicker
      // color value which is an object that needs unpacking. We also handle
      // the case where a color string is passed in (just in case).
      var color = toTinyColor(newColor); // relayout call only wants a RGB String

      this.props.onColorChange(color.toRgbString());
    }
  }, {
    key: "toggleVisible",
    value: function toggleVisible() {
      this.setState({
        isVisible: !this.state.isVisible
      });
    }
  }, {
    key: "render",
    value: function render() {
      // We use tinycolor here instead of our own toTinyColor as
      // tinycolor handles `null` values and other weirdness we may
      // expect from user data.
      var selectedColor = (0, _tinycolor.default)(this.props.selectedColor);
      var colorText = selectedColor.toHexString(); // Convert rgba to rgb if necessary

      var rgbString = selectedColor._a !== 0 ? selectedColor.toRgbString() : "rgb(".concat(selectedColor._r, ",").concat(selectedColor._g, ",").concat(selectedColor._b, ")"); // We need inline style here to assign the background color
      // dynamically.

      var swatchStyle = {
        backgroundColor: rgbString
      };
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "colorpicker__container",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "colorpicker",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "colorpicker__swatch +cursor-clickable",
              style: swatchStyle,
              onClick: this.toggleVisible
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "colorpicker__selected-color +hover-grey",
            onClick: this.toggleVisible,
            children: colorText
          })]
        }), this.state.isVisible && /*#__PURE__*/(0, _jsxRuntime.jsx)(CustomColorPicker, {
          color: rgbString,
          onChangeComplete: this.onSelectedColorChange
        })]
      });
    }
  }]);

  return ColorPicker;
}(_react.Component);

ColorPicker.propTypes = {
  onColorChange: _propTypes.default.func.isRequired,
  selectedColor: _propTypes.default.string
};
var _default = ColorPicker;
exports.default = _default;
//# sourceMappingURL=ColorPicker.js.map