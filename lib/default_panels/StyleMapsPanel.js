"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleMapsPanel = function StyleMapsPanel(props, _ref) {
  var _ = _ref.localize;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.SubplotAccordion, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
      name: _('Base Map'),
      attr: "style",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MapboxStyleDropdown, {
        label: _('Tile Source'),
        attr: "style"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
      name: _('Layers'),
      attr: "style",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.MapboxLayersAccordion, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
          attr: "below",
          options: [{
            label: _('Below Data'),
            value: 'traces'
          }, {
            label: _('Above Data'),
            value: ''
          }]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.MapboxSourceArray, {
          label: _('Tile Source URL'),
          attr: "source",
          show: true
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Map Positioning'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Center Latitude'),
        attr: "center.lat"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Center Longitude'),
        attr: "center.lon"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Zoom Level'),
        attr: "zoom",
        min: 0
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Bearing'),
        attr: "bearing"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Pitch'),
        attr: "pitch",
        min: 0
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Bounds Fitting'),
        attr: "fitbounds",
        options: [{
          label: _('Off'),
          value: false
        }, {
          label: _('Locations'),
          value: 'locations'
        }, {
          label: _('GeoJSON'),
          value: 'geojson'
        }],
        clearable: false
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Map Projection'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Region'),
        attr: "scope",
        options: [{
          label: _('World'),
          value: 'world'
        }, {
          label: _('USA'),
          value: 'usa'
        }, {
          label: _('Europe'),
          value: 'europe'
        }, {
          label: _('Asia'),
          value: 'asia'
        }, {
          label: _('China'),
          value: 'china'
        }, {
          label: _('Africa'),
          value: 'africa'
        }, {
          label: _('North America'),
          value: 'north america'
        }, {
          label: _('South America'),
          value: 'south america'
        }],
        clearable: false
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
        label: _('Projection'),
        attr: "projection.type",
        clearable: false,
        options: [{
          label: _('Equirectangular'),
          value: 'equirectangular'
        }, {
          label: _('Mercator'),
          value: 'mercator'
        }, {
          label: _('Orthographic'),
          value: 'orthographic'
        }, {
          label: _('Natural Earth'),
          value: 'natural earth'
        }, {
          label: _('Albers USA'),
          value: 'albers usa'
        }, {
          label: _('Winkel Tripel'),
          value: 'winkel tripel'
        }, {
          label: _('Robinson'),
          value: 'robinson'
        }, {
          label: _('Miller'),
          value: 'miller'
        }, {
          label: _('Kavrayskiy 7'),
          value: 'kavrayskiy7'
        }, {
          label: _('Eckert 4'),
          value: 'eckert4'
        }, {
          label: _('Azimuthal Equal Area'),
          value: 'azimuthal equal area'
        }, {
          label: _('Azimuthal Equidistant'),
          value: 'azimuthal equidistant'
        }, {
          label: _('Conic Equal Area'),
          value: 'conic equal area'
        }, {
          label: _('Conic Conformal'),
          value: 'conic conformal'
        }, {
          label: _('Conic Equidistant'),
          value: 'conic equidistant'
        }, {
          label: _('Gnomonic'),
          value: 'gnomonic'
        }, {
          label: _('Stereographic'),
          value: 'stereographic'
        }, {
          label: _('Mollweide'),
          value: 'mollweide'
        }, {
          label: _('Hammer'),
          value: 'hammer'
        }, {
          label: _('Transverse Mercator'),
          value: 'transverse mercator'
        }, {
          label: _('Aitoff'),
          value: 'aitoff'
        }, {
          label: _('Sinusoidal'),
          value: 'sinusoidal'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Scale'),
        attr: "projection.scale",
        min: 0
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Center Latitude'),
        attr: "projection.rotation.lon",
        min: 0
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Center Longitude'),
        attr: "projection.rotation.lat",
        min: 0
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Roll'),
        attr: "projection.rotation.roll",
        min: 0
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Base Map'),
      attr: "visible",
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
        label: _('Resolution'),
        attr: "resolution",
        options: [{
          label: _('1:110,000,000'),
          value: 110
        }, {
          label: _('1:50,000,000'),
          value: 50
        }]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Country Borders'),
      attr: "showcountries",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "showcountries",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Border Width'),
        attr: "countrywidth",
        units: "px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Border Color'),
        attr: "countrycolor"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Sub-Country Unit Borders'),
      attr: "showsubunits",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "showsubunits",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Border Width'),
        attr: "subunitwidth",
        units: "px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Border Color'),
        attr: "subunitcolor"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Coastlines'),
      attr: "showcoastlines",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "showcoastlines",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Width'),
        attr: "coastlinewidth",
        units: "px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Color'),
        attr: "coastlinecolor"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Oceans'),
      attr: "showocean",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "showocean",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Color'),
        attr: "oceancolor"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Land'),
      attr: "showland",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "showland",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Color'),
        attr: "landcolor"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Lakes'),
      attr: "showlakes",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "showlakes",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Color'),
        attr: "lakecolor"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Rivers'),
      attr: "showrivers",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "showrivers",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Width'),
        attr: "riverwidth",
        units: "px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Color'),
        attr: "rivercolor"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
      name: _('Map Frame'),
      attr: "showframe",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "showframe",
        options: [{
          label: _('Show'),
          value: true
        }, {
          label: _('Hide'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
        label: _('Width'),
        attr: "framewidth",
        units: "px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        label: _('Color'),
        attr: "framecolor"
      })]
    })]
  });
};

StyleMapsPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = StyleMapsPanel;
exports.default = _default;
//# sourceMappingURL=StyleMapsPanel.js.map