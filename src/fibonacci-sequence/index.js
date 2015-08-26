/**
 * @module src/fibonacci-sequence
 * @license
 * js-interview-questions <http://github.com/Tyriar/js-interview-questions>
 * Copyright 2015 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-interview-questions/blob/master/LICENSE>
 */
'use strict';

/**
 * Gets the Fibonacci number using a recursive algorithm.
 * @param {number} n The Fibonacci number to get.
 * @returns {number} The nth Fibonacci number
 */
function fibonacciRecursive(n) {
  if (n < 0)
    throw 'n much be >= 0';
  if (n === 0)
    return 0;
  if (n === 1)
    return 1;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

/**
 * Gets the Fibonacci number using a recursive algorithm that caches recursive
 * calls so fibonacciOptimised(x) only gets queried once for a given x.
 * @param {number} n The Fibonacci number to get.
 * @returns {number} The nth Fibonacci number
 */
function fibonacciOptimised(n, map) {
  if (n < 0)
    throw 'n much be >= 0';
  if (n === 0)
    return 0;
  if (n === 1)
    return 1;
  if (!map)
    map = {};
  if (!map[n])
    map[n] = fibonacciOptimised(n - 1, map) + fibonacciOptimised(n - 2, map);

  return map[n];
}

/**
 * Gets the Fibonacci number using an interative algorithm.
 * @param {number} n The Fibonacci number to get.
 * @returns {number} The nth Fibonacci number
 */
function fibonacciIterative(n) {
  if (n < 0)
    throw 'n much be >= 0';
  if (n === 0)
    return 0;
  if (n === 1)
    return 1;

  var first = 0;
  var second = 1;
  var counter = 1;
  var temp;

  while (counter < n) {
    temp = first;
    first = second;
    second = temp + first;
    counter++;
  }

  return second;
}

module.exports = {
  fibonacciRecursive: fibonacciRecursive,
  fibonacciOptimised: fibonacciOptimised,
  fibonacciIterative: fibonacciIterative
};
