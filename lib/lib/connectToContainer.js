"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = connectToContainer;
exports.containerConnectedContextTypes = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _unpackPlotProps = _interopRequireWildcard(require("./unpackPlotProps"));

var _lib = require("../lib");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var containerConnectedContextTypes = {
  localize: _propTypes.default.func,
  container: _propTypes.default.object,
  data: _propTypes.default.array,
  defaultContainer: _propTypes.default.object,
  fullContainer: _propTypes.default.object,
  fullData: _propTypes.default.array,
  fullLayout: _propTypes.default.object,
  getValObject: _propTypes.default.func,
  graphDiv: _propTypes.default.object,
  layout: _propTypes.default.object,
  onUpdate: _propTypes.default.func,
  plotly: _propTypes.default.object,
  updateContainer: _propTypes.default.func,
  traceIndexes: _propTypes.default.array,
  customConfig: _propTypes.default.object,
  hasValidCustomConfigVisibilityRules: _propTypes.default.bool
};
exports.containerConnectedContextTypes = containerConnectedContextTypes;

function connectToContainer(WrappedComponent) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var ContainerConnectedComponent = /*#__PURE__*/function (_Component) {
    _inherits(ContainerConnectedComponent, _Component);

    var _super = _createSuper(ContainerConnectedComponent);

    _createClass(ContainerConnectedComponent, null, [{
      key: "modifyPlotProps",
      // Run the inner modifications first and allow more recent modifyPlotProp
      // config function to modify last.
      value: function modifyPlotProps(props, context, plotProps) {
        if (WrappedComponent.modifyPlotProps) {
          WrappedComponent.modifyPlotProps(props, context, plotProps);
        }

        if (config.modifyPlotProps) {
          config.modifyPlotProps(props, context, plotProps);
        }
      }
    }]);

    function ContainerConnectedComponent(props, context) {
      var _this;

      _classCallCheck(this, ContainerConnectedComponent);

      _this = _super.call(this, props, context);

      _this.setLocals(props, context);

      return _this;
    }

    _createClass(ContainerConnectedComponent, [{
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        this.setLocals(nextProps, nextContext);
      }
    }, {
      key: "setLocals",
      value: function setLocals(props, context) {
        this.plotProps = (0, _unpackPlotProps.default)(props, context, WrappedComponent);
        this.attr = props.attr;
        ContainerConnectedComponent.modifyPlotProps(props, context, this.plotProps);
      }
    }, {
      key: "getChildContext",
      value: function getChildContext() {
        return {
          description: this.plotProps.description,
          attr: this.attr
        };
      }
    }, {
      key: "render",
      value: function render() {
        // Merge plotprops onto props so leaf components only need worry about
        // props. However pass plotProps as a specific prop in case inner component
        // is also wrapped by a component that `unpackPlotProps`. That way inner
        // component can skip computation as it can see plotProps is already defined.
        var _Object$assign = Object.assign({}, this.plotProps, this.props),
            _Object$assign$plotPr = _Object$assign.plotProps,
            plotProps = _Object$assign$plotPr === void 0 ? this.plotProps : _Object$assign$plotPr,
            props = _objectWithoutProperties(_Object$assign, ["plotProps"]);

        var wrappedComponentDisplayName = WrappedComponent && WrappedComponent.displayName ? WrappedComponent.displayName : null;

        if ((0, _unpackPlotProps.isVisibleGivenCustomConfig)(props.isVisible, props, this.context, wrappedComponentDisplayName)) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(WrappedComponent, _objectSpread(_objectSpread({}, props), {}, {
            plotProps: plotProps
          }));
        }

        return null;
      }
    }]);

    return ContainerConnectedComponent;
  }(_react.Component);

  ContainerConnectedComponent.displayName = "ContainerConnected".concat((0, _lib.getDisplayName)(WrappedComponent));
  ContainerConnectedComponent.contextTypes = containerConnectedContextTypes;
  ContainerConnectedComponent.childContextTypes = {
    description: _propTypes.default.string,
    attr: _propTypes.default.string
  };
  var plotly_editor_traits = WrappedComponent.plotly_editor_traits;
  ContainerConnectedComponent.plotly_editor_traits = plotly_editor_traits;
  return ContainerConnectedComponent;
}
//# sourceMappingURL=connectToContainer.js.map