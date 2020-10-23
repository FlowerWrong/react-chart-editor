"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _ColorscalePicker = _interopRequireDefault(require("../widgets/ColorscalePicker"));

var _Field = _interopRequireDefault(require("./Field"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

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

var UnconnectedPieColorscalePicker = /*#__PURE__*/function (_Component) {
  _inherits(UnconnectedPieColorscalePicker, _Component);

  var _super = _createSuper(UnconnectedPieColorscalePicker);

  function UnconnectedPieColorscalePicker(props) {
    var _this;

    _classCallCheck(this, UnconnectedPieColorscalePicker);

    _this = _super.call(this, props);
    _this.onUpdate = _this.onUpdate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UnconnectedPieColorscalePicker, [{
    key: "onUpdate",
    value: function onUpdate(colorscale, colorscaleType) {
      if (Array.isArray(colorscale)) {
        var numPieSlices = this.context.graphDiv.calcdata[0].length + 1;
        var adjustedColorscale = (0, _lib.adjustColorscale)(colorscale, numPieSlices, colorscaleType, {
          repeat: true
        });
        this.props.updatePlot(adjustedColorscale);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var fullValue = this.props.fullValue;
      var colorscale = Array.isArray(fullValue) ? fullValue : null;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, _objectSpread(_objectSpread({}, this.props), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorscalePicker.default, {
          selected: colorscale,
          onColorscaleChange: this.onUpdate,
          initialCategory: "categorical"
        })
      }));
    }
  }]);

  return UnconnectedPieColorscalePicker;
}(_react.Component);

UnconnectedPieColorscalePicker.propTypes = _objectSpread({
  fullValue: _propTypes.default.any,
  updatePlot: _propTypes.default.func
}, _Field.default.propTypes);
UnconnectedPieColorscalePicker.contextTypes = {
  container: _propTypes.default.object,
  graphDiv: _propTypes.default.object
};
UnconnectedPieColorscalePicker.displayName = 'UnconnectedPieColorscalePicker';

var _default = (0, _lib.connectToContainer)(UnconnectedPieColorscalePicker, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    if (context && context.container && context.graphDiv && (!plotProps.fullValue || Array.isArray(plotProps.fullValue) && !plotProps.fullValue.length) && context.graphDiv.calcdata) {
      plotProps.fullValue = context.graphDiv.calcdata[0].map(function (d) {
        return d.color;
      });
    }

    if (context.traceIndexes.length > 1) {
      plotProps.isVisible = false;
    }
  }
});

exports.default = _default;
//# sourceMappingURL=PieColorscalePicker.js.map