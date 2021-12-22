class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    // index가 0이면 그게 가장 큰 요소. 더 이상 자리 바꿀 수 없다.
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      // swap
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx; // 인덱스 바꿔주기
    }
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  sinkDown() {
    // 인덱스 맨 앞에서 시작
    let idx = 0;
    const element = this.values[0];
    const length = this.values.length;

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null; // 루프 안에서 자리 바꾸기를 했는지 여부를 추적하는 변수

      // 계산한 인덱스가 범위를 벗어나지 않도록 하는 조건 (유효한 인덱스값)
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx; // 자리 바꾸기 하는 그 자리(인덱스)를 추적하고, 루프가 반복될 때마다 초기화
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break; // 자리 바꾸기를 하지 않는 경우, 루프 깨기

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
}

const heap = new MaxBinaryHeap();
heap.insert(100);
