'use strict';

var twoSum = require('../src/two-sum/sorted');

describe('twoSum sorted', function () {
  it('should return undefined when called on an empty array', function () {
    expect(twoSum([], 1)).toBe(undefined);
  });
  it('should return correct result when it exists', function () {
    expect(twoSum([1, 2, 4, 8, 16], 3)).toEqual([0, 1]);
    expect(twoSum([1, 2, 4, 8, 16], 6)).toEqual([1, 2]);
    expect(twoSum([1, 2, 4, 8, 16], 17)).toEqual([0, 4]);
    expect(twoSum([1, 2, 4, 8, 16], 20)).toEqual([2, 4]);
    expect(twoSum([1, 2, 4, 8, 16], 24)).toEqual([3, 4]);
  });
});
