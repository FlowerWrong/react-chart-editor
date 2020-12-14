"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _Field = _interopRequireDefault(require("./Field"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _lib = require("../../lib");

var _RadioBlocks = _interopRequireDefault(require("../widgets/RadioBlocks"));

var _Numeric = _interopRequireDefault(require("./Numeric"));

var _DataSelector = _interopRequireDefault(require("./DataSelector"));

var _constants = require("../../lib/constants");

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

var UnconnectedMarkerSize = /*#__PURE__*/function (_Component) {
  _inherits(UnconnectedMarkerSize, _Component);

  var _super = _createSuper(UnconnectedMarkerSize);

  function UnconnectedMarkerSize(props, context) {
    var _this;

    _classCallCheck(this, UnconnectedMarkerSize);

    _this = _super.call(this, props, context);
    var type = null;

    if (!props.container.marker || props.container.marker && !props.container.marker.sizesrc) {
      type = 'constant';
    } else if (props.container.marker && Array.isArray(props.container.marker.size) && props.fullContainer.marker && Array.isArray(props.fullContainer.marker.size)) {
      type = 'variable';
    }

    _this.state = {
      type: type,
      value: {
        constant: type === 'constant' ? props.fullValue : '6',
        variable: type === 'variable' ? props.fullValue : null
      }
    };
    _this.setType = _this.setType.bind(_assertThisInitialized(_this));
    _this.setValue = _this.setValue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UnconnectedMarkerSize, [{
    key: "setType",
    value: function setType(type) {
      this.setState({
        type: type
      });
      this.props.updatePlot(this.state.value[type]);

      if (type === 'constant') {
        this.context.updateContainer(_defineProperty({}, 'marker.sizesrc', null));
      } else {
        var _this$context$updateC2;

        this.context.updateContainer((_this$context$updateC2 = {}, _defineProperty(_this$context$updateC2, 'marker.size', null), _defineProperty(_this$context$updateC2, 'marker.sizesrc', null), _this$context$updateC2));
      }
    }
  }, {
    key: "setValue",
    value: function setValue(inputValue) {
      var type = this.state.type;
      this.setState(type === 'constant' ? {
        value: {
          constant: inputValue
        }
      } : {
        value: {
          variable: inputValue
        }
      });
      this.props.updatePlot(inputValue);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attr = _this$props.attr,
          fullValue = _this$props.fullValue;
      var _ = this.context.localize;
      var _this$state = this.state,
          type = _this$state.type,
          value = _this$state.value;
      var options = [{
        label: _('Constant'),
        value: 'constant'
      }, {
        label: _('Variable'),
        value: 'variable'
      }];
      var multiValued = this.props.multiValued || Array.isArray(fullValue) && fullValue.includes(_constants.MULTI_VALUED);
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Field.default, _objectSpread(_objectSpread({}, this.props), {}, {
        multiValued: multiValued,
        attr: attr,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RadioBlocks.default, {
          options: options,
          activeOption: type,
          onOptionChange: this.setType
        }), type === 'constant' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Numeric.default, {
          suppressMultiValuedMessage: true,
          attr: "marker.size",
          updatePlot: this.setValue,
          fullValue: value.constant
        }) : multiValued ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_DataSelector.default, {
          suppressMultiValuedMessage: true,
          attr: "marker.size",
          updatePlot: this.setValue
        })]
      }));
    }
  }]);

  return UnconnectedMarkerSize;
}(_react.Component);

UnconnectedMarkerSize.propTypes = _objectSpread({
  fullValue: _propTypes.default.any,
  updatePlot: _propTypes.default.func
}, _Field.default.propTypes);
UnconnectedMarkerSize.contextTypes = {
  localize: _propTypes.default.func,
  updateContainer: _propTypes.default.func
};
UnconnectedMarkerSize.displayName = 'UnconnectedMarkerSize';

var _default = (0, _lib.connectToContainer)(UnconnectedMarkerSize);

exports.default = _default;
//# sourceMappingURL=MarkerSize.js.map