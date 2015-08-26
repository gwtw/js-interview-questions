/**
 * @module src/two-stack-queue
 * @license
 * js-interview-questions <http://github.com/Tyriar/js-interview-questions>
 * Copyright 2015 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-interview-questions/blob/master/LICENSE>
 */
'use strict';

/**
 * Creates a queue implemented with two stacks.
 * @constructor
 */
function TwoStackQueue() {
  this.inbox = [];
  this.outbox = [];
}

/**
 * Push a value to the queue.
 * @param {Object} value The value to push.
 */
TwoStackQueue.prototype.push = function (value) {
  this.inbox.push(value);
};

/**
 * Pops a value from the queue and returns it.
 * @return {Object} The popped value.
 */
TwoStackQueue.prototype.pop = function () {
  if (!this.outbox.length) {
    if (!this.inbox.length) {
      return undefined;
    }
    while (this.inbox.length) {
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox.pop();
};

module.exports = TwoStackQueue;
