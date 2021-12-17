/* Singly Linked List
    2021.12.17

   * A Linked List is a collection of nodes. 
    Node에 저장해야 할 것 2가지 
    1. 데이터 조각을 val에 저장한다.
    2. 다음 노드는 next에 저장한다. - 처음에는 뒤에 올 것이 아무것도 없기 때문에 null을 저장해 둔다.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// next를 계속해서 연결하는 대신, push 메소드를 쓸 것이다.
// const first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('How');
// console.dir(first);

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push('hello');
list.push('second!');
