/* Singly Linked List
    2021.12.17~

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

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current; // 처음에는 current, newTail이 같다. 둘다 맨 처음, 시작 부분에 있는 것이다.

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current; // pop된 요소가 리턴됨.
  }

  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;

    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
}

const list = new SinglyLinkedList();

console.log(list.push('hello'));
console.log(list.push('second!'));
console.log(list.push('third!'));
console.log(list.push('forth!'));
console.log(list.pop());
console.log(list.get(2));
console.log(list.set(1, 'SECOND'));
console.log(list.insert(3, ':)'));
