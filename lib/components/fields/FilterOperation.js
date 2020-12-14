"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterValue = exports.FilterOperation = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _Field = _interopRequireDefault(require("./Field"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _Dropdown = _interopRequireDefault(require("../widgets/Dropdown"));

var _TextInput = _interopRequireDefault(require("../widgets/TextInput"));

var _lib = require("../../lib");

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

var operations = function operations(_) {
  return {
    inequality: [{
      value: '!=',
      label: _('Target ≠ Reference')
    }, {
      value: '<',
      label: _('Target < Reference')
    }, {
      value: '<=',
      label: _('Target ≤ Reference')
    }, {
      value: '=',
      label: _('Target = Reference')
    }, {
      value: '>',
      label: _('Target > Reference')
    }, {
      value: '>=',
      label: _('Target ≥ Reference')
    }],
    inrange: [{
      value: '[]',
      label: _('Lower ≤ Target ≤ Upper')
    }, {
      value: '()',
      label: _('Lower < Target < Upper')
    }, {
      value: '[)',
      label: _('Lower ≤ Target < Upper')
    }, {
      value: '(]',
      label: _('Lower < Target ≤ Upper')
    }],
    exrange: [{
      value: ')(',
      label: _('Lower ≤ Target ≤ Upper')
    }, {
      value: '][',
      label: _('Lower < Target < Upper')
    }, {
      value: ')[',
      label: _('Lower ≤ Target < Upper')
    }, {
      value: '](',
      label: _('Lower < Target ≤ Upper')
    }],
    inset: [{
      value: '{}',
      label: _('Include')
    }],
    exset: [{
      value: '}{',
      label: _('Exclude')
    }]
  };
};

var findOperation = function findOperation(operator, _) {
  var op = 'inequality';
  var ops = operations(_);

  for (var key in ops) {
    if (ops.hasOwnProperty(key) && ops[key].map(function (o) {
      return o.value;
    }).indexOf(operator) !== -1) {
      op = key;
      break;
    }
  }

  return op;
};

var UnconnectedFilterOperation = /*#__PURE__*/function (_Component) {
  _inherits(UnconnectedFilterOperation, _Component);

  var _super = _createSuper(UnconnectedFilterOperation);

  function UnconnectedFilterOperation(props, context) {
    var _this;

    _classCallCheck(this, UnconnectedFilterOperation);

    _this = _super.call(this, props, context);
    var _ = context.localize;
    _this.state = {
      operation: findOperation(_this.props.fullValue, _),
      operator: operations(_).inequality[0].value
    };
    _this.setOperation = _this.setOperation.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UnconnectedFilterOperation, [{
    key: "setOperation",
    value: function setOperation(value) {
      var _ = this.context.localize;
      var operator = operations(_)[value][0].value;
      this.setState({
        operation: value,
        operator: operator
      });
      this.props.updatePlot(operator);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fullValue = _this$props.fullValue,
          updatePlot = _this$props.updatePlot,
          backgroundDark = _this$props.backgroundDark,
          attr = _this$props.attr;
      var _ = this.context.localize;
      var operators = [{
        label: _('Inequality'),
        value: 'inequality'
      }, {
        label: _('Include Range'),
        value: 'inrange'
      }, {
        label: _('Exclude Range'),
        value: 'exrange'
      }, {
        label: _('Include Values'),
        value: 'inset'
      }, {
        label: _('Exclude Values'),
        value: 'exset'
      }];
      var opValue = fullValue && fullValue.length > 0 ? fullValue : this.state.operator;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Field.default, _objectSpread(_objectSpread({}, this.props), {}, {
          attr: attr,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown.default, {
            backgroundDark: backgroundDark,
            options: operators,
            value: findOperation(opValue, _),
            onChange: this.setOperation,
            clearable: false
          }), this.state.operation === 'inset' || this.state.operation === 'exset' ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown.default, {
            backgroundDark: backgroundDark,
            options: operations(_)[this.state.operation],
            value: opValue,
            onChange: updatePlot,
            clearable: false
          })]
        }))
      });
    }
  }]);

  return UnconnectedFilterOperation;
}(_react.Component);

