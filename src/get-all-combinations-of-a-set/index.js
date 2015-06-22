/**
 * @license
 * js-interview-questions <http://github.com/Tyriar/js-interview-questions>
 * Copyright 2015 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-interview-questions/blob/master/LICENSE>
 */
'use strict';

/**
 * Get all combinations of characters in a string.
 * @param {String} text The text to extract combinations from.
 * @returns {Array} The resulting combinations.
 */
function getAllCombinationsOfASet(text) {
  var results = [];
  for (var i = 0; i < text.length; i++) {
    // Record size as the list will change
    var resultsLength = results.length;
    for (var j = 0; j < resultsLength; j++) {
      results.push(text[i] + results[j]);
    }
    results.push(text[i]);
  }
  return results;
}

module.exports = getAllCombinationsOfASet;
