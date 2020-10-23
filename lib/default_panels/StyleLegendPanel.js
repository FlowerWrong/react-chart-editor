"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleLegendPanel = function StyleLegendPanel(props, _ref) {
  var _ = _ref.localize;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TraceRequiredPanel, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlyFold, {
      name: _('Legend'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "showlegend",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
        name: _('Legend Title'),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextEditor, {
          label: _('Text'),
          attr: "legend.title.text",
          richTextOnly: true
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FontSelector, {
          label: _('Typeface'),
          attr: "legend.title.font.family"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
          label: _('Size'),
          attr: "legend.title.font.size",
          units: "px"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
          label: _('Color'),
          attr: "legend.title.font.color"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
        name: _('Text'),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FontSelector, {
          label: _('Typeface'),
          attr: "legend.font.family"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
          label: _('Size'),
          attr: "legend.font.size",
          units: "px"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
          label: _('Color'),
          attr: "legend.font.color"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
        name: _('Legend Box'),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
          label: _('Border Width'),
          attr: "legend.borderwidth",
          units: "px"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
          label: _('Border Color'),
          attr: "legend.bordercolor"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
          label: _('Background Color'),
          attr: "legend.bgcolor"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
        name: _('Horizontal Positioning'),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
          label: _('Anchor Point'),
          clearable: false,
          attr: "legend.xanchor",
          options: [{
            label: _('Auto'),
            value: 'auto'
          }, {
            label: _('Left'),
            value: 'left'
          }, {
            label: _('Center'),
            value: 'center'
          }, {
            label: _('Right'),
            value: 'right'
          }]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
          label: _('Position'),
          showSlider: true,
          step: 0.02,
          attr: "legend.x"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
        name: _('Vertical Positioning'),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
          label: _('Anchor Point'),
          clearable: false,
          attr: "legend.yanchor",
          options: [{
            label: _('Auto'),
            value: 'auto'
          }, {
            label: _('Top'),
            value: 'top'
          }, {
            label: _('Middle'),
            value: 'middle'
          }, {
            label: _('Bottom'),
            value: 'bottom'
          }]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
          label: _('Position'),
          showSlider: true,
          step: 0.02,
          attr: "legend.y"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
          label: _('Text Alignment'),
          clearable: false,
          attr: "legend.valign",
          options: [{
            label: _('Top'),
            value: 'top'
          }, {
            label: _('Middle'),
            value: 'middle'
          }, {
            label: _('Bottom'),
            value: 'bottom'
          }]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
        name: _('Orientation'),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
          attr: "legend.orientation",
          options: [{
            label: _('Vertical'),
            value: 'v'
          }, {
            label: _('Horizontal'),
            value: 'h'
          }]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
        name: _('Traces'),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
          label: _('Trace Order'),
          attr: "legend.traceorder",
          options: [{
            label: _('Normal'),
            value: 'normal'
          }, {
            label: _('Reversed'),
            value: 'reversed'
          }, {
            label: _('Grouped'),
            value: 'grouped'
          }, {
            label: _('Reversed and Grouped'),
            value: 'reversed+grouped'
          }]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
          label: _('Item Sizing'),
          attr: "legend.itemsizing",
          options: [{
            label: _('Trace'),
            value: 'trace'
          }, {
            label: _('Constant'),
            value: 'constant'
          }]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
          label: _('Gap Between Groups'),
          attr: "legend.tracegroupgap",
          units: "px"
        })]
      })]
    })
  });
};

StyleLegendPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = StyleLegendPanel;
exports.default = _default;
//# sourceMappingURL=StyleLegendPanel.js.map