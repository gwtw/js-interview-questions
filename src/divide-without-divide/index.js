/**
 * @license
 * js-interview-questions <http://github.com/Tyriar/js-interview-questions>
 * Copyright 2015 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-interview-questions/blob/master/LICENSE>
 */
'use strict';

/**
 * Use integer division on two numbers
 * @param {integer} a The numerator.
 * @param {integer} b The denominator.
 * @returns {integer} The result of a / b.
 */
function integerDivideWithoutDivide(a, b) {
  if (b === 0) {
    throw 'Division by zero is undefined: ' + a + '/' + b;
  }
  var sign = 1;
  if (a < 0) {
    a = -a;
    sign = -sign;
  }
  if (b < 0) {
    b = -b;
    sign = -sign;
  }
  var result = 0;
  while (a >= 0) {
    a -= b;
    result++;
  }
  return (result - 1) * sign;
}

module.exports = integerDivideWithoutDivide;
