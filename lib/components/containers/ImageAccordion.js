"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _PlotlyFold = _interopRequireDefault(require("./PlotlyFold"));

var _derived = require("./derived");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _lib = require("../../lib");

var _PanelEmpty = require("./PanelEmpty");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var ImageFold = (0, _lib.connectImageToLayout)(_PlotlyFold.default);

var ImageAccordion = /*#__PURE__*/function (_Component) {
  _inherits(ImageAccordion, _Component);

  var _super = _createSuper(ImageAccordion);

  function ImageAccordion() {
    _classCallCheck(this, ImageAccordion);

    return _super.apply(this, arguments);
  }

  _createClass(ImageAccordion, [{
    key: "render",
    value: function render() {
      var _this$context = this.context,
          _this$context$layout$ = _this$context.layout.images,
          images = _this$context$layout$ === void 0 ? [] : _this$context$layout$,
          _ = _this$context.localize;
      var _this$props = this.props,
          canAdd = _this$props.canAdd,
          children = _this$props.children,
          canReorder = _this$props.canReorder;
      var content = images.length && images.map(function (img, i) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(ImageFold, {
          imageIndex: i,
          name: "".concat(_('Image'), " ").concat(i + 1),
          canDelete: canAdd,
          children: children
        }, i);
      });
      var addAction = {
        label: _('Image'),
        handler: function handler(_ref) {
          var layout = _ref.layout,
              updateContainer = _ref.updateContainer;
          var imageIndex;

          if (Array.isArray(layout.images)) {
            imageIndex = layout.images.length;
          } else {
            imageIndex = 0;
          }

          var key = "images[".concat(imageIndex, "]");
          var value = {
            sizex: 0.1,
            sizey: 0.1,
            x: 0.5,
            y: 0.5
          };

          if (updateContainer) {
            updateContainer(_defineProperty({}, key, value));
          }
        }
      };
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_derived.LayoutPanel, {
        addAction: canAdd ? addAction : null,
        canReorder: canReorder,
        children: content ? content : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_PanelEmpty.PanelMessage, {
          heading: _('Logos, watermarks and more.'),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: _('Embed images in your figure to make the data more readable or to brand your content.')
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: _('Click on the + button above to add an image.')
          })]
        })
      });
    }
  }]);

  return ImageAccordion;
}(_react.Component);

ImageAccordion.contextTypes = {
  layout: _propTypes.default.object,
  localize: _propTypes.default.func
};
ImageAccordion.propTypes = {
  children: _propTypes.default.node,
  canAdd: _propTypes.default.bool,
  canReorder: _propTypes.default.bool
};
var _default = ImageAccordion;
exports.default = _default;
//# sourceMappingURL=ImageAccordion.js.map