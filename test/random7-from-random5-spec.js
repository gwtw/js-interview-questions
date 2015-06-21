var random7 = require('../src/random7-from-random5');

describe('random7', function () {
  'use strict';

  describe('given mocked random5 that returns integers', function () {
    it('should return uniformly distributed numbers', function () {
      function fakeRandom(sequence) {
        return function () {
          return sequence.shift();
        }
      }

      // Go through first 1-21 sequences that can give 1-7
      expect(random7(fakeRandom([1, 1]))).toBe(1);
      expect(random7(fakeRandom([1, 2]))).toBe(2);
      expect(random7(fakeRandom([1, 3]))).toBe(3);
      expect(random7(fakeRandom([1, 4]))).toBe(4);
      expect(random7(fakeRandom([1, 5]))).toBe(5);
      expect(random7(fakeRandom([2, 1]))).toBe(6);
      expect(random7(fakeRandom([2, 2]))).toBe(7);
      expect(random7(fakeRandom([2, 3]))).toBe(1);
      expect(random7(fakeRandom([2, 4]))).toBe(2);
      expect(random7(fakeRandom([2, 5]))).toBe(3);
      expect(random7(fakeRandom([3, 1]))).toBe(4);
      expect(random7(fakeRandom([3, 2]))).toBe(5);
      expect(random7(fakeRandom([3, 3]))).toBe(6);
      expect(random7(fakeRandom([3, 4]))).toBe(7);
      expect(random7(fakeRandom([3, 5]))).toBe(1);
      expect(random7(fakeRandom([4, 1]))).toBe(2);
      expect(random7(fakeRandom([4, 2]))).toBe(3);
      expect(random7(fakeRandom([4, 3]))).toBe(4);
      expect(random7(fakeRandom([4, 4]))).toBe(5);
      expect(random7(fakeRandom([4, 5]))).toBe(6);
      expect(random7(fakeRandom([5, 1]))).toBe(7);
      // Ensure that random7 is recursively called
      expect(random7(fakeRandom([5, 2, 1, 1]))).toBe(1);
      expect(random7(fakeRandom([5, 3, 1, 2]))).toBe(2);
      expect(random7(fakeRandom([5, 4, 1, 3]))).toBe(3);
      expect(random7(fakeRandom([5, 5, 1, 4]))).toBe(4);
      expect(random7(fakeRandom([5, 3, 1, 5]))).toBe(5);
      expect(random7(fakeRandom([5, 4, 2, 1]))).toBe(6);
      expect(random7(fakeRandom([5, 5, 2, 2]))).toBe(7);
    });
  });
});
