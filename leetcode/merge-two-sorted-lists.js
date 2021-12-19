// 2021-11-26
/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

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
  constructor(val, next = null) {
    this.val = val; // 현재 값
    this.next = next; // 다음 값 가리키기
  }
}
const list1_3 = new ListNode(4, null);
const list1_2 = new ListNode(2, list1_3);
const list1_1 = new ListNode(1, list1_2);
const list1 = list1_1;

const list2_3 = new ListNode(4, null);
const list2_2 = new ListNode(3, list2_3);
const list2_1 = new ListNode(1, list2_2);
const list2 = list2_1;

/*
// Recursion
var mergeTwoLists = function (list1, list2) {
  // 예외처리 : 두 리스트 중 하나라도 없으면 있는 리스트만 반환
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  // 첫 번째 요소부터 비교 :
  // list1과 list2의 첫 요소를 비교해서 list1이 더 작으면
  // list1의 다음 값과 list2의 첫 요소를 비교할 수 있도록 재귀함수
  // 더 작은 값이었던 list1을 리턴
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

*/

// while
// console.log(list1);
// console.log(list2);

const mergeTwoLists = function (list1, list2) {
  const dummyHead = new ListNode(null); // ListNode { val: null, next: null }
  let currentNode = dummyHead; // 왜 재할당 할까?

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      currentNode.next = list1;
      list1 = list1.next; // list 변화
    } else {
      currentNode.next = list2;
      list2 = list2.next; // list 변화
    }
    // console.log('before', currentNode);
    currentNode = currentNode.next;
    // console.log('after', currentNode);
  }

  if (list1 !== null) {
    currentNode.next = list1;
  } else if (list2 !== null) {
    currentNode.next = list2;
  }
  return dummyHead.next;
};

console.log(JSON.stringify(mergeTwoLists(list1, list2), null, 2));
