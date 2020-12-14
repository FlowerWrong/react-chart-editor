"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Aggregations = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

var _lib = require("../lib");

var _constants = require("../lib/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var AggregationSection = (0, _lib.connectAggregationToTransform)(_components.PlotlySection);

var Aggregations = /*#__PURE__*/function (_Component) {
  _inherits(Aggregations, _Component);

  var _super = _createSuper(Aggregations);

  function Aggregations() {
    _classCallCheck(this, Aggregations);

    return _super.apply(this, arguments);
  }

  _createClass(Aggregations, [{
    key: "render",
    value: function render() {
      var _this$context$fullCon = this.context.fullContainer.aggregations,
          aggregations = _this$context$fullCon === void 0 ? [] : _this$context$fullCon;
      var _ = this.context.localize;

      if (aggregations.length === 0) {
        return null;
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
        name: _('Aggregations'),
        attr: "aggregations",
        children: aggregations.filter(function (aggr) {
          return aggr.target && aggr.target.match(/transforms\[\d*\]\./gi) === null;
        }).map(function (_ref, i) {
          var target = _ref.target;
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(AggregationSection, {
            show: true,
            aggregationIndex: i,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
              attr: "func",
              label: target,
              options: [{
                label: _('Count'),
                value: 'count'
              }, {
                label: _('Sum'),
                value: 'sum'
              }, {
                label: _('Average'),
                value: 'avg'
              }, {
                label: _('Median'),
                value: 'median'
              }, {
                label: _('Mode'),
                value: 'mode'
              }, {
                label: _('RMS'),
                value: 'rms'
              }, {
                label: _('Standard Deviation'),
                value: 'stddev'
              }, {
                label: _('Min'),
                value: 'min'
              }, {
                label: _('Max'),
                value: 'max'
              }, {
                label: _('First'),
                value: 'first'
              }, {
                label: _('Last'),
                value: 'last'
              }, {
                label: _('Change'),
                value: 'change'
              }, {
                label: _('Range'),
                value: 'range'
              }],
              clearable: false
            })
          }, i);
        })
      });
    }
  }]);

  return Aggregations;
}(_react.Component);

exports.Aggregations = Aggregations;
Aggregations.plotly_editor_traits = {
  no_visibility_forcing: true
};
Aggregations.contextTypes = {
  fullContainer: _propTypes.default.object,
  localize: _propTypes.default.func
};

var GraphTransformsPanel = function GraphTransformsPanel(props, _ref2) {
  var _ = _ref2.localize;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TraceAccordion, {
    traceFilterCondition: function traceFilterCondition(t) {
      return _constants.TRANSFORMABLE_TRACES.includes(t.type);
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.TransformAccordion, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "enabled",
        options: [{
          label: _('Enabled'),
          value: true
        }, {
          label: _('Disabled'),
          value: false
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('By'),
        attr: "groups"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DataSelector, {
        label: _('Target'),
        attr: "target"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FilterOperation, {
        label: _('Operator'),
        attr: "operation"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FilterValue, {
        label: _('Value'),
        attr: "value"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
        attr: "order",
        options: [{
          label: _('Ascending'),
          value: 'ascending'
        }, {
          label: _('Descending'),
          value: 'descending'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Aggregations, {})]
    })
  });
};

GraphTransformsPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = GraphTransformsPanel;
exports.default = _default;
//# sourceMappingURL=GraphTransformsPanel.js.map