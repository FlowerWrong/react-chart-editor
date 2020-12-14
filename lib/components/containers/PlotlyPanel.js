"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Panel = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _PanelHeader = _interopRequireDefault(require("./PanelHeader"));

var _PanelEmpty = _interopRequireDefault(require("./PanelEmpty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

var _lib = require("../../lib");

var _plotlyIcons = require("plotly-icons");

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

var PanelErrorImpl = /*#__PURE__*/function (_Component) {
  _inherits(PanelErrorImpl, _Component);

  var _super = _createSuper(PanelErrorImpl);

  function PanelErrorImpl() {
    _classCallCheck(this, PanelErrorImpl);

    return _super.apply(this, arguments);
  }

  _createClass(PanelErrorImpl, [{
    key: "render",
    value: function render() {
      var _ = this.context.localize;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PanelEmpty.default, {
        icon: _plotlyIcons.EmbedIconIcon,
        heading: _('Well this is embarrassing.'),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: _('This panel could not be displayed due to an error.')
        })
      });
    }
  }]);

  return PanelErrorImpl;
}(_react.Component);

PanelErrorImpl.contextTypes = {
  localize: _propTypes.default.func
};
var PanelError = PanelErrorImpl;

var Panel = /*#__PURE__*/function (_Component2) {
  _inherits(Panel, _Component2);

  var _super2 = _createSuper(Panel);

  function Panel(props) {
    var _this;

    _classCallCheck(this, Panel);

    _this = _super2.call(this, props);
    _this.state = {
      individualFoldStates: [],
      hasError: false
    };
    _this.toggleFolds = _this.toggleFolds.bind(_assertThisInitialized(_this));
    _this.toggleFold = _this.toggleFold.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Panel, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        deleteContainer: this.props.deleteAction ? this.props.deleteAction : null
      };
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch() {
      this.setState({
        hasError: true
      });
    }
  }, {
    key: "toggleFolds",
    value: function toggleFolds() {
      var individualFoldStates = this.state.individualFoldStates;
      var hasOpen = individualFoldStates.length > 0 && individualFoldStates.some(function (s) {
        return s !== true;
      });
      this.setState({
        individualFoldStates: individualFoldStates.map(function () {
          return hasOpen;
        })
      });
    }
  }, {
    key: "toggleFold",
    value: function toggleFold(index) {
      this.setState((0, _immutabilityHelper.default)(this.state, {
        individualFoldStates: {
          $toggle: [index]
        }
      }));
    }
  }, {
    key: "calculateFolds",
    value: function calculateFolds() {
      // to get proper number of child folds and initialize component state
      var numFolds = 0;

      _react.Children.forEach(this.props.children, function (child) {
        if ((child && child.type && child.type.plotly_editor_traits || {}).foldable) {
          numFolds++;
        }
      });

      if (this.state.individualFoldStates.length !== numFolds) {
        var newFoldStates = new Array(numFolds).fill(false);
        this.setState({
          individualFoldStates: this.props.addAction ? newFoldStates.map(function (e, i) {
            return i !== numFolds - 1;
          }) : newFoldStates
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.calculateFolds();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.calculateFolds();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          individualFoldStates = _this$state.individualFoldStates,
          hasError = _this$state.hasError;
      var canReorder = this.props.canReorder;

      if (hasError) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(PanelError, {});
      }

      var newChildren = _react.Children.map(this.props.children, function (child, index) {
        if ((child && child.type && child.type.plotly_editor_traits || {}).foldable) {
          return /*#__PURE__*/(0, _react.cloneElement)(child, {
            key: index,
            folded: individualFoldStates[index] || false,
            toggleFold: function toggleFold() {
              return _this2.toggleFold(index);
            },
            canMoveUp: canReorder && individualFoldStates.length > 1 && index > 0,
            canMoveDown: canReorder && individualFoldStates.length > 1 && index !== individualFoldStates.length - 1
          });
        }

        return child;
      });

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "panel".concat(this.props.noPadding ? ' panel--no-padding' : ''),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_PanelHeader.default, {
          addAction: this.props.addAction,
          allowCollapse: this.props.showExpandCollapse && individualFoldStates.length > 1,
          toggleFolds: this.toggleFolds,
          hasOpen: individualFoldStates.some(function (s) {
            return s === false;
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _lib.bem)('panel', 'content'),
          children: newChildren
        })]
      });
    }
  }]);

  return Panel;
}(_react.Component);

exports.Panel = Panel;
Panel.propTypes = {
  addAction: _propTypes.default.object,
  children: _propTypes.default.node,
  deleteAction: _propTypes.default.func,
  noPadding: _propTypes.default.bool,
  showExpandCollapse: _propTypes.default.bool,
  canReorder: _propTypes.default.bool
};
Panel.defaultProps = {
  showExpandCollapse: true
};
Panel.contextTypes = {
  localize: _propTypes.default.func
};
Panel.childContextTypes = {
  deleteContainer: _propTypes.default.func
};

var PlotlyPanel = /*#__PURE__*/function (_Panel) {
  _inherits(PlotlyPanel, _Panel);

  var _super3 = _createSuper(PlotlyPanel);

  function PlotlyPanel() {
    _classCallCheck(this, PlotlyPanel);

    return _super3.apply(this, arguments);
  }

  return PlotlyPanel;
}(Panel);

PlotlyPanel.plotly_editor_traits = {
  no_visibility_forcing: true
};
var _default = PlotlyPanel;
exports.default = _default;
//# sourceMappingURL=PlotlyPanel.js.map