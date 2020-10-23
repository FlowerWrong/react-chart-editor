"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _index = require("../index");

var _Field = _interopRequireDefault(require("./Field"));

var _lib = require("../../lib");

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

var UpdateMenuButtons = /*#__PURE__*/function (_Component) {
  _inherits(UpdateMenuButtons, _Component);

  var _super = _createSuper(UpdateMenuButtons);

  function UpdateMenuButtons(props, context) {
    var _this;

    _classCallCheck(this, UpdateMenuButtons);

    _this = _super.call(this, props, context);
    _this.state = {
      currentButtonIndex: 0
    };
    return _this;
  }

  _createClass(UpdateMenuButtons, [{
    key: "renderDropdown",
    value: function renderDropdown() {
      var _this2 = this;

      var _ = this.context.localize;
      var options = this.props.fullValue.map(function (button, index) {
        return {
          label: _('Button') + " ".concat(index + 1),
          value: index
        };
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Dropdown, {
        attr: "buttons",
        label: _('Button'),
        options: options,
        updatePlot: function updatePlot(index) {
          return _this2.setState({
            currentButtonIndex: index
          });
        },
        clearable: false,
        fullValue: this.state.currentButtonIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Field.default, {
        children: [this.renderDropdown(), /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.TextEditor, {
          attr: "buttons[".concat(this.state.currentButtonIndex, "].label"),
          richTextOnly: true
        })]
      });
    }
  }]);

  return UpdateMenuButtons;
}(_react.Component);

UpdateMenuButtons.propTypes = {
  attr: _propTypes.default.string,
  fullValue: _propTypes.default.array,
  updatePlot: _propTypes.default.func
};
UpdateMenuButtons.contextTypes = {
  localize: _propTypes.default.func
};

var _default = (0, _lib.connectToContainer)(UpdateMenuButtons);

exports.default = _default;
//# sourceMappingURL=UpdateMenuButtons.js.map