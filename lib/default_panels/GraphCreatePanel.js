"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

var _derived = require("../components/fields/derived");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GraphCreatePanel = function GraphCreatePanel(props, _ref) {
  var _ = _ref.localize,
      setPanel = _ref.setPanel;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.TraceAccordion, {
    canAdd: true,
    traceFilterCondition: function traceFilterCondition(t) {
      return !(t.transforms && t.transforms.some(function (tr) {
        return ['fit', 'moving-average'].includes(tr.type);
      }));
    },
    canReorder: true,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TraceSelector, {
      label: _('Type'),
      attr: "type",
      show: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropzone, {
      attr: "geojson",
      fileType: "geojson"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.GeoJson, {
      label: _('GeoJSON'),
      attr: "geojson",
      options: [{
        label: _('China'),
        value: 'https://chartshub.oss-cn-shenzhen.aliyuncs.com/geojson/china.json'
      }, {
        label: _('USA'),
        value: 'https://chartshub.oss-cn-shenzhen.aliyuncs.com/geojson/usa.json'
      }],
      clearable: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.LocationSelector, {
      attr: "type"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('Values'),
      attr: "values"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('Labels'),
      attr: "labels"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('Parents'),
      attr: "parents"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TraceTypeSection, {
      traceTypes: ['sunburst', 'treemap'],
      mode: "trace",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('IDs'),
        attr: "ids"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
      label: _('Parent Value Mode'),
      attr: "branchvalues",
      options: [{
        label: _('Total'),
        value: 'total'
      }, {
        label: _('Remainder'),
        value: 'remainder'
      }],
      clearable: false
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: {
        histogram2d: _('X Values'),
        histogram: _('X Values'),
        '*': _('X')
      },
      attr: "x"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: {
        histogram2d: _('Y Values'),
        histogram: _('Y Values'),
        '*': _('Y')
      },
      attr: "y"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: {
        choropleth: _('Values'),
        histogram2d: _('Z Values'),
        '*': _('Z')
      },
      attr: "z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DropdownCustom, {
      label: _('GeoJSON Location Field'),
      attr: "featureidkey",
      options: [{
        label: _('id'),
        value: 'id'
      }, {
        label: _('Custom'),
        value: 'custom'
      }],
      customOpt: "custom",
      dafaultOpt: "",
      clearable: false
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
      label: _('Radius'),
      attr: "radius",
      min: 0,
      max: 50,
      showSlider: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('Measure'),
      attr: "measure"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Nodes'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Labels'),
        attr: "node.label"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Groups'),
        attr: "node.groups"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('X'),
        attr: "node.x"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Y'),
        attr: "node.y"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Links'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Sources'),
        attr: "link.source"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Targets'),
        attr: "link.target"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Values'),
        attr: "link.value"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Labels'),
        attr: "link.label"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
      label: _('Orientation'),
      attr: "orientation",
      options: [{
        label: _('Vertical'),
        value: 'v'
      }, {
        label: _('Horizontal'),
        value: 'h'
      }]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_derived.HistogramInfoVertical, {
      children: [_('Note: in vertical orientation, X values are used for binning. If Y values are provided, they are used as inputs to the histogram function which you can configure in the '), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        onClick: function onClick() {
          return setPanel('Style', 'Traces');
        },
        children: _('Traces')
      }), _(' panel under Style. If Y values are omitted, the histogram function defaults to Count.')]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_derived.HistogramInfoHorizontal, {
      children: [_('Note: in horizontal orientation, Y values are used for binning. If X values are provided, they are used as inputs to the histogram function which you can configure in the '), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        onClick: function onClick() {
          return setPanel('Style', 'Traces');
        },
        children: _('Traces')
      }), _(' under Style panel. If X values are omitted, the histogram function defaults to Count.')]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_derived.Histogram2d, {
      children: [_('Note: X and Y Values are used for binning. If Z values are provided, they are used as inputs to the histogram function which you can configure in the '), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        onClick: function onClick() {
          return setPanel('Style', 'Traces');
        },
        children: _('Traces')
      }), _(' under Style panel. If Z values are omitted, the histogram function defaults to Count.')]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('I (Optional)'),
      attr: "i"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('J (Optional)'),
      attr: "j"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('K (Optional)'),
      attr: "k"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('Open'),
      attr: "open"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('High'),
      attr: "high"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('Low'),
      attr: "low"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('Close'),
      attr: "close"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('A'),
      attr: "a"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('B'),
      attr: "b"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('C'),
      attr: "c"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('U'),
      attr: "u"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('V'),
      attr: "v"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('W'),
      attr: "w"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('X start'),
      attr: "starts.x"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('Y start'),
      attr: "starts.y"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('Z start'),
      attr: "starts.z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('Headers'),
      attr: "header.values"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
      label: _('Columns'),
      attr: "cells.values"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.TraceTypeSection, {
      traceTypes: ['scatterpolar', 'scatterpolargl', 'barpolar'],
      mode: "trace",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Radius'),
        attr: "r"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Theta'),
        attr: "theta"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Theta Unit'),
        options: [{
          label: _('Radians'),
          value: 'radians'
        }, {
          label: _('Degrees'),
          value: 'degrees'
        }, {
          label: _('Gradians'),
          value: 'gradians'
        }],
        attr: "thetaunit",
        clearable: false
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AxesCreator, {
      attr: "fake_attr"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.SubplotCreator, {
      attr: "fake_attr"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Header Options'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Fill Color'),
        attr: "header.fill.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Font Color'),
        attr: "header.font.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Font Size'),
        attr: "header.font.size"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Cell Options'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Fill Color'),
        attr: "cells.fill.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Font Color'),
        attr: "cells.font.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Font Size'),
        attr: "cells.font.size"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Column Options'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Width'),
        attr: "columnwidth"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Order'),
        attr: "columnorder"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Options'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Intensity'),
        attr: "intensity"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Facecolor'),
        attr: "facecolor"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Vertexcolor'),
        attr: "vertexcolor"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Transpose'),
        attr: "transpose",
        options: [{
          label: _('No'),
          value: false
        }, {
          label: _('Yes'),
          value: true
        }]
      })]
    })]
  });
};

var _default = GraphCreatePanel;
exports.default = _default;
GraphCreatePanel.contextTypes = {
  localize: _propTypes.default.func,
  setPanel: _propTypes.default.func
};
//# sourceMappingURL=GraphCreatePanel.js.map