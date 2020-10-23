"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TraceTypeSection = exports.LayoutSection = exports.LayoutPanel = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _PlotlyPanel = _interopRequireDefault(require("./PlotlyPanel"));

var _PlotlySection = _interopRequireDefault(require("./PlotlySection"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LayoutPanel = (0, _lib.connectLayoutToPlot)(_PlotlyPanel.default);
exports.LayoutPanel = LayoutPanel;
var LayoutSection = (0, _lib.connectLayoutToPlot)(_PlotlySection.default);
exports.LayoutSection = LayoutSection;

var TraceTypeSection = function TraceTypeSection(props, context) {
  var fullContainer = context.fullContainer,
      fullData = context.fullData;
  var mode = props.mode,
      traceTypes = props.traceTypes;
  var ifConnectedToTrace = mode === 'trace' && fullContainer && traceTypes.includes(fullContainer.type);
  var ifConnectedToLayout = mode === 'layout' && fullData && fullData.some(function (t) {
    return traceTypes.includes(t.type);
  });

  if (ifConnectedToTrace || ifConnectedToLayout) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PlotlySection.default, _objectSpread({}, props));
  }

  return null;
};

exports.TraceTypeSection = TraceTypeSection;
TraceTypeSection.contextTypes = _lib.containerConnectedContextTypes;
TraceTypeSection.propTypes = {
  children: _propTypes.default.node,
  name: _propTypes.default.string,
  traceTypes: _propTypes.default.array,
  mode: _propTypes.default.string
};
TraceTypeSection.defaultProps = {
  traceTypes: [],
  mode: 'layout'
};
//# sourceMappingURL=derived.js.map