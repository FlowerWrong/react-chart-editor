"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Dropzone = /*#__PURE__*/function (_Component) {
  _inherits(Dropzone, _Component);

  var _super = _createSuper(Dropzone);

  function Dropzone(props, context) {
    var _this;

    _classCallCheck(this, Dropzone);

    _this = _super.call(this, props, context);
    _this.state = {
      content: ''
    };
    _this.validFiletypes = {
      image: 'image/jpeg, image/jpg, image/svg, image/png, image/gif, image/bmp, image/webp',
      geojson: 'application/json'
    };
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_this));
    _this.parsingError = _this.parsingError.bind(_assertThisInitialized(_this));
    _this.renderSuccess = _this.renderSuccess.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropzone, [{
    key: "renderSuccess",
    value: function renderSuccess(value) {
      var _ = this.context.localize;

      if (this.props.fileType === 'image') {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropzone-container__image",
          style: {
            backgroundImage: "url(".concat(value, ")")
          }
        });
      }

      if (this.props.fileType === 'geojson') {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "dropzone-container__message",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: _('GeoJSON loaded!')
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: value.features.length + _(' features detected.')
          })]
        });
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dropzone-container__message",
        children: _('File loaded!')
      });
    }
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _ = this.context.localize;

      if (this.props.value && this.props.value !== '') {
        this.setState({
          content: this.renderSuccess(this.props.value)
        });
        return;
      }

      this.setState({
        content: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "dropzone-container__message",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: _('Drop the ') + this.props.fileType + _(' to upload here or click to choose a file from your computer.')
          }), this.validFiletypes[this.props.fileType] ? /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: _('Supported formats are: ') + this.validFiletypes[this.props.fileType].split('image/').join('') + '.'
          }) : null]
        })
      });
    }
  }, {
    key: "parsingError",
    value: function parsingError() {
      var _ = this.context.localize;
      var supportedFileTypes = this.props.fileType === 'image' ? this.validFiletypes[this.props.fileType].split('image/').join('') : this.validFiletypes[this.props.fileType];
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "dropzone-container__message",
        children: [_("Yikes! This doesn't look like a valid ") + this.props.fileType, /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: _('Try again with a supported file format: ') + supportedFileTypes + '.'
        })]
      });
    }
  }, {
    key: "onLoad",
    value: function onLoad(e) {
      try {
        var payload = e.target.result;
        var parsedValue = this.props.fileType === 'image' ? payload : JSON.parse(payload);
        this.props.onUpdate(parsedValue);
        this.setState({
          content: this.renderSuccess(parsedValue)
        });
      } catch (error) {
        console.warn(error); // eslint-disable-line

        this.setState({
          content: this.parsingError()
        });
      }
    }
  }, {
    key: "onDrop",
    value: function onDrop(accepted, rejected) {
      var _this2 = this;

      var _ = this.context.localize;
      var reader = new FileReader();

      if (accepted.length) {
        if (accepted.length > 1) {
          this.setState({
            content: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "dropzone-container__message",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                children: _('Yikes! You can only upload one file at a time.')
              })
            })
          });
          return;
        }

        this.setState({
          content: _('Loading...')
        });

        reader.onload = function (e) {
          return _this2.onLoad(e);
        };

        if (this.props.fileType === 'image') {
          reader.readAsDataURL(accepted[0]);
        } else if (this.props.fileType === 'geojson') {
          reader.readAsText(accepted[0]);
        }
      }

      if (rejected.length) {
        this.setState({
          content: this.parsingError()
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactDropzone.default, {
        accept: this.validFiletypes[this.props.fileType],
        onDrop: this.onDrop,
        activeClassName: "dropzone-container--active",
        rejectClassName: "dropzone-container--rejected",
        children: function children(_ref) {
          var getRootProps = _ref.getRootProps,
              getInputProps = _ref.getInputProps;
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({}, getRootProps()), {}, {
            className: "dropzone-container",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread({}, getInputProps())), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "dropzone-container__content",
              children: _this3.state.content
            })]
          }));
        }
      });
    }
  }]);

  return Dropzone;
}(_react.Component);

Dropzone.propTypes = {
  fileType: _propTypes.default.string.isRequired,
  onUpdate: _propTypes.default.func,
  value: _propTypes.default.any
};
Dropzone.contextTypes = {
  localize: _propTypes.default.func
};
var _default = Dropzone;
exports.default = _default;
//# sourceMappingURL=Dropzone.js.map