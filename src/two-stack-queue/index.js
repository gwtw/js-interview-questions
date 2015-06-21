/**
 * @constructor
 */
function TwoStackQueue() {
  this.inbox = [];
  this.outbox = [];
}

TwoStackQueue.prototype.push = function (value) {
  this.inbox.push(value);
}

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
}

module.exports = TwoStackQueue;
