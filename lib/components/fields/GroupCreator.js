"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _lib = require("../../lib");

var _Field = _interopRequireDefault(require("./Field"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../widgets/Button"));

var _plotlyIcons = require("plotly-icons");

var _constants = require("../../lib/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var UnconnectedGroupCreator = /*#__PURE__*/function (_Component) {
  _inherits(UnconnectedGroupCreator, _Component);

  var _super = _createSuper(UnconnectedGroupCreator);

  function UnconnectedGroupCreator() {
    _classCallCheck(this, UnconnectedGroupCreator);

    return _super.apply(this, arguments);
  }

  _createClass(UnconnectedGroupCreator, [{
    key: "getAllGroups",
    value: function getAllGroups() {
      var _this = this;

      return _toConsumableArray(new Set(this.context.data.map(function (t) {
        return t[_this.props.attr];
      }))).filter(function (g) {
        return Boolean(g);
      });
    }
  }, {
    key: "canAddGroup",
    value: function canAddGroup() {
      var _this$props = this.props,
          fullContainer = _this$props.fullContainer,
          attr = _this$props.attr;
      var currentGroup = fullContainer[attr];
      var currentTraceIndex = fullContainer.index;

      if (fullContainer.index === _constants.MULTI_VALUED) {
        return this.getAllGroups().length === 0;
      }

      return !currentGroup || this.context.fullData.some(function (d) {
        return d.index !== currentTraceIndex && d[attr] === currentGroup;
      });
    }
  }, {
    key: "addAndUpdateGroup",
    value: function addAndUpdateGroup() {
      var _this2 = this;

      var allGroups = this.context.fullData.map(function (t) {
        return parseInt(t[_this2.props.attr], 10);
      }).filter(function (n) {
        return Number.isInteger(n);
      }); // don't want to pass empty array to max

      allGroups.push(0);
      var lastGroupNumber = Math.max.apply(Math, allGroups);
      this.props.updatePlot(lastGroupNumber + 1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _ = this.context.localize;
      var _this$props2 = this.props,
          attr = _this$props2.attr,
          label = _this$props2.label,
          prefix = _this$props2.prefix,
          updatePlot = _this$props2.updatePlot;
      var options = [{
        label: _('None'),
        value: ''
      }];
      var allGroups = this.getAllGroups();
      allGroups.forEach(function (g) {
        return options.push({
          label: "".concat(prefix, " ").concat(g),
          value: g
        });
      });
      options.sort(function (a, b) {
        return a.value - b.value;
      });
      var icon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_plotlyIcons.PlusIcon, {});
      var addButton = this.canAddGroup() ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        variant: "no-text",
        icon: icon,
        onClick: function onClick() {
          return _this3.addAndUpdateGroup();
        }
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        variant: "no-text--disabled",
        icon: icon,
        onClick: function onClick() {}
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown.default, {
        label: label,
        attr: attr,
        clearable: false,
        options: options,
        updatePlot: updatePlot,
        extraComponent: addButton
      });
    }
  }]);

  return UnconnectedGroupCreator;
}(_react.Component);

UnconnectedGroupCreator.propTypes = _objectSpread({
  attr: _propTypes.default.string,
  fullContainer: _propTypes.default.object,
  prefix: _propTypes.default.string
}, _Field.default.propTypes);
UnconnectedGroupCreator.contextTypes = {
  localize: _propTypes.default.func,
  data: _propTypes.default.array,
  fullData: _propTypes.default.array
};
UnconnectedGroupCreator.displayName = 'UnconnectedGroupCreator';

var _default = (0, _lib.connectToContainer)(UnconnectedGroupCreator);

exports.default = _default;
//# sourceMappingURL=GroupCreator.js.map