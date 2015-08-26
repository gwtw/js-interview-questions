/**
 * @module src/get-all-permutations-of-a-set
 * @license
 * js-interview-questions <http://github.com/Tyriar/js-interview-questions>
 * Copyright 2015 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-interview-questions/blob/master/LICENSE>
 */
'use strict';

/**
 * Get all permutations of characters in a string.
 * @param {String} text The text to extract permutations from.
 * @returns {Array} The resulting permutations.
 */
function getAllPermutationsOfASet(text) {
  var results = [];

  if (text.length === 1) {
    results.push(text);
    return results;
  }

  for (var i = 0; i < text.length; i++) {
    var first = text[i];
    var remains = text.substring(0, i) + text.substring(i + 1);
    var innerPermutations = getAllPermutationsOfASet(remains);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(first + innerPermutations[j]);
    }
  }

  return results;
}

module.exports = getAllPermutationsOfASet;
