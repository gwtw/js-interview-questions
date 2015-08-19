/**
 * @license
 * js-interview-questions <http://github.com/Tyriar/js-interview-questions>
 * Copyright 2015 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-interview-questions/blob/master/LICENSE>
 */
'use strict';

/**
 * Gets the median of a single sorted array.
 *
 * @param {number[]} array The sorted array to get the median of.
 * @return The median of the array.
 */
function medianOfArray(array) {
  var mid = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return (array[mid] + array[mid - 1]) / 2;
  }
  return array[mid];
}

/**
 * Binary searches an array, returning the index of the array in which the
 * specified value should be inserted.
 *
 * @param {number[]} array The value being searched.
 * @param {number} value The value being inserted.
 * @return The index where value can be inserted
 */
function binarySearch(array, value) {
  if (array.length === 0) {
    return 0;
  }
  if (value <= array[0]) {
    return 0;
  }
  if (value >= array[array.length - 1]) {
    return array.length - 1;
  }
  var low = 0;
  var high = array.length - 1;
  while (low <= high) {
    var mid = Math.floor((high + low) / 2);
    if (array[mid] === value) {
      return mid;
    }
    if (array[mid] > value) {
      high = mid - 1;
      if (high < low) {
        return mid;
      }
    } else {
      low = mid + 1;
      if (low > high) {
        return mid + 1;
      }
    }
  }
  return undefined;
}

/**
 * Binary searches an array, inserting the specified value in sorted order.
 *
 * @param {number[]} array The value being searched.
 * @param {number} value The value being inserted.
 */
function binarySearchInsert(array, value) {
  var index = binarySearch(array, value);
  array.splice(index, 0, value);
}

/**
 * Gets the median of two sorted arrays.
 *
 * @param {number[]} A The first sorted array.
 * @param {number[]} B The second sorted array.
 * @returns The median of A and B.
 */
function findMedian(A, B) {
  if (A.length === 0 && B.length === 0) {
    return undefined;
  }
  if (A.length === 1 && B.length === 1) {
    return (A[0] + B[0]) / 2;
  }
  if (A.length === 1 && B.length > 1) {
    binarySearchInsert(B, A[0]);
    A.length = 0;
  }
  if (B.length === 1 && A.length > 1) {
    binarySearchInsert(A, B[0]);
    B.length = 0;
  }
  if (A.length === 0) {
    return medianOfArray(B);
  }
  if (B.length === 0) {
    return medianOfArray(A);
  }

  var medianA = medianOfArray(A);
  var medianB = medianOfArray(B);
  if (medianA === medianB) {
    return medianA;
  }
  var maxDiscardable = Math.floor(Math.min(A.length / 2 - 1, B.length / 2 - 1));
  if (maxDiscardable < 1) {
    maxDiscardable = 1;
  }
  if (medianA < medianB) {
    A.splice(0, maxDiscardable);
    B.splice(B.length - maxDiscardable);
  } else {
    A.splice(A.length - maxDiscardable);
    B.splice(0, maxDiscardable);
  }
  return findMedian(A, B);
}

module.exports = {
  findMedian: findMedian
};
