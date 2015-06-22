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
 * Reverse a {@link SinglyLinkedList}.
 * @param {SinglyLinkedList} head The head of the list.
 * @returns The new head of the linked list.
 */
function reverseSingly(head) {
  var prev;
  while (head.next) {
    var next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  head.next = prev;
  return head;
}

module.exports = {
  SinglyLinkedList: SinglyLinkedList,
  reverseSingly: reverseSingly
};
