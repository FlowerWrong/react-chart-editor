"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _walkObject2 = _interopRequireWildcard(require("../walkObject"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UNDEF = undefined; // eslint-disable-line

/* eslint-disable no-magic-numbers */

describe('objectUtils', function () {
  describe('walkObject', function () {
    var object;
    var callback;
    beforeEach(function () {
      var _object;

      object = (_object = {}, _defineProperty(_object, null, {
        ugly: 'code'
      }), _defineProperty(_object, "foo", 'foo'), _defineProperty(_object, "bar", 0), _defineProperty(_object, 10, {
        20: 'three'
      }), _defineProperty(_object, UNDEF, {
        really: {
          fugly: 'code'
        }
      }), _defineProperty(_object, "_private", {
        gasp: 'o__o'
      }), _defineProperty(_object, "public", {
        _secret: {
          shock: '*__*'
        }
      }), _defineProperty(_object, "array", [{}, {}, {}]), _object);
      callback = jest.fn();
    });
    it('calls callback with the right args for each key/value pair', function () {
      var _expectedCounts;

      (0, _walkObject2.default)(object, callback); // The callback should be called for *every* node in the object.

      expect(callback.mock.calls.length).toEqual(15); // eslint-disable-line no-magic-numbers
      // Note that keys for objects come back as strings in JS.

      var expectedCounts = (_expectedCounts = {}, _defineProperty(_expectedCounts, '', 8), _defineProperty(_expectedCounts, '10', 1), _defineProperty(_expectedCounts, "_private", 1), _defineProperty(_expectedCounts, "null", 1), _defineProperty(_expectedCounts, "public", 1), _defineProperty(_expectedCounts, 'public._secret', 1), _defineProperty(_expectedCounts, 'undefined', 1), _defineProperty(_expectedCounts, 'undefined.really', 1), _expectedCounts);
      var expectedKeys = ['null', 'ugly', 'foo', 'bar', '10', '20', 'undefined', 'really', 'fugly', '_private', 'gasp', 'public', '_secret', 'shock', 'array'];
      var actualCounts = {};
      var actualKeys = [];
      callback.mock.calls.forEach(function (call) {
        var _call = _slicedToArray(call, 3),
            key = _call[0],
            parent = _call[1],
            path = _call[2];

        var pathString = path.join('.');
        actualCounts[pathString] = (actualCounts[pathString] || 0) + 1;
        actualKeys.push(key); // The parent should have the key we're given.

        expect(parent[key]).toBeDefined();
      }); // We should have been given keys at the expected paths.

      expect(actualCounts).toEqual(expectedCounts); // We should get each key *once*.

      expect(actualKeys.length).toEqual(expectedKeys.length);
      expectedKeys.forEach(function (key) {
        expect(actualKeys.indexOf(key)).not.toEqual(-1);
      });
    });
    it('does not traverse when the callback returns true', function () {
      // Always return `true`, which tells walkObject not to traverse.
      callback.mockReturnValue(true);
      (0, _walkObject2.default)(object, callback); // The callback should be called only for top-level nodes.

      expect(callback.mock.calls.length).toEqual(8); // eslint-disable-line no-magic-numbers
    });
    it('can be used as a reducer by leveraging a function closure', function () {
      // Use the given cache to keep a count of the node count.
      var count = 0;
      callback.mockImplementation(function () {
        count++;
      });
      (0, _walkObject2.default)(object, callback); // Make sure that the reduction was altered as expected.

      expect(count).toEqual(15); // eslint-disable-line no-magic-numbers
    });
    it('walks into arrays if walkArrays is true', function () {
      var _expectedCounts2;

      (0, _walkObject2.default)(object, callback, {
        walkArrays: true
      }); // The callback should be called for *every* node in the object.

      expect(callback.mock.calls.length).toEqual(18); // eslint-disable-line no-magic-numbers
      // Note that keys for objects come back as strings in JS.

      var expectedCounts = (_expectedCounts2 = {}, _defineProperty(_expectedCounts2, '', 8), _defineProperty(_expectedCounts2, '10', 1), _defineProperty(_expectedCounts2, "_private", 1), _defineProperty(_expectedCounts2, "null", 1), _defineProperty(_expectedCounts2, "public", 1), _defineProperty(_expectedCounts2, 'public._secret', 1), _defineProperty(_expectedCounts2, 'undefined', 1), _defineProperty(_expectedCounts2, 'undefined.really', 1), _defineProperty(_expectedCounts2, "array", 3), _expectedCounts2);
      var expectedKeys = ['null', 'ugly', 'foo', 'bar', '10', '20', 'undefined', 'really', 'fugly', '_private', 'gasp', 'public', '_secret', 'shock', 'array', '0', '1', '2'];
      var actualCounts = {};
      var actualKeys = [];
      callback.mock.calls.forEach(function (call) {
        var _call2 = _slicedToArray(call, 3),
            key = _call2[0],
            parent = _call2[1],
            path = _call2[2];

        var pathString = path.join('.');
        actualCounts[pathString] = (actualCounts[pathString] || 0) + 1;
        actualKeys.push(key); // The parent should have the key we're given.

        expect(parent[key]).toBeDefined();
      }); // We should have been given keys at the expected paths.

      expect(actualCounts).toEqual(expectedCounts); // We should get each key *once*.

      expect(actualKeys.length).toEqual(expectedKeys.length);
      expectedKeys.forEach(function (key) {
        expect(actualKeys.indexOf(key)).not.toEqual(-1);
      });
    });
    it('walks into arrays specified by walkArraysMatchingKeys', function () {
      var _expect$toEqual;

      (0, _walkObject2.default)([{
        type: 'scatter',
        x: [1, 2, 3],
        y: [1, 2, 3],
        transforms: [{
          filterId: 'ababab',
          type: 'filter',
          targetsrc: 'hodor:99:aaaaaa'
        }, {
          filterId: 'bababa',
          type: 'filter',
          targetsrc: 'hodor:99:aaaaaa'
        }]
      }, {
        z: [[1, 2, 3], [1, 2, 3]],
        type: 'heatmap',
        transforms: [{
          type: 'fit'
        }, {
          filterId: 'bababa',
          type: 'filter',
          targetsrc: 'hodor:99:aaaaaa'
        }]
      }], callback, {
        walkArraysMatchingKeys: ['transforms', 'data']
      });
      var actualCounts = {};
      var actualKeys = [];
      callback.mock.calls.forEach(function (call) {
        var _call3 = _slicedToArray(call, 3),
            key = _call3[0],
            parent = _call3[1],
            path = _call3[2];

        var pathString = path.join('.');
        actualCounts[pathString] = (actualCounts[pathString] || 0) + 1;
        actualKeys.push(key); // The parent should have the key we're given.

        expect(parent[key]).toBeDefined();
      });
      expect(actualCounts).toEqual((_expect$toEqual = {}, _defineProperty(_expect$toEqual, '0', 4), _defineProperty(_expect$toEqual, '1', 3), _defineProperty(_expect$toEqual, '', 2), _defineProperty(_expect$toEqual, '0.transforms', 2), _defineProperty(_expect$toEqual, '0.transforms.0', 3), _defineProperty(_expect$toEqual, '0.transforms.1', 3), _defineProperty(_expect$toEqual, '1.transforms', 2), _defineProperty(_expect$toEqual, '1.transforms.0', 1), _defineProperty(_expect$toEqual, '1.transforms.1', 3), _expect$toEqual));
      expect(actualKeys).toEqual(['0', 'type', 'x', 'y', 'transforms', '0', 'filterId', 'type', 'targetsrc', '1', 'filterId', 'type', 'targetsrc', '1', 'z', 'type', 'transforms', '0', 'type', '1', 'filterId', 'type', 'targetsrc']);
    });
    it('produces nestedProperty style paths', function () {
      var _walkObject;

      (0, _walkObject2.default)({
        a: 1,
        b: [{
          c: 4
        }, 2, 3]
      }, callback, {
        walkArraysMatchingKeys: ['b'],
        pathType: 'nestedProperty'
      });
      var actualPaths = callback.mock.calls.map(function (args) {
        return args[2];
      });
      var expectedPaths = ['a', 'b', 'b[0]', 'b[0].c', 'b[1]', 'b[2]'];
      expect(actualPaths).toEqual(expectedPaths);
      callback.mockClear();
      (0, _walkObject2.default)((_walkObject = {}, _defineProperty(_walkObject, UNDEF, 1), _defineProperty(_walkObject, "b", [{
        c: [{
          a: 1,
          d: [{
            a: 1
          }]
        }]
      }, 2, 3]), _walkObject), callback, {
        walkArraysMatchingKeys: ['b', 'c'],
        pathType: 'nestedProperty'
      });
      actualPaths = callback.mock.calls.map(function (args) {
        return args[2];
      });
      expectedPaths = ['undefined', 'b', 'b[0]', 'b[0].c', 'b[0].c[0]', 'b[0].c[0].a', 'b[0].c[0].d', 'b[1]', 'b[2]'];
      expect(actualPaths).toEqual(expectedPaths);
    });
  });
  describe('makeAttrSetterPath', function () {
    function test(input, expected) {
      expect((0, _walkObject2.makeAttrSetterPath)(input)).toEqual(expected);
    }

    it('creates a basic path', function () {
      test(['foo', 'bar', 3, 'value'], 'foo.bar[3].value');
    });
    it('accepts array index notation', function () {
      test(['foo', 'bar', [3], 'value'], 'foo.bar[3].value');
    });
    it('accepts array index notation with strings', function () {
      test(['foo', 'bar', ['3'], 'value'], 'foo.bar[3].value');
    });
    it('strips _fullData prefix', function () {
      test(['_fullData', 2, 'bar', 3, 'value'], 'bar[3].value');
    });
    it('strips _fullInput prefix', function () {
      test(['_fullData', 2, '_fullInput', 'bar', 3, 'value'], 'bar[3].value');
    });
    it('strips _fullLayout prefix', function () {
      test(['_fullLayout', 'bar', 3, 'value'], 'bar[3].value');
    });
  });
});
//# sourceMappingURL=walkObject-test.js.map