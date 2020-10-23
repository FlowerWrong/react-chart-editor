"use strict";

var _index = require("../index");

var validate = function validate(string, expected, config, wrappedComponentDisplayName) {
  var isVisible = (0, _index.computeCustomConfigVisibility)({
    attr: string
  }, config, wrappedComponentDisplayName);
  expect(isVisible).toBe(expected[string]);
};

describe('computeCustomConfigVisibility', function () {
  var customConfig = {
    visibility_rules: {
      blacklist: [{
        type: 'attrName',
        regex_match: 'color',
        exceptions: [{
          type: 'attrName',
          regex_match: 'colorscale',
          exceptions: [{
            type: 'attrName',
            regex_match: 'colorscale.title.font.color'
          }, {
            type: 'attrName',
            regex_match: 'colorscale.tickcolor'
          }]
        }]
      }]
    }
  };
  it('correctly blacklists attributes taking into account exceptions', function () {
    var cases = {
      bg_color: false,
      'font.color': false,
      somethingElse: true,
      colorscale: true,
      'colorscale.somethingElse': true,
      'colorscale.title.font.color': false,
      'colorscale.tickcolor': false
    };
    Object.keys(cases).forEach(function (c) {
      return validate(c, cases, customConfig);
    });
  });
  it('correctly whitelists attributes taking into account exceptions', function () {
    var config = {
      visibility_rules: {
        whitelist: customConfig.visibility_rules.blacklist
      }
    };
    var cases = {
      bg_color: true,
      'font.color': true,
      somethingElse: false,
      colorscale: false,
      'colorscale.somethingElse': false,
      'colorscale.title.font.color': true,
      'colorscale.tickcolor': true
    };
    Object.keys(cases).forEach(function (c) {
      return validate(c, cases, config);
    });
  });
  it('correctly displays visibility based on controlType', function () {
    var config = {
      visibility_rules: {
        blacklist: [{
          type: 'attrName',
          regex_match: 'color',
          exceptions: [{
            type: 'attrName',
            regex_match: 'marker.color',
            exceptions: [{
              type: 'controlType',
              regex_match: '^ColorscalePicker$'
            }]
          }]
        }]
      }
    };
    var case1 = {
      'marker.color': false
    };
    var case2 = {
      'marker.color': true
    };
    Object.keys(case1).forEach(function (c) {
      return validate(c, case1, config, 'ColorscalePicker');
    });
    Object.keys(case2).forEach(function (c) {
      return validate(c, case2, config, 'AnotherPicker');
    });
  });
});
//# sourceMappingURL=unpackPlotProps-test.js.map