class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // 배열의 가장 뒤에 push한 후, 해당 요소가 들어갈 알맞은 요소를 찾아 bubble up
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1; // 맨 마지막 요소의 인덱스 저장
    const element = this.values[idx]; // 맨 마지막 요소

    // index가 0이면 그게 가장 큰 요소. 더 이상 자리 바꿀 수 없다. - 루프의 조건으로 설정
    while (idx > 0) {
      // 부모의 인덱스를 수학 공식으로 찾는다.
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      // 만약 삽입한 요소가 부모보다 작거나 같으면 자리바꾸기가 필요 없으니 루프를 빠져나온다.
      if (element <= parent) break;

      // 삽입한 요소가 부모보다 크면 자리 바꾸기
      this.values[parentIdx] = element;
      this.values[idx] = parent;

      // 삽입한 요소가 부모가 되었으므로, 인덱스도 부모 인덱스로 바꿔준다.
      // idx = 0이 될 경우 루프를 빠져나오게 된다.
      idx = parentIdx;
    }
  }

  extractMax() {
    // 가장 앞에 있는 요소인 최대값을 제거하고, 가장 뒤에 있는 요소로 대체하기

    // 루트를 max에 할당
    const max = this.values[0];
    // 맨 뒤의 요소 pop으로 제거하면서 end에 할당
    const end = this.values.pop();

    // value에 요소가 1개 이상일 때 - 배열에 요소가 없는 경우엔 아래 로직을 실행 X
    if (this.values.length > 0) {
      // 루트를 end로 만들기
      this.values[0] = end;
      // 루트의 값을 비교하면서 밑으로 가라앉히기
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    // 인덱스 맨 앞에서 시작
    let idx = 0;
    // 루트 제거 & 맨 뒤에 있는 요소로 대체한 후, 배열의 맨 앞에 있는 요소(즉 원래 맨 뒤에 있었던 요소)
    const element = this.values[0];
    const length = this.values.length;

    while (true) {
      // 왼쪽, 오른쪽 자식들과 비교하기 위해 공식 사용
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      // 위에서 계산한 인덱스가 현재 배열 인덱스의 범위를 넘을 수도 있기 때문에 바로 할당 X, 선언만 해 줌.
      let leftChild, rightChild;
      let swap = null; // 루프 안에서 자리 바꾸기를 했는지 여부를 추적하는 변수

      // 계산한 인덱스가 범위를 벗어나지 않도록 하는 조건 (유효한 인덱스값인지 확인)
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        // 값 비교 - 왼쪽 자식이 더 크면 자리를 바꾸기
        if (leftChild > element) {
          swap = leftChildIdx; // 자리 바꾸기 하는 그 자리(인덱스)를 추적하고, 루프가 반복될 때마다 초기화
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          // 이미 swap이 할당되어서 null이 아니면 rightChild와 leftChild의 값을 비교한다.
          // 이 경우 rightChild가 더 크면 swap에 rightChild 저장 (두 자식 중 더 큰 것과 자리를 바꿔야 하니까)
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      // swap이 없는 경우(element가 왼쪽, 오른쪽 자식보다 큰 경우), 루프 탈출
      if (swap === null) break;

      // swap이 null이 아닌 경우, 자리 바꾸기
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      // 자리 바꾼 자식의 인덱스(swap)가 이제 새로운 부모의 인덱스(idx)가 된다.
      idx = swap;
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(100);
