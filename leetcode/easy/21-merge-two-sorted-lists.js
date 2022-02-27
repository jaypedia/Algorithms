// Feb 27, 2022
// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
  constructor(val, next) {
    this.val = val ? val : null;
    this.next = next ? next : null;
  }
}

const node3 = new ListNode(4);
const node2 = new ListNode(2, node3);
const list1 = new ListNode(1, node2);
// console.log(list1);

const node5 = new ListNode(4);
const node4 = new ListNode(3, node5);
const list2 = new ListNode(1, node4);
// console.log(list2);

var mergeTwoLists = function (list1, list2) {
  const newHead = new ListNode();
  let curNode = newHead;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      curNode.next = list1;
      list1 = list1.next;
    } else {
      curNode.next = list2;
      list2 = list2.next;
    }
    curNode = curNode.next;
  }

  if (list1 !== null) {
    curNode.next = list1;
  } else if (list2 !== null) {
    curNode.next = list2;
  }
  return newHead.next;
};

mergeTwoLists(list1, list2);
