var findMedian = require('../src/find-median-of-two-sorted-arrays').findMedian;

describe('findMedian', function () {
  'use strict';

  describe('given two empty arrays', function () {
    it('should return undefined', function () {
      expect(findMedian([], [])).toBe(undefined);
    });
  });

  describe('given one single element array', function () {
    it('should return undefined', function () {
      expect(findMedian([], [1])).toBe(1);
      expect(findMedian([1], [])).toBe(1);
    });
  });

  describe('given two single element arrays', function () {
    it('should return the median', function () {
      expect(findMedian([1], [3])).toBe(2);
    });
  });

  describe('given an empty first array', function () {
    it('should return the median of the second array', function () {
      expect(findMedian([], [1, 2, 3, 4, 5])).toBe(3);
      expect(findMedian([], [-2, 6, 10, 22, 23])).toBe(10);
      expect(findMedian([], [1, 2, 4, 4, 5, 6])).toBe(4);
      expect(findMedian([], [1, 2, 3, 4, 5, 6])).toBe(3.5);
    });
  });

  describe('given an empty second array', function () {
    it('should return the median of the first array', function () {
      expect(findMedian([1, 2, 3, 4, 5], [])).toBe(3);
      expect(findMedian([-2, 6, 10, 22, 23], [])).toBe(10);
      expect(findMedian([1, 2, 4, 4, 5, 6], [])).toBe(4);
      expect(findMedian([1, 2, 3, 4, 5, 6], [])).toBe(3.5);
    });
  });

  describe('given two same sized small arrays', function () {
    it('should return the median', function () {
      expect(findMedian([1, 3, 5, 6], [3, 5, 6, 8])).toBe(5);
      expect(findMedian([3, 4, 5, 6, 7], [4, 5, 6, 7, 8])).toBe(5.5);
      expect(findMedian([1, 2, 3, 4], [4, 5, 6, 7])).toBe(4);
      expect(findMedian([1, 2, 3, 4], [5, 6, 7, 8])).toBe(4.5);
      expect(findMedian([1, 2, 3, 4], [6, 7, 8, 9])).toBe(5);
      expect(findMedian([1, 2, 3, 4], [7, 8, 9, 10])).toBe(5.5);
      expect(findMedian([1, 1, 1, 1], [1, 1, 1, 1])).toBe(1);
    });
  });

  describe('given a larger first array', function () {
    it('should return the median', function () {
      expect(findMedian([1, 2, 4, 6, 7], [3, 5, 8, 9])).toBe(5);
      expect(findMedian([1, 2, 3, 4, 5, 6, 8, 9, 10], [7])).toBe(5.5);
      expect(findMedian([1, 2, 3, 4, 5, 6, 8, 9], [7])).toBe(5);
      expect(findMedian([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3])).toBe(3.5);
      expect(findMedian([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3])).toBe(3);
      expect(findMedian([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3])).toBe(4.5);
      expect(findMedian([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 3])).toBe(4);
    });
  });

  describe('given a larger second array', function () {
    it('should return the median', function () {
      expect(findMedian([3, 5, 8, 9], [1, 2, 4, 6, 7])).toBe(5);
      expect(findMedian([7], [1, 2, 3, 4, 5, 6, 8, 9, 10])).toBe(5.5);
      expect(findMedian([7], [1, 2, 3, 4, 5, 6, 8, 9])).toBe(5);
      expect(findMedian([1, 2, 3], [1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(3.5);
      expect(findMedian([1, 2, 3], [1, 2, 3, 4, 5, 6, 7, 8])).toBe(3);
      expect(findMedian([2, 3], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(4.5);
      expect(findMedian([2, 3], [1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(4);
    });
  });
});
