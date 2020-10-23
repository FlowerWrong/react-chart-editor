"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _lib = require("../../lib");

var _plotlyIcons = require("plotly-icons");

var _SidebarItem = _interopRequireDefault(require("./SidebarItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var SidebarGroup = /*#__PURE__*/function (_Component) {
  _inherits(SidebarGroup, _Component);

  var _super = _createSuper(SidebarGroup);

  function SidebarGroup(props) {
    var _this;

    _classCallCheck(this, SidebarGroup);

    _this = _super.call(this, props);
    _this.state = {
      expanded: _this.props.group === _this.props.selectedGroup
    };
    _this.toggleExpanded = _this.toggleExpanded.bind(_assertThisInitialized(_this));
    _this.onChangeGroup = _this.onChangeGroup.bind(_assertThisInitialized(_this));
    _this.renderSubItem = _this.renderSubItem.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SidebarGroup, [{
    key: "toggleExpanded",
    value: function toggleExpanded() {
      this.setState({
        expanded: !this.state.expanded
      });
    }
  }, {
    key: "onChangeGroup",
    value: function onChangeGroup(panel) {
      this.props.onChangeGroup(this.props.group, panel);
    }
  }, {
    key: "renderSubItem",
    value: function renderSubItem(panel, i) {
      var _this2 = this;

      var isActive = this.props.selectedPanel === panel && this.props.group === this.props.selectedGroup;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SidebarItem.default, {
        active: isActive,
        onClick: function onClick() {
          return _this2.onChangeGroup(panel);
        },
        label: panel
      }, 'subitem-' + i);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          group = _this$props.group,
          panels = _this$props.panels,
          selectedGroup = _this$props.selectedGroup;
      var expanded = this.state.expanded;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _lib.bem)('sidebar__group', [expanded ? 'is-expanded' : '', selectedGroup === group ? 'is-active' : '']),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          onClick: this.toggleExpanded,
          className: (0, _lib.bem)('sidebar__group', 'title'),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _lib.bem)('sidebar__group', 'title__icon'),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_plotlyIcons.AngleRightIcon, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _lib.bem)('sidebar__group', 'title__label'),
            children: group
          })]
        }), expanded && panels.map(this.renderSubItem)]
      });
    }
  }]);

  return SidebarGroup;
}(_react.Component);

exports.default = SidebarGroup;
SidebarGroup.propTypes = {
  group: _propTypes.default.string,
  onChangeGroup: _propTypes.default.func,
  panels: _propTypes.default.array,
  selectedGroup: _propTypes.default.string,
  selectedPanel: _propTypes.default.string
};
//# sourceMappingURL=SidebarGroup.js.map