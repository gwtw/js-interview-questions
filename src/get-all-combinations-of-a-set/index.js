/**
 * @license
 * js-interview-questions <http://github.com/Tyriar/js-interview-questions>
 * Copyright 2015 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-interview-questions/blob/master/LICENSE>
 */
'use strict';

/**
 * Get all combinations of a set.
 * @param {String|Array} set The set to extract combinations from.
 * @returns {Array} The resulting combinations.
 */
module.exports = function (set) {
  var results = [];
  for (var i = 0; i < set.length; i++) {
    // Record size as the list will change
    var resultsLength = results.length;
    for (var j = 0; j < resultsLength; j++) {
      results.push(set[i] + results[j]);
    }
    results.push(set[i]);
  }
  return results;
}
