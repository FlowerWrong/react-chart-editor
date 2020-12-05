"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LevelRendered = exports.HoverColor = exports.HovermodeDropdown = exports.HoveronDropdown = exports.MapboxStyleDropdown = exports.MapboxSourceArray = exports.FillDropdown = exports.HoverInfo = exports.HoverTemplateText = exports.HoverTemplateSwitch = exports.TextInfo = exports.PositioningNumeric = exports.PositioningRef = exports.AnnotationRef = exports.AnnotationArrowRef = exports.NumericReciprocal = exports.NumericFractionInverse = exports.NumericFractionDomain = exports.NumericFraction = exports.DTicksInterval = exports.DTicks = exports.NTicks = exports.AxesRange = exports.Histogram2d = exports.HistogramInfoHorizontal = exports.HistogramInfoVertical = exports.ShowInLegend = exports.TickFormat = exports.BinningDropdown = exports.ContourNumeric = exports.AxisSide = exports.RangesliderVisible = exports.AxisOverlayDropdown = exports.AxisAnchorDropdown = void 0;

var _fastIsnumeric = _interopRequireDefault(require("fast-isnumeric"));

var _Dropdown = require("./Dropdown");

var _DropdownCustom = require("./DropdownCustom");

var _Flaglist = require("./Flaglist");

var _Numeric = require("./Numeric");

var _NumericOrDate = require("./NumericOrDate");

var _AxisRangeValue = require("./AxisRangeValue");

var _Radio = require("./Radio");

var _AxisInterval = require("./AxisInterval");

var _Info = _interopRequireDefault(require("./Info"));

var _ColorPicker = require("./ColorPicker");

var _TextEditor = require("./TextEditor");

var _VisibilitySelect = require("./VisibilitySelect");

