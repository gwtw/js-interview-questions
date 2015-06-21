var isTextPalindrome = require('../src/is-palindrome').isTextPalindrome;
var isPhrasePalindrome = require('../src/is-palindrome').isPhrasePalindrome;

describe('isTextPalindrome', function () {
  'use strict';

  it('should return true for palindromes', function () {
    expect(isTextPalindrome('')).toBe(true);
    expect(isTextPalindrome('a')).toBe(true);
    expect(isTextPalindrome('aa')).toBe(true);
    expect(isTextPalindrome('aba')).toBe(true);
    expect(isTextPalindrome('abba')).toBe(true);
    expect(isTextPalindrome('abcba')).toBe(true);
  });

  it('should return false for non-palindromes', function () {
    expect(isTextPalindrome('ab')).toBe(false);
    expect(isTextPalindrome('ab')).toBe(false);
    expect(isTextPalindrome('abc')).toBe(false);
    expect(isTextPalindrome('abac')).toBe(false);
    expect(isTextPalindrome('abcca')).toBe(false);
  });
});

describe('isPhrasePalindrome', function () {
  'use strict';

  it('should return true for palindromes', function () {
    expect(isPhrasePalindrome('')).toBe(true);
    expect(isPhrasePalindrome('a')).toBe(true);
    expect(isPhrasePalindrome('aa')).toBe(true);
    expect(isPhrasePalindrome('aba')).toBe(true);
    expect(isPhrasePalindrome('abba')).toBe(true);
    expect(isPhrasePalindrome('abcba')).toBe(true);
  });

  it('should return true for phrase palindromes', function () {
    expect(isPhrasePalindrome('race car')).toBe(true);
    expect(isPhrasePalindrome('taco cat')).toBe(true);
    expect(isPhrasePalindrome('Cain: a maniac.')).toBe(true);
    expect(isPhrasePalindrome('Was it a car or a cat I saw?')).toBe(true);
    expect(isPhrasePalindrome('A man, a plan, a canal, Panama')).toBe(true);
  });

  it('should return false for non-palindromes', function () {
    expect(isPhrasePalindrome('ab')).toBe(false);
    expect(isPhrasePalindrome('ab')).toBe(false);
    expect(isPhrasePalindrome('abc')).toBe(false);
    expect(isPhrasePalindrome('abac')).toBe(false);
    expect(isPhrasePalindrome('abcca')).toBe(false);
  });
});
