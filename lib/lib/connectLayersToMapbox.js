"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = connectLayersToMapbox;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lib = require("../lib");

var _constants = require("./constants");

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

function connectLayersToMapbox(WrappedComponent) {
  var MapboxLayerConnectedComponent = /*#__PURE__*/function (_Component) {
    _inherits(MapboxLayerConnectedComponent, _Component);

    var _super = _createSuper(MapboxLayerConnectedComponent);

    function MapboxLayerConnectedComponent(props, context) {
      var _this;

      _classCallCheck(this, MapboxLayerConnectedComponent);

      _this = _super.call(this, props, context);
      _this.deleteMapboxLayer = _this.deleteMapboxLayer.bind(_assertThisInitialized(_this));
      _this.updateMapboxLayer = _this.updateMapboxLayer.bind(_assertThisInitialized(_this));
      _this.moveMapboxLayer = _this.moveMapboxLayer.bind(_assertThisInitialized(_this));

      _this.setLocals(props, context);

      return _this;
    }

    _createClass(MapboxLayerConnectedComponent, [{
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        this.setLocals(nextProps, nextContext);
      }
    }, {
      key: "setLocals",
      value: function setLocals(props, context) {
        var mapboxLayerIndex = props.mapboxLayerIndex;
        var container = context.container,
            fullContainer = context.fullContainer;
        var mapboxLayers = container.layers || [];
        var fullmapboxLayers = fullContainer.layers || [];
        this.container = mapboxLayers[mapboxLayerIndex];
        this.fullContainer = fullmapboxLayers[mapboxLayerIndex];
      }
    }, {
      key: "getChildContext",
      value: function getChildContext() {
        var _this2 = this;

        return {
          getValObject: function getValObject(attr) {
            return !_this2.context.getValObject ? null : _this2.context.getValObject("layers[].".concat(attr));
          },
          updateContainer: this.updateMapboxLayer,
          deleteContainer: this.deleteMapboxLayer,
          moveContainer: this.moveMapboxLayer,
          container: this.container,
          fullContainer: this.fullContainer
        };
      }
    }, {
      key: "updateMapboxLayer",
      value: function updateMapboxLayer(update) {
        var newUpdate = {};
        var mapboxLayerIndex = this.props.mapboxLayerIndex;

        for (var key in update) {
          var newkey = "layers[".concat(mapboxLayerIndex, "].").concat(key);
          newUpdate[newkey] = update[key];
        }

        this.context.updateContainer(newUpdate);
      }
    }, {
      key: "deleteMapboxLayer",
      value: function deleteMapboxLayer() {
        if (this.context.onUpdate) {
          this.context.onUpdate({
            type: _constants.EDITOR_ACTIONS.DELETE_MAPBOXLAYER,
            payload: {
              mapboxId: this.context.fullContainer._subplot.id,
              mapboxLayerIndex: this.props.mapboxLayerIndex
            }
          });
        }
      }
    }, {
      key: "moveMapboxLayer",
      value: function moveMapboxLayer(direction) {
        if (this.context.onUpdate) {
          var mapboxLayerIndex = this.props.mapboxLayerIndex;
          var desiredIndex = direction === 'up' ? mapboxLayerIndex - 1 : mapboxLayerIndex + 1;
          this.context.onUpdate({
            type: _constants.EDITOR_ACTIONS.MOVE_TO,
            payload: {
              fromIndex: mapboxLayerIndex,
              toIndex: desiredIndex,
              mapboxId: this.context.fullContainer._subplot.id,
              path: 'layout.mapbox.layers'
            }
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(WrappedComponent, _objectSpread({}, this.props));
      }
    }]);

    return MapboxLayerConnectedComponent;
  }(_react.Component);

  MapboxLayerConnectedComponent.displayName = "MapboxLayerConnected".concat((0, _lib.getDisplayName)(WrappedComponent));
  MapboxLayerConnectedComponent.propTypes = {
    mapboxLayerIndex: _propTypes.default.number.isRequired
  };
  MapboxLayerConnectedComponent.contextTypes = {
    container: _propTypes.default.object,
    fullContainer: _propTypes.default.object,
    data: _propTypes.default.array,
    onUpdate: _propTypes.default.func,
    updateContainer: _propTypes.default.func,
    getValObject: _propTypes.default.func
  };
  MapboxLayerConnectedComponent.childContextTypes = {
    updateContainer: _propTypes.default.func,
    deleteContainer: _propTypes.default.func,
    moveContainer: _propTypes.default.func,
    container: _propTypes.default.object,
    fullContainer: _propTypes.default.object,
    getValObject: _propTypes.default.func
  };
  var plotly_editor_traits = WrappedComponent.plotly_editor_traits;
  MapboxLayerConnectedComponent.plotly_editor_traits = plotly_editor_traits;
  return MapboxLayerConnectedComponent;
}
//# sourceMappingURL=connectLayersToMapbox.js.map