var _lib = require("../../lib");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AxisAnchorDropdown = (0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = context.localize;
    var options = [];

    if (props.attr.startsWith('xaxis')) {
      options = context.fullLayout._subplots.yaxis.map(function (axis) {
        return {
          label: (0, _lib.getAxisTitle)(context.fullLayout[(0, _lib.axisIdToAxisName)(axis)]),
          value: axis
        };
      });
    } else if (props.attr.startsWith('yaxis')) {
      options = context.fullLayout._subplots.xaxis.map(function (axis) {
        return {
          label: (0, _lib.getAxisTitle)(context.fullLayout[(0, _lib.axisIdToAxisName)(axis)]),
          value: axis
        };
      });
    }

    options.push({
      label: _('Free'),
      value: 'free'
    });
    plotProps.options = options;
  }
});
exports.AxisAnchorDropdown = AxisAnchorDropdown;
var AxisOverlayDropdown = (0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = context.localize;
    var options = [];

    if (props.attr.startsWith('xaxis')) {
      options = context.fullLayout._subplots.xaxis.map(function (axis) {
        return {
          label: (0, _lib.getAxisTitle)(context.fullLayout[(0, _lib.axisIdToAxisName)(axis)]),
          value: axis
        };
      });
    } else if (props.attr.startsWith('yaxis')) {
      options = context.fullLayout._subplots.yaxis.map(function (axis) {
        return {
          label: (0, _lib.getAxisTitle)(context.fullLayout[(0, _lib.axisIdToAxisName)(axis)]),
          value: axis
        };
      });
    }

    options.unshift({
      label: _('None'),
      value: false
    }); // filter out the current axisID, can't overlay over itself

    plotProps.options = options.filter(function (option) {
      return context.fullContainer && context.fullContainer.xaxis && context.fullContainer.yaxis && context.fullContainer.xaxis._id !== option.value && context.fullContainer.yaxis._id !== option.value;
    });
    plotProps.clearable = false;
  }
});
exports.AxisOverlayDropdown = AxisOverlayDropdown;
var RangesliderVisible = (0, _lib.connectToContainer)(_Radio.UnconnectedRadio, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    if (!plotProps.fullValue) {
      plotProps.fullValue = false;
      plotProps.visible = false;
      plotProps.isVisible = true;
      return;
    }
  }
});
exports.RangesliderVisible = RangesliderVisible;
var AxisSide = (0, _lib.connectToContainer)(_Radio.UnconnectedRadio, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = context.localize;

    if (plotProps.fullValue === 'left' || plotProps.fullValue === 'right') {
      plotProps.options = [{
        label: _('Left'),
        value: 'left'
      }, {
        label: _('Right'),
        value: 'right'
      }];
      return;
    }

    if (plotProps.fullValue === 'top' || plotProps.fullValue === 'bottom') {
      plotProps.options = [{
        label: _('Top'),
        value: 'top'
      }, {
        label: _('Bottom'),
        value: 'bottom'
      }];
      return;
    }

    if (plotProps.fullValue === 'clockwise' || plotProps.fullValue === 'counterclockwise') {
      plotProps.options = [{
        label: _('Clockwise'),
        value: 'clockwise'
      }, {
        label: _('Counterclockwise'),
        value: 'counterclockwise'
      }];
      return;
    }

    plotProps.isVisible = false;
  }
});
exports.AxisSide = AxisSide;
var ContourNumeric = (0, _lib.connectToContainer)(_Numeric.UnconnectedNumeric, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var fullContainer = plotProps.fullContainer;

    if (plotProps.isVisible && fullContainer && fullContainer.autocontour) {
      plotProps.isVisible = false;
    }
  }
});
exports.ContourNumeric = ContourNumeric;
var BinningDropdown = (0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = context.localize;
    var axis = plotProps.fullContainer.type === 'histogram2d' ? 'Z' : plotProps.fullContainer.orientation === 'v' ? 'Y' : 'X';
    plotProps.options = [{
      label: _('Count ') + axis,
      value: 'count'
    }, {
      label: _('Sum ') + axis,
      value: 'sum'
    }, {
      label: _('Average ') + axis,
      value: 'avg'
    }, {
      label: _('Minimum ') + axis,
      value: 'min'
    }, {
      label: _('Maximum ') + axis,
      value: 'max'
    }];
  }
});
exports.BinningDropdown = BinningDropdown;
var TickFormat = (0, _lib.connectToContainer)(_DropdownCustom.UnconnectedDropdownCustom, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = context.localize;

    if (plotProps.fullContainer.type === 'date') {
      plotProps.options = [{
        label: _('Default'),
        value: ''
      }, {
        label: _('Advanced (d3-time-format)'),
        value: '%Y-%m-%d'
      }];
      plotProps.customOpt = '%Y-%m-%d';
    } else {
      plotProps.options = [{
        label: _('Simple'),
        value: ''
      }, {
        label: _('Advanced (d3-format)'),
        value: 's'
      }];
      plotProps.customOpt = 's';
    }
  }
});
exports.TickFormat = TickFormat;
var ShowInLegend = (0, _lib.connectToContainer)(_VisibilitySelect.UnconnectedVisibilitySelect, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    if (context.container.type && context.container.type !== 'sunburst' && context.container.type !== 'treemap') {
      plotProps.isVisible = context.fullLayout.showlegend;
    }

    return plotProps;
  }
});
exports.ShowInLegend = ShowInLegend;
var HistogramInfoVertical = (0, _lib.connectToContainer)(_Info.default, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    plotProps.isVisible = context.fullContainer.type === 'histogram' && context.fullContainer.orientation === 'v';
    return plotProps;
  }
});
exports.HistogramInfoVertical = HistogramInfoVertical;
var HistogramInfoHorizontal = (0, _lib.connectToContainer)(_Info.default, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    plotProps.isVisible = context.fullContainer.type === 'histogram' && context.fullContainer.orientation === 'h';
    return plotProps;
  }
});
exports.HistogramInfoHorizontal = HistogramInfoHorizontal;
var Histogram2d = (0, _lib.connectToContainer)(_Info.default, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    plotProps.isVisible = context.fullContainer.type === 'histogram2d';
    return plotProps;
  }
});
exports.Histogram2d = Histogram2d;
var AxesRange = (0, _lib.connectToContainer)(_AxisRangeValue.UnconnectedAxisRangeValue, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var fullContainer = plotProps.fullContainer;

    if (plotProps.isVisible && fullContainer && fullContainer.autorange) {
      plotProps.isVisible = false;
    }

    return plotProps;
  }
});
exports.AxesRange = AxesRange;
var NTicks = (0, _lib.connectToContainer)(_Numeric.UnconnectedNumeric, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var fullContainer = plotProps.fullContainer;

    if (plotProps.isVisible && fullContainer && fullContainer.tickmode !== 'auto') {
      plotProps.isVisible = false;
    }

    return plotProps;
  }
});
exports.NTicks = NTicks;
var DTicks = (0, _lib.connectToContainer)(_AxisRangeValue.UnconnectedAxisRangeValue, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var fullContainer = plotProps.fullContainer;

    if (fullContainer && fullContainer._name && (fullContainer._name.startsWith('lat') || fullContainer._name.startsWith('lon'))) {
      // don't mess with visibility on geo axes
      return plotProps;
    }

    if (plotProps.isVisible && fullContainer && fullContainer.tickmode !== 'linear') {
      plotProps.isVisible = false;
    }

    return plotProps;
  }
});
exports.DTicks = DTicks;
var DTicksInterval = (0, _lib.connectToContainer)(_AxisInterval.UnconnectedAxisInterval, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var fullContainer = plotProps.fullContainer;

    if (fullContainer && fullContainer._name && (fullContainer._name.startsWith('lat') || fullContainer._name.startsWith('lon'))) {
      // don't mess with visibility on geo axes
      return plotProps;
    }

    if (plotProps.isVisible && fullContainer && fullContainer.tickmode !== 'linear') {
      plotProps.isVisible = false;
    }

    return plotProps;
  }
});
exports.DTicksInterval = DTicksInterval;

