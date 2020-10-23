"use strict";

var _jsxRuntime = require("react/jsx-runtime");

var _ArrowSelector = _interopRequireDefault(require("../ArrowSelector"));

var _Dropdown = _interopRequireDefault(require("../Dropdown"));

var _testUtils = require("../../../lib/test-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<ArrowSelector>', function () {
  // test mostly an insurance policy against plotly.js changing arrow_paths on us.
  it('pulls arrow_paths from plotly.js and sets as options', function () {
    var minNumberOfArrowsExpected = 4;
    var options = (0, _testUtils.shallow)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowSelector.default, {})).find(_Dropdown.default).prop('options');
    expect(options.length > minNumberOfArrowsExpected).toBe(true); // make sure path info is being destructured

    var innerPath = options[3].label.props.children[1];
    expect(innerPath.type).toBe('path');
    expect(innerPath.props.d.startsWith('M-')).toBe(true);
  });
});
//# sourceMappingURL=ArrowSelector-test.js.map