var TwoStackQueue = require('../src/two-stack-queue');

describe('TwoStackQueue', function () {
  'use strict';

  it('should return undefined when calling pop() on an empty queue', function () {
    var queue = new TwoStackQueue();
    expect(queue.pop()).toBe(undefined);
    queue.push(1);
    queue.pop();
    expect(queue.pop()).toBe(undefined);
  });

  it('should push and pop 1 element', function () {
    var queue = new TwoStackQueue();
    queue.push(1);
    expect(queue.pop()).toBe(1);
  });

  it('should push and pop 2 elements', function () {
    var queue = new TwoStackQueue();
    queue.push(1);
    queue.push(2);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
  });

  it('should push and pop 3 element', function () {
    var queue = new TwoStackQueue();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(3);
  });

  it('should push and pop in shuffled order', function () {
    var queue = new TwoStackQueue();
    queue.push(1);
    queue.push(2);
    expect(queue.pop()).toBe(1);
    queue.push(3);
    queue.push(4);
    expect(queue.pop()).toBe(2);
    queue.push(5);
    expect(queue.pop()).toBe(3);
    expect(queue.pop()).toBe(4);
    expect(queue.pop()).toBe(5);
  });
});
