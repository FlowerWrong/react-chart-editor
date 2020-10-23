"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _arrow_paths = _interopRequireDefault(require("plotly.js/src/components/annotations/arrow_paths"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ARROW_OPTIONS = _arrow_paths.default.map(function (_ref, index) {
  var path = _ref.path;
  var label = /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
    width: "40",
    height: "20",
    style: {
      position: 'relative'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("line", {
      stroke: "rgb(68, 68, 68)",
      style: {
        fill: 'none'
      },
      x1: "5",
      y1: "10",
      x2: "23.8",
      y2: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: path,
      transform: "translate(23.8,10)rotate(360)scale(2)",
      style: {
        fill: 'rgb(68, 68, 68)',
        opacity: 1,
        strokeWidth: 0
      }
    })]
  });
  return {
    label: label,
    value: index,
    key: 'arrow' + index
  };
});

var ArrowSelector = function ArrowSelector(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown.default, _objectSpread(_objectSpread({}, props), {}, {
    options: ARROW_OPTIONS
  }));
};

ArrowSelector.propTypes = _objectSpread({}, _Dropdown.default.propTypes);
ArrowSelector.defaultProps = {
  clearable: false
};
var _default = ArrowSelector;
exports.default = _default;
//# sourceMappingURL=ArrowSelector.js.map