var UnconnectedNumericFraction = /*#__PURE__*/function (_UnconnectedNumeric) {
  _inherits(UnconnectedNumericFraction, _UnconnectedNumeric);

  var _super = _createSuper(UnconnectedNumericFraction);

  function UnconnectedNumericFraction() {
    _classCallCheck(this, UnconnectedNumericFraction);

    return _super.apply(this, arguments);
  }

  return UnconnectedNumericFraction;
}(_Numeric.UnconnectedNumeric);

UnconnectedNumericFraction.propTypes = _Numeric.UnconnectedNumeric.propTypes;
UnconnectedNumericFraction.defaultProps = {
  units: '%',
  showSlider: true
};
UnconnectedNumericFraction.displayName = 'UnconnectedNumericFraction';

var numericFractionModifyPlotProps = function numericFractionModifyPlotProps(props, context, plotProps) {
  var attrMeta = plotProps.attrMeta,
      fullValue = plotProps.fullValue,
      updatePlot = plotProps.updatePlot;
  var min = attrMeta && attrMeta.min || 0;
  var max = attrMeta && attrMeta.max || 1;

  if ((0, _fastIsnumeric.default)(fullValue)) {
    plotProps.fullValue = Math.round(100 * (fullValue - min) / (max - min));
  }

  plotProps.updatePlot = function (v) {
    if ((0, _fastIsnumeric.default)(v)) {
      updatePlot(v / 100 * (max - min) + min);
    } else {
      updatePlot(v);
    }
  };

  plotProps.max = 100;
  plotProps.min = 0;
};

