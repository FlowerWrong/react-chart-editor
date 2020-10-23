"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _Info = _interopRequireDefault(require("./Info"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _constants = require("../../lib/constants");

var _Button = _interopRequireDefault(require("../widgets/Button"));

var _plotlyIcons = require("plotly-icons");

var _lib = require("../../lib");

var _2 = require("./..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var UnconnectedAxisCreator = /*#__PURE__*/function (_Component) {
  _inherits(UnconnectedAxisCreator, _Component);

  var _super = _createSuper(UnconnectedAxisCreator);

  function UnconnectedAxisCreator() {
    _classCallCheck(this, UnconnectedAxisCreator);

    return _super.apply(this, arguments);
  }

  _createClass(UnconnectedAxisCreator, [{
    key: "canAddAxis",
    value: function canAddAxis() {
      var _this = this;

      var currentAxisId = this.props.fullContainer[this.props.attr];
      var currentTraceIndex = this.props.fullContainer.index;
      return this.context.fullData.some(function (d) {
        return d.index !== currentTraceIndex && d[_this.props.attr] === currentAxisId;
      });
    }
  }, {
    key: "addAndUpdateAxis",
    value: function addAndUpdateAxis() {
      var _update;

      var _this$props = this.props,
          attr = _this$props.attr,
          updateContainer = _this$props.updateContainer;
      var _this$context = this.context,
          onUpdate = _this$context.onUpdate,
          subplots = _this$context.fullLayout._subplots;
      var lastAxisNumber = Number(subplots[attr][subplots[attr].length - 1].charAt(1)) || 1;
      updateContainer(_defineProperty({}, attr, attr.charAt(0) + (lastAxisNumber + 1)));
      var side = null;

      if (attr === 'yaxis') {
        side = 'right';
      } else if (attr === 'xaxis') {
        side = 'top';
      }

      onUpdate({
        type: _constants.EDITOR_ACTIONS.UPDATE_LAYOUT,
        payload: {
          update: (_update = {}, _defineProperty(_update, "".concat(attr + (lastAxisNumber + 1), ".side"), side), _defineProperty(_update, "".concat(attr + (lastAxisNumber + 1), ".overlaying"), !(attr === 'yaxis' || attr === 'xaxis') ? null : subplots[attr][subplots[attr].length - 1]), _update)
        }
      });
    }
  }, {
    key: "updateAxis",
    value: function updateAxis(update) {
      var _this2 = this;

      var currentAxisId = this.props.fullContainer[this.props.attr];
      var axesToBeGarbageCollected = []; // When we select another axis, make sure no unused axes are left

      if (currentAxisId !== update && !this.context.fullData.some(function (trace) {
        return trace[_this2.props.attr] === currentAxisId && trace.index !== _this2.props.fullContainer.index;
      })) {
        axesToBeGarbageCollected.push(currentAxisId);
      }

      this.context.onUpdate({
        type: _constants.EDITOR_ACTIONS.UPDATE_TRACES,
        payload: {
          axesToBeGarbageCollected: axesToBeGarbageCollected,
          update: _defineProperty({}, this.props.attr, update),
          traceIndexes: [this.props.fullContainer.index]
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var icon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_plotlyIcons.PlusIcon, {});
      var extraComponent = this.canAddAxis() ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        variant: "no-text",
        icon: icon,
        onClick: function onClick() {
          return _this3.addAndUpdateAxis();
        }
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        variant: "no-text--disabled",
        icon: icon,
        onClick: function onClick() {}
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown.default, {
        label: this.props.label,
        attr: this.props.attr,
        clearable: false,
        options: this.props.options,
        updatePlot: function updatePlot(u) {
          return _this3.updateAxis(u);
        },
        extraComponent: extraComponent
      });
    }
  }]);

  return UnconnectedAxisCreator;
}(_react.Component);

UnconnectedAxisCreator.propTypes = {
  attr: _propTypes.default.string,
  label: _propTypes.default.string,
  options: _propTypes.default.array,
  container: _propTypes.default.object,
  fullContainer: _propTypes.default.object,
  updateContainer: _propTypes.default.func
};
UnconnectedAxisCreator.contextTypes = {
  fullLayout: _propTypes.default.object,
  data: _propTypes.default.array,
  fullData: _propTypes.default.array,
  onUpdate: _propTypes.default.func
};
var AxisCreator = (0, _lib.connectToContainer)(UnconnectedAxisCreator);

var UnconnectedAxesCreator = /*#__PURE__*/function (_Component2) {
  _inherits(UnconnectedAxesCreator, _Component2);

  var _super2 = _createSuper(UnconnectedAxesCreator);

  function UnconnectedAxesCreator() {
    _classCallCheck(this, UnconnectedAxesCreator);

    return _super2.apply(this, arguments);
  }

  _createClass(UnconnectedAxesCreator, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var axisType = (0, _lib.traceTypeToAxisType)(this.props.container.type);
      var isFirstTraceOfAxisType = this.context.data.filter(function (d) {
        return (0, _lib.traceTypeToAxisType)(d.type) === axisType;
      }).length === 1;

      if (isFirstTraceOfAxisType) {
        return null;
      }

      var _this$context2 = this.context,
          fullLayout = _this$context2.fullLayout,
          _ = _this$context2.localize;
      var controls = [];

      function getOptions(axisType) {
        return fullLayout._subplots[axisType].map(function (axisId) {
          return {
            label: (0, _lib.getParsedTemplateString)((0, _lib.getAxisTitle)(fullLayout[(0, _lib.axisIdToAxisName)(axisId)]), {
              meta: fullLayout.meta
            }),
            value: axisId
          };
        });
      }

      if (axisType === 'cartesian') {
        ['xaxis', 'yaxis'].forEach(function (type, index) {
          controls.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(AxisCreator, {
            attr: type,
            label: type.charAt(0).toUpperCase() + _(' Axis'),
            options: getOptions(type)
          }, index));
        });
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_2.PlotlySection, {
        name: _('Axes to Use'),
        children: [controls, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Info.default, {
          children: [_('You can style and position your axes in the '), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            onClick: function onClick() {
              return _this4.context.setPanel('Structure', 'Subplots');
            },
            children: _('Subplots')
          }), _(' panel.')]
        })]
      });
    }
  }]);

  return UnconnectedAxesCreator;
}(_react.Component);

UnconnectedAxesCreator.propTypes = {
  container: _propTypes.default.object,
  fullContainer: _propTypes.default.object
};
UnconnectedAxesCreator.contextTypes = {
  data: _propTypes.default.array,
  fullData: _propTypes.default.array,
  fullLayout: _propTypes.default.object,
  localize: _propTypes.default.func,
  setPanel: _propTypes.default.func
};

var _default = (0, _lib.connectToContainer)(UnconnectedAxesCreator, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var data = context.data;
    var fullContainer = plotProps.fullContainer;
    plotProps.isVisible = data.length > 1 && data[fullContainer.index] && (0, _lib.traceTypeToAxisType)(data[fullContainer.index].type) === 'cartesian';
  }
});

exports.default = _default;
//# sourceMappingURL=AxesCreator.js.map