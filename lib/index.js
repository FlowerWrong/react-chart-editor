"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  DefaultEditor: true,
  EditorControls: true,
  EDITOR_ACTIONS: true
};
Object.defineProperty(exports, "DefaultEditor", {
  enumerable: true,
  get: function get() {
    return _DefaultEditor.default;
  }
});
Object.defineProperty(exports, "EditorControls", {
  enumerable: true,
  get: function get() {
    return _EditorControls.default;
  }
});
Object.defineProperty(exports, "EDITOR_ACTIONS", {
  enumerable: true,
  get: function get() {
    return _constants.EDITOR_ACTIONS;
  }
});
exports.default = void 0;

var _PlotlyEditor = _interopRequireDefault(require("./PlotlyEditor"));

var _DefaultEditor = _interopRequireDefault(require("./DefaultEditor"));

var _EditorControls = _interopRequireDefault(require("./EditorControls"));

var _constants = require("./lib/constants");

var _lib = require("./lib");

Object.keys(_lib).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _lib[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lib[key];
    }
  });
});

var _components = require("./components");

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _components[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _components[key];
    }
  });
});

var _default_panels = require("./default_panels");

Object.keys(_default_panels).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _default_panels[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _default_panels[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _PlotlyEditor.default;
exports.default = _default;
//# sourceMappingURL=index.js.map