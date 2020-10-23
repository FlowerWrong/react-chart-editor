"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customConfigTest = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _testUtils = require("../lib/test-utils");

var _plotly = _interopRequireDefault(require("plotly.js/dist/plotly"));

var _components = require("../components");

var mocks = _interopRequireWildcard(require("../../dev/percy"));

var panels = _interopRequireWildcard(require("../default_panels/"));

require("../../dev/styles.css");

require("../styles/main.scss");

require("./stories.css");

var _react = require("@storybook/react");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customConfigTest = {
  visibility_rules: {
    blacklist: [{
      type: 'attrName',
      regex_match: 'font.family'
    }, {
      type: 'attrName',
      regex_match: 'font.size'
    }, {
      type: 'attrName',
      regex_match: 'color',
      exceptions: [{
        type: 'attrName',
        regex_match: 'colorbar',
        exceptions: [{
          type: 'attrName',
          regex_match: 'colorbar.bgcolor'
        }, {
          type: 'attrName',
          regex_match: 'colorbar.tickfont.color'
        }, {
          type: 'attrName',
          regex_match: 'colorbar.title.font.color'
        }, {
          type: 'attrName',
          regex_match: 'colorbar.outlinecolor'
        }, {
          type: 'attrName',
          regex_match: 'colorbar.bordercolor'
        }, {
          type: 'attrName',
          regex_match: 'colorbar.tickcolor'
        }]
      }, {
        type: 'attrName',
        regex_match: 'coloraxis',
        exceptions: [{
          type: 'attrName',
          regex_match: 'coloraxis.colorscale'
        }, {
          type: 'attrName',
          regex_match: 'coloraxis.colorbar.outlinecolor'
        }, {
          type: 'attrName',
          regex_match: 'coloraxis.colorbar.bordercolor'
        }, {
          type: 'attrName',
          regex_match: 'coloraxis.colorbar.bgcolor'
        }, {
          type: 'attrName',
          regex_match: 'coloraxis.colorbar.tickcolor'
        }, {
          type: 'attrName',
          regex_match: 'coloraxis.colorbar.tickfont.color'
        }, {
          type: 'attrName',
          regex_match: 'coloraxis.colorbar.title.font.color'
        }]
      }, {
        type: 'attrName',
        regex_match: 'colorscales',
        exceptions: [{
          type: 'attrName',
          regex_match: 'colorscales.items.concentrationscales.colorscale'
        }]
      }, {
        type: 'attrName',
        regex_match: 'autocolorscale'
      }, {
        type: 'attrName',
        regex_match: 'usecolormap'
      }, {
        type: 'attrName',
        regex_match: 'bundlecolors'
      }, {
        type: 'attrName',
        regex_match: 'marker.color',
        exceptions: [{
          type: 'controlType',
          regex_match: '^UnconnectedMultiColorPicker$'
        }, {
          type: 'controlType',
          regex_match: '^UnconnectedColorscalePicker$'
        }, {
          type: 'attrName',
          regex_match: 'marker.colorbar.outlinecolor'
        }, {
          type: 'attrName',
          regex_match: 'marker.colorbar.bordercolor'
        }, {
          type: 'attrName',
          regex_match: 'marker.colorbar.bgcolor'
        }, {
          type: 'attrName',
          regex_match: 'marker.colorbar.tickcolor'
        }, {
          type: 'attrName',
          regex_match: 'marker.colorbar.tickfont.color'
        }, {
          type: 'attrName',
          regex_match: 'marker.colorbar.title.font.color'
        }]
      }]
    }]
  }
};
/**
 * To add more Percy tests - add a mock file to /dev/percy, add it to /dev/percy/index.js
 * To specify which panels to test with the mock, add entry to panelsToTest, else all panels will be tested
 */

exports.customConfigTest = customConfigTest;
var panelsToTest = {
  bar: ['GraphCreatePanel', 'StyleTracesPanel'],
  box: ['GraphCreatePanel', 'StyleTracesPanel'],
  pie: ['GraphCreatePanel', 'StyleTracesPanel'],
  histogram: ['GraphCreatePanel', 'StyleTracesPanel'],
  histogram2d: ['GraphCreatePanel', 'StyleTracesPanel'],
  violin: ['GraphCreatePanel', 'StyleTracesPanel'],
  waterfall: ['GraphCreatePanel', 'StyleTracesPanel'],
  sunburst: ['GraphCreatePanel', 'StyleTracesPanel'],
  sankey: ['GraphCreatePanel', 'StyleTracesPanel'],
  geoTest: ['GraphCreatePanel', 'StyleMapsPanel', 'StyleTracesPanel'],
  funnel: ['GraphCreatePanel', 'StyleTracesPanel'],
  funnelarea: ['GraphCreatePanel', 'StyleTracesPanel']
};

window.URL.createObjectURL = function () {
  return null;
};

var panelFixture = function panelFixture(Panel, group, name, figure, customConfig) {
  var gd = (0, _testUtils.setupGraphDiv)(figure, _plotly.default);
  gd._context = _plotly.default.setPlotConfig();

  gd._context.setBackground = function () {
    return null;
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "plotly_editor",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, {
      plotly: _plotly.default,
      graphDiv: gd,
      dataSources: _testUtils.fixtures.scatter().dataSources,
      dataSourceOptions: _testUtils.fixtures.scatter().dataSourceOptions,
      customConfig: customConfig || {},
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PanelMenuWrapper, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Panel, {
          group: group,
          name: name
        })
      })
    })
  });
};

var stories = (0, _react.storiesOf)('Panels', module);
Object.keys(mocks).forEach(function (m) {
  var selectedPanels = panelsToTest[m] ? panelsToTest[m] : Object.keys(panels);
  selectedPanels.forEach(function (p) {
    var words = p.split(/(?=[A-Z])/);
    var panelGroup = words[0];
    var panelName = words.slice(1, -1).join(' ');
    stories = stories.add("".concat(m, "_").concat(p), function () {
      return panelFixture(panels[p], panelGroup, panelName, mocks[m]);
    }).add("".concat(m, "_").concat(p, "_withCustomConfig"), function () {
      return panelFixture(panels[p], panelGroup, panelName, mocks[m], customConfigTest);
    });
  });
});
//# sourceMappingURL=index.js.map