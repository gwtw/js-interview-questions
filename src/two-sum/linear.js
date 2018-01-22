/**
 * @module src/reverse-a-string
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

function twoSumLinear(array, target) {
  let hash = {};
  for (let i = 0; i < array.length; i++) {
    let requiredValue = target - array[i];
    if (requiredValue in hash) {
      return [i, hash[requiredValue]];
    }
    hash[array[i]] = i;
  };
  return undefined;
}

module.exports = twoSum;
