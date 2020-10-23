"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _Info = _interopRequireDefault(require("./Info"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var UnconnectedSingleSubplotCreator = /*#__PURE__*/function (_Component) {
  _inherits(UnconnectedSingleSubplotCreator, _Component);

  var _super = _createSuper(UnconnectedSingleSubplotCreator);

  function UnconnectedSingleSubplotCreator() {
    _classCallCheck(this, UnconnectedSingleSubplotCreator);

    return _super.apply(this, arguments);
  }

  _createClass(UnconnectedSingleSubplotCreator, [{
    key: "canAddSubplot",
    value: function canAddSubplot() {
      var _this = this;

      var currentAxisId = this.props.fullContainer[this.props.attr];
      var currentTraceIndex = this.props.fullContainer.index;
      return this.context.fullData.some(function (d) {
        return d.index !== currentTraceIndex && d[_this.props.attr] === currentAxisId;
      });
    }
  }, {
    key: "addAndUpdateSubplot",
    value: function addAndUpdateSubplot() {
      var _this$props = this.props,
          attr = _this$props.attr,
          layoutAttr = _this$props.layoutAttr,
          updateContainer = _this$props.updateContainer;
      var subplots = this.context.fullLayout._subplots;
      var lastSubplotNumber = Number(subplots[layoutAttr][subplots[layoutAttr].length - 1].split(_constants.SUBPLOT_TO_ATTR[layoutAttr].layout)[1]) || 1;
      updateContainer(_defineProperty({}, attr, _constants.SUBPLOT_TO_ATTR[layoutAttr].layout + (lastSubplotNumber + 1)));
    }
  }, {
    key: "updateSubplot",
    value: function updateSubplot(update) {
      var _this2 = this;

      var currentSubplotId = this.props.fullContainer[_constants.SUBPLOT_TO_ATTR[this.props.layoutAttr].data];
      var subplotToBeGarbageCollected = null; // When we select another subplot, make sure no unused axes are left

      if (currentSubplotId !== update && !this.context.fullData.some(function (trace) {
        return trace[_constants.SUBPLOT_TO_ATTR[_this2.props.layoutAttr].data] === currentSubplotId && trace.index !== _this2.props.fullContainer.index;
      })) {
        subplotToBeGarbageCollected = currentSubplotId;
      }

      this.context.onUpdate({
        type: _constants.EDITOR_ACTIONS.UPDATE_TRACES,
        payload: {
          subplotToBeGarbageCollected: subplotToBeGarbageCollected,
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
      var extraComponent = this.canAddSubplot() ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        variant: "no-text",
        icon: icon,
        onClick: function onClick() {
          return _this3.addAndUpdateSubplot();
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
          return _this3.updateSubplot(u);
        },
        extraComponent: extraComponent
      });
    }
  }]);

  return UnconnectedSingleSubplotCreator;
}(_react.Component);

UnconnectedSingleSubplotCreator.propTypes = {
  attr: _propTypes.default.string,
  layoutAttr: _propTypes.default.string,
  label: _propTypes.default.string,
  options: _propTypes.default.array,
  container: _propTypes.default.object,
  fullContainer: _propTypes.default.object,
  updateContainer: _propTypes.default.func
};
UnconnectedSingleSubplotCreator.contextTypes = {
  fullLayout: _propTypes.default.object,
  data: _propTypes.default.array,
  fullData: _propTypes.default.array,
  onUpdate: _propTypes.default.func
};
var SingleSubplotCreator = (0, _lib.connectToContainer)(UnconnectedSingleSubplotCreator);

var UnconnectedSubplotCreator = /*#__PURE__*/function (_Component2) {
  _inherits(UnconnectedSubplotCreator, _Component2);

  var _super2 = _createSuper(UnconnectedSubplotCreator);

  function UnconnectedSubplotCreator() {
    _classCallCheck(this, UnconnectedSubplotCreator);

    return _super2.apply(this, arguments);
  }

  _createClass(UnconnectedSubplotCreator, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var subplotType = (0, _lib.traceTypeToAxisType)(this.props.container.type);

      if (!['geo', 'mapbox', 'polar', 'gl3d', 'ternary'].some(function (t) {
        return t === subplotType;
      })) {
        return null;
      }

      var isFirstTraceOfAxisType = this.context.data.filter(function (d) {
        return (0, _lib.traceTypeToAxisType)(d.type) === subplotType;
      }).length === 1;

      if (isFirstTraceOfAxisType) {
        return null;
      }

      var _this$context = this.context,
          fullLayout = _this$context.fullLayout,
          _ = _this$context.localize;

      function getOptions(subplotType) {
        return fullLayout._subplots[subplotType].map(function (subplotId) {
          return {
            label: (0, _lib.getSubplotTitle)(subplotId, subplotType, _),
            value: subplotId
          };
        });
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_2.PlotlySection, {
        name: _('Subplots to Use'),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(SingleSubplotCreator, {
          attr: _constants.SUBPLOT_TO_ATTR[subplotType].data,
          layoutAttr: subplotType,
          label: (0, _constants.subplotName)(_constants.SUBPLOT_TO_ATTR[subplotType].layout, _),
          options: getOptions(subplotType)
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Info.default, {
          children: [_('You can style and position your subplots in the '), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            onClick: function onClick() {
              return _this4.context.setPanel('Structure', 'Subplots');
            },
            children: _('Subplots')
          }), _(' panel.')]
        })]
      });
    }
  }]);

  return UnconnectedSubplotCreator;
}(_react.Component);

UnconnectedSubplotCreator.propTypes = {
  container: _propTypes.default.object,
  fullContainer: _propTypes.default.object
};
UnconnectedSubplotCreator.contextTypes = {
  data: _propTypes.default.array,
  fullData: _propTypes.default.array,
  fullLayout: _propTypes.default.object,
  localize: _propTypes.default.func,
  setPanel: _propTypes.default.func
};

var _default = (0, _lib.connectToContainer)(UnconnectedSubplotCreator, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var data = context.data;
    var fullContainer = plotProps.fullContainer;
    plotProps.isVisible = data.length > 1 && data[fullContainer.index] && ['geo', 'mapbox', 'polar', 'gl3d', 'ternary'].some(function (t) {
      return t === (0, _lib.traceTypeToAxisType)(data[fullContainer.index].type);
    });
  }
});

exports.default = _default;
//# sourceMappingURL=SubplotCreator.js.map