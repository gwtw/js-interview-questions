/**
 * @module src/max-aware-stack/max-aware-stack
 * @license MIT Copyright 2017 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

/**
 * Creates a stack that is aware of its maximum value in constant time.
 */
function MaxAwareStack() {
  // Store the value and the maximum at any given point in objects of form:
  // { value: number, max: number }
  this.stack = [];
}

/**
 * Push a value to the stack.
 * @param {*} value The value to push.
 */
MaxAwareStack.prototype.push = function (value) {
  var top = this._top();
  var entry;
  if (!top) {
    entry = {
      value: value,
      max: value
    };
  } else {
    entry = {
      value: value,
      max: value > top.max ? value : top.max
    };
  }
  this.stack.push(entry);
}

/**
 * Pops a value from the stack and returns it.
 * @return {*} The popped value.
 */
MaxAwareStack.prototype.pop = function () {
  if (this.stack.length === 0) {
    return undefined;
  }
  return this.stack.pop().value;
}

/**
 * Gets the maximum value in the stack.
 * @return {*} The maximum value.
 */
MaxAwareStack.prototype.max = function () {
  if (this.stack.length === 0) {
    return undefined;
  }
  return this._top().max;
}

/**
 * A private convenience function for getting the top entry of the stack.
 * @return {Object} The top entry.
 */
MaxAwareStack.prototype._top = function () {
  return this.stack[this.stack.length - 1];
}

module.exports = MaxAwareStack;
