var SinglyLinkedList = require('../src/reverse-a-linked-list/singly-linked-list').SinglyLinkedList;
var reverseSingly = require('../src/reverse-a-linked-list/singly-linked-list').reverseSingly;
var DoublyLinkedList = require('../src/reverse-a-linked-list/doubly-linked-list').DoublyLinkedList;
var reverseDoubly = require('../src/reverse-a-linked-list/doubly-linked-list').reverseDoubly;

describe('SinglyLinkedList', function () {
  'use strict';

  describe('Reversing a single element linked list', function () {
    it('should not change the list', function () {
      var list = new SinglyLinkedList(1);
      expect(list.data).toBe(1);
      expect(list.next).toBe(undefined);
      reverseSingly(list);
      expect(list.data).toBe(1);
      expect(list.next).toBe(undefined);
    });
  });

  describe('Reversing a 2 element linked list', function () {
    it('should correctly reverse the list', function () {
      var list = new SinglyLinkedList(1, new SinglyLinkedList(2));
      list = reverseSingly(list);
      expect(list.data).toBe(2);
      expect(list.next.data).toBe(1);
      expect(list.next.next).toBe(undefined);
    });
  });

  describe('Reversing a 3 element linked list', function () {
    it('should correctly reverse the list', function () {
      var list = new SinglyLinkedList(1, new SinglyLinkedList(2, new SinglyLinkedList(3)));
      list = reverseSingly(list);
      expect(list.data).toBe(3);
      expect(list.next.data).toBe(2);
      expect(list.next.next.data).toBe(1);
      expect(list.next.next.next).toBe(undefined);
    });
  });
});

describe('DoublyLinkedList', function () {
  'use strict';

  describe('Reversing a single element linked list', function () {
    it('should not change the list', function () {
      var list = new DoublyLinkedList(1);
      expect(list.data).toBe(1);
      expect(list.next).toBe(undefined);
      expect(list.prev).toBe(undefined);
      reverseSingly(list);
      expect(list.data).toBe(1);
      expect(list.next).toBe(undefined);
      expect(list.prev).toBe(undefined);
    });
  });

  describe('Reversing a 2 element linked list', function () {
    it('should correctly reverse the list', function () {
      var list = new DoublyLinkedList(1, new DoublyLinkedList(2));
      list = reverseDoubly(list);
      expect(list.data).toBe(2);
      expect(list.prev).toBe(undefined);
      expect(list.next.data).toBe(1);
      expect(list.next.prev.data).toBe(2);
      expect(list.next.next).toBe(undefined);
    });
  });

  describe('Reversing a 3 element linked list', function () {
    it('should correctly reverse the list', function () {
      var list = new DoublyLinkedList(1, new DoublyLinkedList(2, new DoublyLinkedList(3)));
      list = reverseDoubly(list);
      expect(list.data).toBe(3);
      expect(list.prev).toBe(undefined);
      expect(list.next.data).toBe(2);
      expect(list.next.prev.data).toBe(3);
      expect(list.next.next.data).toBe(1);
      expect(list.next.next.prev.data).toBe(2);
      expect(list.next.next.next).toBe(undefined);
    });
  });
});
