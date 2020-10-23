"use strict";

var _sortMenu = _interopRequireDefault(require("../sortMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('sortMenu', function () {
  it('returns a new array of sorted children', function () {
    var initialArray = [{
      props: {
        group: 'DEV',
        name: 'Inspector'
      }
    }, {
      props: {
        group: 'DEV',
        name: 'JSON'
      }
    }];
    var orderProp = [{
      group: 'DEV',
      name: 'JSON'
    }, {
      group: 'DEV',
      name: 'Inspector'
    }];
    var newArray = (0, _sortMenu.default)(initialArray, orderProp);
    expect(initialArray).toEqual([{
      props: {
        group: 'DEV',
        name: 'Inspector'
      }
    }, {
      props: {
        group: 'DEV',
        name: 'JSON'
      }
    }]);
    expect(newArray).toEqual([{
      props: {
        group: 'DEV',
        name: 'JSON'
      }
    }, {
      props: {
        group: 'DEV',
        name: 'Inspector'
      }
    }]);
  });
  it('sorts the array by group, then by name', function () {
    var initialArray = [{
      props: {
        group: 'Structure',
        name: 'Create'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Subplots'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Color Bars'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Annotation'
      }
    }, {
      props: {
        group: 'DEV',
        name: 'Inspector'
      }
    }, {
      props: {
        group: 'DEV',
        name: 'JSON'
      }
    }];
    var orderProp = [{
      group: 'DEV',
      name: 'JSON'
    }, {
      group: 'DEV',
      name: 'Inspector'
    }, {
      group: 'Structure',
      name: 'Subplots'
    }, {
      group: 'Structure',
      name: 'Create'
    }, {
      group: 'Style',
      name: 'Color Bars'
    }, {
      group: 'Style',
      name: 'Annotation'
    }];
    var newArray = (0, _sortMenu.default)(initialArray, orderProp);
    expect(newArray).toEqual([{
      props: {
        group: 'DEV',
        name: 'JSON'
      }
    }, {
      props: {
        group: 'DEV',
        name: 'Inspector'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Subplots'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Create'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Color Bars'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Annotation'
      }
    }]);
  });
  it('puts not mentionned panels to the bottom of list and sorts alphabetically', function () {
    var initialArray = [{
      props: {
        group: 'DEV',
        name: 'JSON'
      }
    }, {
      props: {
        group: 'DEV',
        name: 'Inspector'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Create'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Subplots'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Color Bars'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Annotation'
      }
    }];
    var orderProp = [{
      group: 'Structure',
      name: 'Subplots'
    }, {
      group: 'Structure',
      name: 'Create'
    }, {
      group: 'Style',
      name: 'Color Bars'
    }, {
      group: 'Style',
      name: 'Annotation'
    }];
    var newArray = (0, _sortMenu.default)(initialArray, orderProp);
    expect(newArray).toEqual([{
      props: {
        group: 'Structure',
        name: 'Subplots'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Create'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Color Bars'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Annotation'
      }
    }, {
      props: {
        group: 'DEV',
        name: 'Inspector'
      }
    }, {
      props: {
        group: 'DEV',
        name: 'JSON'
      }
    }]);
  });
  it('orders not mentionned subpanels at the end, alphabetically', function () {
    var initialArray = [{
      props: {
        group: 'Style',
        name: 'General'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Traces'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Axes'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Create'
      }
    }];
    var orderProp = [{
      group: 'Style',
      name: 'Traces'
    }];
    var newArray = (0, _sortMenu.default)(initialArray, orderProp);
    expect(newArray).toEqual([{
      props: {
        group: 'Style',
        name: 'Traces'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Axes'
      }
    }, {
      props: {
        group: 'Style',
        name: 'General'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Create'
      }
    }]);
  });
  it('ignores non existent panel groups', function () {
    var initialArray = [{
      props: {
        group: 'Structure',
        name: 'Create'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Subplots'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Color Bars'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Annotation'
      }
    }];
    var orderProp = [{
      group: 'Non Existent',
      name: 'Subplots'
    }, {
      group: 'Structure',
      name: 'Create'
    }, {
      group: 'Style',
      name: 'Color Bars'
    }, {
      group: 'Style',
      name: 'Annotation'
    }];
    var newArray = (0, _sortMenu.default)(initialArray, orderProp);
    expect(newArray).toEqual([{
      props: {
        group: 'Structure',
        name: 'Create'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Subplots'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Color Bars'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Annotation'
      }
    }]);
  });
  it('ignores non existent panel names', function () {
    var initialArray = [{
      props: {
        group: 'Structure',
        name: 'Subplots'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Create'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Color Bars'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Annotation'
      }
    }];
    var orderProp = [{
      group: 'Structure',
      name: 'Non Existent'
    }, {
      group: 'Style',
      name: 'Color Bars'
    }, {
      group: 'Style',
      name: 'Annotation'
    }];
    var newArray = (0, _sortMenu.default)(initialArray, orderProp);
    expect(newArray).toEqual([{
      props: {
        group: 'Style',
        name: 'Color Bars'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Annotation'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Create'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Subplots'
      }
    }]);
  });
  it('ignores invalid combinations', function () {
    var initialArray = [{
      props: {
        group: 'Structure',
        name: 'Subplots'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Create'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Color Bars'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Annotation'
      }
    }];
    var orderProp = [{
      group: 'Structure',
      name: 'Annotation'
    }, {
      group: 'Style',
      name: 'Color Bars'
    }, {
      group: 'Style',
      name: 'Annotation'
    }];
    var newArray = (0, _sortMenu.default)(initialArray, orderProp);
    expect(newArray).toEqual([{
      props: {
        group: 'Style',
        name: 'Color Bars'
      }
    }, {
      props: {
        group: 'Style',
        name: 'Annotation'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Create'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Subplots'
      }
    }]);
  });
  it('does not sort children with no group or name props', function () {
    var initialArray = [{
      props: {
        type: 'Logo'
      }
    }, {
      props: {
        group: 'A',
        name: 'A'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Subplots'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Create'
      }
    }, {
      props: {
        type: 'ButtonA'
      }
    }, {
      props: {
        type: 'ButtonB'
      }
    }];
    var orderProp = [{
      group: 'Structure',
      name: 'Create'
    }, {
      group: 'Structure',
      name: 'Subplots'
    }];
    var newArray = (0, _sortMenu.default)(initialArray, orderProp);
    expect(newArray).toEqual([{
      props: {
        type: 'Logo'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Create'
      }
    }, {
      props: {
        group: 'Structure',
        name: 'Subplots'
      }
    }, {
      props: {
        group: 'A',
        name: 'A'
      }
    }, {
      props: {
        type: 'ButtonA'
      }
    }, {
      props: {
        type: 'ButtonB'
      }
    }]);
  });
});
//# sourceMappingURL=sortMenu-test.js.map