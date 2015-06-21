var getAllCombinationsOfASet = require('../src/get-all-combinations-of-a-set');

describe('getAllCombinationsOfASet', function () {
  'use strict';

  describe('with input ""', function () {
    it('should return []', function () {
      expect(getAllCombinationsOfASet('').length).toBe(0);
    });
  });

  describe('with input "a"', function () {
    it('should return ["a"]', function () {
      var result = getAllCombinationsOfASet('a');
      expect(result.length).toBe(1);
      expect(result[0]).toBe('a');
    });
  });

  describe('with input "a"', function () {
    it('should return ["a"]', function () {
      var result = getAllCombinationsOfASet('a');
      expect(result.length).toBe(1);
      expect(result[0]).toBe('a');
    });
  });

  describe('with input "ab"', function () {
    it('should return ["a", "b", "ba"]', function () {
      var result = getAllCombinationsOfASet('ab');
      expect(result.length).toBe(3);
      expect(result.indexOf('a') >= 0).toBe(true);
      expect(result.indexOf('b') >= 0).toBe(true);
      expect(result.indexOf('ba') >= 0).toBe(true);
    });
  });

  describe('with input "abc"', function () {
    it('should return ["a", "b", "c", "ba", "ca", "cb", "cba"]', function () {
      var result = getAllCombinationsOfASet('abc');
      expect(result.length).toBe(7);
      expect(result.indexOf('a') >= 0).toBe(true);
      expect(result.indexOf('b') >= 0).toBe(true);
      expect(result.indexOf('c') >= 0).toBe(true);
      expect(result.indexOf('ba') >= 0).toBe(true);
      expect(result.indexOf('ca') >= 0).toBe(true);
      expect(result.indexOf('cb') >= 0).toBe(true);
      expect(result.indexOf('cba') >= 0).toBe(true);
    });
  });
});
