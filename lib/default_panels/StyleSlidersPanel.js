"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleSlidersPanel = function StyleSlidersPanel(props, _ref) {
  var _ = _ref.localize;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.SliderAccordion, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
      attr: "visible",
      options: [{
        label: _('Show'),
        value: true
      }, {
        label: _('Hide'),
        value: false
      }]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Background'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Color'),
        attr: "bgcolor"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Active Color'),
        attr: "activebgcolor"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Border'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Width'),
        attr: "borderwidth"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Color'),
        attr: "bordercolor"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Font'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FontSelector, {
        label: _('Typeface'),
        attr: "font.family"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Size'),
        attr: "font.size"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Color'),
        attr: "font.color"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Length'),
      attr: 'len',
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Length'),
        attr: 'len',
        step: 0.02
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Length Mode'),
        attr: 'lenmode',
        options: [{
          label: _('Fraction of canvas'),
          value: 'fraction'
        }, {
          label: _('Pixels'),
          value: 'pixels'
        }]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Horizontal Positioning'),
      attr: 'x',
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Position'),
        attr: 'x',
        showSlider: true,
        step: 0.02
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Anchor'),
        attr: 'xanchor',
        options: [{
          label: _('Left'),
          value: 'left'
        }, {
          label: _('Center'),
          value: 'center'
        }, {
          label: _('Right'),
          value: 'right'
        }]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Vertical Positioning'),
      attr: 'y',
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Position'),
        attr: 'y',
        showSlider: true,
        step: 0.02
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Anchor'),
        attr: 'yanchor',
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Padding'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Top'),
        attr: "pad.t",
        units: "px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Bottom'),
        attr: "pad.b",
        units: "px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Left'),
        attr: "pad.l",
        units: "px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Right'),
        attr: "pad.r",
        units: "px"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Ticks'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Color'),
        attr: "tickcolor"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Length'),
        attr: "ticklen"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Width'),
        attr: "tickwidth"
      })]
    })]
  });
};

StyleSlidersPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = StyleSlidersPanel;
exports.default = _default;
//# sourceMappingURL=StyleSlidersPanel.js.map