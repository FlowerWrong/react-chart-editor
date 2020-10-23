"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

var _constants = require("../lib/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GraphSubplotsPanel = function GraphSubplotsPanel(props, _ref) {
  var _ = _ref.localize;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.SubplotAccordion, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Boundaries'),
      attr: "xaxis.domain[0]",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AxisOverlayDropdown, {
        label: _('X Overlay'),
        attr: "xaxis.overlaying"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AxisOverlayDropdown, {
        label: _('Y Overlay'),
        attr: "yaxis.overlaying"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.RectanglePositioner, {
      attr: "domain.x[0]"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.RectanglePositioner, {
      attr: "xaxis.domain[0]",
      cartesian: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.TraceTypeSection, {
      name: _('X Anchor'),
      traceTypes: _constants.TRACE_TO_AXIS.cartesian,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AxisAnchorDropdown, {
        label: _('Anchor to'),
        attr: "xaxis.anchor",
        clearable: false
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AxisSide, {
        label: _('Side'),
        attr: "xaxis.side"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.TraceTypeSection, {
      name: _('Y Anchor'),
      traceTypes: _constants.TRACE_TO_AXIS.cartesian,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AxisAnchorDropdown, {
        label: _('Anchor to'),
        attr: "yaxis.anchor",
        clearable: false
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AxisSide, {
        label: _('Side'),
        attr: "yaxis.side"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
      name: _('Aspect Ratio'),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.VisibilitySelect, {
        attr: "aspectmode",
        options: [{
          label: _('Auto'),
          value: 'mode'
        }, {
          label: _('Cube'),
          value: 'cube'
        }, {
          label: _('Data'),
          value: 'data'
        }, {
          label: _('Manual'),
          value: 'manual'
        }],
        dropdown: true,
        clearable: false,
        showOn: "manual",
        defaultOpt: "mode",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
          label: _('X'),
          attr: "aspectratio.x",
          step: 0.1
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
          label: _('Y'),
          attr: "aspectratio.y",
          step: 0.1
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
          label: _('Z'),
          attr: "aspectratio.z",
          step: 0.1
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
      name: _('Projection'),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Type'),
        attr: "camera.projection.type",
        options: [{
          label: _('Perspective'),
          value: 'perspective'
        }, {
          label: _('Orthographic'),
          value: 'orthographic'
        }],
        clearable: false
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
      name: _('Canvas'),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Plot Background'),
        attr: "bgcolor"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Bar Options'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Bar Mode'),
        attr: "barmode",
        options: [{
          label: _('Stack'),
          value: 'stack'
        }, {
          label: _('Overlay'),
          value: 'overlay'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Bar Padding'),
        attr: "bargap",
        showSlider: true
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
      name: _('Ternary'),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Sum'),
        attr: "sum"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Polar Sector'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Min'),
        attr: "sector[0]",
        min: -360,
        max: 360,
        showSlider: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Max'),
        attr: "sector[1]",
        min: -360,
        max: 360,
        showSlider: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Hole'),
        attr: "hole",
        min: 0,
        max: 100,
        showSlider: true
      })]
    })]
  });
};

GraphSubplotsPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = GraphSubplotsPanel;
exports.default = _default;
//# sourceMappingURL=GraphSubplotsPanel.js.map