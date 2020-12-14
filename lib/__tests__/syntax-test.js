"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _glob = _interopRequireDefault(require("glob"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// check for for focus and exclude jasmine blocks
var BLACK_LIST = ['fdescribe', 'fit', 'xdescribe', 'xit', 'it\\.only', 'describe\\.only'];
var REGEXS = BLACK_LIST.map(function (token) {
  return new RegExp("^\\s*".concat(token, "\\(.*"));
});
describe('Syntax and test validation', function () {
  describe("ensures ".concat(BLACK_LIST, " is not present in tests"), function () {
    var files = _glob.default.sync('!(node_modules|examples)/**/__tests__/*.js');

    files.forEach(function (file) {
      return it("checks ".concat(file, " for test checks"), function () {
        var code = _fs.default.readFileSync(file, {
          encoding: 'utf-8'
        });

        code.split('\n').forEach(function (line) {
          expect(REGEXS.some(function (re) {
            return re.test(line);
          })).toBe(false);
        });
      });
    });
  });
});
//# sourceMappingURL=syntax-test.js.map