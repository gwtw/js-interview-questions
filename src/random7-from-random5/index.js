/**
 * @module src/random7-from-random5
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

/**
 * A random number generator that gets a uniformly distributed value from 1 to 7
 * given a function that gets a uniformly distributed value from 1 to 5.
 * @param {function} random5 A random number generator that gets a uniformly
 * distributed random number from 1 to 5.
 * @returns {number} A number from 1 to 7.
 */
function random7(random5) {
  // Get 0, 5, 10, 15 or 20 then add 0-4 (4% chance for 0-24)
  var val = (random5() - 1) * 5 + (random5() - 1);
  // If 0-20, return the result modulo 7 + 1 (12% chance for 1-7), otherwise
  // call recursively (16% chance)
  return val >= 21 ? random7(random5) : val % 7 + 1;
}

module.exports = random7;
