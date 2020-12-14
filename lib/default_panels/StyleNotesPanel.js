"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleNotesPanel = function StyleNotesPanel(props, _ref) {
  var _ = _ref.localize;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.AnnotationAccordion, {
    canAdd: true,
    canReorder: true,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Note Text'),
      attr: "text",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextEditor, {
        attr: "text"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FontSelector, {
        label: _('Typeface'),
        attr: "font.family"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Font Size'),
        attr: "font.size",
        units: "px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Font Color'),
        attr: "font.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Angle'),
        attr: "textangle",
        units: "\xB0"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Horizontal Alignment'),
        clearable: false,
        attr: "align",
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
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Vertical Alignment'),
        clearable: false,
        attr: "valign",
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
      name: _('Arrow'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "showarrow",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Line Width'),
        attr: "arrowwidth",
        units: "px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Color'),
        attr: "arrowcolor"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ArrowSelector, {
        label: _('Arrowhead'),
        attr: "arrowhead"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Scale'),
        step: 0.1,
        attr: "arrowsize",
        units: "px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AnnotationArrowRef, {
        label: _('X Offset'),
        attr: "axref"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AnnotationArrowRef, {
        label: _('Y Offset'),
        attr: "ayref"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericOrDate, {
        label: _('X Vector'),
        attr: "ax"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericOrDate, {
        label: _('Y Vector'),
        attr: "ay"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Horizontal Positioning'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Anchor Point'),
        clearable: false,
        attr: "xanchor",
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
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PositioningNumeric, {
        label: _('Position'),
        attr: "x"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AnnotationRef, {
        label: _('Relative To'),
        attr: "xref"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Vertical Positioning'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Anchor Point'),
        clearable: false,
        attr: "yanchor",
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
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PositioningNumeric, {
        label: _('Position'),
        attr: "y"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AnnotationRef, {
        label: _('Relative To'),
        attr: "yref"
      })]
    })]
  });
};

StyleNotesPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = StyleNotesPanel;
exports.default = _default;
//# sourceMappingURL=StyleNotesPanel.js.map