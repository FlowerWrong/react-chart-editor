"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

var _derived = require("../components/fields/derived");

var _traceTypes = require("../lib/traceTypes");

var _localize = _interopRequireDefault(require("../lib/localize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allTraceTypes = (0, _traceTypes.traceTypes)(_localize.default).map(function (_ref) {
  var value = _ref.value;
  return value;
});

var StyleTracesPanel = function StyleTracesPanel(props, _ref2) {
  var _ = _ref2.localize;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.TraceAccordion, {
    canGroup: true,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextEditor, {
      label: _('Name'),
      attr: "name",
      richTextOnly: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
      label: _('Trace Opacity'),
      attr: "opacity"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.TraceTypeSection, {
      name: _('Leaves'),
      traceTypes: ['sunburst', 'treemap'],
      mode: "trace",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_derived.LevelRendered, {
        label: _('Start at Level'),
        attr: "level"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Max Depth'),
        attr: "maxdepth",
        min: -1,
        step: 1
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Opacity'),
        attr: "leaf.opacity"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
      name: _('Legend'),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_derived.ShowInLegend, {
        label: _('Show in Legend'),
        attr: "showlegend",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }],
        showOn: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.GroupCreator, {
          label: _('Legend Group'),
          prefix: _('Group'),
          attr: "legendgroup"
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Cones & Streamtubes'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Size'),
        attr: "sizeref",
        stepmode: "relative"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Size Mode'),
        options: [{
          label: _('scaled'),
          value: 'scaled'
        }, {
          label: _('absolute'),
          value: 'absolute'
        }],
        attr: "sizemode"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Cone Anchor'),
        options: [{
          label: _('Tip'),
          value: 'tip'
        }, {
          label: _('Tail'),
          value: 'tail'
        }, {
          label: _('Center'),
          value: 'center'
        }, {
          label: _('Center of Mass'),
          value: 'cm'
        }],
        attr: "anchor"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Max Tube segments'),
        attr: "maxdisplayed"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
      label: _('Color'),
      attr: "color"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TraceTypeSection, {
      name: _('Segment Colors'),
      traceTypes: ['pie', 'sunburst', 'treemap', 'funnelarea'],
      mode: "trace",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.LayoutSection, {
        attr: "name",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorwayPicker, {
          label: _('Colors'),
          attr: "piecolorway"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
          label: _('Extended Colors'),
          attr: "extendpiecolors",
          options: [{
            label: _('On'),
            value: true
          }, {
            label: _('Off'),
            value: false
          }]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorwayPicker, {
          label: _('Colors'),
          attr: "sunburstcolorway"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorwayPicker, {
          label: _('Colors'),
          attr: "treemapcolorway"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
          label: _('Extended Colors'),
          attr: "extendsunburstcolors",
          options: [{
            label: _('On'),
            value: true
          }, {
            label: _('Off'),
            value: false
          }]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
          label: _('Extended Colors'),
          attr: "extendtreemapcolors",
          options: [{
            label: _('On'),
            value: true
          }, {
            label: _('Off'),
            value: false
          }]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorwayPicker, {
          label: _('Colors'),
          attr: "funnelareacolorway"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
          label: _('Extended Colors'),
          attr: "extendfunnelareacolors",
          options: [{
            label: _('On'),
            value: true
          }, {
            label: _('Off'),
            value: false
          }]
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Funnel Dimensions'),
      traceTypes: ['funnelarea'],
      attr: "aspectratio",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Aspect Ratio'),
        attr: "aspectratio",
        step: 0.01,
        min: 0,
        max: 2,
        showSlider: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Base Ratio'),
        attr: "baseratio"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Subplot Title'),
      attr: "title.text",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextEditor, {
        label: _('Name'),
        attr: "title.text"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: 'Title Position',
        attr: "titleposition",
        options: [{
          label: _('Top Left'),
          value: 'top left'
        }, {
          label: _('Top Center'),
          value: 'top center'
        }, {
          label: _('Top Right'),
          value: 'top right'
        }, {
          label: _('Middle Center'),
          value: 'middle center'
        }, {
          label: _('Bottom Left'),
          value: 'bottom left'
        }, {
          label: _('Bottom Center'),
          value: 'bottom center'
        }, {
          label: _('Bottom Right'),
          value: 'bottom right'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FontSelector, {
        label: _('Typeface'),
        attr: "title.font.family",
        clearable: false
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Font Size'),
        attr: "title.font.size",
        units: "px"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Values'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_derived.BinningDropdown, {
        label: _('Histogram Function'),
        attr: "histfunc"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Histogram Normalization'),
        options: [{
          label: _('Number of Occurences'),
          value: ''
        }, {
          label: _('Percent'),
          value: 'percent'
        }, {
          label: _('Probability'),
          value: 'probability'
        }, {
          label: _('Density'),
          value: 'density'
        }, {
          label: _('Probability Density'),
          value: 'probability density'
        }],
        attr: "histnorm"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Cumulative'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Cumulative'),
        attr: "cumulative.enabled",
        options: [{
          label: _('Enabled'),
          value: true
        }, {
          label: _('Disabled'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Direction'),
        attr: "cumulative.direction",
        options: [{
          label: _('Increasing'),
          value: 'increasing'
        }, {
          label: _('Decreasing'),
          value: 'decreasing'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Current Bin'),
        attr: "cumulative.currentbin",
        options: [{
          label: _('Include'),
          value: 'include'
        }, {
          label: _('Exclude'),
          value: 'exclude'
        }, {
          label: _('Half'),
          value: 'half'
        }]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Header'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Height'),
        attr: "header.height"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Fill Color'),
        attr: "header.fill.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FontSelector, {
        label: _('Typeface'),
        attr: "header.font.family"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Font Size'),
        attr: "header.font.size"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Text Alignment'),
        options: [{
          label: _('Left'),
          value: 'left'
        }, {
          label: _('Center'),
          value: 'center'
        }, {
          label: _('Right'),
          value: 'right'
        }],
        attr: "header.align"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Font Color'),
        attr: "header.font.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Border Width'),
        attr: "header.line.width"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Border Color'),
        attr: "header.line.color"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Cells'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Height'),
        attr: "cells.height"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Fill Color'),
        attr: "cells.fill.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FontSelector, {
        label: _('Typeface'),
        attr: "cells.font.family"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Font Size'),
        attr: "cells.font.size"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Text Alignment'),
        options: [{
          label: _('Left'),
          value: 'left'
        }, {
          label: _('Center'),
          value: 'center'
        }, {
          label: _('Right'),
          value: 'right'
        }],
        attr: "cells.align"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Font Color'),
        attr: "cells.font.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Border Width'),
        attr: "cells.line.width"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Border Color'),
        attr: "cells.line.color"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Display'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Flaglist, {
        attr: "mode",
        options: [{
          label: _('Points'),
          value: 'markers'
        }, {
          label: _('Lines'),
          value: 'lines'
        }, {
          label: _('Text'),
          value: 'text'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "flatshading",
        label: _('Flatshading'),
        options: [{
          label: _('Enable'),
          value: true
        }, {
          label: _('Disable'),
          value: false
        }]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TraceTypeSection, {
      name: _('Bar Grouping, Sizing and Spacing'),
      traceTypes: ['bar', 'histogram', 'funnel', 'waterfall'],
      mode: "trace",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.LayoutSection, {
        attr: "name",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
          label: _('Bar Mode'),
          attr: "barmode",
          options: [{
            label: _('Grouped'),
            value: 'group'
          }, {
            label: _('Positive/Negative Stacked'),
            value: 'relative'
          }, {
            label: _('Strict Sum Stacked'),
            value: 'stack'
          }, {
            label: _('Overlaid'),
            value: 'overlay'
          }],
          clearable: false
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
          label: _('Normalization'),
          attr: "barnorm",
          options: [{
            label: _('None'),
            value: ''
          }, {
            label: _('Fraction'),
            value: 'fraction'
          }, {
            label: _('Percent'),
            value: 'percent'
          }],
          clearable: false
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFractionInverse, {
          label: _('Bar Width'),
          attr: "bargap"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
          label: _('Bar Padding'),
          attr: "bargroupgap"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
          label: _('Bar Mode'),
          attr: "funnelmode",
          options: [{
            label: _('Grouped'),
            value: 'group'
          }, {
            label: _('Stacked'),
            value: 'stack'
          }, {
            label: _('Overlaid'),
            value: 'overlay'
          }],
          clearable: false
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFractionInverse, {
          label: _('Bar Width'),
          attr: "funnelgap"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
          label: _('Bar Padding'),
          attr: "funnelgroupgap"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
          label: _('Bar Mode'),
          attr: "waterfallmode",
          options: [{
            label: _('Grouped'),
            value: 'group'
          }, {
            label: _('Stacked'),
            value: 'stack'
          }, {
            label: _('Overlaid'),
            value: 'overlay'
          }],
          clearable: false
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFractionInverse, {
          label: _('Bar Width'),
          attr: "waterfallgap"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
          label: _('Bar Padding'),
          attr: "waterfallgroupgap"
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Binning'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericOrDate, {
        label: _('X Bin Start'),
        attr: "xbins.start",
        axis: "x"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericOrDate, {
        label: _('X Bin End'),
        attr: "xbins.end",
        axis: "x"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Max X Bins'),
        attr: "nbinsx"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AxisInterval, {
        label: _('X Bin Size'),
        attr: "xbins.size",
        axis: "x"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericOrDate, {
        label: _('Y Bin Start'),
        attr: "ybins.start",
        axis: "y"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericOrDate, {
        label: _('Y Bin End'),
        attr: "ybins.end",
        axis: "y"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Max Y Bins'),
        attr: "nbinsy"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AxisInterval, {
        label: _('Y Bin Size'),
        attr: "ybins.size",
        axis: "y"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      label: _('Bar Position'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericOrDate, {
        label: _('Base'),
        attr: "base"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Offset'),
        attr: "offset"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Width'),
        attr: "width"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TraceTypeSection, {
      name: _('Box Size and Spacing'),
      traceTypes: ['box'],
      mode: "trace",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.LayoutSection, {
        attr: "name",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
          label: _('Box Mode'),
          attr: "boxmode",
          options: [{
            label: _('Overlay'),
            value: 'overlay'
          }, {
            label: _('Group'),
            value: 'group'
          }]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFractionInverse, {
          label: _('Box Width'),
          attr: "boxgap"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
          label: _('Box Padding'),
          attr: "boxgroupgap"
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TraceTypeSection, {
      name: _('Violin Size and Spacing'),
      traceTypes: ['violin'],
      mode: "trace",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.LayoutSection, {
        attr: "name",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
          label: _('Violin Mode'),
          attr: "violinmode",
          options: [{
            label: _('Overlay'),
            value: 'overlay'
          }, {
            label: _('Group'),
            value: 'group'
          }]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFractionInverse, {
          label: _('Violin Width'),
          attr: "violingap"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
          label: _('Violin Padding'),
          attr: "violingroupgap"
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
      label: _('Whisker Width'),
      attr: "whiskerwidth"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.TraceMarkerSection, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Order'),
        attr: "sort",
        options: [{
          label: _('Sorted'),
          value: true
        }, {
          label: _('Unsorted'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Direction'),
        attr: "direction",
        options: [{
          label: _('Clockwise'),
          value: 'clockwise'
        }, {
          label: _('Counterclockwise'),
          value: 'counterclockwise'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Rotation'),
        attr: "rotation"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Hole Size'),
        attr: "hole"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Pull'),
        attr: "pull"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        options: [{
          label: _('Show All'),
          value: 'all'
        }, {
          label: _('Outliers'),
          value: 'outliers'
        }, {
          label: _('Suspected Outliers'),
          value: 'suspectedoutliers'
        }, {
          label: _('Hide'),
          value: false
        }],
        attr: "boxpoints",
        clearable: false
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        options: [{
          label: _('Show All'),
          value: 'all'
        }, {
          label: _('Outliers'),
          value: 'outliers'
        }, {
          label: _('Suspected Outliers'),
          value: 'suspectedoutliers'
        }, {
          label: _('Hide'),
          value: false
        }],
        attr: "points",
        clearable: false
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Jitter'),
        attr: "jitter"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Position'),
        attr: "pointpos",
        step: 0.1,
        showSlider: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MarkerColor, {
        suppressMultiValuedMessage: true,
        label: _('Color'),
        attr: "marker.color",
        labelWidth: 80
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Point Opacity'),
        attr: "marker.opacity"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MarkerSize, {
        label: _('Size'),
        attr: "marker.size"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_derived.NumericReciprocal, {
        label: _('Size Scale'),
        attr: "marker.sizeref",
        step: 0.2,
        stepmode: "relative"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Size Mode'),
        attr: "marker.sizemode",
        options: [{
          label: _('Area'),
          value: 'area'
        }, {
          label: _('Diameter'),
          value: 'diameter'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Minimum Size'),
        attr: "marker.sizemin"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.SymbolSelector, {
        label: _('Symbol'),
        attr: "marker.symbol"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Border Width'),
        attr: "marker.line.width"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Border Color'),
        attr: "marker.line.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Max Number of Points'),
        attr: "marker.maxdisplayed"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Connector Styles'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "connector.visible",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Fill Color'),
        attr: "connector.fillcolor"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Line Width'),
        attr: "connector.line.width"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Line Color'),
        attr: "connector.line.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.LineDashSelector, {
        label: _('Line Type'),
        attr: "connector.line.dash"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Line Shape'),
        options: [{
          label: _('Spanning'),
          value: 'spanning'
        }, {
          label: _('Between'),
          value: 'between'
        }],
        attr: "connector.mode",
        clearable: false
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Increasing Marker Styles'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextEditor, {
        label: _('Name'),
        attr: "increasing.name",
        richTextOnly: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Width'),
        attr: "increasing.line.width"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Line Color'),
        attr: "increasing.line.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Marker Color'),
        attr: "increasing.marker.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Line Color'),
        attr: "increasing.marker.line.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Line Width'),
        attr: "increasing.marker.line.width"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Fill Color'),
        attr: "increasing.fillcolor"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.LineDashSelector, {
        label: _('Type'),
        attr: "increasing.line.dash"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Show in Legend'),
        attr: "increasing.showlegend",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Decreasing Marker Styles'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextEditor, {
        label: _('Name'),
        attr: "decreasing.name",
        richTextOnly: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Width'),
        attr: "decreasing.line.width"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Line Color'),
        attr: "decreasing.line.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Marker Color'),
        attr: "decreasing.marker.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Line Color'),
        attr: "decreasing.marker.line.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Line Width'),
        attr: "decreasing.marker.line.width"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Fill Color'),
        attr: "decreasing.fillcolor"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.LineDashSelector, {
        label: _('Type'),
        attr: "decreasing.line.dash"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Show in Legend'),
        attr: "decreasing.showlegend",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Total Marker Styles'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Marker Color'),
        attr: "totals.marker.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Line Color'),
        attr: "totals.marker.line.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Line Width'),
        attr: "totals.marker.line.width"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
      name: _('Ticks'),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Width'),
        attr: "tickwidth"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Contours'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Type'),
        attr: "contours.type",
        options: [{
          label: _('Levels'),
          value: 'levels'
        }, {
          label: _('Constraint'),
          value: 'constraint'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Coloring'),
        attr: "contours.coloring",
        options: [{
          label: _('Fill'),
          value: 'fill'
        }, {
          label: _('Heatmap'),
          value: 'heatmap'
        }, {
          label: _('Lines'),
          value: 'lines'
        }, {
          label: _('None'),
          value: 'none'
        }],
        clearable: false
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Contour Lines'),
        attr: "contours.showlines",
        options: [{
          label: _('On'),
          value: true
        }, {
          label: _('Off'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Contour Labels'),
        attr: "contours.showlabels",
        options: [{
          label: _('On'),
          value: true
        }, {
          label: _('Off'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Number of Contours'),
        attr: "autocontour",
        options: [{
          label: _('Auto'),
          value: true
        }, {
          label: _('Custom'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Max Contours'),
        attr: "ncontours"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ContourNumeric, {
        label: _('Step Size'),
        attr: "contours.size"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ContourNumeric, {
        label: _('Min Contour'),
        attr: "contours.start"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ContourNumeric, {
        label: _('Max Contour'),
        attr: "contours.end"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.TraceTypeSection, {
      name: _('Stacking'),
      traceTypes: ['scatter'],
      mode: "trace",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.GroupCreator, {
        label: _('Group'),
        prefix: _('Stack'),
        attr: "stackgroup"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Gaps'),
        attr: "stackgaps",
        options: [{
          label: _('Infer Zero'),
          value: 'infer zero'
        }, {
          label: _('Interpolate'),
          value: 'interpolate'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Orientation'),
        attr: "orientation",
        options: [{
          label: _('Horizontal'),
          value: 'h'
        }, {
          label: _('Vertical'),
          value: 'v'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Normalization'),
        attr: "groupnorm",
        options: [{
          label: _('None'),
          value: ''
        }, {
          label: _('Fraction'),
          value: 'fraction'
        }, {
          label: _('Percent'),
          value: 'percent'
        }]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.TraceTypeSection, {
      name: _('Lines'),
      traceTypes: ['scatter', 'contour', 'scatterternary', 'scatterpolar', 'scatterpolargl', 'box', 'violin', 'scatter3d', 'scattergl', 'scattergeo', 'parcoords', 'parcats', 'scattermapbox', 'scattercarpet', 'contourcarpet', 'ohlc', 'candlestick', 'histogram2dcontour'],
      mode: "trace",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Width'),
        attr: "line.width"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Color'),
        attr: "line.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Color Bar'),
        attr: "line.showscale",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorscalePicker, {
        label: _('Colorscale'),
        attr: "line.colorscale"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.LineDashSelector, {
        label: _('Type'),
        attr: "line.dash"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.LineShapeSelector, {
        label: _('Shape'),
        attr: "line.shape"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Smoothing'),
        attr: "line.smoothing",
        showSlider: true,
        step: 0.1
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Connect Gaps'),
        attr: "connectgaps",
        options: [{
          label: _('Connect'),
          value: true
        }, {
          label: _('Blank'),
          value: false
        }]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Filled Area'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FillDropdown, {
        attr: "fill",
        label: _('Fill to')
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Color'),
        attr: "fillcolor"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Notches'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "notched",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Width'),
        attr: "notchwidth",
        min: 0,
        max: 0.5,
        step: 0.1
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.TraceTypeSection, {
      name: _('Text'),
      traceTypes: allTraceTypes.filter(function (t) {
        return !['histogram2d', 'histogram2dcontour', 'parcoords', 'parcats', 'sankey', 'table', 'scattercarpet', 'carpet'].includes(t);
      }),
      mode: "trace",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextPosition, {
        label: _('Text Position'),
        attr: "textposition"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.HoverTemplateSwitch, {
        attr: "texttemplate",
        label: _('Mode')
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_derived.TextInfo, {
        attr: "textinfo",
        label: _('Show')
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.HoverTemplateText, {
        attr: "texttemplate",
        label: _('Template')
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Text'),
        attr: "text"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FontSelector, {
        label: _('Typeface'),
        attr: "textfont.family"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Font Size'),
        attr: "textfont.size",
        units: "px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Font Color'),
        attr: "textfont.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Inside Text Orientation'),
        options: [{
          label: _('Auto'),
          value: 'auto'
        }, {
          label: _('Radial'),
          value: 'radial'
        }, {
          label: _('Tangential'),
          value: 'tangential'
        }, {
          label: _('Horizontal'),
          value: 'horizontal'
        }],
        attr: "insidetextorientation",
        clearable: false
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Text Angle'),
        options: [{
          label: _('Auto'),
          value: 'auto'
        }, {
          label: _('Horizontal'),
          value: 0
        }, {
          label: _('Vertical Up'),
          value: -90
        }, {
          label: _('Vertical Down'),
          value: 90
        }, {
          label: _('Angled Down'),
          value: 45
        }, {
          label: _('Angled Up'),
          value: -45
        }],
        attr: "textangle",
        clearable: false
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Constrain Text'),
        options: [{
          label: _('Inside'),
          value: 'inside'
        }, {
          label: _('Outside'),
          value: 'outside'
        }, {
          label: _('Both'),
          value: 'both'
        }, {
          label: _('None'),
          value: 'none'
        }],
        attr: "constraintext",
        clearable: false
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Clip on Axes'),
        attr: "cliponaxis",
        options: [{
          label: _('Yes'),
          value: true
        }, {
          label: _('No'),
          value: false
        }]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Colorscale'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorscalePicker, {
        label: _('Colorscale'),
        attr: "colorscale"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Color Bar'),
        attr: "showscale",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Orientation'),
        attr: "reversescale",
        options: [{
          label: _('Normal'),
          value: false
        }, {
          label: _('Reversed'),
          value: true
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.VisibilitySelect, {
        label: _('Range'),
        attr: "zauto",
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
          label: _('Min'),
          attr: "zmin"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
          label: _('Max'),
          attr: "zmax"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.VisibilitySelect, {
        label: _('Range'),
        attr: "cauto",
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
          label: _('Min'),
          attr: "cmin"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
          label: _('Max'),
          attr: "cmax"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Smoothing'),
        attr: "zsmooth",
        options: [{
          label: _('On'),
          value: 'best'
        }, {
          label: _('Off'),
          value: false
        }]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Gaps Between Cells'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Horizontal Gap'),
        attr: "xgap"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Vertical Gap'),
        attr: "ygap"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Heatmap'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Horizontal Gaps'),
        attr: "xgap"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Vertical Gaps'),
        attr: "ygap"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TraceTypeSection, {
      name: _('Gaps in Data'),
      traceTypes: ['heatmap', 'contour', 'heatmapgl'],
      mode: "trace",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Interpolate Gaps'),
        attr: "connectgaps",
        options: [{
          label: _('On'),
          value: true
        }, {
          label: _('Off'),
          value: false
        }]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Lighting'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Ambient'),
        attr: "lighting.ambient"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Diffuse'),
        attr: "lighting.diffuse"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Specular'),
        attr: "lighting.specular"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Roughness'),
        attr: "lighting.roughness"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Fresnel'),
        attr: "lighting.fresnel"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Vertex Normal'),
        attr: "lighting.vertexnormalsepsilon"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Face Normal'),
        attr: "lighting.facenormalsepsilon"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Light Position'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('X'),
        attr: "lightposition.x"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Y'),
        attr: "lightposition.y"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Z'),
        attr: "lightposition.z"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Scaling'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.GroupCreator, {
        label: _('Scale Group'),
        prefix: _('Group'),
        attr: "scalegroup"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Scale Mode'),
        attr: "scalemode",
        options: [{
          label: _('Width'),
          value: 'width'
        }, {
          label: _('Count'),
          value: 'count'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Span Mode'),
        attr: "spanmode",
        options: [{
          label: _('Soft'),
          value: 'soft'
        }, {
          label: _('Hard'),
          value: 'hard'
        }, {
          label: _('Manual'),
          value: 'manual'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Bandwidth'),
        attr: "bandwidth"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Span'),
        attr: "span"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "side",
        label: _('Visible Sides'),
        options: [{
          label: _('Both'),
          value: 'both'
        }, {
          label: _('Positive'),
          value: 'positive'
        }, {
          label: _('Negative'),
          value: 'negative'
        }]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
      name: _('Box Mean'),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "boxmean",
        options: [{
          label: _('Mean'),
          value: true
        }, {
          label: _('Mean & SD'),
          value: 'sd'
        }, {
          label: _('None'),
          value: false
        }]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Box'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "box.visible",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Box Width'),
        attr: "box.width"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Box Fill Color'),
        attr: "box.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Box Line Width'),
        attr: "box.line.width"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Box Line Color'),
        attr: "box.line.color"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Meanline'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "meanline.visible",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
        label: _('Meanline Width'),
        attr: "meanline.width"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Meanline Color'),
        attr: "meanline.color"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Nodes'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorArrayPicker, {
        label: _('Color'),
        attr: "node.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Padding'),
        attr: "node.pad",
        min: 0
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Thickness'),
        attr: "node.thickness",
        min: 0
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Line Color'),
        attr: "node.line.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Line Width'),
        attr: "node.line.width",
        min: 0
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Arrangement'),
        attr: "arrangement",
        options: [{
          label: _('Snap'),
          value: 'snap'
        }, {
          label: _('Perpendicular'),
          value: 'perpendicular'
        }, {
          label: _('Freeform'),
          value: 'freeform'
        }, {
          label: _('Fixed'),
          value: 'fixed'
        }],
        clearable: false
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Links'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorArrayPicker, {
        label: _('Color'),
        attr: "link.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
        label: _('Line Color'),
        attr: "link.line.color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Line Width'),
        attr: "link.line.width",
        min: 0
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Path Bar'),
      attr: "pathbar.visible",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "pathbar.visible",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "pathbar.side",
        options: [{
          label: _('Top'),
          value: 'top'
        }, {
          label: _('Bottom'),
          value: 'bottom'
        }],
        label: _('Side')
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Hover/Tooltip'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_derived.HoveronDropdown, {
        attr: "hoveron",
        label: _('Hover on')
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Hover on Gaps'),
        attr: "hoverongaps",
        options: [{
          label: _('Yes'),
          value: true
        }, {
          label: _('No'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.HoverTemplateSwitch, {
        attr: "hovertemplate",
        label: _('Mode')
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.HoverInfo, {
        attr: "hoverinfo",
        label: _('Show')
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.HoverTemplateText, {
        attr: "hovertemplate",
        label: _('Template')
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        label: _('Split labels'),
        attr: "hoverlabel.split",
        options: [{
          label: _('Yes'),
          value: true
        }, {
          label: _('No'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.HoverLabelNameLength, {
        label: _('Trace Name'),
        attr: "hoverlabel.namelength"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.VisibilitySelect, {
        attr: "contour.show",
        label: _('Show Contour'),
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }],
        showOn: true,
        defaultOpt: false,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MultiColorPicker, {
          label: _('Contour Color'),
          attr: "contour.color"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
          label: _('Contour Width'),
          attr: "contour.width"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
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
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Text, {
        label: _('Value Format'),
        attr: "valueformat"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Text, {
        label: _('Value Suffix'),
        attr: "valuesuffix"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TraceTypeSection, {
      name: _('Error Bars X'),
      traceTypes: ['scatter', 'scattergl', 'scatter3d', 'bar'],
      mode: "trace",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ErrorBars, {
        attr: "error_x"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TraceTypeSection, {
      name: _('Error Bars Y'),
      traceTypes: ['scatter', 'scattergl', 'scatter3d', 'bar'],
      mode: "trace",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ErrorBars, {
        attr: "error_y"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TraceTypeSection, {
      name: _('Error Bars Z'),
      traceTypes: ['scatter3d'],
      mode: "trace",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ErrorBars, {
        attr: "error_z"
      })
    })]
  });
};

StyleTracesPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = StyleTracesPanel;
exports.default = _default;
//# sourceMappingURL=StyleTracesPanel.js.map