'use strict';

var twoSum = require('../src/two-sum/linear');

describe('twoSum linear', function () {
  it('should return undefined when called on an empty array', function () {
    expect(twoSum([], 1)).toBe(undefined);
  });
  it('should return correct result when it exists in sorted lists', function () {
    expect(twoSum([1, 2, 4, 8, 16], 3).sort()).toEqual([0, 1]);
    expect(twoSum([1, 2, 4, 8, 16], 6).sort()).toEqual([1, 2]);
    expect(twoSum([1, 2, 4, 8, 16], 17).sort()).toEqual([0, 4]);
    expect(twoSum([1, 2, 4, 8, 16], 20).sort()).toEqual([2, 4]);
    expect(twoSum([1, 2, 4, 8, 16], 24).sort()).toEqual([3, 4]);
  });
  it('should return correct result when it exists in a jumbled lists', function () {
    expect(twoSum([16, 1, 4, 2, 8], 3).sort()).toEqual([1, 3]);
    expect(twoSum([16, 1, 4, 2, 8], 6).sort()).toEqual([2, 3]);
    expect(twoSum([16, 1, 4, 2, 8], 17).sort()).toEqual([0, 1]);
    expect(twoSum([16, 1, 4, 2, 8], 20).sort()).toEqual([0, 2]);
    expect(twoSum([16, 1, 4, 2, 8], 24).sort()).toEqual([0, 4]);
  });
});
