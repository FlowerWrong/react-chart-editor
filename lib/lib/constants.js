"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_COLORS = exports.COLORS = exports.TRACES_WITH_GL = exports.TRANSFORMABLE_TRACES = exports.TRANSFORMS_LIST = exports.subplotName = exports.SUBPLOT_TO_ATTR = exports.TRACE_TO_AXIS = exports.CONTROL_KEY = exports.COMMAND_KEY = exports.ESCAPE_KEY = exports.RETURN_KEY = exports.DEFAULT_FONTS = exports.EDITOR_ACTIONS = exports.getMultiValueText = exports.MULTI_VALUED_PLACEHOLDER = exports.MULTI_VALUED = exports.baseClass = void 0;
var baseClass = 'plotly-editor';
/*
 * Control represents multiple settings (like for several axes)
 * and the values are different.
 *
 * Because this is sometimes used in contexts where users can enter freeform
 * strings, we include a non-printable character (ESC) so it's not something
 * people could type.
 */

exports.baseClass = baseClass;
var MULTI_VALUED = '\x1bMIXED_VALUES'; // how mixed values are represented in text inputs

exports.MULTI_VALUED = MULTI_VALUED;
var MULTI_VALUED_PLACEHOLDER = '---';
exports.MULTI_VALUED_PLACEHOLDER = MULTI_VALUED_PLACEHOLDER;

var getMultiValueText = function getMultiValueText(key, _) {
  var multiValueText = {
    title: _('Multiple Values'),
    text: _('This input has multiple values associated with it. ' + 'Changing this setting will override these custom inputs.'),
    subText: _("Common Case: An 'All' tab might display this message " + 'because the X and Y tabs contain different settings.')
  };
  return multiValueText[key];
};

exports.getMultiValueText = getMultiValueText;
var EDITOR_ACTIONS = {
  UPDATE_TRACES: 'plotly-editor-update-traces',
  ADD_TRACE: 'plotly-editor-add-trace',
  DELETE_TRACE: 'plotly-editor-delete-trace',
  UPDATE_LAYOUT: 'plotly-editor-update-layout',
  DELETE_ANNOTATION: 'plotly-editor-delete-annotation',
  DELETE_SHAPE: 'plotly-editor-delete-shape',
  DELETE_IMAGE: 'plotly-editor-delete-image',
  DELETE_RANGESELECTOR: 'plotly-editor-delete-rangeselector',
  DELETE_TRANSFORM: 'plotly-editor-delete-transform',
  MOVE_TO: 'plotly-editor-move-to'
};
exports.EDITOR_ACTIONS = EDITOR_ACTIONS;
var DEFAULT_FONTS = [{
  label: 'Sans Serif',
  value: 'sans-serif'
}, {
  label: 'Serif',
  value: 'serif'
}, {
  label: 'Monospaced',
  value: 'monospace'
}];
exports.DEFAULT_FONTS = DEFAULT_FONTS;
var RETURN_KEY = 'Enter';
exports.RETURN_KEY = RETURN_KEY;
var ESCAPE_KEY = 'Escape';
exports.ESCAPE_KEY = ESCAPE_KEY;
var COMMAND_KEY = 'Meta';
exports.COMMAND_KEY = COMMAND_KEY;
var CONTROL_KEY = 'Control'; // matches gd._fullLayout._subplots categories except for xaxis & yaxis which
// are in fact cartesian types

exports.CONTROL_KEY = CONTROL_KEY;
var TRACE_TO_AXIS = {
  cartesian: ['scatter', 'scattergl', 'box', 'violin', 'bar', 'heatmap', 'heatmapgl', 'contour', 'ohlc', 'candlestick', 'histogram', 'histogram2d', 'histogram2dcontour', 'carpet', 'scattercarpet', 'contourcarpet', 'waterfall', 'funnel'],
  ternary: ['scatterternary'],
  gl3d: ['scatter3d', 'surface', 'mesh3d', 'cone', 'streamtube'],
  geo: ['scattergeo', 'choropleth'],
  mapbox: ['scattermapbox', 'choroplethmapbox', 'densitymapbox'],
  polar: ['scatterpolar', 'scatterpolargl', 'barpolar']
}; // Note: scene, and xaxis/yaxis were added for convenience sake even though they're not subplot types

exports.TRACE_TO_AXIS = TRACE_TO_AXIS;
var SUBPLOT_TO_ATTR = {
  cartesian: {
    data: ['xaxis', 'yaxis'],
    layout: ['x', 'y']
  },
  xaxis: {
    data: 'xaxis',
    layout: 'x'
  },
  yaxis: {
    data: 'yaxis',
    layout: 'y'
  },
  x: {
    data: 'xaxis',
    layout: 'x'
  },
  y: {
    data: 'yaxis',
    layout: 'y'
  },
  ternary: {
    data: 'subplot',
    layout: 'ternary'
  },
  gl3d: {
    data: 'scene',
    layout: 'scene'
  },
  scene: {
    data: 'scene',
    layout: 'scene'
  },
  geo: {
    data: 'geo',
    layout: 'geo'
  },
  mapbox: {
    data: 'subplot',
    layout: 'mapbox'
  },
  polar: {
    data: 'subplot',
    layout: 'polar'
  }
};
exports.SUBPLOT_TO_ATTR = SUBPLOT_TO_ATTR;

var subplotName = function subplotName(type, _) {
  return {
    x: _('X'),
    y: _('Y'),
    ternary: _('Ternary'),
    gl3d: _('Scene'),
    scene: _('Scene'),
    geo: _('Map'),
    mapbox: _('Tile Map'),
    polar: _('Polar')
  }[type];
};

exports.subplotName = subplotName;
var TRANSFORMS_LIST = ['filter', 'groupby', 'aggregate', 'sort'];
exports.TRANSFORMS_LIST = TRANSFORMS_LIST;
var TRANSFORMABLE_TRACES = ['scatter', 'scattergl', 'box', 'violin', 'bar', 'ohlc', 'candlestick', 'histogram', 'histogram2d', 'waterfall'];
exports.TRANSFORMABLE_TRACES = TRANSFORMABLE_TRACES;
var TRACES_WITH_GL = ['scatter', 'scatterpolar', 'scattergl', 'scatterpolargl'];
exports.TRACES_WITH_GL = TRACES_WITH_GL;
var COLORS = {
  charcoal: '#444444',
  white: '#ffffff',
  mutedBlue: '#1f77b4',
  safetyOrange: '#ff7f0e',
  cookedAsparagusGreen: '#2ca02c',
  brickRed: '#d62728',
  mutedPurple: '#9467bd',
  chestnutBrown: '#8c564b',
  raspberryYogurtPink: '#e377c2',
  middleGray: '#7f7f7f',
  curryYellowGreen: '#bcbd22',
  blueTeal: '#17becf',
  editorLink: '#447bdc',
  black: '#000000'
};
exports.COLORS = COLORS;
var DEFAULT_COLORS = Object.values(COLORS);
exports.DEFAULT_COLORS = DEFAULT_COLORS;
//# sourceMappingURL=constants.js.map