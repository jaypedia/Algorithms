// July 7, 2022
// https://leetcode.com/problems/reverse-linked-list/submissions/

const reverseList = head => {
  let prevNode = null;

  while (head) {
    const nextNode = head.next;
    head.next = prevNode;
    prevNode = head;
    head = nextNode;
  }
  return prevNode;
};
