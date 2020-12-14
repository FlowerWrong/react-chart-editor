"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _PlotlyFold = _interopRequireDefault(require("./PlotlyFold"));

var _TraceRequiredPanel = _interopRequireDefault(require("./TraceRequiredPanel"));

var _PlotlyPanel = _interopRequireDefault(require("./PlotlyPanel"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _constants = require("../../lib/constants");

var _lib = require("../../lib");

var _reactTabs = require("react-tabs");

var _traceTypes = require("../../lib/traceTypes");

var _PanelEmpty = require("./PanelEmpty");

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

var TraceFold = (0, _lib.connectTraceToPlot)(_PlotlyFold.default);

var TraceAccordion = /*#__PURE__*/function (_Component) {
  _inherits(TraceAccordion, _Component);

  var _super = _createSuper(TraceAccordion);

  function TraceAccordion(props, context) {
    var _this;

    _classCallCheck(this, TraceAccordion);

    _this = _super.call(this, props, context);

    _this.setLocals(props, context);

    return _this;
  }

  _createClass(TraceAccordion, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
      this.setLocals(nextProps, nextContext);
    }
  }, {
    key: "setLocals",
    value: function setLocals(props, context) {
      var _this2 = this;

      var base = props.canGroup ? context.fullData : context.data;

      var traceFilterCondition = this.props.traceFilterCondition || function () {
        return true;
      };

      this.filteredTracesDataIndexes = [];
      this.filteredTraces = [];

      if (base && base.length && context.fullData.length) {
        this.filteredTraces = base.filter(function (t, i) {
          var fullTrace = props.canGroup ? t : context.fullData.filter(function (tr) {
            return tr.index === i;
          })[0];

          if (fullTrace) {
            var trace = context.data[fullTrace.index];

            if (traceFilterCondition(trace, fullTrace)) {
              _this2.filteredTracesDataIndexes.push(fullTrace.index);

              return true;
            }
          }

          return false;
        });
      }
    }
  }, {
    key: "renderGroupedTraceFolds",
    value: function renderGroupedTraceFolds() {
      var _this3 = this;

      if (!this.filteredTraces.length || this.filteredTraces.length <= 1) {
        return null;
      }

      var _ = this.context.localize;
      var dataArrayPositionsByTraceType = {};
      var fullDataArrayPositionsByTraceType = {};
      this.filteredTraces.forEach(function (trace) {
        var traceType = (0, _lib.plotlyTraceToCustomTrace)(trace);

        if (!dataArrayPositionsByTraceType[traceType]) {
          dataArrayPositionsByTraceType[traceType] = [];
        }

        if (!fullDataArrayPositionsByTraceType[traceType]) {
          fullDataArrayPositionsByTraceType[traceType] = [];
        }

        dataArrayPositionsByTraceType[traceType].push(trace.index); // _expandedIndex is the trace's index in the fullData array

        fullDataArrayPositionsByTraceType[traceType].push(trace._expandedIndex);
      });
      return Object.keys(fullDataArrayPositionsByTraceType).map(function (type, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(TraceFold, {
          traceIndexes: dataArrayPositionsByTraceType[type],
          name: (0, _traceTypes.traceTypes)(_).find(function (t) {
            return t.value === type;
          }).label,
          fullDataArrayPosition: fullDataArrayPositionsByTraceType[type],
          children: _this3.props.children
        }, index);
      });
    }
  }, {
    key: "renderUngroupedTraceFolds",
    value: function renderUngroupedTraceFolds() {
      var _this4 = this;

      if (this.filteredTraces.length) {
        return this.filteredTraces.map(function (d, i) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(TraceFold, {
            traceIndexes: [d.index],
            canDelete: _this4.props.canAdd,
            fullDataArrayPosition: [d._expandedIndex],
            children: _this4.props.children
          }, i);
        });
      }

      return null;
    }
  }, {
    key: "renderTraceFolds",
    value: function renderTraceFolds() {
      var _this5 = this;

      if (this.filteredTraces.length) {
        return this.filteredTraces.map(function (d, i) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(TraceFold, {
            traceIndexes: [_this5.filteredTracesDataIndexes[i]],
            canDelete: _this5.props.canAdd,
            children: _this5.props.children
          }, i);
        });
      }

      return null;
    }
  }, {
    key: "renderTracePanelHelp",
    value: function renderTracePanelHelp() {
      var _ = this.context.localize;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_PanelEmpty.PanelMessage, {
        heading: _('Trace your data.'),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: _('Traces of various types like bar and line are the building blocks of your figure.')
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: _('You can add as many as you like, mixing and matching types and arranging them into subplots.')
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: _('Click on the + button above to add a trace.')
        })]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          canAdd = _this$props.canAdd,
          canGroup = _this$props.canGroup,
          canReorder = _this$props.canReorder;
      var _ = this.context.localize;

      if (canAdd) {
        var addAction = {
          label: _('Trace'),
          handler: function handler(_ref) {
            var onUpdate = _ref.onUpdate;

            if (onUpdate) {
              onUpdate({
                type: _constants.EDITOR_ACTIONS.ADD_TRACE
              });
            }
          }
        };
        var traceFolds = this.renderTraceFolds();
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PlotlyPanel.default, {
          addAction: addAction,
          canReorder: canReorder,
          children: traceFolds ? traceFolds : this.renderTracePanelHelp()
        });
      }

      if (canGroup) {
        if (this.filteredTraces.length === 1) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TraceRequiredPanel.default, {
            children: this.renderUngroupedTraceFolds()
          });
        }

        if (this.filteredTraces.length > 1) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TraceRequiredPanel.default, {
            noPadding: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactTabs.Tabs, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactTabs.TabList, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTabs.Tab, {
                  children: _('Individually')
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTabs.Tab, {
                  children: _('By Type')
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTabs.TabPanel, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PlotlyPanel.default, {
                  children: this.renderUngroupedTraceFolds()
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTabs.TabPanel, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PlotlyPanel.default, {
                  children: this.renderGroupedTraceFolds()
                })
              })]
            })
          });
        }
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TraceRequiredPanel.default, {
        children: this.renderTraceFolds()
      });
    }
  }]);

  return TraceAccordion;
}(_react.Component);

TraceAccordion.contextTypes = {
  fullData: _propTypes.default.array,
  data: _propTypes.default.array,
  localize: _propTypes.default.func
};
TraceAccordion.propTypes = {
  canAdd: _propTypes.default.bool,
  canGroup: _propTypes.default.bool,
  canReorder: _propTypes.default.bool,
  children: _propTypes.default.node,
  traceFilterCondition: _propTypes.default.func
};
var _default = TraceAccordion;
exports.default = _default;
//# sourceMappingURL=TraceAccordion.js.map