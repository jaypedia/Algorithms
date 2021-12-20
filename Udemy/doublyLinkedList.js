/* Doubly Linked List
    2021.12.20
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      return this;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
}

const list = new DoublyLinkedList();

console.log(list.push('hello'));
console.log(list.push('second!'));
console.log(list.push('third!'));
console.log(list.push('forth!'));
console.log(list.pop());

/*
console.log(list.get(2));
console.log(list.set(1, 'SECOND'));
console.log(list.insert(3, ':)'));
console.log(list.remove(2));
console.log(list.reverse());
console.log(list.print());
*/
