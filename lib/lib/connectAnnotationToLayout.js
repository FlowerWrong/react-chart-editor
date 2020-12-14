"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = connectAnnotationToLayout;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lib = require("../lib");

var _constants = require("./constants");

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

function connectAnnotationToLayout(WrappedComponent) {
  var AnnotationConnectedComponent = /*#__PURE__*/function (_Component) {
    _inherits(AnnotationConnectedComponent, _Component);

    var _super = _createSuper(AnnotationConnectedComponent);

    function AnnotationConnectedComponent(props, context) {
      var _this;

      _classCallCheck(this, AnnotationConnectedComponent);

      _this = _super.call(this, props, context);
      _this.deleteAnnotation = _this.deleteAnnotation.bind(_assertThisInitialized(_this));
      _this.updateAnnotation = _this.updateAnnotation.bind(_assertThisInitialized(_this));
      _this.moveAnnotation = _this.moveAnnotation.bind(_assertThisInitialized(_this));

      _this.setLocals(props, context);

      return _this;
    }

    _createClass(AnnotationConnectedComponent, [{
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        this.setLocals(nextProps, nextContext);
      }
    }, {
      key: "setLocals",
      value: function setLocals(props, context) {
        var annotationIndex = props.annotationIndex;
        var container = context.container,
            fullContainer = context.fullContainer;
        var annotations = container.annotations || [];
        var fullAnnotations = fullContainer.annotations || [];
        this.container = annotations[annotationIndex];
        this.fullContainer = fullAnnotations[annotationIndex];
      }
    }, {
      key: "getChildContext",
      value: function getChildContext() {
        var _this2 = this;

        return {
          getValObject: function getValObject(attr) {
            return !_this2.context.getValObject ? null : _this2.context.getValObject("annotations[].".concat(attr));
          },
          updateContainer: this.updateAnnotation,
          deleteContainer: this.deleteAnnotation,
          container: this.container,
          fullContainer: this.fullContainer,
          moveContainer: this.moveAnnotation
        };
      }
    }, {
      key: "updateAnnotation",
      value: function updateAnnotation(update) {
        var newUpdate = {};
        var annotationIndex = this.props.annotationIndex;

        for (var key in update) {
          var newkey = "annotations[".concat(annotationIndex, "].").concat(key);
          newUpdate[newkey] = update[key];
        }

        this.context.updateContainer(newUpdate);
      }
    }, {
      key: "deleteAnnotation",
      value: function deleteAnnotation() {
        if (this.context.onUpdate) {
          this.context.onUpdate({
            type: _constants.EDITOR_ACTIONS.DELETE_ANNOTATION,
            payload: {
              annotationIndex: this.props.annotationIndex
            }
          });
        }
      }
    }, {
      key: "moveAnnotation",
      value: function moveAnnotation(direction) {
        if (this.context.onUpdate) {
          var annotationIndex = this.props.annotationIndex;
          var desiredIndex = direction === 'up' ? annotationIndex - 1 : annotationIndex + 1;
          this.context.onUpdate({
            type: _constants.EDITOR_ACTIONS.MOVE_TO,
            payload: {
              fromIndex: annotationIndex,
              toIndex: desiredIndex,
              path: 'layout.annotations'
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

    return AnnotationConnectedComponent;
  }(_react.Component);

  AnnotationConnectedComponent.displayName = "AnnotationConnected".concat((0, _lib.getDisplayName)(WrappedComponent));
  AnnotationConnectedComponent.propTypes = {
    annotationIndex: _propTypes.default.number.isRequired
  };
  AnnotationConnectedComponent.contextTypes = {
    container: _propTypes.default.object,
    fullContainer: _propTypes.default.object,
    data: _propTypes.default.array,
    onUpdate: _propTypes.default.func,
    updateContainer: _propTypes.default.func,
    getValObject: _propTypes.default.func
  };
  AnnotationConnectedComponent.childContextTypes = {
    updateContainer: _propTypes.default.func,
    deleteContainer: _propTypes.default.func,
    container: _propTypes.default.object,
    fullContainer: _propTypes.default.object,
    getValObject: _propTypes.default.func,
    moveContainer: _propTypes.default.func
  };
  var plotly_editor_traits = WrappedComponent.plotly_editor_traits;
  AnnotationConnectedComponent.plotly_editor_traits = plotly_editor_traits;
  return AnnotationConnectedComponent;
}
//# sourceMappingURL=connectAnnotationToLayout.js.map