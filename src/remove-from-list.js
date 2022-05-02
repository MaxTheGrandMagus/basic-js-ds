const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  let node = l;
  while (has(node, k)) {
    removeK(node, k);
  }
  return node;
  function removeK(l, k) {
    if (node.value === k) {
      node = node.next;
    }
    let currentNode = node;
    let previousNode = currentNode;
    while (currentNode.next && currentNode.value != k) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = currentNode.next;
    return l;
  }
  function has(l, k) {
    if (!l) {
      return false;
    }
    if (l.value === k) {
      return true;
    }
    return has(l.next, k);
  }
}

module.exports = {
  removeKFromList
};
