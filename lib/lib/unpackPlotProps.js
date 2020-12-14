"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasValidCustomConfigVisibilityRules = hasValidCustomConfigVisibilityRules;
exports.computeCustomConfigVisibility = computeCustomConfigVisibility;
exports.isVisibleGivenCustomConfig = isVisibleGivenCustomConfig;
exports.default = unpackPlotProps;

var _nested_property = _interopRequireDefault(require("plotly.js/src/lib/nested_property"));

var _fastIsnumeric = _interopRequireDefault(require("fast-isnumeric"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var hasFullValue = function hasFullValue(fullValue) {
  return fullValue !== void 0 && fullValue !== null;
};

function hasValidCustomConfigVisibilityRules(customConfig) {
  if (customConfig && customConfig === Object(customConfig) && Object.keys(customConfig).length && customConfig.visibility_rules) {
    if (customConfig.visibility_rules.blacklist && customConfig.visibility_rules.whitelist) {
      console.error('customConfig.visibility_rules can have a blacklist OR whitelist key, both are present in your config.');
      return false;
    }

    if (!Object.keys(customConfig.visibility_rules).some(function (key) {
      return ['blacklist', 'whitelist'].includes(key);
    })) {
      console.error('customConfig.visibility_rules must have at least a blacklist or whitelist key.');
      return false;
    }

    var isValidRule = function isValidRule(rule) {
      if (rule.exceptions) {
        return rule.exceptions.every(isValidRule);
      }

      return rule.type && ['attrName', 'controlType'].includes(rule.type) && rule.regex_match;
    };

    var errorMessage = "All rules and exceptions must have a type (one of: 'attrName' or 'controlType') and regex_match key.";

    if (customConfig.visibility_rules.blacklist && !customConfig.visibility_rules.blacklist.every(isValidRule)) {
      console.error(errorMessage);
      return false;
    }

    if (customConfig.visibility_rules.whitelist && !customConfig.visibility_rules.whitelist.every(isValidRule)) {
      console.error(errorMessage);
      return false;
    }

    return true;
  }

  return false;
}

function computeCustomConfigVisibility(props, customConfig, wrappedComponentDisplayName) {
  var isVisible;

  var isRegexMatch = function isRegexMatch(rule) {
    var stringToTest = rule.type === 'attrName' ? props.attr : wrappedComponentDisplayName;
    return RegExp(rule.regex_match).test(stringToTest);
  };

  var passesTest = function passesTest(rule) {
    var hasException = function hasException(rule) {
      if (rule.exceptions) {
        return rule.exceptions.some(function (exception) {
          return passesTest(exception);
        });
      }

      return false;
    };

    return isRegexMatch(rule) && !hasException(rule);
  };

  if (customConfig.visibility_rules.blacklist) {
    isVisible = !customConfig.visibility_rules.blacklist.some(passesTest);
  }

  if (customConfig.visibility_rules.whitelist) {
    isVisible = customConfig.visibility_rules.whitelist.some(passesTest);
  }

  return isVisible;
}

function isVisibleGivenCustomConfig(initial, nextProps, nextContext, componentDisplayName) {
  var show = initial;

  if (show && nextContext.hasValidCustomConfigVisibilityRules) {
    show = computeCustomConfigVisibility(nextProps, nextContext.customConfig, componentDisplayName);
  }

  return show;
}

function unpackPlotProps(props, context) {
  var container = context.container,
      getValObject = context.getValObject,
      defaultContainer = context.defaultContainer,
      updateContainer = context.updateContainer;

  if (!props.attr) {
    return {};
  }

  var attrMeta;

  if (getValObject) {
    attrMeta = context.getValObject(props.attr) || {};
  }

  var fullContainer = context.fullContainer;
  var fullProperty = (0, _nested_property.default)(fullContainer, props.attr);
  var fullValue = fullProperty.get();
  var multiValued = false; // MULTI_VALUED consists of a control sequence that cannot be confused with
  // user data. We must transform it into something that can be displayed as
  // the screen.

  if (fullValue === _constants.MULTI_VALUED) {
    fullValue = _constants.MULTI_VALUED_PLACEHOLDER;
    multiValued = true;
  }

  var isVisible = Boolean(hasFullValue(fullValue) || props.show);
  var defaultValue = props.defaultValue;

  if (defaultValue === void 0 && defaultContainer) {
    defaultValue = (0, _nested_property.default)(defaultContainer, props.attr).get();
  }

  var min, max, description;

  if (attrMeta) {
    if ((0, _fastIsnumeric.default)(attrMeta.max)) {
      max = attrMeta.max;
    }

    if ((0, _fastIsnumeric.default)(attrMeta.min)) {
      min = attrMeta.min;
    }

    description = attrMeta.description;
  }

  var updatePlot = function updatePlot(v) {
    if (updateContainer) {
      updateContainer(_defineProperty({}, props.attr, v));
    }
  };

  return {
    attrMeta: attrMeta,
    container: container,
    defaultValue: defaultValue,
    fullContainer: fullContainer,
    fullValue: fullValue,
    getValObject: getValObject,
    isVisible: isVisible,
    max: max,
    min: min,
    description: description,
    multiValued: multiValued,
    updateContainer: updateContainer,
    updatePlot: updatePlot
  };
}
//# sourceMappingURL=unpackPlotProps.js.map