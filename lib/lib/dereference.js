"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnNames = getColumnNames;
exports.default = dereference;

var _walkObject = _interopRequireDefault(require("./walkObject"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SRC_ATTR_PATTERN = /src$/;

function getColumnNames(srcArray, dataSourceOptions) {
  return srcArray.map(function (src) {
    var columns = dataSourceOptions.filter(function (dso) {
      return dso.value === src;
    });

    if (columns.length === 1) {
      return columns[0].columnName || columns[0].label;
    }

    return '';
  }).join(' - ');
}

function dereference(container, dataSources) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    deleteKeys: false
  };
  var dataSourceOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var containerIsData = Array.isArray(container);

  var replacer = function replacer(key, parent, srcPath) {
    if (!SRC_ATTR_PATTERN.test(key)) {
      return;
    }

    var dataKey = key.replace(SRC_ATTR_PATTERN, '');
    var srcRef = config.toSrc ? config.toSrc(parent[key]) : parent[key]; // making this into an array to more easily lookup 1d and 2d srcs in dataSourceOptions

    if (!Array.isArray(srcRef)) {
      srcRef = [srcRef];
    }

    var dereferencedData = srcRef.map(function (ref) {
      if (config.deleteKeys && !(ref in dataSources)) {
        delete parent[dataKey];
      }

      return dataSources[ref];
    }); // remove extra data wrapping

    if (srcRef.length === 1) {
      dereferencedData = dereferencedData[0];
    }

    if (!Array.isArray(dereferencedData)) {
      return;
    }

    if (containerIsData) {
      if (parent.type !== null) {
        // we're at the top level of the trace
        if (dataSourceOptions !== null) {
          parent.meta = parent.meta || {};
          parent.meta.columnNames = parent.meta.columnNames || {};
          parent.meta.columnNames[dataKey] = getColumnNames(srcRef, dataSourceOptions);
        }

        parent[dataKey] = (0, _index.maybeTransposeData)(dereferencedData, srcPath, parent.type);
      } else {
        parent[dataKey] = dereferencedData;
      }
    } else {
      // container is layout
      parent[dataKey] = dereferencedData;
    }
  };

  if (containerIsData) {
    (0, _walkObject.default)(container, replacer, {
      walkArraysMatchingKeys: ['data', 'transforms'],
      pathType: 'nestedProperty'
    });
  } else {
    // container is layout
    (0, _walkObject.default)(container, replacer, {
      pathType: 'nestedProperty'
    });
  }
}
//# sourceMappingURL=dereference.js.map