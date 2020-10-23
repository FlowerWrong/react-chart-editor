"use strict";

var _index = require("../index");

/* eslint-disable no-magic-numbers */
describe('transpose', function () {
  it('correctly transposes 1d arrays', function () {
    var originalArray = [1, 2, 3];
    var transposedArray = (0, _index.transpose)(originalArray);
    expect(transposedArray.length).toBe(3);
    transposedArray.forEach(function (subArray) {
      expect(Array.isArray(subArray)).toBe(true);
      expect(subArray.length).toBe(1);
    });
    expect(transposedArray[0][0]).toBe(1);
    expect(transposedArray[1][0]).toBe(2);
    expect(transposedArray[2][0]).toBe(3);
  });
  it('correctly transposes 2d arrays', function () {
    var originalArray = [[1, 2, 3], [9, 8, 0]];
    var transposedArray = (0, _index.transpose)(originalArray);
    expect(transposedArray.length).toBe(3);
    transposedArray.forEach(function (subArray) {
      expect(Array.isArray(subArray)).toBe(true);
      expect(subArray.length).toBe(2);
    });
    expect(transposedArray[0][0]).toBe(1);
    expect(transposedArray[0][1]).toBe(9);
    expect(transposedArray[1][0]).toBe(2);
    expect(transposedArray[1][1]).toBe(8);
    expect(transposedArray[2][0]).toBe(3);
    expect(transposedArray[2][1]).toBe(0);
  });
  it('correctly fills non symmetrical 2d arrays', function () {
    var originalArray = [[1, 2], [9, 8, 7]];
    var transposedArray = (0, _index.transpose)(originalArray);
    expect(transposedArray.length).toBe(3);
    transposedArray.forEach(function (subArray) {
      expect(Array.isArray(subArray)).toBe(true);
      expect(subArray.length).toBe(2);
    });
    expect(transposedArray[0][0]).toBe(1);
    expect(transposedArray[0][1]).toBe(9);
    expect(transposedArray[1][0]).toBe(2);
    expect(transposedArray[1][1]).toBe(8);
    expect(transposedArray[2][0]).toBe(null);
    expect(transposedArray[2][1]).toBe(7);
  });
});
//# sourceMappingURL=transpose-test.js.map