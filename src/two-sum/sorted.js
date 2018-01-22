/**
 * @module src/reverse-a-string
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

function twoSumSorted(array, target) {
  var left = 0;
  var right = array.length - 1;
  while (left < right) {
    var sum = array[left] + array[right];
    if (sum === target) {
      return [left, right];
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return undefined;
}

module.exports = twoSum;
