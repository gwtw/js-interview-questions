var divideWithoutDivide = require('../src/divide-without-divide');

describe('divideWithoutDivide', function () {
  'use strict';

  it('should throw when dividing by zero', function () {
    expect(divideWithoutDivide.bind(undefined, 1, 0)).toThrow();
  });

  it('should divide by 1', function () {
    expect(divideWithoutDivide(0, 1)).toBe(0);
    expect(divideWithoutDivide(1, 1)).toBe(1);
    expect(divideWithoutDivide(2, 1)).toBe(2);
    expect(divideWithoutDivide(3, 1)).toBe(3);
    expect(divideWithoutDivide(4, 1)).toBe(4);
  });

  it('should divide positive numbers', function () {
    expect(divideWithoutDivide(20, 2)).toBe(10);
    expect(divideWithoutDivide(20, 3)).toBe(6);
    expect(divideWithoutDivide(30, 4)).toBe(7);
    expect(divideWithoutDivide(30, 5)).toBe(6);
    expect(divideWithoutDivide(40, 6)).toBe(6);
    expect(divideWithoutDivide(40, 7)).toBe(5);
  });

  it('should divide negative numbers', function () {
    expect(divideWithoutDivide(-20, 2)).toBe(-10);
    expect(divideWithoutDivide(-20, 3)).toBe(-6);
    expect(divideWithoutDivide(-30, 4)).toBe(-7);
    expect(divideWithoutDivide(-30, 5)).toBe(-6);
    expect(divideWithoutDivide(-40, 6)).toBe(-6);
    expect(divideWithoutDivide(-40, 7)).toBe(-5);
  });

  it('should divide by negative numbers', function () {
    expect(divideWithoutDivide(20, -2)).toBe(-10);
    expect(divideWithoutDivide(20, -3)).toBe(-6);
    expect(divideWithoutDivide(30, -4)).toBe(-7);
    expect(divideWithoutDivide(30, -5)).toBe(-6);
    expect(divideWithoutDivide(40, -6)).toBe(-6);
    expect(divideWithoutDivide(40, -7)).toBe(-5);
  });

  it('should divide negative numerator and denominator', function () {
    expect(divideWithoutDivide(-20, -3)).toBe(6);
    expect(divideWithoutDivide(-30, -5)).toBe(6);
    expect(divideWithoutDivide(-40, -7)).toBe(5);
  });
});
