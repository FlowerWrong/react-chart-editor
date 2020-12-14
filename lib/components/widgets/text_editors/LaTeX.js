"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _TextArea2 = _interopRequireDefault(require("../TextArea"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _convertFormats = require("./convertFormats");

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

var LaTeX = /*#__PURE__*/function (_TextArea) {
  _inherits(LaTeX, _TextArea);

  var _super = _createSuper(LaTeX);

  function LaTeX(props) {
    var _this;

    _classCallCheck(this, LaTeX);

    _this = _super.call(this, props); // Internally, represesent the LaTeX document without the
    // wrapping `$...$` characters.

    var unwrappedValue = _this.unwrap(props.value);

    _this.state = {
      value: unwrappedValue
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LaTeX, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var unwrappedNextValue = this.unwrap(nextProps.value);

      if (unwrappedNextValue !== this.state.value) {
        this.setState({
          value: unwrappedNextValue
        });
      }
    } // Return a new value with wrapping `$...$` removed.

  }, {
    key: "unwrap",
    value: function unwrap(value) {
      if ((0, _convertFormats.isLaTeXExpr)(value)) {
        return value.substr(1, value.length - 2);
      }

      return value;
    } // Wrap value in `$...$`.

  }, {
    key: "wrap",
    value: function wrap(value) {
      if (!(0, _convertFormats.isLaTeXExpr)(value)) {
        return "$".concat(value, "$");
      }

      return value;
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var value = this.wrap(e.target.value);
      this.props.onChange(value);
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var editorClassNames = className ? className : 'text-editor__latex';
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
        value: this.state.value,
        placeholder: this.props.placeholder,
        onChange: this.onChange,
        onBlur: this.onBlur,
        className: editorClassNames
      });
    }
  }]);

  return LaTeX;
}(_TextArea2.default);

exports.default = LaTeX;
LaTeX.propTypes = {
  className: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string
};
LaTeX.defaultProps = {
  value: '',
  placeholder: ''
};
//# sourceMappingURL=LaTeX.js.map