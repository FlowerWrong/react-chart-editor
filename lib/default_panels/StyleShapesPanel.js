"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleShapesPanel = function StyleShapesPanel(props, _ref) {
  var _ = _ref.localize;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.ShapeAccordion, {
    canAdd: true,
    canReorder: true,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
      attr: "visible",
      options: [{
        label: _('Show'),
        value: true
      }, {
        label: _('Hide'),
        value: false
      }]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
      attr: "type",
      options: [{
        label: _('Line'),
        value: 'line'
      }, {
        label: _('Rectangle'),
        value: 'rect'
      }, {
        label: _('Ellipse'),
        value: 'circle'
      }]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Horizontal Boundaries'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PositioningRef, {
        label: _('Relative to'),
        attr: "xref"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PositioningNumeric, {
        label: _('Start Point'),
        attr: "x0"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PositioningNumeric, {
        label: _('End Point'),
        attr: "x1"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Vertical Boundaries'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PositioningRef, {
        label: _('Relative to'),
        attr: "yref"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PositioningNumeric, {
        label: _('Start Point'),
        attr: "y0"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PositioningNumeric, {
        label: _('End Point'),
        attr: "y1"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Lines'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Width'),
        attr: "line.width"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Color'),
        attr: "line.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.LineDashSelector, {
        label: _('Type'),
        attr: "line.dash"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Fill'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Color'),
        attr: "fillcolor"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Opacity'),
        attr: "opacity"
      })]
    })]
  });
};

StyleShapesPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = StyleShapesPanel;
exports.default = _default;
//# sourceMappingURL=StyleShapesPanel.js.map