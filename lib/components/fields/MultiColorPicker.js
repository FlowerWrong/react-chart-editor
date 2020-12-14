"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _ColorPicker = _interopRequireDefault(require("./ColorPicker"));

var _ColorscalePicker = require("./ColorscalePicker");

var _Field = _interopRequireDefault(require("./Field"));

var _Info = _interopRequireDefault(require("./Info"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RadioBlocks = _interopRequireDefault(require("../widgets/RadioBlocks"));

var _react = require("react");

var _nested_property = _interopRequireDefault(require("plotly.js/src/lib/nested_property"));

var _lib = require("../../lib");

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

var CustomColorscalePicker = (0, _lib.connectToContainer)(_ColorscalePicker.UnconnectedColorscalePicker, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    if (props.attr === 'marker.color' && context.fullData.filter(function (t) {
      return context.traceIndexes.includes(t.index);
    }).every(function (t) {
      return t.marker && t.marker.color;
    }) && plotProps.fullValue && typeof plotProps.fullValue === 'string') {
      plotProps.fullValue = context.fullData && context.fullData.filter(function (t) {
        return context.traceIndexes.includes(t.index);
      }).map(function (t) {
        return [0, t.marker.color];
      });
    }
  }
});

var UnconnectedMultiColorPicker = /*#__PURE__*/function (_Component) {
  _inherits(UnconnectedMultiColorPicker, _Component);

  var _super = _createSuper(UnconnectedMultiColorPicker);

  function UnconnectedMultiColorPicker(props, context) {
    var _this;

    _classCallCheck(this, UnconnectedMultiColorPicker);

    _this = _super.call(this, props, context);
    _this.state = {
      selectedConstantColorOption: context.traceIndexes.length > 1 && props.fullValue && props.fullValue.every(function (v) {
        return v[1] === props.fullValue[0][1];
      }) ? 'single' : 'multiple'
    };
    _this.setColor = _this.setColor.bind(_assertThisInitialized(_this));
    _this.setColors = _this.setColors.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UnconnectedMultiColorPicker, [{
    key: "setColor",
    value: function setColor(color) {
      if (this.props.setColor) {
        this.props.setColor(color);
      } else {
        this.props.updatePlot(color);
      }
    }
  }, {
    key: "setColors",
    value: function setColors(colorscale, colorscaleType) {
      var _this2 = this;

      var numberOfTraces = this.props.tracesToColor.length;
      var colors = colorscale.map(function (c) {
        return c[1];
      });
      var adjustedColors = colors;

      if (colorscaleType !== 'categorical') {
        adjustedColors = (0, _lib.adjustColorscale)(colors, numberOfTraces, colorscaleType);
      }

      if (adjustedColors.every(function (c) {
        return c === adjustedColors[0];
      }) || colorscaleType === 'categorical') {
        adjustedColors = (0, _lib.adjustColorscale)(colors, numberOfTraces, colorscaleType, {
          repeat: true
        });
      }

      var updates = adjustedColors.map(function (color) {
        return _defineProperty({}, _this2.props.attr, color);
      });
      this.context.updateContainer(updates);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _ = this.context.localize;
      var constantOptions = [{
        label: _('Single'),
        value: 'single'
      }, {
        label: _('Multiple'),
        value: 'multiple'
      }];
      var selectedConstantColorOption = this.props.parentSelectedConstantColorOption ? this.props.parentSelectedConstantColorOption : this.state.selectedConstantColorOption;
      var multiMessage = this.props.multiColorMessage ? this.props.multiColorMessage : _('Each will be colored according to the selected colors.');
      var singleMessage = this.props.singleColorMessage ? this.props.singleColorMessage : _('All will be colored in the same color.');

      if (this.context.traceIndexes.length > 1) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Field.default, _objectSpread(_objectSpread({}, this.props), {}, {
          suppressMultiValuedMessage: true,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RadioBlocks.default, {
            options: constantOptions,
            activeOption: selectedConstantColorOption,
            onOptionChange: this.props.onConstantColorOptionChange ? this.props.onConstantColorOptionChange : function (value) {
              return _this3.setState({
                selectedConstantColorOption: value
              });
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Info.default, {
            children: selectedConstantColorOption === 'single' ? singleMessage : multiMessage
          }), selectedConstantColorOption === 'single' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorPicker.default, {
            attr: this.props.attr,
            updatePlot: this.setColor
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(CustomColorscalePicker, {
            suppressMultiValuedMessage: true,
            attr: this.props.attr,
            updatePlot: this.setColors,
            fullValue: this.props.fullValue,
            initialCategory: 'categorical'
          })]
        }));
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorPicker.default, {
        attr: this.props.attr,
        updatePlot: this.setColor,
        label: this.props.label
      });
    }
  }]);

  return UnconnectedMultiColorPicker;
}(_react.Component);

UnconnectedMultiColorPicker.propTypes = _objectSpread({
  multiColorMessage: _propTypes.default.string,
  singleColorMessage: _propTypes.default.string,
  updatePlot: _propTypes.default.func,
  attr: _propTypes.default.string,
  parentSelectedConstantColorOption: _propTypes.default.string,
  onConstantColorOptionChange: _propTypes.default.func,
  messageKeyWordSingle: _propTypes.default.string,
  messageKeyWordPlural: _propTypes.default.string,
  tracesToColor: _propTypes.default.array
}, _Field.default.propTypes);
UnconnectedMultiColorPicker.contextTypes = {
  localize: _propTypes.default.func,
  updateContainer: _propTypes.default.func,
  traceIndexes: _propTypes.default.array,
  fullData: _propTypes.default.array
};
UnconnectedMultiColorPicker.displayName = 'UnconnectedMultiColorPicker';

var _default = (0, _lib.connectToContainer)(UnconnectedMultiColorPicker, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    if (plotProps.isVisible) {
      var colors = [];
      var tracesToColor = [];
      var dedupedTraceIndexes = [];
      context.traceIndexes.forEach(function (i) {
        if (!dedupedTraceIndexes.includes(i)) {
          dedupedTraceIndexes.push(i);
        }
      });
      dedupedTraceIndexes.forEach(function (traceIndex) {
        var traces = context.fullData.filter(function (trace) {
          return trace.index === traceIndex;
        });
        tracesToColor = tracesToColor.concat(traces);
        traces.forEach(function (t) {
          var value = (0, _nested_property.default)(t, props.attr).get();

          if (value) {
            colors.push(value);
          }
        });
      });
      plotProps.tracesToColor = tracesToColor;
      plotProps.fullValue = colors.map(function (c) {
        return [0, c];
      });
    }
  }
});

exports.default = _default;
//# sourceMappingURL=MultiColorPicker.js.map