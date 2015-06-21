var fibonacciRecursive = require('../src/fibonacci-sequence').fibonacciRecursive;
var fibonacciOptimised = require('../src/fibonacci-sequence').fibonacciOptimised;
var fibonacciIterative = require('../src/fibonacci-sequence').fibonacciIterative;

function fibonacciSequenceTests(algorithm) {
  describe('with input 0', function () {
    it('should return 0', function () {
      expect(algorithm(0)).toBe(0);
    });
  });

  describe('with input 1', function () {
    it('should return 1', function () {
      expect(algorithm(1)).toBe(1);
    });
  });

  describe('with input 2', function () {
    it('should return 1', function () {
      expect(algorithm(2)).toBe(1);
    });
  });

  describe('with input 3', function () {
    it('should return 2', function () {
      expect(algorithm(3)).toBe(2);
    });
  });

  describe('with input 4', function () {
    it('should return 3', function () {
      expect(algorithm(4)).toBe(3);
    });
  });

  describe('with input 5', function () {
    it('should return 5', function () {
      expect(algorithm(5)).toBe(5);
    });
  });

  describe('with input 6', function () {
    it('should return 8', function () {
      expect(algorithm(6)).toBe(8);
    });
  });

  describe('with input 7', function () {
    it('should return 13', function () {
      expect(algorithm(7)).toBe(13);
    });
  });

  describe('with input 8', function () {
    it('should return 21', function () {
      expect(algorithm(8)).toBe(21);
    });
  });

  describe('with input 9', function () {
    it('should return 34', function () {
      expect(algorithm(9)).toBe(34);
    });
  });

  describe('with input 10', function () {
    it('should return 55', function () {
      expect(algorithm(10)).toBe(55);
    });
  });
}

describe('fibonacciSequence', function () {
  'use strict';

  describe('fibonacciRecursive', function () {
    fibonacciSequenceTests(fibonacciRecursive);
  });

  describe('fibonacciOptimised', function () {
    fibonacciSequenceTests(fibonacciOptimised);
  });

  describe('fibonacciIterative', function () {
    fibonacciSequenceTests(fibonacciIterative);
  });
});
