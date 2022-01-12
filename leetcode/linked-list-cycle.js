// Circular Linked List인지 판별하기

// Follow up: Can you solve it using O(1) (i.e. constant) memory?
// O(1)으로 하려면 반복문 쓰지 않고 객체?

/*
Constraints:
pos is -1 or a valid index in the linked-list.
*/

// 옛날에 있던 노드인지 아닌지 판별 - 옛날에 있던 노드라면 순환이 있다는 것
// 즉 한 번 지나간 노드는 빈 배열에 push

const hasCycle = function (head) {
  if (!head || !head.next) return false;
  const nodes = [];

  while (true) {
    nodes.push(head); // 지나간 요소를 배열에 pust
    head = head.next;

    if (!head.next) return false; // next가 null이면 순환이 없다는 것이니 false

    // 내부 반복문을 돌면서 현재의 head가 nodes에 있는 head인지 판별
    // 옛날의 head가 존재한다면 순환이 존재하는 것
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i] === head) {
        return true;
      }
    }
  }
};
