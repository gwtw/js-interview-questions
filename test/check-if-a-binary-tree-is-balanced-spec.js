var BinaryTreeNode = require('../src/check-if-a-binary-tree-is-balanced').BinaryTreeNode;
var isBinaryTreeBalanced = require('../src/check-if-a-binary-tree-is-balanced').isBinaryTreeBalanced;

describe('isBinaryTreeBalanced', function () {
  'use strict';

  describe('given an undefined tree', function () {
    it('should return undefined', function () {
      expect(isBinaryTreeBalanced(undefined)).toBe(undefined);
    });
  });

  describe('given a single element tree', function () {
    it('should return true', function () {
      var tree = new BinaryTreeNode(null);
      expect(isBinaryTreeBalanced(tree)).toBe(true);
    });
  });

  describe('given a two element tree', function () {
    it('should return true when left-heavy', function () {
      var tree = new BinaryTreeNode(null, new BinaryTreeNode(null), undefined);
      expect(isBinaryTreeBalanced(tree)).toBe(true);
    });

    it('should return true when right heavy', function () {
      var tree = new BinaryTreeNode(null, undefined, new BinaryTreeNode(null));
      expect(isBinaryTreeBalanced(tree)).toBe(true);
    });
  });

  describe('given a tree element tree', function () {
    it('should return false when left-heavy', function () {
      var tree = new BinaryTreeNode(null,
          new BinaryTreeNode(null, new BinaryTreeNode(null), undefined),
          undefined);
      expect(isBinaryTreeBalanced(tree)).toBe(false);
    });

    it('should return true when balanced', function () {
      var tree = new BinaryTreeNode(null,
          new BinaryTreeNode(null),
          new BinaryTreeNode(null));
      expect(isBinaryTreeBalanced(tree)).toBe(true);
    });

    it('should return false when right heavy', function () {
      var tree = new BinaryTreeNode(null,
          undefined,
          new BinaryTreeNode(null, undefined, new BinaryTreeNode(null)));
      expect(isBinaryTreeBalanced(tree)).toBe(false);
    });
  });
});
