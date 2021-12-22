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
}

const heap = new MaxBinaryHeap();
heap.insert(100);
