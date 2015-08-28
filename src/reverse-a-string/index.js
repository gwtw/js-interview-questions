/**
 * @module src/reverse-a-string
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

/**
 * Reverses a string.
 * @param {string} text The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(text) {
  var result = '';
  for (var i = 0; i < text.length; i++) {
    result += text[text.length - 1 - i];
  }
  return result;
}

module.exports = reverseString;
