"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

var _derived = require("../components/fields/derived");

var _DataSelector = _interopRequireDefault(require("../components/fields/DataSelector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleLayoutPanel = function StyleLayoutPanel(props, _ref) {
  var _ = _ref.localize;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.LayoutPanel, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlyFold, {
      name: _('Defaults'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Plot Background'),
        attr: "plot_bgcolor"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Margin Color'),
        attr: "paper_bgcolor"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
        name: _('Colorscales'),
        attr: "colorway",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorwayPicker, {
          label: _('Categorical'),
          attr: "colorway",
          disableCategorySwitch: true,
          labelWidth: 80
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorscalePicker, {
          label: _('Sequential'),
          attr: "colorscale.sequential",
          disableCategorySwitch: true,
          labelWidth: 80
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorscalePicker, {
          label: _('Diverging'),
          attr: "colorscale.diverging",
          initialCategory: "divergent",
          disableCategorySwitch: true,
          labelWidth: 80
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorscalePicker, {
          label: _('Negative Sequential'),
          attr: "colorscale.sequentialminus",
          disableCategorySwitch: true,
          labelWidth: 80
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
        name: _('Text'),
        attr: "font.family",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FontSelector, {
          label: _('Typeface'),
          attr: "font.family",
          clearable: false
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
          label: _('Base Font Size'),
          attr: "font.size",
          units: "px"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
          label: _('Font Color'),
          attr: "font.color"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
          label: _('Number format'),
          attr: "separators",
          options: [{
            label: _('1,234.56'),
            value: '.,'
          }, {
            label: _('1 234.56'),
            value: ', '
          }, {
            label: _('1 234,56'),
            value: ', '
          }, {
            label: _('1.234,56'),
            value: ',.'
          }],
          clearable: false
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
          label: _('Uniform Text Mode'),
          attr: "uniformtext.mode",
          options: [{
            label: _('Off'),
            value: false
          }, {
            label: _('Show'),
            value: 'show'
          }, {
            label: _('Hide'),
            value: 'hide'
          }],
          clearable: false
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
          label: _('Uniform Text Size Minimum'),
          attr: "uniformtext.minsize",
          units: "px"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlyFold, {
      name: _('Title'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextEditor, {
        attr: "title.text"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FontSelector, {
        label: _('Typeface'),
        attr: "title.font.family",
        clearable: false
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Font Size'),
        attr: "title.font.size",
        units: "px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Font Color'),
        attr: "title.font.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Horizontal Position'),
        showSlider: true,
        step: 0.02,
        attr: "title.x"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlyFold, {
      name: _('Modebar'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Orientation'),
        attr: "modebar.orientation",
        options: [{
          label: _('Horizontal'),
          value: 'h'
        }, {
          label: _('Vertical'),
          value: 'v'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Icon Color'),
        attr: "modebar.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Active Icon Color'),
        attr: "modebar.activecolor"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Background Color'),
        attr: "modebar.bgcolor"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlyFold, {
      name: _('Size and Margins'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.VisibilitySelect, {
        attr: "autosize",
        label: _('Size'),
        options: [{
          label: _('Auto'),
          value: true
        }, {
          label: _('Custom'),
          value: false
        }],
        showOn: false,
        defaultOpt: true,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
          label: _('Fixed Width'),
          attr: "width",
          units: "px"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
          label: _('Fixed height'),
          attr: "height",
          units: "px"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Top'),
        attr: "margin.t",
        units: "px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Bottom'),
        attr: "margin.b",
        units: "px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Left'),
        attr: "margin.l",
        units: "px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Right'),
        attr: "margin.r",
        units: "px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Padding'),
        attr: "margin.pad",
        units: "px"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlyFold, {
      name: _('Interactions'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
        name: _('Drag'),
        attr: "dragmode",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
          label: _('Mode'),
          attr: "dragmode",
          options: [{
            label: _('Zoom'),
            value: 'zoom'
          }, {
            label: _('Select'),
            value: 'select'
          }, {
            label: _('Pan'),
            value: 'pan'
          }, {
            label: _('Lasso'),
            value: 'lasso'
          }, {
            label: _('Orbit'),
            value: 'orbit'
          }, {
            label: _('Turntable'),
            value: 'turntable'
          }],
          clearable: false
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
          label: _('Select Direction'),
          attr: "selectdirection",
          options: [{
            label: _('Any'),
            value: 'any'
          }, {
            label: _('Horizontal'),
            value: 'h'
          }, {
            label: _('Vertical'),
            value: 'v'
          }, {
            label: _('Diagonal'),
            value: 'd'
          }],
          clearable: false
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
        name: _('Click'),
        attr: "clickmode",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Flaglist, {
          label: _('Mode'),
          attr: "clickmode",
          options: [{
            label: _('Click Event'),
            value: 'event'
          }, {
            label: _('Select Data Point'),
            value: 'select'
          }]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
        name: _('Hover'),
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.HovermodeDropdown, {
          label: _('Mode'),
          attr: "hovermode",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
            label: _('Text Alignment'),
            attr: "hoverlabel.align",
            options: [{
              label: _('Auto'),
              value: 'auto'
            }, {
              label: _('Left'),
              value: 'left'
            }, {
              label: _('Right'),
              value: 'right'
            }],
            clearable: false
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_derived.HoverColor, {
            label: _('Background Color'),
            attr: "hoverlabel.bgcolor",
            defaultColor: "#FFF",
            handleEmpty: true
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_derived.HoverColor, {
            label: _('Border Color'),
            attr: "hoverlabel.bordercolor",
            defaultColor: "#000",
            handleEmpty: true
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FontSelector, {
            label: _('Typeface'),
            attr: "hoverlabel.font.family",
            clearable: true
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
            label: _('Font Size'),
            attr: "hoverlabel.font.size"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_derived.HoverColor, {
            label: _('Font Color'),
            attr: "hoverlabel.font.color",
            defaultColor: "#000",
            handleEmpty: true
          })]
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlyFold, {
      name: _('Meta Text'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DataSelector.default, {
        label: _('Custom Data'),
        attr: "meta"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.Info, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: _('You can refer to the items in this column in any text fields of the editor like so: ')
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: [_('Ex: '), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: {
              letterSpacing: '1px',
              fontStyle: 'italic',
              userSelect: 'text'
            },
            children: _('My custom title %{meta[1]}')
          })]
        })]
      })]
    })]
  });
};

StyleLayoutPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = StyleLayoutPanel;
exports.default = _default;
//# sourceMappingURL=StyleLayoutPanel.js.map