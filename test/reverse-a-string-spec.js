var reverseString = require('../src/reverse-a-string');

describe('reverseString', function () {
  'use strict';

  describe('with input ""', function () {
    it('should return ""', function () {
      expect(reverseString('')).toBe('');
    });
  });

  describe('with input of a single character', function () {
    it('should return the character', function () {
      expect(reverseString('a')).toBe('a');
      expect(reverseString('b')).toBe('b');
    });
  });

  describe('with input of size >= 2', function () {
    it('should return the reversed string', function () {
      expect(reverseString('ab')).toBe('ba');
      expect(reverseString('abc')).toBe('cba');
      expect(reverseString('abcd')).toBe('dcba');
      expect(reverseString('abcde')).toBe('edcba');
      expect(reverseString('abcdef')).toBe('fedcba');
      expect(reverseString('abcdefg')).toBe('gfedcba');
    });
  });
});
