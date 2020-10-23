"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adjustColorscale = adjustColorscale;
exports.clamp = clamp;
exports.getDisplayName = getDisplayName;
exports.getFullTrace = getFullTrace;
exports.maybeAdjustSrc = maybeAdjustSrc;
exports.maybeTransposeData = maybeTransposeData;
exports.getParsedTemplateString = getParsedTemplateString;
exports.renderTraceIcon = renderTraceIcon;
exports.tooLight = tooLight;
exports.transpose = transpose;
Object.defineProperty(exports, "bem", {
  enumerable: true,
  get: function get() {
    return _bem.default;
  }
});
Object.defineProperty(exports, "connectCartesianSubplotToLayout", {
  enumerable: true,
  get: function get() {
    return _connectCartesianSubplotToLayout.default;
  }
});
Object.defineProperty(exports, "connectNonCartesianSubplotToLayout", {
  enumerable: true,
  get: function get() {
    return _connectNonCartesianSubplotToLayout.default;
  }
});
Object.defineProperty(exports, "connectAnnotationToLayout", {
  enumerable: true,
  get: function get() {
    return _connectAnnotationToLayout.default;
  }
});
Object.defineProperty(exports, "connectShapeToLayout", {
  enumerable: true,
  get: function get() {
    return _connectShapeToLayout.default;
  }
});
Object.defineProperty(exports, "connectSliderToLayout", {
  enumerable: true,
  get: function get() {
    return _connectSliderToLayout.default;
  }
});
Object.defineProperty(exports, "connectImageToLayout", {
  enumerable: true,
  get: function get() {
    return _connectImageToLayout.default;
  }
});
Object.defineProperty(exports, "connectUpdateMenuToLayout", {
  enumerable: true,
  get: function get() {
    return _connectUpdateMenuToLayout.default;
  }
});
Object.defineProperty(exports, "connectRangeSelectorToAxis", {
  enumerable: true,
  get: function get() {
    return _connectRangeSelectorToAxis.default;
  }
});
Object.defineProperty(exports, "connectLayersToMapbox", {
  enumerable: true,
  get: function get() {
    return _connectLayersToMapbox.default;
  }
});
Object.defineProperty(exports, "connectTransformToTrace", {
  enumerable: true,
  get: function get() {
    return _connectTransformToTrace.default;
  }
});
Object.defineProperty(exports, "connectAggregationToTransform", {
  enumerable: true,
  get: function get() {
    return _connectAggregationToTransform.default;
  }
});
Object.defineProperty(exports, "connectAxesToLayout", {
  enumerable: true,
  get: function get() {
    return _connectAxesToLayout.default;
  }
});
Object.defineProperty(exports, "connectLayoutToPlot", {
  enumerable: true,
  get: function get() {
    return _connectLayoutToPlot.default;
  }
});
Object.defineProperty(exports, "connectToContainer", {
  enumerable: true,
  get: function get() {
    return _connectToContainer.default;
  }
});
Object.defineProperty(exports, "containerConnectedContextTypes", {
  enumerable: true,
  get: function get() {
    return _connectToContainer.containerConnectedContextTypes;
  }
});
Object.defineProperty(exports, "computeTraceOptionsFromSchema", {
  enumerable: true,
  get: function get() {
    return _computeTraceOptionsFromSchema.computeTraceOptionsFromSchema;
  }
});
Object.defineProperty(exports, "connectTraceToPlot", {
  enumerable: true,
  get: function get() {
    return _connectTraceToPlot.default;
  }
});
Object.defineProperty(exports, "dereference", {
  enumerable: true,
  get: function get() {
    return _dereference.default;
  }
});
Object.defineProperty(exports, "getAllAxes", {
  enumerable: true,
  get: function get() {
    return _getAllAxes.default;
  }
});
Object.defineProperty(exports, "axisIdToAxisName", {
  enumerable: true,
  get: function get() {
    return _getAllAxes.axisIdToAxisName;
  }
});
Object.defineProperty(exports, "traceTypeToAxisType", {
  enumerable: true,
  get: function get() {
    return _getAllAxes.traceTypeToAxisType;
  }
});
Object.defineProperty(exports, "getAxisTitle", {
  enumerable: true,
  get: function get() {
    return _getAllAxes.getAxisTitle;
  }
});
Object.defineProperty(exports, "getSubplotTitle", {
  enumerable: true,
  get: function get() {
    return _getAllAxes.getSubplotTitle;
  }
});
Object.defineProperty(exports, "localize", {
  enumerable: true,
  get: function get() {
    return _localize.default;
  }
});
Object.defineProperty(exports, "localizeString", {
  enumerable: true,
  get: function get() {
    return _localize.localizeString;
  }
});
Object.defineProperty(exports, "unpackPlotProps", {
  enumerable: true,
  get: function get() {
    return _unpackPlotProps.default;
  }
});
Object.defineProperty(exports, "computeCustomConfigVisibility", {
  enumerable: true,
  get: function get() {
    return _unpackPlotProps.computeCustomConfigVisibility;
  }
});
Object.defineProperty(exports, "hasValidCustomConfigVisibilityRules", {
  enumerable: true,
  get: function get() {
    return _unpackPlotProps.hasValidCustomConfigVisibilityRules;
  }
});
Object.defineProperty(exports, "isVisibleGivenCustomConfig", {
  enumerable: true,
  get: function get() {
    return _unpackPlotProps.isVisibleGivenCustomConfig;
  }
});
Object.defineProperty(exports, "walkObject", {
  enumerable: true,
  get: function get() {
    return _walkObject.default;
  }
});
Object.defineProperty(exports, "isPlainObject", {
  enumerable: true,
  get: function get() {
    return _walkObject.isPlainObject;
  }
});
Object.defineProperty(exports, "traceTypeToPlotlyInitFigure", {
  enumerable: true,
  get: function get() {
    return _customTraceType.traceTypeToPlotlyInitFigure;
  }
});
Object.defineProperty(exports, "plotlyTraceToCustomTrace", {
  enumerable: true,
  get: function get() {
    return _customTraceType.plotlyTraceToCustomTrace;
  }
});
Object.defineProperty(exports, "striptags", {
  enumerable: true,
  get: function get() {
    return _striptags.default;
  }
});
Object.defineProperty(exports, "capitalize", {
  enumerable: true,
  get: function get() {
    return _strings.capitalize;
  }
});
Object.defineProperty(exports, "lowerCase", {
  enumerable: true,
  get: function get() {
    return _strings.lowerCase;
  }
});
Object.defineProperty(exports, "upperCase", {
  enumerable: true,
  get: function get() {
    return _strings.upperCase;
  }
});
Object.defineProperty(exports, "removeNonWord", {
  enumerable: true,
  get: function get() {
    return _strings.removeNonWord;
  }
});
Object.defineProperty(exports, "camelCase", {
  enumerable: true,
  get: function get() {
    return _strings.camelCase;
  }
});
Object.defineProperty(exports, "pascalCase", {
  enumerable: true,
  get: function get() {
    return _strings.pascalCase;
  }
});

