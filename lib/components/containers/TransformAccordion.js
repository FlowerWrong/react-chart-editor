"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var _PanelEmpty = require("./PanelEmpty");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var TransformFold = (0, _lib.connectTransformToTrace)(_PlotlyFold.default);

var TransformAccordion = /*#__PURE__*/function (_Component) {
  _inherits(TransformAccordion, _Component);

  var _super = _createSuper(TransformAccordion);

  function TransformAccordion() {
    _classCallCheck(this, TransformAccordion);

    return _super.apply(this, arguments);
  }

  _createClass(TransformAccordion, [{
    key: "render",
    value: function render() {
      var _this$context = this.context,
          _this$context$fullCon = _this$context.fullContainer.transforms,
          transforms = _this$context$fullCon === void 0 ? [] : _this$context$fullCon,
          _ = _this$context.localize,
          container = _this$context.container,
          dataSourceOptions = _this$context.dataSourceOptions;
      var children = this.props.children;
      var transformTypes = [{
        label: _('Filter'),
        type: 'filter'
      }, {
        label: _('Split'),
        type: 'groupby'
      }, {
        label: _('Aggregate'),
        type: 'aggregate'
      }, {
        label: _('Sort'),
        type: 'sort'
      }, {
        label: _('PctChange'),
        type: 'pct_change'
      }];
      var transformBy = container.transforms && container.transforms.map(function (tr) {
        var foldNameSuffix = '';

        if (tr.groupssrc) {
          var groupssrc = dataSourceOptions && dataSourceOptions.find(function (d) {
            return d.value === tr.groupssrc;
          });
          foldNameSuffix = ": ".concat(groupssrc && groupssrc.label ? groupssrc.label : tr.groupssrc);
        } else if (tr.targetsrc) {
          var targetsrc = dataSourceOptions && dataSourceOptions.find(function (d) {
            return d.value === tr.targetsrc;
          });
          foldNameSuffix = ": ".concat(targetsrc && targetsrc.label ? targetsrc.label : tr.targetsrc);
        }

        return foldNameSuffix;
      });
      var filteredTransforms = transforms.filter(function (_ref) {
        var type = _ref.type;
        return Boolean(type);
      });
      var content = filteredTransforms.length && filteredTransforms.map(function (tr, i) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(TransformFold, {
          transformIndex: i,
          name: "".concat(transformTypes.filter(function (_ref2) {
            var type = _ref2.type;
            return type === tr.type;
          })[0].label).concat(transformBy && transformBy[i]),
          canDelete: true,
          children: children
        }, i);
      }); // cannot have 2 Split transforms on one trace:
      // https://github.com/plotly/plotly.js/issues/1742

      var addActionOptions = container.transforms && container.transforms.some(function (t) {
        return t.type === 'groupby';
      }) ? transformTypes.filter(function (t) {
        return t.type !== 'groupby';
      }) : transformTypes;
      var addAction = {
        label: _('Transform'),
        handler: addActionOptions.map(function (_ref3) {
          var label = _ref3.label,
              type = _ref3.type;
          return {
            label: label,
            handler: function handler(context) {
              var fullContainer = context.fullContainer,
                  updateContainer = context.updateContainer;

              if (updateContainer) {
                var transformIndex = Array.isArray(fullContainer.transforms) ? fullContainer.transforms.length : 0;
                var key = "transforms[".concat(transformIndex, "]");
                var payload = {
                  type: type
                };

                if (type === 'filter' || type === 'pct_change') {
                  payload.target = [];
                  payload.targetsrc = null;
                } else if (type !== 'sort') {
                  payload.groupssrc = null;
                  payload.groups = null;
                }

                if (type === 'groupby') {
                  payload.styles = [];
                }

                updateContainer(_defineProperty({}, key, payload));
              }
            }
          };
        })
      };
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PlotlyPanel.default, {
        addAction: addAction,
        children: content ? content : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_PanelEmpty.PanelMessage, {
          icon: null,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            style: {
              textAlign: 'left'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
                children: _('Filter')
              }), ' ', _(' transforms allow you to filter data out from a trace.')]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
                children: _('Split')
              }), ' ', _(' transforms allow you to create multiple traces from one source trace, so as to style them differently.')]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
                children: _('Aggregate')
              }), ' ', _(' transforms allow you to summarize a trace using an aggregate function like "average" or "minimum".')]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
                children: _('Sort')
              }), ' ', _(' transforms allow you to sort a trace, so as to control marker overlay or line connection order.')]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
                children: _('PctChange')
              }), ' ', _(' transforms allow you to pct_change a trace, use "first" or "prev" calcType.')]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: _('Click on the + button above to add a transform.')
          })]
        })
      });
    }
  }]);

  return TransformAccordion;
}(_react.Component);

TransformAccordion.contextTypes = {
  fullContainer: _propTypes.default.object,
  localize: _propTypes.default.func,
  container: _propTypes.default.object,
  dataSourceOptions: _propTypes.default.array
};
TransformAccordion.propTypes = {
  children: _propTypes.default.node
};
var _default = TransformAccordion;
exports.default = _default;
//# sourceMappingURL=TransformAccordion.js.map