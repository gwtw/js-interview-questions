/**
 * @license
 * js-interview-questions <http://github.com/Tyriar/js-interview-questions>
 * Copyright 2015 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-interview-questions/blob/master/LICENSE>
 */
'use strict';

/**
 * Creates a doubly linked list node.
 * @constructor
 * @param {Object} data The data associated with this node.
 * @param {SinglyLinkedList} next The next node in the linked list.
 */
function DoublyLinkedList(data, next) {
  this.data = data;
  this.next = next;
  if (this.next) {
    this.next.prev = this;
  }
  this.prev = undefined;
}

/**
 * Reverse a {@link DoublyLinkedList}.
 * @param {DoublyLinkedList} head The head of the list.
 * @returns The new head of the linked list.
 */
function reverseDoubly(head) {
  while (head != null) {
    var temp = head.next;
    head.next = head.prev;
    head.prev = temp;
    if (!temp) {
      break;
    }
    head = temp;
  }
  return head;
}

module.exports = {
  DoublyLinkedList: DoublyLinkedList,
  reverseDoubly: reverseDoubly
};