var _bem = _interopRequireDefault(require("./bem"));

var _connectCartesianSubplotToLayout = _interopRequireDefault(require("./connectCartesianSubplotToLayout"));

var _connectNonCartesianSubplotToLayout = _interopRequireDefault(require("./connectNonCartesianSubplotToLayout"));

var _connectAnnotationToLayout = _interopRequireDefault(require("./connectAnnotationToLayout"));

var _connectShapeToLayout = _interopRequireDefault(require("./connectShapeToLayout"));

var _connectSliderToLayout = _interopRequireDefault(require("./connectSliderToLayout"));

var _connectImageToLayout = _interopRequireDefault(require("./connectImageToLayout"));

var _connectUpdateMenuToLayout = _interopRequireDefault(require("./connectUpdateMenuToLayout"));

var _connectRangeSelectorToAxis = _interopRequireDefault(require("./connectRangeSelectorToAxis"));

var _connectLayersToMapbox = _interopRequireDefault(require("./connectLayersToMapbox"));

var _connectTransformToTrace = _interopRequireDefault(require("./connectTransformToTrace"));

var _connectAggregationToTransform = _interopRequireDefault(require("./connectAggregationToTransform"));

var _connectAxesToLayout = _interopRequireDefault(require("./connectAxesToLayout"));

var _connectLayoutToPlot = _interopRequireDefault(require("./connectLayoutToPlot"));

var _connectToContainer = _interopRequireWildcard(require("./connectToContainer"));

var _computeTraceOptionsFromSchema = require("./computeTraceOptionsFromSchema");

var _connectTraceToPlot = _interopRequireDefault(require("./connectTraceToPlot"));

var _dereference = _interopRequireDefault(require("./dereference"));

var _getAllAxes = _interopRequireWildcard(require("./getAllAxes"));

var _localize = _interopRequireWildcard(require("./localize"));

var _tinycolor = _interopRequireDefault(require("tinycolor2"));

var _unpackPlotProps = _interopRequireWildcard(require("./unpackPlotProps"));

var _walkObject = _interopRequireWildcard(require("./walkObject"));

var _customTraceType = require("./customTraceType");

var PlotlyIcons = _interopRequireWildcard(require("plotly-icons"));

var _striptags = _interopRequireDefault(require("./striptags"));

var _strings = require("./strings");

var _reactColorscales = require("react-colorscales");

var _lib = require("plotly.js/src/lib");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TOO_LIGHT_FACTOR = 0.8;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function tooLight(color) {
  var hslColor = (0, _tinycolor.default)(color).toHsl();
  return hslColor.l > TOO_LIGHT_FACTOR;
}

function renderTraceIcon(trace) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Plot';

  if (!trace) {
    return null;
  }

  var gl = 'gl';
  var componentName = "".concat(prefix).concat((0, _strings.pascalCase)(trace.endsWith(gl) ? trace.slice(0, -gl.length) : trace), "Icon");
  return PlotlyIcons[componentName] ? PlotlyIcons[componentName] : PlotlyIcons.PlotLineIcon;
}

