"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _draftJs = require("draft-js");

var _draftJsExportHtml = require("@plotly/draft-js-export-html");

var _draftJsImportHtml = require("draft-js-import-html");

var _configuration = require("./configuration");

var _LinkDecorator = _interopRequireDefault(require("./LinkDecorator"));

var _LinkEditor = _interopRequireDefault(require("./LinkEditor"));

var _StyleButtonGroup = _interopRequireDefault(require("./StyleButtonGroup"));

var _debounce = _interopRequireDefault(require("./debounce"));

var _DraftCommands = require("./DraftCommands");

var _decoratorStrategies = require("./decoratorStrategies");

var _getSelectionCoordinates = _interopRequireDefault(require("./getSelectionCoordinates"));

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

var RichText = /*#__PURE__*/function (_Component) {
  _inherits(RichText, _Component);

  var _super = _createSuper(RichText);

  function RichText(props, context) {
    var _this;

    _classCallCheck(this, RichText);

    _this = _super.call(this, props, context);
    /*
     * Initially set state based on the plotly.js annotation content.
     * After this, as long as this component is mounted, it owns the source
     * of truth for the annotation value via `this.state.editorState`.
     * This state may be updated externally via a prop update.
     * See `UNSAFE_componentWillReceiveProps`.
     */

    _this.state = {
      editorState: props.value.toString().trim().length ? _this.createEditorStateFromHTML(props.value) : _draftJs.EditorState.createEmpty(_this.getDecorator())
    };
    _this.getDecorator = _this.getDecorator.bind(_assertThisInitialized(_this));
    _this.createEditorStateFromHTML = _this.createEditorStateFromHTML.bind(_assertThisInitialized(_this));
    _this.getEditorStateAsHTML = _this.getEditorStateAsHTML.bind(_assertThisInitialized(_this));
    _this.focus = _this.focus.bind(_assertThisInitialized(_this));
    _this.getParentContainerVerticalOffset = _this.getParentContainerVerticalOffset.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onLinkEditorBlur = _this.onLinkEditorBlur.bind(_assertThisInitialized(_this));
    _this.onLinkEditorFocus = _this.onLinkEditorFocus.bind(_assertThisInitialized(_this));
    _this.onLinkEditorChange = _this.onLinkEditorChange.bind(_assertThisInitialized(_this));
    _this.onLinkEditorClose = _this.onLinkEditorClose.bind(_assertThisInitialized(_this));
    _this.onKeyCommand = _this.onKeyCommand.bind(_assertThisInitialized(_this));
    _this.onReturnPressed = _this.onReturnPressed.bind(_assertThisInitialized(_this));
    _this.onStyleButtonToggle = _this.onStyleButtonToggle.bind(_assertThisInitialized(_this));
    _this.renderLinkEditor = _this.renderLinkEditor.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RichText, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this$state = this.state,
          linkEditorFocus = _this$state.linkEditorFocus,
          editorFocus = _this$state.editorFocus;
      /*
       * Don't worry about what plotly.js thinks the annotation value
       * should be while we're using our editor, for these reasons:
       *
       * 1. The editor should be considered the source of truth, unless the
       *    user is actually editing the annotation inline, in the chart.
       * 2. Sometimes we get updates with stale values.
       */

      if (linkEditorFocus || editorFocus) {
        return;
      } // Sync editor state with plotly annotation value.


      var editorState = this.createEditorStateFromHTML(nextProps.value);
      this.setState({
        editorState: editorState
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          value = _this$props.value;
      var _this$state2 = this.state,
          editorState = _this$state2.editorState,
          linkEditorFocus = _this$state2.linkEditorFocus; // If relevant props or state changed, return true.

      if ( // Always update when user is editing link
      linkEditorFocus || placeholder !== nextProps.placeholder || value !== nextProps.value || editorState !== nextState.editorState) {
        return true;
      } // Compare incoming value with HTML representation of state.


      return nextProps.value !== this.getEditorStateAsHTML(editorState);
    }
  }, {
    key: "getDecorator",
    value: function getDecorator() {
      return new _draftJs.CompositeDecorator([{
        strategy: _decoratorStrategies.findLinkEntities,
        component: _LinkDecorator.default,
        // Props for the LinkDecorator component
        props: {
          style: _configuration.STYLE_MAP[_configuration.LINK]
        }
      }]);
    }
  }, {
    key: "createEditorStateFromHTML",
    value: function createEditorStateFromHTML(html) {
      var _inlineStyles;

      var contentState = (0, _draftJsImportHtml.stateFromHTML)(html, {
        inlineStyles: (_inlineStyles = {}, _defineProperty(_inlineStyles, _configuration.SUPERSCRIPT, {
          element: 'sup'
        }), _defineProperty(_inlineStyles, _configuration.SUBSCRIPT, {
          element: 'sub'
        }), _inlineStyles),
        defaultBlockTag: null
      });
      var decorator = this.getDecorator();
      /*
       * Work around issue described here:
       * https://github.com/facebook/draft-js/issues/185
       * #issuecomment-217207612
       */
      // Parse once to generate entity instances

      _draftJs.EditorState.createWithContent(contentState); // Now we can add our decorator


      return _draftJs.EditorState.createWithContent(contentState, decorator);
    }
  }, {
    key: "getEditorStateAsHTML",
    value: function getEditorStateAsHTML(editorState) {
      var contentState = editorState.getCurrentContent();
      return (0, _draftJsExportHtml.stateToHTML)(contentState, {
        defaultBlockTag: null,
        inlineStyles: _configuration.STYLES_TO_HTML_TAGS
      });
    }
  }, {
    key: "focus",
    value: function focus() {
      this.editorInput.focus();
    } // Used to properly calculate user selection coordinates.

  }, {
    key: "getParentContainerVerticalOffset",
    value: function getParentContainerVerticalOffset() {
      return document.querySelector('.panel').scrollTop;
    }
  }, {
    key: "onChange",
    value: function onChange(editorState) {
      var selectedLinkID = this.state.selectedLinkID;
      var selection = editorState.getSelection();
      var entityKey = (0, _DraftCommands.getEntityKeyAt)(editorState, selection);
      var newState = {
        editorState: editorState
      }; // Update selected link ID

      if (!(0, _DraftCommands.cursorHasLink)(editorState, selection)) {
        // If a link is no longer selected, clear selected link ID state
        Object.assign(newState, {
          selectedLinkID: null
        });
      } else if (selectedLinkID !== entityKey) {
        // If link selection is new / different link selected, update it
        Object.assign(newState, {
          selectedLinkID: entityKey
        });
      } // Update internal state


      this.setState(newState); // Dispatch changes to plotly.js
      // TODO consider moving to render (plotly.js is a render target)

      var htmlContent = this.getEditorStateAsHTML(editorState).replace(/<br>\n*/, '<br>');

      if (this.props.value !== htmlContent) {
        (0, _debounce.default)(this.props.onChange, [htmlContent]);
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.setState({
        editorFocus: false
      });
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.setState({
        editorFocus: true
      });
    }
  }, {
    key: "onLinkEditorBlur",
    value: function onLinkEditorBlur() {
      this.setState({
        linkEditorFocus: false
      });
    }
  }, {
    key: "onLinkEditorFocus",
    value: function onLinkEditorFocus() {
      this.setState({
        linkEditorFocus: true
      });
    }
  }, {
    key: "onLinkEditorChange",
    value: function onLinkEditorChange(linkID, urlValue) {
      var editorState = this.state.editorState;
      var selectionState = editorState.getSelection(); // Update link URL

      _draftJs.Entity.replaceData(linkID, {
        url: urlValue
      }); // Trigger an editor state update


      var updatedEditorState = _draftJs.RichUtils.toggleLink(editorState, selectionState, linkID);

      this.onChange(updatedEditorState);
    }
    /**
     * Will be called by LinkEditor when the user confirms or cancels new URL.
     * Will not be called if LinkEditor is closed by moving the cursor off of
     * the selected LINK entity.
     *
     * @param   {String} linkID The link entity key related to this LinkEditor
     * @returns {undefined}
     */

  }, {
    key: "onLinkEditorClose",
    value: function onLinkEditorClose() {
      /*
       * Focus on editor immediately to avoid error that occurs when
       * `selection.extend` is called and another element has focus.
       * https://bugzilla.mozilla.org/show_bug.cgi?id=921444
       * https://github.com/facebook/draft-js/blob/342576bf7186d07c82a41d9ca8169130669747d6/src/component/selection/setDraftEditorSelection.js#L128-L134
       */
      this.focus(); // Hide the editor.

      this.setState({
        linkEditorFocus: false,
        selectedLinkID: null
      });
    }
  }, {
    key: "onKeyCommand",
    value: function onKeyCommand(command) {
      var newEditorState = (0, _DraftCommands.handleKeyCommand)(this.state.editorState, command);

      if (newEditorState) {
        this.onChange(newEditorState); // Let draft-js know that keyboard command is handled.

        return true;
      } // Default draft-js implementation


      return false;
    }
  }, {
    key: "onReturnPressed",
    value: function onReturnPressed() {
      var newEditorState = (0, _DraftCommands.insertSoftNewline)(this.state.editorState); // Update internal and external state

      this.onChange(newEditorState); // Cancel draft-js implementation

      return true;
    }
  }, {
    key: "onStyleButtonToggle",
    value: function onStyleButtonToggle(inlineStyle) {
      var newEditorState = (0, _DraftCommands.toggleInlineStyle)(this.state.editorState, inlineStyle);

      if (newEditorState) {
        this.onChange(newEditorState);
      }
    }
  }, {
    key: "renderLinkEditor",
    value: function renderLinkEditor(selectedLinkID) {
      if (!selectedLinkID) {
        return null;
      } // All entities are link entities.


      var linkEntity = (0, _DraftCommands.getEntityByKey)(selectedLinkID);
      var linkURL = linkEntity.getData().url;
      var coordinates = (0, _getSelectionCoordinates.default)();
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkEditor.default, {
        onFocus: this.onLinkEditorFocus,
        onURLChange: this.onLinkEditorChange,
        onBlur: this.onLinkEditorBlur,
        onClose: this.onLinkEditorClose,
        coordinates: coordinates,
        linkID: selectedLinkID,
        linkURL: linkURL
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          editorState = _this$state3.editorState,
          selectedLinkID = _this$state3.selectedLinkID;
      var linkIsSelected = Boolean(selectedLinkID);
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "rich-text-editor__root",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_StyleButtonGroup.default, {
          styles: _configuration.INLINE_STYLES,
          currentStyle: editorState.getCurrentInlineStyle(),
          linkIsSelected: linkIsSelected,
          onToggle: this.onStyleButtonToggle
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "rich-text-editor__editor",
          onClick: this.focus,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_draftJs.Editor, {
            customStyleMap: _configuration.STYLE_MAP,
            editorState: editorState,
            handleReturn: this.onReturnPressed,
            handleKeyCommand: this.onKeyCommand,
            onChange: this.onChange,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            placeholder: this.props.placeholder,
            spellCheck: false,
            ref: function ref(input) {
              return _this2.editorInput = input;
            }
          })
        }), this.renderLinkEditor(selectedLinkID)]
      });
    }
  }]);

  return RichText;
}(_react.Component);

RichText.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.any
};
RichText.defaultProps = {
  placeholder: '',
  value: ''
};
var _default = RichText;
exports.default = _default;
//# sourceMappingURL=index.js.map