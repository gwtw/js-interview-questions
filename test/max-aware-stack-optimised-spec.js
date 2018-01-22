'use strict';

var MaxAwareStackOptimised = require('../src/max-aware-stack/max-aware-stack-optimised');

describe('MaxAwareStackOptimised', function () {
  it('should return undefined when calling pop() on an empty stack', function () {
    var stack = new MaxAwareStackOptimised();
    expect(stack.pop()).toBe(undefined);
    stack.push(1);
    stack.pop();
    expect(stack.pop()).toBe(undefined);
  });

  it('should push and pop 1 element', function () {
    var stack = new MaxAwareStackOptimised();
    stack.push(1);
    expect(stack.pop()).toBe(1);
  });

  it('should push and pop 2 elements', function () {
    var stack = new MaxAwareStackOptimised();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it('should push and pop 3 element', function () {
    var stack = new MaxAwareStackOptimised();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it('should push and pop in shuffled order', function () {
    var stack = new MaxAwareStackOptimised();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    stack.push(3);
    stack.push(4);
    expect(stack.pop()).toBe(4);
    stack.push(5);
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(1);
  });

  it('should return undefined as the maximum on an empty stack', function () {
    var stack = new MaxAwareStackOptimised();
    expect(stack.max()).toBe(undefined);
    stack.push(1);
    stack.pop();
    expect(stack.max()).toBe(undefined);
  });

  it('should return the maximum when values are pushed', function () {
    var stack = new MaxAwareStackOptimised();
    stack.push(1);
    expect(stack.max()).toBe(1);
    stack.push(3);
    expect(stack.max()).toBe(3);
    stack.push(2);
    expect(stack.max()).toBe(3);
  });

  it('should record the maximum when values are popped', function () {
    var stack = new MaxAwareStackOptimised();
    stack.push(1);
    stack.push(3);
    stack.push(2);
    expect(stack.max()).toBe(3);
    stack.pop();
    expect(stack.max()).toBe(3);
    stack.pop();
    expect(stack.max()).toBe(1);
    stack.pop();
    expect(stack.max()).toBe(undefined);
  });

  it('should work with duplicate values', function () {
    var stack = new MaxAwareStackOptimised();
    stack.push(1);
    stack.push(1);
    stack.push(2);
    stack.push(2);
    expect(stack.max()).toBe(2);
    stack.pop();
    expect(stack.max()).toBe(2);
    stack.pop();
    expect(stack.max()).toBe(1);
    stack.pop();
    expect(stack.max()).toBe(1);
    stack.pop();
    expect(stack.max()).toBe(undefined);
  });
});
