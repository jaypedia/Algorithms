// July 7, 2022
// https://leetcode.com/problems/reverse-linked-list/submissions/

// Iterative solution
var reverseList = head => {
  let prevNode = null;

  while (head) {
    const nextNode = head.next;
    head.next = prevNode;
    prevNode = head;
    head = nextNode;
  }
  return prevNode;
};

// July 23, 2022
// Recursive solution
var reverseList = head => {
  const helper = (head, newHead) => {
    if (!head) return newHead;
    const nextNode = head.next;
    head.next = newHead;
    return helper(nextNode, head);
  };

  return helper(head, null);
};
