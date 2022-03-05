// March 5, 2022
// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// My solution
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  const visited = [];

  while (true) {
    visited.push(head);
    head = head.next;
    if (!head.next) return false;
    if (visited.includes(head)) return true;
  }
};
