var SinglyLinkedList = require('../src/nth-last-element-in-linked-list/singly-linked-list').SinglyLinkedList;
var getNthLastElement = require('../src/nth-last-element-in-linked-list/singly-linked-list').getNthLastElement;

describe('getNthLastElement', function () {
  'use strict';

  it('should return desired results for undefined list', function () {
    expect(getNthLastElement(undefined, 1)).toBe(undefined);
  });

  it('should return desired results for single element list', function () {
    var head = new SinglyLinkedList(1);
    expect(getNthLastElement(head, 1).data).toBe(1);
    expect(getNthLastElement(head, 2)).toBe(undefined);
  });

  it('should return desired results for two element list', function () {
    var head = new SinglyLinkedList(1,
        new SinglyLinkedList(2));
    expect(getNthLastElement(head, 1).data).toBe(2);
    expect(getNthLastElement(head, 2).data).toBe(1);
    expect(getNthLastElement(head, 3)).toBe(undefined);
  });

  it('should return desired results for small list', function () {
    var head = new SinglyLinkedList(1,
        new SinglyLinkedList(2,
        new SinglyLinkedList(3)));
    expect(getNthLastElement(head, 1).data).toBe(3);
    expect(getNthLastElement(head, 2).data).toBe(2);
    expect(getNthLastElement(head, 3).data).toBe(1);
    expect(getNthLastElement(head, 4)).toBe(undefined);
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
      expect(getNthLastElement(current, 101 - i)).toBe(current);
      current = current.next;
    }
    expect(getNthLastElement(head, 101)).toBe(undefined);
  });
});
