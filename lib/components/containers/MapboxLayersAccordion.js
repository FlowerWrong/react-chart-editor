"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _PlotlyFold = _interopRequireDefault(require("./PlotlyFold"));

var _PlotlyPanel = _interopRequireDefault(require("./PlotlyPanel"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _lib = require("../../lib");

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

var MapboxLayersFold = (0, _lib.connectLayersToMapbox)(_PlotlyFold.default);

var MapboxLayersAccordion = /*#__PURE__*/function (_Component) {
  _inherits(MapboxLayersAccordion, _Component);

  var _super = _createSuper(MapboxLayersAccordion);

  function MapboxLayersAccordion() {
    _classCallCheck(this, MapboxLayersAccordion);

    return _super.apply(this, arguments);
  }

  _createClass(MapboxLayersAccordion, [{
    key: "render",
    value: function render() {
      var _this$context = this.context,
          _this$context$fullCon = _this$context.fullContainer.layers,
          layers = _this$context$fullCon === void 0 ? [] : _this$context$fullCon,
          _ = _this$context.localize,
          meta = _this$context.layout;
      var children = this.props.children;
      var content = layers.length && layers.map(function (layer, i) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(MapboxLayersFold, {
          mapboxLayerIndex: i,
          name: (0, _lib.getParsedTemplateString)(layer.name, {
            meta: meta
          }),
          canDelete: true,
          children: children
        }, i);
      });
      var addAction = {
        label: _('Layer'),
        handler: function handler(context) {
          var fullContainer = context.fullContainer,
              updateContainer = context.updateContainer;

          if (updateContainer) {
            var mapboxLayerIndex = Array.isArray(fullContainer.layers) ? fullContainer.layers.length : 0;
            updateContainer(_defineProperty({}, "layers[".concat(mapboxLayerIndex, "]"), {
              name: "Layer ".concat(mapboxLayerIndex),
              sourcetype: 'raster',
              below: 'traces'
            }));
          }
        }
      };
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PlotlyPanel.default, {
        addAction: addAction,
        canReorder: true,
        children: content ? content : null
      });
    }
  }]);

  return MapboxLayersAccordion;
}(_react.Component);

MapboxLayersAccordion.contextTypes = {
  fullContainer: _propTypes.default.object,
  localize: _propTypes.default.func,
  layout: _propTypes.default.object
};
MapboxLayersAccordion.propTypes = {
  children: _propTypes.default.node
};
MapboxLayersAccordion.plotly_editor_traits = {
  no_visibility_forcing: true
};
var _default = MapboxLayersAccordion;
exports.default = _default;
//# sourceMappingURL=MapboxLayersAccordion.js.map