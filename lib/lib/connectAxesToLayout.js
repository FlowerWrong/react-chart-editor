"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = connectAxesToLayout;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _nested_property = _interopRequireDefault(require("plotly.js/src/lib/nested_property"));

var _multiValues = require("./multiValues");

var _lib = require("../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function computeAxesOptions(axes, props, context) {
  var _ = context.localize;
  var filteredAxes = axes;

  if (props.axisFilter) {
    filteredAxes = axes.filter(props.axisFilter);
  }

  var options = [];

  for (var i = 0; i < filteredAxes.length; i++) {
    var ax = filteredAxes[i];
    var label = (0, _lib.capitalize)(ax._name.split('axis')[0]);
    var value = (ax._subplot && !ax._subplot.includes('xaxis') && !ax._subplot.includes('yaxis') ? ax._subplot + '.' + ax._name : ax._subplot).trim();
    options[i] = {
      label: label,
      value: value,
      axisGroup: ax._axisGroup,
      title: (0, _lib.getAxisTitle)(ax)
    };
  }

  return options.length > 1 ? [{
    label: _('All'),
    value: 'allaxes'
  }].concat(options) : options;
}

function connectAxesToLayout(WrappedComponent) {
  var AxesConnectedComponent = /*#__PURE__*/function (_Component) {
    _inherits(AxesConnectedComponent, _Component);

    var _super = _createSuper(AxesConnectedComponent);

    function AxesConnectedComponent(props, context) {
      var _this;

      _classCallCheck(this, AxesConnectedComponent);

      _this = _super.call(this, props, context);
      _this.axes = (0, _lib.getAllAxes)(context.fullContainer);
      _this.axesOptions = computeAxesOptions(_this.axes, props, context); // this.axesOptions can be an empty array when we have a filter on an AxesFold
      // and no axes correspond to the condition

      var defaultAxesTarget = null;

      if (_this.axesOptions.length === 1) {
        defaultAxesTarget = _this.axesOptions[0].value;
      }

      if (_this.axesOptions.length > 1) {
        defaultAxesTarget = _this.axesOptions[1].value;
      }

      _this.state = {
        axesTarget: defaultAxesTarget
      };
      _this.axesTargetHandler = _this.axesTargetHandler.bind(_assertThisInitialized(_this));
      _this.updateContainer = _this.updateContainer.bind(_assertThisInitialized(_this));

      _this.setLocals(props, _this.state, context);

      return _this;
    }

    _createClass(AxesConnectedComponent, [{
      key: "componentWillUpdate",
      value: function componentWillUpdate(nextProps, nextState, nextContext) {
        this.axes = (0, _lib.getAllAxes)(nextContext.fullContainer);
        this.axesOptions = computeAxesOptions(this.axes, nextProps, nextContext); // This is not enough, what if plotly.js adds new axes...

        this.setLocals(nextProps, nextState, nextContext);
      }
    }, {
      key: "setLocals",
      value: function setLocals(nextProps, nextState, nextContext) {
        var container = nextContext.container,
            fullContainer = nextContext.fullContainer;
        var axesTarget = nextState.axesTarget;

        if (axesTarget === 'allaxes') {
          var multiValuedContainer = (0, _multiValues.deepCopyPublic)(this.axes[0]);
          this.axes.slice(1).forEach(function (ax) {
            return Object.keys(ax).forEach(function (key) {
              return (0, _multiValues.setMultiValuedContainer)(multiValuedContainer, (0, _multiValues.deepCopyPublic)(ax), key, {
                searchArrays: true
              });
            });
          });
          this.fullContainer = multiValuedContainer;
          this.defaultContainer = this.axes[0];
          this.container = {};
        } else if (axesTarget) {
          this.fullContainer = (0, _nested_property.default)(fullContainer, axesTarget).get();
          this.container = this.container = (0, _nested_property.default)(container, axesTarget).get() || {};
        }
      }
    }, {
      key: "getChildContext",
      value: function getChildContext() {
        var _this2 = this;

        return {
          getValObject: function getValObject(attr) {
            return !_this2.context.getValObject ? null : _this2.context.getValObject("".concat(_this2.state.axesTarget, ".").concat(attr));
          },
          axesOptions: this.axesOptions,
          axesTarget: this.state.axesTarget,
          axesTargetHandler: this.axesTargetHandler,
          container: this.container,
          defaultContainer: this.defaultContainer,
          fullContainer: this.fullContainer,
          updateContainer: this.updateContainer
        };
      }
    }, {
      key: "axesTargetHandler",
      value: function axesTargetHandler(axesTarget) {
        this.setState({
          axesTarget: axesTarget
        });
      }
    }, {
      key: "updateContainer",
      value: function updateContainer(update) {
        var newUpdate = {};
        var axesTarget = this.state.axesTarget;
        var axes = this.axes;

        if (axesTarget !== 'allaxes') {
          // only the selected container
          axes = [this.fullContainer];
        }

        var keys = Object.keys(update);

        for (var i = 0; i < keys.length; i++) {
          for (var j = 0; j < axes.length; j++) {
            var subplot = axes[j]._subplot;
            var axesKey = axes[j]._name;

            if (subplot && !subplot.includes('xaxis') && !subplot.includes('yaxis')) {
              axesKey = "".concat(subplot, ".").concat(axesKey);
            }

            var newkey = "".concat(axesKey, ".").concat(keys[i]);
            newUpdate[newkey] = update[keys[i]];
          }
        }

        this.context.updateContainer(newUpdate);
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(WrappedComponent, _objectSpread(_objectSpread({}, this.props), {}, {
          options: this.axesOptions
        }));
      }
    }]);

    return AxesConnectedComponent;
  }(_react.Component);

  AxesConnectedComponent.displayName = "AxesConnected".concat((0, _lib.getDisplayName)(WrappedComponent));
  AxesConnectedComponent.contextTypes = {
    container: _propTypes.default.object.isRequired,
    fullContainer: _propTypes.default.object.isRequired,
    updateContainer: _propTypes.default.func,
    localize: _propTypes.default.func,
    getValObject: _propTypes.default.func
  };
  AxesConnectedComponent.childContextTypes = {
    axesOptions: _propTypes.default.array,
    axesTarget: _propTypes.default.string,
    axesTargetHandler: _propTypes.default.func,
    container: _propTypes.default.object,
    defaultContainer: _propTypes.default.object,
    fullContainer: _propTypes.default.object,
    updateContainer: _propTypes.default.func,
    getValObject: _propTypes.default.func
  };
  var plotly_editor_traits = WrappedComponent.plotly_editor_traits;
  AxesConnectedComponent.plotly_editor_traits = plotly_editor_traits;
  return AxesConnectedComponent;
}
//# sourceMappingURL=connectAxesToLayout.js.map