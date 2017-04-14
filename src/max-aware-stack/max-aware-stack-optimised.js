/**
 * @module src/max-aware-stack/max-aware-stack-optimized
 * @license MIT Copyright 2017 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

/**
 * Creates a stack that is aware of its maximum value in constant time.
 */
function MaxAwareStackOptimised() {
  this.valueStack = [];
  this.maxStack = [];
}

/**
 * Push a value to the stack.
 * @param {*} value The value to push.
 */
MaxAwareStackOptimised.prototype.push = function (value) {
  if (this.maxStack.length === 0 || this.max() <= value) {
    this.maxStack.push(value);
  }
  this.valueStack.push(value);
}

/**
 * Pops a value from the stack and returns it.
 * @return {*} The popped value.
 */
MaxAwareStackOptimised.prototype.pop = function () {
  if (this.valueStack.length === 0) {
    return undefined;
  }
  var result = this.valueStack.pop();
  if (result === this.max()) {
    this.maxStack.pop();
  }
  return result;
}

/**
 * Gets the maximum value in the stack.
 * @return {*} The maximum value.
 */
MaxAwareStackOptimised.prototype.max = function () {
  if (this.maxStack.length === 0) {
    return undefined;
  }
  return this.maxStack[this.maxStack.length - 1];
}

module.exports = MaxAwareStackOptimised;
