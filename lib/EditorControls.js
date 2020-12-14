"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _DefaultEditor = _interopRequireDefault(require("./DefaultEditor"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _lib = require("./lib");

var _shame = require("./shame");

var _constants = require("./lib/constants");

var _fastIsnumeric = _interopRequireDefault(require("fast-isnumeric"));

var _nested_property = _interopRequireDefault(require("plotly.js/src/lib/nested_property"));

var _traceTypes = require("./lib/traceTypes");

var _containers = require("./components/containers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var EditorControls = /*#__PURE__*/function (_Component) {
  _inherits(EditorControls, _Component);

  var _super = _createSuper(EditorControls);

  function EditorControls(props, context) {
    var _this;

    _classCallCheck(this, EditorControls);

    _this = _super.call(this, props, context);

    _this.localize = function (key) {
      return (0, _lib.localizeString)(_this.props.dictionaries || {}, _this.props.locale, key);
    }; // we only need to compute this once.


    if (_this.props.plotly) {
      _this.plotSchema = _this.props.plotly.PlotSchema.get();
    }

    return _this;
  }

  _createClass(EditorControls, [{
    key: "getChildContext",
    value: function getChildContext() {
      var gd = this.props.graphDiv || {};
      return {
        advancedTraceTypeSelector: this.props.advancedTraceTypeSelector,
        config: gd._context,
        srcConverters: this.props.srcConverters,
        data: gd.data,
        dataSourceComponents: this.props.dataSourceComponents,
        dataSourceOptions: this.props.dataSourceOptions,
        dataSources: this.props.dataSources,
        dictionaries: this.props.dictionaries || {},
        localize: this.localize,
        frames: gd._transitionData ? gd._transitionData._frames : [],
        fullData: gd._fullData,
        fullLayout: gd._fullLayout,
        graphDiv: gd,
        layout: gd.layout,
        locale: this.props.locale,
        onUpdate: this.handleUpdate.bind(this),
        plotSchema: this.plotSchema,
        plotly: this.props.plotly,
        traceTypesConfig: this.props.traceTypesConfig,
        showFieldTooltips: this.props.showFieldTooltips,
        glByDefault: this.props.glByDefault,
        mapBoxAccess: this.props.mapBoxAccess,
        fontOptions: this.props.fontOptions,
        chartHelp: this.props.chartHelp,
        customConfig: this.props.customConfig,
        hasValidCustomConfigVisibilityRules: (0, _lib.hasValidCustomConfigVisibilityRules)(this.props.customConfig)
      };
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate(_ref) {
      var type = _ref.type,
          payload = _ref.payload;
      var graphDiv = this.props.graphDiv;

      switch (type) {
        case _constants.EDITOR_ACTIONS.UPDATE_TRACES:
          if (this.props.beforeUpdateTraces) {
            this.props.beforeUpdateTraces(payload);
          }

          (0, _shame.shamefullyAdjustSizeref)(graphDiv, payload);
          (0, _shame.shamefullyAdjustAxisDirection)(graphDiv, payload);
          (0, _shame.shamefullyClearAxisTypes)(graphDiv, payload);
          (0, _shame.shamefullyAdjustAxisRef)(graphDiv, payload);
          (0, _shame.shamefullyAddTableColumns)(graphDiv, payload);
          (0, _shame.shamefullyAdjustSplitStyleTargetContainers)(graphDiv, payload);

          if (!this.props.mapBoxAccess) {
            (0, _shame.shamefullyAdjustMapbox)(graphDiv, payload);
          }

          for (var i = 0; i < payload.traceIndexes.length; i++) {
            var _loop = function _loop(attr) {
              var traceIndex = payload.traceIndexes[i];
              var splitTraceGroup = payload.splitTraceGroup ? payload.splitTraceGroup.toString() : null;
              var props = [(0, _nested_property.default)(graphDiv.data[traceIndex], attr)];
              var value = payload.update[attr];

              if (splitTraceGroup) {
                props = (0, _shame.shamefullyCreateSplitStyleProps)(graphDiv, attr, traceIndex, splitTraceGroup);
              }

              props.forEach(function (p) {
                if (value !== void 0) {
                  p.set(value);
                }
              });
            };

            for (var attr in payload.update) {
              _loop(attr);
            }
          }

          if (this.props.afterUpdateTraces) {
            this.props.afterUpdateTraces(payload);
          }

          if (this.props.onUpdate) {
            this.props.onUpdate(graphDiv.data.slice(), graphDiv.layout, graphDiv._transitionData._frames);
          }

          break;

        case _constants.EDITOR_ACTIONS.UPDATE_LAYOUT:
          (0, _shame.shamefullyAdjustGeo)(graphDiv, payload);

          if (this.props.beforeUpdateLayout) {
            this.props.beforeUpdateLayout(payload);
          }

          for (var _attr in payload.update) {
            var prop = (0, _nested_property.default)(graphDiv.layout, _attr);
            var value = payload.update[_attr];

            if (value !== void 0) {
              prop.set(value);
            }
          }

          if (this.props.afterUpdateLayout) {
            this.props.afterUpdateLayout(payload);
          }

          if (this.props.onUpdate) {
            this.props.onUpdate(graphDiv.data, Object.assign({}, graphDiv.layout), graphDiv._transitionData._frames);
          }

          break;

        case _constants.EDITOR_ACTIONS.ADD_TRACE:
          if (this.props.beforeAddTrace) {
            this.props.beforeAddTrace(payload);
          } // can't use default prop because plotly.js mutates it:
          // https://github.com/plotly/react-chart-editor/issues/509


          if (graphDiv.data.length === 0) {
            graphDiv.data.push(this.props.makeDefaultTrace ? this.props.makeDefaultTrace() : {
              type: "scatter".concat(this.props.glByDefault ? 'gl' : ''),
              mode: 'markers'
            });
          } else {
            var prevTrace = graphDiv.data[graphDiv.data.length - 1];
            var prevTraceType = (0, _lib.plotlyTraceToCustomTrace)(prevTrace);
            graphDiv.data.push((0, _lib.traceTypeToPlotlyInitFigure)(prevTraceType, prevTrace.type && prevTrace.type.endsWith('gl') ? 'gl' : ''));
          }

          if (this.props.afterAddTrace) {
            this.props.afterAddTrace(payload);
          }

          if (this.props.onUpdate) {
            this.props.onUpdate(graphDiv.data.slice(), graphDiv.layout, graphDiv._transitionData._frames);
          }

          break;

        case _constants.EDITOR_ACTIONS.DELETE_TRACE:
          if (payload.traceIndexes && payload.traceIndexes.length) {
            if (this.props.beforeDeleteTrace) {
              this.props.beforeDeleteTrace(payload);
            }

            (0, _shame.shamefullyAdjustAxisRef)(graphDiv, payload);
            (0, _shame.shamefullyDeleteRelatedAnalysisTransforms)(graphDiv, payload);
            graphDiv.data.splice(payload.traceIndexes[0], 1);

            if (this.props.afterDeleteTrace) {
              this.props.afterDeleteTrace(payload);
            }

            if (this.props.onUpdate) {
              this.props.onUpdate(graphDiv.data.slice(), graphDiv.layout, graphDiv._transitionData._frames);
            }
          }

          break;

        case _constants.EDITOR_ACTIONS.DELETE_ANNOTATION:
          if ((0, _fastIsnumeric.default)(payload.annotationIndex)) {
            if (this.props.beforeDeleteAnnotation) {
              this.props.beforeDeleteAnnotation(payload);
            }

            graphDiv.layout.annotations.splice(payload.annotationIndex, 1);

            if (this.props.afterDeleteAnnotation) {
              this.props.afterDeleteAnnotation(payload);
            }

            if (this.props.onUpdate) {
              this.props.onUpdate(graphDiv.data, Object.assign({}, graphDiv.layout), graphDiv._transitionData._frames);
            }
          }

          break;

        case _constants.EDITOR_ACTIONS.DELETE_SHAPE:
          if ((0, _fastIsnumeric.default)(payload.shapeIndex)) {
            if (this.props.beforeDeleteShape) {
              this.props.beforeDeleteShape(payload);
            }

            graphDiv.layout.shapes.splice(payload.shapeIndex, 1);

            if (this.props.afterDeleteShape) {
              this.props.afterDeleteShape(payload);
            }

            if (this.props.onUpdate) {
              this.props.onUpdate(graphDiv.data, Object.assign({}, graphDiv.layout), graphDiv._transitionData._frames);
            }
          }

          break;

        case _constants.EDITOR_ACTIONS.DELETE_IMAGE:
          if ((0, _fastIsnumeric.default)(payload.imageIndex)) {
            if (this.props.beforeDeleteImage) {
              this.props.beforeDeleteImage(payload);
            }

            graphDiv.layout.images.splice(payload.imageIndex, 1);

            if (this.props.afterDeleteImage) {
              this.props.afterDeleteImage(payload);
            }

            if (this.props.onUpdate) {
              this.props.onUpdate(graphDiv.data, Object.assign({}, graphDiv.layout), graphDiv._transitionData._frames);
            }
          }

          break;

        case _constants.EDITOR_ACTIONS.DELETE_RANGESELECTOR:
          if ((0, _fastIsnumeric.default)(payload.rangeselectorIndex)) {
            graphDiv.layout[payload.axisId].rangeselector.buttons.splice(payload.rangeselectorIndex, 1);

            if (this.props.onUpdate) {
              this.props.onUpdate(graphDiv.data, Object.assign({}, graphDiv.layout), graphDiv._transitionData._frames);
            }
          }

          break;

        case _constants.EDITOR_ACTIONS.DELETE_MAPBOXLAYER:
          if ((0, _fastIsnumeric.default)(payload.mapboxLayerIndex)) {
            graphDiv.layout[payload.mapboxId].layers.splice(payload.mapboxLayerIndex, 1);

            if (this.props.onUpdate) {
              this.props.onUpdate(graphDiv.data, Object.assign({}, graphDiv.layout), graphDiv._transitionData._frames);
            }
          }

          break;

        case _constants.EDITOR_ACTIONS.DELETE_TRANSFORM:
          if ((0, _fastIsnumeric.default)(payload.transformIndex) && payload.traceIndex < graphDiv.data.length) {
            if (graphDiv.data[payload.traceIndex].transforms.length === 1) {
              delete graphDiv.data[payload.traceIndex].transforms;
            } else {
              graphDiv.data[payload.traceIndex].transforms.splice(payload.transformIndex, 1);
            }

            if (this.props.onUpdate) {
              this.props.onUpdate(graphDiv.data.slice(), graphDiv.layout, graphDiv._transitionData._frames);
            }
          }

          break;

        case _constants.EDITOR_ACTIONS.MOVE_TO:
          // checking if fromIndex and toIndex is a number because
          // gives errors if index is 0 (falsy value)
          if (payload.path && !isNaN(payload.fromIndex) && !isNaN(payload.toIndex)) {
            function move(container) {
              var movedEl = container[payload.fromIndex];
              var replacedEl = container[payload.toIndex];
              container[payload.toIndex] = movedEl;
              container[payload.fromIndex] = replacedEl;
            }

            if (payload.path === 'data') {
              move(graphDiv.data);
            }

            if (payload.path === 'layout.images') {
              move(graphDiv.layout.images);
            }

            if (payload.path === 'layout.shapes') {
              move(graphDiv.layout.shapes);
            }

            if (payload.path === 'layout.annotations') {
              move(graphDiv.layout.annotations);
            }

            if (payload.path === 'layout.mapbox.layers') {
              move(graphDiv.layout[payload.mapboxId].layers);
            }

            var updatedData = payload.path.startsWith('data') ? graphDiv.data.slice() : graphDiv.data;
            var updatedLayout = payload.path.startsWith('layout') ? Object.assign({}, graphDiv.layout) : graphDiv.layout;

            if (this.props.onUpdate) {
              this.props.onUpdate(updatedData, updatedLayout, graphDiv._transitionData._frames);
            }
          }

          break;

        default:
          throw new Error(this.localize('must specify an action type to handleEditorUpdate'));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _lib.bem)('editor_controls') + ' plotly-editor--theme-provider' + "".concat(this.props.className ? " ".concat(this.props.className) : ''),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_containers.ModalProvider, {
          children: this.props.graphDiv && this.props.graphDiv._fullLayout && (this.props.children ? this.props.children : /*#__PURE__*/(0, _jsxRuntime.jsx)(_DefaultEditor.default, {}))
        })
      });
    }
  }]);

  return EditorControls;
}(_react.Component);

