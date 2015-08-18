var SinglyLinkedList = require('../src/kth-last-element-in-linked-list/singly-linked-list').SinglyLinkedList;
var getKthLastElement = require('../src/kth-last-element-in-linked-list/singly-linked-list').getKthLastElement;

describe('getKthLastElement', function () {
  'use strict';

  it('should return desired results for undefined list', function () {
    expect(getKthLastElement(undefined, 1)).toBe(undefined);
  });

  it('should return desired results for single element list', function () {
    var head = new SinglyLinkedList(1);
    expect(getKthLastElement(head, 1).data).toBe(1);
    expect(getKthLastElement(head, 2)).toBe(undefined);
  });

  it('should return desired results for two element list', function () {
    var head = new SinglyLinkedList(1,
        new SinglyLinkedList(2));
    expect(getKthLastElement(head, 1).data).toBe(2);
    expect(getKthLastElement(head, 2).data).toBe(1);
    expect(getKthLastElement(head, 3)).toBe(undefined);
  });

  it('should return desired results for small list', function () {
    var head = new SinglyLinkedList(1,
        new SinglyLinkedList(2,
        new SinglyLinkedList(3)));
    expect(getKthLastElement(head, 1).data).toBe(3);
    expect(getKthLastElement(head, 2).data).toBe(2);
    expect(getKthLastElement(head, 3).data).toBe(1);
    expect(getKthLastElement(head, 4)).toBe(undefined);
  });

  it('should return desired results for large list', function () {
    var head = new SinglyLinkedList(1);
    var current = head;
    for (var i = 2; i <= 100; i++) {
      current.next = new SinglyLinkedList(i);
      current = current.next;
    }
    current = head;
    for (var i = 1; i <= 100; i++) {
      expect(getKthLastElement(current, 101 - i)).toBe(current);
      current = current.next;
    }
    expect(getKthLastElement(head, 101)).toBe(undefined);
  });
});