var NumericFraction = (0, _lib.connectToContainer)(UnconnectedNumericFraction, {
  modifyPlotProps: numericFractionModifyPlotProps
});
exports.NumericFraction = NumericFraction;
var NumericFractionDomain = (0, _lib.connectToContainer)(UnconnectedNumericFraction, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    numericFractionModifyPlotProps(props, context, plotProps);

    if (context.container && context.container.overlaying) {
      plotProps.isVisible = null;
    }
  }
});
exports.NumericFractionDomain = NumericFractionDomain;
var NumericFractionInverse = (0, _lib.connectToContainer)(UnconnectedNumericFraction, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var attrMeta = plotProps.attrMeta,
        fullValue = plotProps.fullValue,
        updatePlot = plotProps.updatePlot;

    if ((0, _fastIsnumeric.default)(fullValue)) {
      plotProps.fullValue = Math.round((1 - fullValue) * 100);
    }

    plotProps.updatePlot = function (v) {
      if ((0, _fastIsnumeric.default)(v)) {
        updatePlot(1 - v / 100);
      } else {
        updatePlot(v);
      }
    }; // Also take the inverse of max and min.


    if (attrMeta) {
      if ((0, _fastIsnumeric.default)(attrMeta.min)) {
        plotProps.max = (1 - attrMeta.min) * 100;
      }

      if ((0, _fastIsnumeric.default)(attrMeta.max)) {
        plotProps.min = (1 - attrMeta.max) * 100;
      }
    }
  }
});
exports.NumericFractionInverse = NumericFractionInverse;
var NumericReciprocal = (0, _lib.connectToContainer)(_Numeric.UnconnectedNumeric, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var fullValue = plotProps.fullValue,
        updatePlot = plotProps.updatePlot;

    if ((0, _fastIsnumeric.default)(fullValue)) {
      plotProps.fullValue = 1 / fullValue;
    }

    plotProps.updatePlot = function (v) {
      if ((0, _fastIsnumeric.default)(v)) {
        updatePlot(1 / v);
      } else {
        updatePlot(v);
      }
    };

    plotProps.min = 0;
  }
});
exports.NumericReciprocal = NumericReciprocal;
var AnnotationArrowRef = (0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = context.localize;

    if (!context.fullContainer) {
      return;
    }

    var _context$fullContaine = context.fullContainer,
        xref = _context$fullContaine.xref,
        yref = _context$fullContaine.yref;
    var currentAxisRef;

    if (props.attr === 'axref') {
      currentAxisRef = xref;
    } else if (props.attr === 'ayref') {
      currentAxisRef = yref;
    } else {
      throw new Error(_('AnnotationArrowRef must be given either "axref" or "ayref" as attrs. Instead was given') + props.attr);
    }

    if (currentAxisRef === 'paper') {
      // If currentAxesRef is paper provide all axes options to user.
      var axes = (0, _lib.getAllAxes)(context.fullLayout).filter(function (a) {
        return a._id;
      });

      if (axes.length > 0) {
        plotProps.options = [{
          label: _('in pixels'),
          value: 'pixel'
        }].concat(_toConsumableArray(computeAxesRefOptions(axes, props.attr)));
      } else {
        plotProps.isVisible = false;
      }
    } else {
      // If currentAxesRef is an actual axes then offer that value as the only
      // axes option.
      plotProps.options = [{
        label: _('in pixels'),
        value: 'pixel'
      }, {
        label: _('according to axis'),
        value: currentAxisRef
      }];
    }

    plotProps.clearable = false;
  }
});
exports.AnnotationArrowRef = AnnotationArrowRef;
var AnnotationRef = (0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    if (!context.fullContainer) {
      return;
    }

    var _context$fullContaine2 = context.fullContainer,
        axref = _context$fullContaine2.axref,
        ayref = _context$fullContaine2.ayref,
        _ = context.localize;
    var currentOffsetRef;

    if (props.attr === 'xref') {
      currentOffsetRef = axref;
    } else if (props.attr === 'yref') {
      currentOffsetRef = ayref;
    } else {
      throw new Error(_('AnnotationRef must be given either "xref" or "yref" as attrs. Instead was given') + props.attr + '.');
    }

    var axes = (0, _lib.getAllAxes)(context.fullLayout).filter(function (a) {
      return a._id;
    });

    if (axes.length > 0) {
      plotProps.options = [{
        label: _('Canvas'),
        value: 'paper'
      }].concat(_toConsumableArray(computeAxesRefOptions(axes, props.attr)));
    } else {
      plotProps.isVisible = false;
    }

    if (currentOffsetRef !== 'pixel') {
      plotProps.updatePlot = function (v) {
        if (!plotProps.updateContainer) {
          return;
        }
        /*
         * If user is changing axis also change their a[x|y]ref arrow axis
         * reference to match if the value is an axis value.
         * Behaviour copied from plot.ly/create
         */


        var update = _defineProperty({}, props.attr, v);

        if (v !== 'paper') {
          update["a".concat(props.attr)] = v;
        }

        plotProps.updateContainer(update);
      };
    }

    plotProps.clearable = false;
  }
});
exports.AnnotationRef = AnnotationRef;
var PositioningRef = (0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var axes = (0, _lib.getAllAxes)(context.fullLayout).filter(function (a) {
      return a._id;
    });

    if (axes.length > 0) {
      plotProps.options = [{
        label: 'Canvas',
        value: 'paper'
      }].concat(_toConsumableArray(computeAxesRefOptions(axes, props.attr)));
      plotProps.clearable = false;
    } else {
      plotProps.isVisible = false;
    }
  }
});
exports.PositioningRef = PositioningRef;
var PositioningNumeric = (0, _lib.connectToContainer)(_NumericOrDate.UnconnectedNumericOrDate, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var fullContainer = plotProps.fullContainer,
        fullValue = plotProps.fullValue,
        updatePlot = plotProps.updatePlot;

    if (fullContainer && (fullContainer[props.attr[0] + 'ref'] === 'paper' || fullContainer[props.attr[props.attr.length - 1] + 'ref'] === 'paper')) {
      plotProps.units = '%';
      plotProps.showSlider = true;
      plotProps.max = 100;
      plotProps.min = 0;
      plotProps.step = 1;

      if ((0, _fastIsnumeric.default)(fullValue)) {
        plotProps.fullValue = Math.round(100 * fullValue);
      }

      plotProps.updatePlot = function (v) {
        if ((0, _fastIsnumeric.default)(v)) {
          updatePlot(v / 100);
        } else {
          updatePlot(v);
        }
      };
    }
  }
});
exports.PositioningNumeric = PositioningNumeric;

