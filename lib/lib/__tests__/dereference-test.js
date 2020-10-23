"use strict";

var _dereference = _interopRequireDefault(require("../dereference"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-magic-numbers */
describe('dereference', function () {
  it('does not search into data arrays', function () {
    var container = [{
      y: [{
        ysrc: 'x1'
      }],
      xsrc: 'x1'
    }];
    (0, _dereference.default)(container, {
      x1: [1, 2, 3]
    });
    expect(container[0].y[0].y).toBeUndefined();
    expect(Array.isArray(container[0].x)).toBe(true);
  });
  it('does searches into transform arrays', function () {
    var container = [{
      transforms: [{
        ysrc: 'x1'
      }],
      xsrc: 'x1'
    }];
    (0, _dereference.default)(container, {
      x1: [1, 2, 3]
    });
    expect(Array.isArray(container[0].transforms[0].y)).toBe(true);
    expect(Array.isArray(container[0].x)).toBe(true);
  });
  it('handles multidimensional srcs correctly', function () {
    var container = [{
      zsrc: ['z1', 'z2'],
      type: 'heatmap'
    }];
    (0, _dereference.default)(container, {
      z1: [1, 2, 3],
      z2: [2, 2, 2]
    }); // contents should have been transposed

    expect(Array.isArray(container[0].z[0])).toBe(true);
    expect(Array.isArray(container[0].z[1])).toBe(true);
    expect(Array.isArray(container[0].z[2])).toBe(true);
    expect(container[0].z[0][0]).toBe(1);
    expect(container[0].z[0][1]).toBe(2);
    expect(container[0].z[1][0]).toBe(2);
    expect(container[0].z[1][1]).toBe(2);
    expect(container[0].z[2][0]).toBe(3);
    expect(container[0].z[2][1]).toBe(2);
  });
  it('handles ambiguous 2d srcs correctly', function () {
    var container = [{
      zsrc: ['z1'],
      type: 'heatmap'
    }];
    (0, _dereference.default)(container, {
      z1: [1, 2, 3]
    }); // contents should have been transposed

    expect(Array.isArray(container[0].z[0])).toBe(true);
    expect(Array.isArray(container[0].z[1])).toBe(true);
    expect(Array.isArray(container[0].z[2])).toBe(true);
    expect(container[0].z[0][0]).toBe(1);
    expect(container[0].z[1][0]).toBe(2);
    expect(container[0].z[2][0]).toBe(3);
  });
  it('uses custom function if provided in config', function () {
    var customParsing = function customParsing(src) {
      return src.split(',');
    };

    var container = [{
      zsrc: 'z1,z2',
      type: 'heatmap'
    }];
    (0, _dereference.default)(container, {
      z1: [1, 2, 3],
      z2: [2, 2, 2]
    }, {
      toSrc: customParsing
    }); // contents should have been transposed

    expect(Array.isArray(container[0].z[0])).toBe(true);
    expect(Array.isArray(container[0].z[1])).toBe(true);
    expect(Array.isArray(container[0].z[2])).toBe(true);
    expect(container[0].z[0][0]).toBe(1);
    expect(container[0].z[0][1]).toBe(2);
    expect(container[0].z[1][0]).toBe(2);
    expect(container[0].z[1][1]).toBe(2);
    expect(container[0].z[2][0]).toBe(3);
    expect(container[0].z[2][1]).toBe(2);
  }); // TO DO: dereference all of layout

  it('can dereference top level layout keys', function () {
    var container = {
      metasrc: 'x1',
      xaxis: {
        ticktext: 'x2'
      }
    };
    (0, _dereference.default)(container, {
      x1: ['yes!'],
      x2: ['some', 'text']
    });
    expect(Array.isArray(container.meta)).toBe(true);
    expect(container.meta[0]).toBe('yes!');
  });
});
//# sourceMappingURL=dereference-test.js.map