"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupGraphDiv = setupGraphDiv;
Object.defineProperty(exports, "plotly", {
  enumerable: true,
  get: function get() {
    return _plotlyCartesian.default;
  }
});
Object.defineProperty(exports, "TestEditor", {
  enumerable: true,
  get: function get() {
    return _EditorControls.default;
  }
});
Object.defineProperty(exports, "mount", {
  enumerable: true,
  get: function get() {
    return _enzyme.mount;
  }
});
Object.defineProperty(exports, "shallow", {
  enumerable: true,
  get: function get() {
    return _enzyme.shallow;
  }
});
exports.fixtures = void 0;

var _plotlyCartesian = _interopRequireDefault(require("plotly.js/dist/plotly-cartesian"));

var _extend = require("plotly.js/src/lib/extend");

var _EditorControls = _interopRequireDefault(require("../EditorControls"));

var _enzyme = require("enzyme");

var _lib = require("../lib");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* eslint-disable no-magic-numbers */

var fixtures = {
  scatter: function scatter(config) {
    return applyConfig(config, {
      dataSources: {
        x1: [1, 2, 3],
        y1: [2, 3, 4],
        y2: [20, 30, 40]
      },
      dataSourceOptions: [{
        label: 'xCol',
        value: 'x1'
      }, {
        label: 'yCol',
        value: 'y1'
      }, {
        label: 'yCol2',
        value: 'y2'
      }],
      graphDiv: {
        data: [{
          xsrc: 'x1',
          ysrc: 'y1',
          name: 'yaxis data',
          type: 'scatter'
        }, {
          xsrc: 'x1',
          ysrc: 'y2',
          name: 'yaxis2 data',
          yaxis: 'y2',
          type: 'scatter'
        }],
        layout: {
          title: 'Double Y Axis Example',
          yaxis: {},
          yaxis2: {
            title: 'yaxis2 title',
            titlefont: {
              color: 'rgb(148, 103, 189)'
            },
            tickfont: {
              color: 'rgb(148, 103, 189)'
            },
            overlaying: 'y',
            side: 'right'
          }
        }
      }
    });
  },
  area: function area(config) {
    return applyConfig(config, {
      dataSources: {
        x1: [1, 2, 3],
        y1: [2, 3, 4]
      },
      dataSourceOptions: [{
        label: 'xCol',
        value: 'x1'
      }, {
        label: 'yCol',
        value: 'y1'
      }],
      graphDiv: {
        data: [{
          type: 'scatter',
          mode: 'markers+lines',
          stackgroup: 1,
          xsrc: 'x1',
          ysrc: 'y1'
        }],
        layout: {}
      }
    });
  },
  pie: function pie(config) {
    return applyConfig(config, {
      dataSources: {
        x1: [1, 2, 3],
        y1: [2, 3, 4]
      },
      dataSourceOptions: [{
        label: 'xCol',
        value: 'x1'
      }, {
        label: 'yCol',
        value: 'y1'
      }],
      graphDiv: {
        data: [{
          type: 'pie',
          mode: 'markers',
          labelssrc: 'x1',
          valuessrc: 'y1'
        }],
        layout: {}
      }
    });
  }
};
exports.fixtures = fixtures;

function applyConfig() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      _ref$graphDiv = _ref.graphDiv,
      data = _ref$graphDiv.data,
      layout = _ref$graphDiv.layout,
      dataSourceOptions = _ref.dataSourceOptions,
      dataSources = _ref.dataSources;

  if (config.layout) {
    (0, _extend.extendDeep)(layout, config.layout);
  }

  if (config.data) {
    (0, _extend.extendDeep)(data, config.data);
  }

  if (config.deref !== false) {
    (0, _lib.dereference)(data, dataSources);
  } // replace simple graphDiv with properly mocked GD including fullData/fullLayout


  var graphDiv = setupGraphDiv({
    data: data,
    layout: layout
  });
  return {
    dataSources: dataSources,
    dataSourceOptions: dataSourceOptions,
    graphDiv: graphDiv,
    customConfig: config.customConfig || {}
  };
}
/*
 * JSDOM does not implement full SVG spec. Mock out necessary methods here.
 * https://github.com/tmpvar/jsdom/issues/1330
 * Hardcoded return values have been "good enough" for now but feel free to
 * extend the API if necessary.
 */


function mockMissingSvgApis() {
  var p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  var proto = Object.getPrototypeOf(p);

  if (typeof proto.getTotalLength !== 'function') {
    proto.getTotalLength = function () {
      return 100;
    };
  }

  if (typeof proto.getPointAtLength !== 'function') {
    proto.getPointAtLength = function () {
      return {
        x: 0,
        y: 0
      };
    };
  }
}

function newGraphDiv() {
  var graphDiv = window.document.createElement('div');
  graphDiv.id = 'graphDiv';
  return graphDiv;
}

function setupGraphDiv(figure) {
  var plotly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _plotlyCartesian.default;
  var gd = newGraphDiv();
  mockMissingSvgApis();
  plotly.newPlot(gd, figure);
  return gd;
}
//# sourceMappingURL=test-utils.js.map