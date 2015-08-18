/**
 * @license
 * js-interview-questions <http://github.com/Tyriar/js-interview-questions>
 * Copyright 2015 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-interview-questions/blob/master/LICENSE>
 */
'use strict';

/**
 * Creates a singly linked list node.
 * @constructor
 * @param {Object} data The data associated with this node.
 * @param {SinglyLinkedList} next The next node in the linked list.
 */
function SinglyLinkedList(data, next) {
  this.data = data;
  this.next = next;
}

/**
 * Gets the nth last element of a {@link SinglyLinkedList}.
 * @param {SinglyLinkedList} head The head of the list.
 * @param {SinglyLinkedList} n The number of elements to count backward.
 * @returns The nth last element of the linked list, if it is not large enough,
 * return 0
 */
function getNthLastElement(head, n) {
  if (!head || n < 1) {
    return undefined;
  }

  var current = head;
  var nBehindCurrent = head;
  var countBehindCurrent = 0;

  for (var i = 0; i < n - 1; i++) {
    current = current.next;
    if (!current) {
      return undefined;
    }
  }

  while (typeof current.next !== 'undefined') {
    nBehindCurrent = nBehindCurrent.next;
    current = current.next;
  }

  return nBehindCurrent;
}

module.exports = {
  SinglyLinkedList: SinglyLinkedList,
  getNthLastElement: getNthLastElement
};