EditorControls.propTypes = {
  advancedTraceTypeSelector: _propTypes.default.bool,
  afterAddTrace: _propTypes.default.func,
  afterDeleteAnnotation: _propTypes.default.func,
  afterDeleteShape: _propTypes.default.func,
  afterDeleteImage: _propTypes.default.func,
  afterDeleteTrace: _propTypes.default.func,
  afterUpdateLayout: _propTypes.default.func,
  afterUpdateTraces: _propTypes.default.func,
  beforeAddTrace: _propTypes.default.func,
  beforeDeleteAnnotation: _propTypes.default.func,
  beforeDeleteShape: _propTypes.default.func,
  beforeDeleteImage: _propTypes.default.func,
  beforeDeleteTrace: _propTypes.default.func,
  beforeUpdateLayout: _propTypes.default.func,
  beforeUpdateTraces: _propTypes.default.func,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  srcConverters: _propTypes.default.shape({
    toSrc: _propTypes.default.func.isRequired,
    fromSrc: _propTypes.default.func.isRequired
  }),
  dataSourceComponents: _propTypes.default.object,
  dataSourceOptions: _propTypes.default.array,
  dataSources: _propTypes.default.object,
  dictionaries: _propTypes.default.object,
  graphDiv: _propTypes.default.object,
  locale: _propTypes.default.string,
  onUpdate: _propTypes.default.func,
  plotly: _propTypes.default.object,
  showFieldTooltips: _propTypes.default.bool,
  traceTypesConfig: _propTypes.default.object,
  makeDefaultTrace: _propTypes.default.func,
  glByDefault: _propTypes.default.bool,
  mapBoxAccess: _propTypes.default.bool,
  fontOptions: _propTypes.default.array,
  chartHelp: _propTypes.default.object,
  customConfig: _propTypes.default.object
};
EditorControls.defaultProps = {
  showFieldTooltips: false,
  locale: 'en',
  traceTypesConfig: {
    categories: function categories(_) {
      return (0, _traceTypes.categoryLayout)(_);
    },
    traces: function traces(_) {
      return (0, _traceTypes.traceTypes)(_);
    },
    complex: true
  },
  fontOptions: _constants.DEFAULT_FONTS
};
EditorControls.childContextTypes = {
  advancedTraceTypeSelector: _propTypes.default.bool,
  config: _propTypes.default.object,
  srcConverters: _propTypes.default.shape({
    toSrc: _propTypes.default.func.isRequired,
    fromSrc: _propTypes.default.func.isRequired
  }),
  data: _propTypes.default.array,
  dataSourceComponents: _propTypes.default.object,
  dataSourceOptions: _propTypes.default.array,
  dataSources: _propTypes.default.object,
  dictionaries: _propTypes.default.object,
  frames: _propTypes.default.array,
  fullData: _propTypes.default.array,
  fullLayout: _propTypes.default.object,
  graphDiv: _propTypes.default.any,
  layout: _propTypes.default.object,
  locale: _propTypes.default.string,
  localize: _propTypes.default.func,
  onUpdate: _propTypes.default.func,
  plotly: _propTypes.default.object,
  plotSchema: _propTypes.default.object,
  traceTypesConfig: _propTypes.default.object,
  showFieldTooltips: _propTypes.default.bool,
  glByDefault: _propTypes.default.bool,
  mapBoxAccess: _propTypes.default.bool,
  fontOptions: _propTypes.default.array,
  chartHelp: _propTypes.default.object,
  customConfig: _propTypes.default.object,
  hasValidCustomConfigVisibilityRules: _propTypes.default.bool
};
var _default = EditorControls;
exports.default = _default;
//# sourceMappingURL=EditorControls.js.map