function computeAxesRefOptions(axes, propsAttr) {
  var options = [];

  for (var i = 0; i < axes.length; i++) {
    var ax = axes[i];

    if (ax._id.charAt(0) === propsAttr.charAt(0) || ax._id.charAt(0) === propsAttr.charAt(1)) {
      var label = (0, _lib.getAxisTitle)(ax);
      options.push({
        label: label,
        value: ax._id
      });
    }
  }

  return options;
}

var TextInfo = (0, _lib.connectToContainer)(_Flaglist.UnconnectedFlaglist, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = context.localize,
        container = context.container;
    var options = [{
      label: _('Label'),
      value: 'label'
    }, {
      label: _('Value'),
      value: 'value'
    }, {
      label: _('%'),
      value: 'percent'
    }];

    if (container.type === 'funnel') {
      options = [{
        label: _('Label'),
        value: 'label'
      }, {
        label: _('Value'),
        value: 'value'
      }, {
        label: _('% initial'),
        value: 'percent initial'
      }, {
        label: _('% previous'),
        value: 'percent previous'
      }, {
        label: _('% total'),
        value: 'percent total'
      }];
    }

    if (container.text) {
      options.push({
        label: _('Text'),
        value: 'text'
      });
    }

    plotProps.options = options;
  }
});
exports.TextInfo = TextInfo;
var HoverTemplateSwitch = (0, _lib.connectToContainer)(_Radio.UnconnectedRadio, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = context.localize;
    plotProps.options = [{
      label: _('Values'),
      value: ''
    }, {
      label: _('Template'),
      value: plotProps.fullValue || ' '
    }];
    return plotProps;
  }
});
exports.HoverTemplateSwitch = HoverTemplateSwitch;
var HoverTemplateText = (0, _lib.connectToContainer)(_TextEditor.UnconnectedTextEditor, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    if (plotProps.isVisible && plotProps.fullValue === '') {
      plotProps.isVisible = false;
    }

    return plotProps;
  }
});
exports.HoverTemplateText = HoverTemplateText;
var HoverInfo = (0, _lib.connectToContainer)(_Flaglist.UnconnectedFlaglist, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = context.localize,
        container = context.container;
    var options = [{
      label: _('X'),
      value: 'x'
    }, {
      label: _('Y'),
      value: 'y'
    }];

    if (['heatmap', 'heatmapgl', 'histogram2d', 'histogram2dcontour', 'contour', 'contourcarpet', 'scatter3d', 'surface', 'mesh3d'].includes(container.type)) {
      options.push({
        label: _('Z'),
        value: 'z'
      });
    } else if (container.type === 'choropleth') {
      options = [{
        label: _('Location'),
        value: 'location'
      }, {
        label: _('Values'),
        value: 'z'
      }];
    } else if (container.type === 'scattergeo') {
      if (container.locations) {
        options = [{
          label: _('Location'),
          value: 'location'
        }];
      } else if (container.lat || container.lon) {
        options = [{
          label: _('Longitude'),
          value: 'lon'
        }, {
          label: _('Latitude'),
          value: 'lat'
        }];
      }
    } else if (container.type === 'scattermapbox') {
      options = [{
        label: _('Longitude'),
        value: 'lon'
      }, {
        label: _('Latitude'),
        value: 'lat'
      }];
    } else if (container.type === 'densitymapbox') {
      options = [{
        label: _('Longitude'),
        value: 'lon'
      }, {
        label: _('Latitude'),
        value: 'lat'
      }, {
        label: _('Z'),
        value: 'z'
      }];
    } else if (container.type === 'scatterternary') {
      options = [{
        label: _('A'),
        value: 'a'
      }, {
        label: _('B'),
        value: 'b'
      }, {
        label: _('C'),
        value: 'c'
      }];
    } else if (['scatterpolar', 'scatterpolargl', 'barpolar'].includes(container.type)) {
      options = [{
        label: _('R'),
        value: 'r'
      }, {
        label: _('Theta'),
        value: 'theta'
      }];
    } else if (container.type === 'pie') {
      options = [{
        label: _('Percent'),
        value: 'percent'
      }];
    } else if (container.type === 'table') {
      plotProps.isVisible = false;
    } else if (['cone', 'streamtube'].includes(container.type)) {
      options = [{
        label: _('X'),
        value: 'x'
      }, {
        label: _('Y'),
        value: 'y'
      }, {
        label: _('Z'),
        value: 'z'
      }, {
        label: _('U'),
        value: 'u'
      }, {
        label: _('V'),
        value: 'v'
      }, {
        label: _('W'),
        value: 'w'
      }, {
        label: _('Norm'),
        value: 'norm'
      }, {
        label: _('Divergence'),
        value: 'divergence'
      }];
    } else if (container.type === 'sunburst' || container.type === 'treemap') {
      options = [];
    }

    if (container.labels && ['pie', 'sunburst', 'treemap', 'funnelarea'].includes(container.type)) {
      options.push({
        label: _('Label'),
        value: 'label'
      });
    }

    if (container.values && ['pie', 'sunburst', 'treemap', 'funnelarea'].includes(container.type)) {
      options.push({
        label: _('Value'),
        value: 'value'
      });
    }

    if (container.text) {
      options.push({
        label: _('Text'),
        value: 'text'
      });
    }

    options.push({
      label: _('Trace name'),
      value: 'name'
    });
    plotProps.options = options;
  }
});
exports.HoverInfo = HoverInfo;
var FillDropdown = (0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = context.localize;
    var options = [{
      label: _('None'),
      value: 'none'
    }, {
      label: _('Y = 0'),
      value: 'tozeroy'
    }, {
      label: _('X = 0'),
      value: 'tozerox'
    }, {
      label: _('Previous Y'),
      value: 'tonexty'
    }, {
      label: _('Previous X'),
      value: 'tonextx'
    }];

    if (context.container.type === 'scatterternary' || context.container.type === 'scattercarpet' || context.container.type === 'scatterpolar') {
      options = [{
        label: _('None'),
        value: 'none'
      }, {
        label: _('To Self'),
        value: 'toself'
      }, {
        label: _('To Next'),
        value: 'tonext'
      }];
    } else if (context.container.type === 'scattergeo' || context.container.type === 'scattermapbox') {
      options = [{
        label: _('None'),
        value: 'none'
      }, {
        label: _('To Self'),
        value: 'toself'
      }];
    }

    plotProps.options = options;
    plotProps.clearable = false;
  }
});
exports.FillDropdown = FillDropdown;
var MapboxSourceArray = (0, _lib.connectToContainer)(_Text.default, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var fullValue = plotProps.fullValue,
        updatePlot = plotProps.updatePlot;

    if (plotProps.fullValue && plotProps.fullValue.length > 0) {
      plotProps.fullValue = fullValue[0];
    }

    plotProps.updatePlot = function (v) {
      if (v.length) {
        updatePlot([v]);
      } else {
        updatePlot([]);
      }
    };
  }
});
exports.MapboxSourceArray = MapboxSourceArray;
var MapboxStyleDropdown = (0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var mapBoxAccess = context.mapBoxAccess,
        _ = context.localize;
    plotProps.options = (!mapBoxAccess ? [] : [{
      label: _('Mapbox Basic'),
      value: 'basic'
    }, {
      label: _('Mapbox Outdoors'),
      value: 'outdoors'
    }, {
      label: _('Mapbox Light'),
      value: 'light'
    }, {
      label: _('Mapbox Dark'),
      value: 'dark'
    }, {
      label: _('Mapbox Satellite'),
      value: 'satellite'
    }, {
      label: _('Mapbox Satellite with Streets'),
      value: 'satellite-streets'
    }]).concat([{
      label: _('No tiles (white background)'),
      value: 'white-bg'
    }, {
      label: _('Open Street Map'),
      value: 'open-street-map'
    }, {
      label: _('Carto Positron'),
      value: 'carto-positron'
    }, {
      label: _('Carto Dark Matter'),
      value: 'carto-darkmatter'
    }, {
      label: _('Stamen Terrain'),
      value: 'stamen-terrain'
    }, {
      label: _('Stamen Toner'),
      value: 'stamen-toner'
    }, {
      label: _('Stamen Watercolor'),
      value: 'stamen-watercolor'
    }]);
    plotProps.clearable = false;
  }
});
exports.MapboxStyleDropdown = MapboxStyleDropdown;
MapboxStyleDropdown.contextTypes = _objectSpread({
  mapBoxAccess: _propTypes.default.bool
}, MapboxStyleDropdown.contextTypes);
var HoveronDropdown = (0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = context.localize;
    var options;

    if (context.container.type === 'box') {
      options = [{
        label: _('Boxes'),
        value: 'boxes'
      }, {
        label: _('Points'),
        value: 'points'
      }, {
        label: _('Boxes and Points'),
        value: 'boxes+points'
      }];
    } else if (context.container.type === 'violin') {
      options = [{
        label: _('Violins'),
        value: 'violins'
      }, {
        label: _('Points'),
        value: 'points'
      }, {
        label: _('KDE'),
        value: 'kde'
      }, {
        label: _('Violins and Points'),
        value: 'violins+points'
      }, {
        label: _('Violins, Points and KDE'),
        value: 'violins+points+kde'
      }];
    } else {
      options = [{
        label: _('Points'),
        value: 'points'
      }, {
        label: _('Fills'),
        value: 'fills'
      }, {
        label: _('Points and Fills'),
        value: 'points+fills'
      }];
    }

    plotProps.options = options;
    plotProps.clearable = false;
  }
});
exports.HoveronDropdown = HoveronDropdown;
var HovermodeDropdown = (0, _lib.connectToContainer)(_VisibilitySelect.UnconnectedVisibilitySelect, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = context.localize;
    plotProps.options = context.container.xaxis && Object.keys(context.container.xaxis).length > 0 ? [{
      label: _('Closest'),
      value: 'closest'
    }, {
      label: _('X Axis'),
      value: 'x'
    }, {
      label: _('Y Axis'),
      value: 'y'
    }, {
      label: _('Disable'),
      value: false
    }] : [{
      label: _('Closest'),
      value: 'closest'
    }, {
      label: _('Disable'),
      value: false
    }];
    plotProps.clearable = false;
    plotProps.dropdown = true;
    plotProps.showOn = ['closest', 'x', 'y'];
  }
});
exports.HovermodeDropdown = HovermodeDropdown;
var HoverColor = (0, _lib.connectToContainer)(_ColorPicker.UnconnectedColorPicker, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    plotProps.isVisible = Boolean(context.fullLayout.hovermode);
    return plotProps;
  }
});
exports.HoverColor = HoverColor;
var LevelRendered = (0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = context.localize;

    if (context.container.ids && context.container.ids.length) {
      plotProps.isVisible = true;
      plotProps.options = [{
        label: _('Root'),
        value: ''
      }].concat(context.container.ids.map(function (i) {
        return {
          label: i,
          value: i
        };
      }));
    }
  }
});
exports.LevelRendered = LevelRendered;
//# sourceMappingURL=derived.js.map