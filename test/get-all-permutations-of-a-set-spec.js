var getAllPermutationsOfASet = require('../src/get-all-permutations-of-a-set');

describe('getAllPermutationsOfASet', function () {
  'use strict';

  describe('with input ""', function () {
    it('should return []', function () {
      expect(getAllPermutationsOfASet('').length).toBe(0);
    });
  });

  describe('with input "a"', function () {
    it('should return ["a"]', function () {
      var result = getAllPermutationsOfASet('a');
      expect(result.length).toBe(1);
      expect(result[0]).toBe('a');
    });
  });

  describe('with input "a"', function () {
    it('should return ["a"]', function () {
      var result = getAllPermutationsOfASet('a');
      expect(result.length).toBe(1);
      expect(result[0]).toBe('a');
    });
  });

  describe('with input "ab"', function () {
    it('should return ["ab", "ba"]', function () {
      var result = getAllPermutationsOfASet('ab');
      expect(result.length).toBe(2);
      expect(result.indexOf('ab') >= 0).toBe(true);
      expect(result.indexOf('ba') >= 0).toBe(true);
    });
  });

  describe('with input "abc"', function () {
    it('should return ["abc", "acb", "bac", "bca", "cab", "cba"]', function () {
      var result = getAllPermutationsOfASet('abc');
      expect(result.length).toBe(6);
      expect(result.indexOf('abc') >= 0).toBe(true);
      expect(result.indexOf('acb') >= 0).toBe(true);
      expect(result.indexOf('bac') >= 0).toBe(true);
      expect(result.indexOf('bca') >= 0).toBe(true);
      expect(result.indexOf('cab') >= 0).toBe(true);
      expect(result.indexOf('cba') >= 0).toBe(true);
    });
  });
});
