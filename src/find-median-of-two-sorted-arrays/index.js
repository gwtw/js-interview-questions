/**
 * @module src/find-median-of-two-sorted-arrays
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

/**
 * Gets the median of a single sorted array.
 *
 * @param {number[]} array The sorted array to get the median of.
 * @return {number} The median of the array.
 */
function medianOfArray(array) {
  var mid = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return (array[mid] + array[mid - 1]) / 2;
  }
  return array[mid];
}

/**
 * Gets the median of a sorted array with an even number of elements plus an
 * additional value.
 *
 * @param {number[]} array The sorted array.
 * @param {number} arrayMedian The median of the array excluding the additional
 * value.
 * @param {number} value The additional value to include in median calculation.
 * @return {number} The median of the array including the additional value.
 */
function findMedianOfArrayAndValueEvenCase(array, arrayMedian, value) {
  if (arrayMedian > value) {
    var left = array[array.length / 2 - 1];
    return Math.max(left, value);
  } else {
    var right = array[array.length / 2];
    return Math.min(right, value);
  }
}

/**
 * Gets the median of a sorted array with an odd number of elements plus an
 * additional value.
 *
 * @param {number[]} array The sorted array.
 * @param {number} arrayMedian The median of the array excluding the additional
 * value.
 * @param {number} value The additional value to include in median calculation.
 * @return {number} The median of the array including the additional value.
 */
function findMedianOfArrayAndValueOddCase(array, arrayMedian, value) {
  var midIndex = (array.length - 1) / 2;
  var left = array[midIndex - 1];
  var mid = array[midIndex];
  var right = array[midIndex + 1];
  if (value < left) {
    return (mid + left) / 2;
  }
  if (value > right) {
    return (mid + right) / 2;
  }
  return (mid + value) / 2;
}

/**
 * Gets the median of a sorted array and an additional value.
 *
 * @param {number[]} array The sorted array.
 * @param {number} value The additional value to include in median calculation.
 * @return {number} The median of the array including the additional value.
 */
function findMedianOfArrayAndValue(array, value) {
  var arrayMedian = medianOfArray(array);
  if (arrayMedian === value) {
    return arrayMedian;
  }
  if (array.length % 2 === 0) {
    return findMedianOfArrayAndValueEvenCase(array, arrayMedian, value);
  }
  return findMedianOfArrayAndValueOddCase(array, arrayMedian, value);
}

/**
 * Gets whether two values belong in sorted order in the middle of an array.
 * 
 * @param {number[]} array The sorted array.
 * @param {number} small The smaller number.
 * @param {number} large The larger number.
 * @return {boolean} Whether the two values belong in the middle.
 */
function areValuesInMiddleOfEvenArray(array, small, large) {
  return small > array[Math.floor(array.length / 2) - 1] &&
      large < array[Math.floor(array.length / 2)];
}

/**
 * Gets the median of two sorted arrays.
 *
 * @param {number[]} A The first sorted array.
 * @param {number[]} B The second sorted array.
 * @returns {number} The median of A and B.
 */
function findMedian(A, B) {
  if (A.length === 0 && B.length === 0) {
    return undefined;
  }
  if (A.length === 1 && B.length === 1) {
    return (A[0] + B[0]) / 2;
  }
  if (A.length === 0) {
    return medianOfArray(B);
  }
  if (B.length === 0) {
    return medianOfArray(A);
  }
  if (A.length === 1) {
    return findMedianOfArrayAndValue(B, A[0]);
  }
  if (B.length === 1) {
    return findMedianOfArrayAndValue(A, B[0]);
  }
  if (A.length === 2 && B.length > 2 && B.length % 2 === 0) {
    if (areValuesInMiddleOfEvenArray(B, A[0], A[1])) {
      return (A[0] + A[1]) / 2; 
    }
  }
  if (B.length === 2 && A.length > 2 && A.length % 2 === 0) {
    if (areValuesInMiddleOfEvenArray(A, B[0], B[1])) {
      return (B[0] + B[1]) / 2; 
    }
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