UnconnectedFilterOperation.propTypes = _objectSpread({
  fullValue: _propTypes.default.any,
  updatePlot: _propTypes.default.func
}, _Field.default.propTypes);
UnconnectedFilterOperation.contextTypes = {
  localize: _propTypes.default.func
};

var UnconnectedFilterValue = /*#__PURE__*/function (_Component2) {
  _inherits(UnconnectedFilterValue, _Component2);

  var _super2 = _createSuper(UnconnectedFilterValue);

  function UnconnectedFilterValue(props, context) {
    var _this2;

    _classCallCheck(this, UnconnectedFilterValue);

    _this2 = _super2.call(this, props, context);
    _this2.state = {
      value: '',
      valueMax: ''
    };
    _this2.setValue = _this2.setValue.bind(_assertThisInitialized(_this2));
    _this2.setValueMax = _this2.setValueMax.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(UnconnectedFilterValue, [{
    key: "setValue",
    value: function setValue(v) {
      var _this$context = this.context,
          _ = _this$context.localize,
          container = _this$context.container;
      var op = findOperation(container.operation, _);
      this.setState({
        value: v
      });
      var val;
      val = op === 'inrange' || op === 'exrange' ? [v, this.state.valueMax] : v;

      if (op === 'inset' || op === 'exset') {
        val = val.split(',');
        val = val.map(function (v) {
          return v.trim();
        });
      }

      this.props.updatePlot(val);
    }
  }, {
    key: "setValueMax",
    value: function setValueMax(v) {
      this.setState({
        valueMax: v
      });
      this.props.updatePlot([this.state.value, v]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$context2 = this.context,
          _ = _this$context2.localize,
          container = _this$context2.container;
      var operation = container && container.operation ? container.operation : '=';
      var _this$props2 = this.props,
          fullValue = _this$props2.fullValue,
          attr = _this$props2.attr,
          defaultValue = _this$props2.defaultValue;
      var op = findOperation(operation, _);

      var label1 = _('Reference');

      if (op === 'inrange' || op === 'exrange') {
        label1 = _('Lower Bound');
      } else if (op === 'inset' || op === 'exset') {
        label1 = _('Values');
      }

      var val1 = fullValue;

      if ((op === 'inset' || op === 'exset') && Array.isArray(fullValue)) {
        val1 = fullValue.join(', ');
      } else if (Array.isArray(fullValue)) {
        val1 = fullValue[0];
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, _objectSpread(_objectSpread({}, this.props), {}, {
          label: label1,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextInput.default, {
            value: val1,
            defaultValue: val1,
            onUpdate: this.setValue
          })
        })), !(op === 'inrange' || op === 'exrange') ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, _objectSpread(_objectSpread({}, this.props), {}, {
          label: _('Upper Bound'),
          attr: attr,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextInput.default, {
            value: Array.isArray(fullValue) ? fullValue[1] : fullValue,
            defaultValue: defaultValue,
            onUpdate: this.setValueMax
          })
        }))]
      });
    }
  }]);

  return UnconnectedFilterValue;
}(_react.Component);

UnconnectedFilterValue.propTypes = _objectSpread({
  defaultValue: _propTypes.default.string,
  fullValue: _propTypes.default.any,
  updatePlot: _propTypes.default.func
}, _Field.default.propTypes);
UnconnectedFilterValue.contextTypes = {
  localize: _propTypes.default.func,
  container: _propTypes.default.object
};
var FilterOperation = (0, _lib.connectToContainer)(UnconnectedFilterOperation);
exports.FilterOperation = FilterOperation;
var FilterValue = (0, _lib.connectToContainer)(UnconnectedFilterValue);
exports.FilterValue = FilterValue;
//# sourceMappingURL=FilterOperation.js.map