function transpose(originalArray) {
  // if we want to transpose a uni dimensional array
  if (originalArray.every(function (a) {
    return !Array.isArray(a);
  })) {
    return originalArray.map(function (a) {
      return [a];
    });
  }

  var longestArrayItem = Array.isArray(originalArray[0]) ? originalArray[0].length : 1;
  originalArray.forEach(function (a) {
    // if it's not an array, it's a string
    var length = Array.isArray(a) ? a.length : 1;

    if (length > longestArrayItem) {
      longestArrayItem = length;
    }
  });
  var newArray = new Array(longestArrayItem);

  for (var outerIndex = 0; outerIndex < originalArray.length; outerIndex++) {
    if (!Array.isArray(originalArray[outerIndex])) {
      originalArray[outerIndex] = [originalArray[outerIndex]];
    }

    for (var innerIndex = 0; innerIndex < longestArrayItem; innerIndex++) {
      // ensure we have an array to push to
      if (!Array.isArray(newArray[innerIndex])) {
        newArray[innerIndex] = [];
      }

      var value = typeof originalArray[outerIndex][innerIndex] !== 'undefined' ? originalArray[outerIndex][innerIndex] : null;
      newArray[innerIndex].push(value);
    }
  }

  return newArray;
}

var specialTableCase = function specialTableCase(traceType, srcAttributePath) {
  /* Just more user friendly
   * Table traces have many configuration options,
   * The below attributes can be 2d or 1d and will affect the plot differently
   * EX:
   * header.values = ['Jan', 'Feb', 'Mar'] => will put data in a row
   * header.values = [['Jan', 1], ['Feb', 2], ['Mar', 3]] => will create 3 columns
   * 1d arrays affect columns
   * 2d arrays affect rows within each column
   */
  return traceType === 'table' && ['header.valuessrc', 'header.font.colorsrc', 'header.font.sizesrc', 'header.fill.colorsrc', 'columnwidthsrc'].some(function (a) {
    return srcAttributePath.endsWith(a);
  });
};

function maybeTransposeData(data, srcAttributePath, traceType) {
  if (!data || Array.isArray(data) && data.length === 0) {
    return null;
  }

  var isTransposable2DArray = srcAttributePath.endsWith('zsrc') && ['contour', 'contourgl', 'heatmap', 'heatmapgl', 'surface', 'carpet', 'contourcarpet'].includes(traceType);

  if (isTransposable2DArray) {
    return transpose(data);
  }

  if (specialTableCase(traceType, srcAttributePath) && Array.isArray(data[0]) && data.length === 1) {
    return data[0];
  }

  return data;
}

function maybeAdjustSrc(src, srcAttributePath, traceType, config) {
  if (!src || Array.isArray(src) && src.length === 0) {
    return null;
  }

  if (specialTableCase(traceType, srcAttributePath) && src.length === 1) {
    return src[0];
  }

  return config && config.fromSrc ? config.fromSrc(src, traceType, srcAttributePath) : src;
}

function adjustColorscale(colorscale, numberOfNeededColors, colorscaleType, config) {
  if (config && config.repeat) {
    if (numberOfNeededColors < colorscale.length) {
      return colorscale.slice(0, numberOfNeededColors);
    }

    var repetitions = Math.ceil(numberOfNeededColors / colorscale.length);
    var newArray = new Array(repetitions).fill(colorscale);
    return newArray.reduce(function (a, b) {
      return a.concat(b);
    }, []).slice(0, numberOfNeededColors);
  }

  return (0, _reactColorscales.getColorscale)(colorscale, numberOfNeededColors, null, null, colorscaleType);
}

function getFullTrace(props, context) {
  var fullTrace = {};

  if (context.fullData && context.data) {
    if (props.fullDataArrayPosition) {
      // fullDataArrayPosition will be supplied in panels that have the canGroup prop
      fullTrace = context.fullData[props.fullDataArrayPosition[0]];
    } else {
      // for all other panels, we'll find fullTrace with the data index
      fullTrace = context.fullData.filter(function (t) {
        return t && props.traceIndexes[0] === t.index;
      })[0];
    } // For transformed traces, we actually want to read in _fullInput because
    // there's original parent information that's more useful to the user there
    // This is true except for fit transforms, where reading in fullData is
    // what we want


    if (fullTrace && fullTrace.transforms && !fullTrace.transforms.some(function (t) {
      return ['moving-average', 'fits'].includes(t.type);
    }) && !props.fullDataArrayPosition) {
      fullTrace = fullTrace._fullInput;
    }
  }

  return fullTrace;
}

function getParsedTemplateString(originalString, context) {
  var text = originalString;

  if (originalString && context) {
    text = (0, _lib.templateString)(originalString, context);
  }

  return text === '' && originalString ? originalString : text;
}
//# sourceMappingURL=index.js.map