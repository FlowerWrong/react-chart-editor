"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _Dropdown = require("./Dropdown");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _lib = require("../../lib");

var _constants = require("../../lib/constants");

var _widgets = require("../widgets");

var _Field = _interopRequireDefault(require("./Field"));

var _plotlyIcons = require("plotly-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var TraceSelector = /*#__PURE__*/function (_Component) {
  _inherits(TraceSelector, _Component);

  var _super = _createSuper(TraceSelector);

  function TraceSelector(props, context) {
    var _this;

    _classCallCheck(this, TraceSelector);

    _this = _super.call(this, props, context);
    _this.updatePlot = _this.updatePlot.bind(_assertThisInitialized(_this));
    _this.setGl = _this.setGl.bind(_assertThisInitialized(_this));
    _this.glEnabled = _this.glEnabled.bind(_assertThisInitialized(_this));
    _this.setTraceDefaults = _this.setTraceDefaults.bind(_assertThisInitialized(_this));
    _this.toggleGlControls = _this.toggleGlControls.bind(_assertThisInitialized(_this));

    _this.setTraceDefaults(props.container, props.fullContainer, props.updateContainer);

    _this.setLocals(props, context);

    _this.state = {
      showGlControls: false
    };
    return _this;
  }

  _createClass(TraceSelector, [{
    key: "glEnabled",
    value: function glEnabled() {
      return this.props.container.type && this.props.container.type.endsWith('gl') ? 'gl' : '';
    }
  }, {
    key: "toggleGlControls",
    value: function toggleGlControls() {
      this.setState({
        showGlControls: !this.state.showGlControls
      });
    }
  }, {
    key: "setLocals",
    value: function setLocals(props, context) {
      var _ = context.localize;

      if (props.traceOptions) {
        this.traceOptions = props.traceOptions;
      } else if (context.traceTypesConfig) {
        this.traceOptions = context.traceTypesConfig.traces(_);
      } else if (context.plotSchema) {
        this.traceOptions = (0, _lib.computeTraceOptionsFromSchema)(context.plotSchema, _, this.context);
      } else {
        this.traceOptions = [{
          label: _('Scatter'),
          value: 'scatter'
        }];
      }

      if (props.container) {
        this.fullValue = (0, _lib.plotlyTraceToCustomTrace)(props.container);
      }
    }
  }, {
    key: "setTraceDefaults",
    value: function setTraceDefaults(container, fullContainer, updateContainer, gl) {
      if (container && !container.mode && fullContainer.type === 'scatter') {
        updateContainer({
          type: 'scatter' + (gl || this.context.glByDefault ? gl : this.glEnabled()),
          mode: fullContainer.mode || 'markers'
        });
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
      var container = nextProps.container,
          fullContainer = nextProps.fullContainer,
          updateContainer = nextProps.updateContainer;
      this.setTraceDefaults(container, fullContainer, updateContainer);
      this.setLocals(nextProps, nextContext);
    }
  }, {
    key: "updatePlot",
    value: function updatePlot(value) {
      var updateContainer = this.props.updateContainer;
      var glByDefault = this.context.glByDefault;

      if (updateContainer) {
        updateContainer((0, _lib.traceTypeToPlotlyInitFigure)(value, this.glEnabled() || glByDefault));
      }
    }
  }, {
    key: "setGl",
    value: function setGl(value) {
      var _this$props = this.props,
          container = _this$props.container,
          fullContainer = _this$props.fullContainer,
          updateContainer = _this$props.updateContainer;
      var gl = 'gl';
      this.setTraceDefaults(container, fullContainer, updateContainer, value);
      var traceType = this.fullValue.endsWith(gl) && value === '' ? this.fullValue.slice(0, -gl.length) : this.fullValue;
      updateContainer((0, _lib.traceTypeToPlotlyInitFigure)(traceType, value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = Object.assign({}, this.props, {
        fullValue: this.fullValue,
        updatePlot: this.updatePlot,
        options: this.traceOptions,
        clearable: false
      });
      var _this$context = this.context,
          _ = _this$context.localize,
          advancedTraceTypeSelector = _this$context.advancedTraceTypeSelector;
      var options = [{
        label: _('SVG'),
        value: ''
      }, {
        label: _('WebGL'),
        value: 'gl'
      }]; // Check and see if the advanced selector prop is true

      if (advancedTraceTypeSelector) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, _objectSpread(_objectSpread({}, props), {}, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              style: {
                display: 'flex',
                width: '100%',
                alignItems: 'center'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_widgets.TraceTypeSelectorButton, _objectSpread(_objectSpread({}, props), {}, {
                traceTypesConfig: this.context.traceTypesConfig,
                handleClick: function handleClick() {
                  return _this2.context.openModal(_widgets.TraceTypeSelector, _objectSpread(_objectSpread({}, props), {}, {
                    traceTypesConfig: _this2.context.traceTypesConfig,
                    glByDefault: _this2.context.glByDefault
                  }));
                }
              })), !_constants.TRACES_WITH_GL.includes(this.props.container.type) ? '' : /*#__PURE__*/(0, _jsxRuntime.jsx)(_plotlyIcons.CogIcon, {
                className: "menupanel__icon",
                onClick: this.toggleGlControls
              })]
            })
          })), !(_constants.TRACES_WITH_GL.includes(this.props.container.type) && this.state.showGlControls) ? '' : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, {
            label: _('Rendering'),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_widgets.RadioBlocks, {
              options: options,
              activeOption: this.glEnabled(),
              onOptionChange: this.setGl
            })
          })]
        });
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown.UnconnectedDropdown, _objectSpread({}, props));
    }
  }]);

  return TraceSelector;
}(_react.Component);

TraceSelector.contextTypes = {
  openModal: _propTypes.default.func,
  advancedTraceTypeSelector: _propTypes.default.bool,
  traceTypesConfig: _propTypes.default.object,
  plotSchema: _propTypes.default.object,
  config: _propTypes.default.object,
  localize: _propTypes.default.func,
  glByDefault: _propTypes.default.bool
};
TraceSelector.propTypes = {
  container: _propTypes.default.object.isRequired,
  fullContainer: _propTypes.default.object.isRequired,
  fullValue: _propTypes.default.any,
  updateContainer: _propTypes.default.func
};

var _default = (0, _lib.connectToContainer)(TraceSelector);

exports.default = _default;
//# sourceMappingURL=TraceSelector.js.map