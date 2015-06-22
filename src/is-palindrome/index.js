/**
 * @license
 * js-interview-questions <http://github.com/Tyriar/js-interview-questions>
 * Copyright 2015 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-interview-questions/blob/master/LICENSE>
 */
'use strict';

/**
 * Determines whether a string is a palindrome.
 * @param {string} text The string to check.
 * @returns {boolean} Whether the string is a palindrome.
 */
function isTextPalindrome(text) {
  if (text === undefined) {
    return false;
  }
  var left = 0;
  var right = text.length - 1;
  while (left < right) {
    if (text[left++] !== text[right--]) {
      return false;
    }
  }
  return true;
}

/**
 * Determines whether a phrase is a palindrome.
 * @param {string} text The phrase to check.
 * @returns {boolean} Whether the phrase is a palindrome.
 */
function isPhrasePalindrome(text) {
  var chars = text.replace(/[^a-zA-Z]/g, '').toLowerCase();
  return isTextPalindrome(chars);
}

module.exports = {
  isTextPalindrome: isTextPalindrome,
  isPhrasePalindrome: isPhrasePalindrome
};
