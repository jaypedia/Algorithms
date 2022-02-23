// Feb 23, 2022
// https://leetcode.com/problems/middle-of-the-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// My solution
var middleNode = function (head) {
  if (!head.next) return head;
  let nodeCount = 1;
  let current = head;
  while (current.next) {
    current = current.next;
    nodeCount++;
  }

  const middle = Math.floor(nodeCount / 2);

  let i = 0;
  current = head;
  while (i < middle) {
    current = current.next;
    i++;
  }

  return current;
};

// Refactoring
var middleNode = function (head) {
  if (!head.next) return head;
  let count = 1;
  let current = head;
  while (current.next) {
    current = current.next;
    count++;
  }

  count = Math.floor(count / 2);

  while (count) {
    current = head.next;
    count--;
  }

  return current;
};

// Other's solution
// https://leetcode.com/problems/middle-of-the-linked-list/discuss/235197/javascript
var middleNode = function (head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
