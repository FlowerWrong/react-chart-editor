"use strict";

var _index = require("../index");

/* eslint-disable no-magic-numbers */
describe('maybeAdjustSrc', function () {
  it('uses custom parsing function if one is provided', function () {
    var custom = function custom(srcs) {
      return srcs.join('$');
    };

    var adjusted = (0, _index.maybeAdjustSrc)(['z1', 'z2'], 'zsrc', 'heatmap', {
      fromSrc: custom
    });
    expect(adjusted).toBe('z1$z2');
  });
  it('reduces src to string for special table case', function () {
    var adjusted = (0, _index.maybeAdjustSrc)(['z1'], 'header.valuessrc', 'table');
    expect(adjusted).toBe('z1');
  });
});
//# sourceMappingURL=maybeAdjustSrc-test.js.map