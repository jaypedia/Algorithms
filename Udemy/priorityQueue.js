class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// Min Binary Heap : lower numbers means higher priority
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // 요소의 값 자체를 비교하는 것이 아니라, 우선순위를 비교하여 삽입한다.
  enqueue(val, priority) {
    // 새로운 노드를 만든다.
    const newNode = new Node(val, priority);
    // 새로운 노드를 맨 뒤에 푸시한다.
    this.values.push(newNode);
    // 새로운 노드의 우선순위에 맞는 자리에 찾아갈 수 있도록 bubble up을 한다.
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      // 만약 삽입한 요소의 ✨우선순위의 값✨이 부모보다 ✅크거나✅(min binary heap) 같으면
      // 자리바꾸기가 필요 없으니 루프를 빠져나온다.
      if (element.priority >= parent.priority) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // 가장 높은 우선순위에 있는 요소를 제거한다.
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const element = this.values[0];
    const length = this.values.length;

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        // 우선순위 비교
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('higher fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);
