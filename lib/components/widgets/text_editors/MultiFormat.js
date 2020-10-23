"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _HTML = _interopRequireDefault(require("./HTML"));

var _LaTeX = _interopRequireDefault(require("./LaTeX"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RichText = _interopRequireDefault(require("./RichText"));

var _convertFormats = require("./convertFormats");

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("../Button"));

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

var MultiFormatTextEditor = /*#__PURE__*/function (_Component) {
  _inherits(MultiFormatTextEditor, _Component);

  var _super = _createSuper(MultiFormatTextEditor);

  function MultiFormatTextEditor(props, context) {
    var _this;

    _classCallCheck(this, MultiFormatTextEditor);

    _this = _super.call(this, props, context);
    var _ = context.localize;
    var editors = [{
      key: 'RICH_TEXT',
      label: _('Rich Text'),
      component: _RichText.default
    }, {
      key: 'LATEX',
      label: _('LaTeX'),
      component: _LaTeX.default
    }, {
      key: 'HTML',
      label: _('Edit in HTML'),
      component: _HTML.default
    }];
    var startTab = (0, _convertFormats.isLaTeXExpr)(props.value) ? 'LATEX' : 'RICH_TEXT';
    _this.state = {
      /*
       * When nextTab is set, we are waiting for confirmation from the
       * user before switching to the next tab.
       */
      nextTab: null,
      currentTab: startTab,
      messages: []
    };
    _this.onModeChange = _this.onModeChange.bind(_assertThisInitialized(_this));
    _this.editors = editors;
    return _this;
  }
  /**
   * Convert a value to the format expected by the provided editor.
   *
   * @param {String} value The current value
   * @param {String} editor The editor to convert for [RICH_TEXT|LATEX]
   * @returns {String} The converted value
   */


  _createClass(MultiFormatTextEditor, [{
    key: "convertValue",
    value: function convertValue(value, editor) {
      var currentTab = this.state.currentTab;

      if (currentTab === 'RICH_TEXT' && editor === 'LATEX') {
        return (0, _convertFormats.htmlToLaTeX)(value);
      }

      if (currentTab === 'LATEX' && editor === 'RICH_TEXT') {
        return (0, _convertFormats.laTeXToHTML)(value);
      }

      if (currentTab === 'HTML' && editor === 'LATEX') {
        return (0, _convertFormats.htmlToLaTeX)(value);
      }
      /*
       * Else we're switching from / to HTML / Rich Text Editor
       * no conversion is needed
       */


      return value;
    }
  }, {
    key: "onModeChange",
    value: function onModeChange(nextTab) {
      var _ = this.context.localize;
      var _this$props = this.props,
          defaultValuePattern = _this$props.defaultValuePattern,
          value = _this$props.value,
          onChange = _this$props.onChange;
      var currentTab = this.state.currentTab;
      var trimmedValue = value.trim();
      var trimmedValueLength = trimmedValue.length;
      var convertedValue = this.convertValue(trimmedValue, nextTab);
      /*
       * Check against default value - we have to compare the plain
       * value, not the LaTeX format value with `\text{}` wrapping.
       */

      var isDefaultValue = (0, _convertFormats.isLaTeXExpr)(trimmedValue) ? defaultValuePattern.test(convertedValue) : defaultValuePattern.test(trimmedValue);
      var switchingBetweenRichAndHtml = currentTab === 'RICH_TEXT' && nextTab === 'HTML' || currentTab === 'HTML' && nextTab === 'RICH_TEXT';

      if (!isDefaultValue && trimmedValueLength > 0 && !switchingBetweenRichAndHtml) {
        // Show confirmation dialogue and defer tab change.
        var messages;

        if (!(0, _convertFormats.isLaTeXExpr)(value)) {
          messages = [_("LaTeX is a math typesetting language that doesn't work with rich text."), _('Continuing will convert your note to LaTeX-style text.')];
        } else if ((0, _convertFormats.hasTextExpression)(value)) {
          messages = [_('Rich text is incompatible with LaTeX.'), _('Continuing will convert your LaTeX expression into raw text.')];
        } else {
          messages = [_('Rich text is incompatible with LaTeX.'), _('Continuing will remove your expression.')];
        }

        this.setState({
          nextTab: nextTab,
          messages: messages
        });
        return;
      } // Show requested tab immediately.


      this.setState({
        currentTab: nextTab
      }); // Convert the annotation and dispatch onChange action

      onChange(convertedValue);
    }
  }, {
    key: "renderConfirmationPanel",
    value: function renderConfirmationPanel(render) {
      var _this2 = this;

      if (!render) {
        return null;
      }

      var _ = this.context.localize;
      var messages = this.state.messages;

      var onCancel = function onCancel() {
        _this2.setState({
          nextTab: null
        });
      };

      var onContinue = function onContinue() {
        var nextTab = _this2.state.nextTab;
        var _this2$props = _this2.props,
            onChange = _this2$props.onChange,
            value = _this2$props.value; // Set next tab as active

        _this2.setState({
          currentTab: nextTab,
          nextTab: null
        }); // Convert the annotation


        var convertedValue = _this2.convertValue(value, nextTab);

        onChange(convertedValue);
      };

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "multi-format-editor__confirmation-panel",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "multi-format-editor__confirmation-panel__content",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "multi-format-editor__confirmation-panel__header",
            children: _('Heads up!')
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "multi-format-editor__confirmation-panel__message",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "multi-format-editor__confirmation-panel__message-primary",
              children: messages[0]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "multi-format-editor__confirmation-panel__message-secondary",
              children: messages[1]
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "multi-format-editor__confirmation-panel__actions",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
            variant: "default",
            className: "multi-format-editor__confirmation-panel__cancel-button",
            onClick: onCancel,
            children: _('Go back')
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
            variant: "primary",
            className: "multi-format-editor__confirmation-panel__continue-button",
            onClick: onContinue,
            children: _('Continue')
          })]
        })]
      });
    }
  }, {
    key: "renderEditor",
    value: function renderEditor(render) {
      var _this3 = this;

      if (!render) {
        return null;
      }

      var _ = this.context.localize;
      var _this$props2 = this.props,
          onChange = _this$props2.onChange,
          placeholder = _this$props2.placeholder,
          value = _this$props2.value;
      var currentTab = this.state.currentTab;
      var richTextClassNames = (0, _classnames.default)('multi-format-editor__tab', 'top-tab', 'left', {
        selected: currentTab === 'RICH_TEXT'
      });
      var latexClassNames = (0, _classnames.default)('multi-format-editor__tab', 'top-tab', 'right', {
        selected: currentTab === 'LATEX'
      });
      var bottomTabClassNames = (0, _classnames.default)('multi-format-editor__tab', 'bottom-tab');
      var Editor = this.editors.filter(function (editor) {
        return editor.key === currentTab;
      })[0].component;
      var ModeTabsText = this.editors.map(function (editor) {
        return editor.label;
      });
      var showBottomTab = currentTab === 'HTML' || currentTab === 'RICH_TEXT';
      var BottomTab = currentTab === 'HTML' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: bottomTabClassNames,
        onClick: function onClick() {
          return _this3.onModeChange('RICH_TEXT');
        },
        children: _('Edit in Rich Text')
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: bottomTabClassNames,
        onClick: function onClick() {
          return _this3.onModeChange('HTML');
        },
        children: _('Edit in HTML')
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "multi-format-editor__root__wrapper",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "multi-format-editor__tabs",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: richTextClassNames,
            onClick: function onClick() {
              return _this3.onModeChange('RICH_TEXT');
            },
            children: ModeTabsText[0]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: latexClassNames,
            onClick: function onClick() {
              return _this3.onModeChange('LATEX');
            },
            children: ModeTabsText[1]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "multi-format-editor__content__wrapper__".concat(currentTab.toLowerCase()),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Editor, {
            className: "multi-format-editor__".concat(currentTab.toLowerCase()),
            onChange: onChange,
            placeholder: placeholder,
            value: value
          })
        }), showBottomTab ? BottomTab : null]
      });
    }
  }, {
    key: "render",
    value: function render() {
      /*
       * `renderConfirmationPanel` and `renderEditor` are mutually
       * exclusive; only one will return a component.
       */
      var nextTab = this.state.nextTab;
      var content = this.renderConfirmationPanel(nextTab !== null) || this.renderEditor(nextTab === null);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "multi-format-editor__root",
        children: content
      });
    }
  }]);

  return MultiFormatTextEditor;
}(_react.Component);

MultiFormatTextEditor.propTypes = {
  defaultValuePattern: _propTypes.default.instanceOf(RegExp),
  onChange: _propTypes.default.func.isRequired,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string
};
MultiFormatTextEditor.defaultProps = {
  defaultValuePattern: /^$/,
  placeholder: '',
  value: ''
};
MultiFormatTextEditor.contextTypes = {
  localize: _propTypes.default.func
};
var _default = MultiFormatTextEditor;
exports.default = _default;
//# sourceMappingURL=MultiFormat.js.map