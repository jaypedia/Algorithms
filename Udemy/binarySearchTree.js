class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // 1. 새로운 노드 만들기
    const newNode = new Node(value);

    // 2. 루트가 없으면, 루트를 새로운 노드로 설정
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    // 3. 루트가 있으면, 루트의 value와 새로운 노드의 value를 비교

    // 추적을 위한 변수 만들어주기
    let current = this.root;

    while (true) {
      // 예외 처리 : tree의 node에 이미 동일한 value가 존재할 때 무한루프에 빠지지 않도록
      if (value === current.value) return undefined;

      if (value < current.value) {
        // 왼쪽에 노드 있나 확인
        // 노드가 없으면, 왼쪽을 새로운 노드로 설정하고 반복문 탈출
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        // 노드가 있으면, 그 노드로 옮겨가서 단계를 반복하기
        current = current.left;
      } else if (value > current.value) {
        // 오른쪽에 노드 있나 확인
        if (!current.right) {
          current.right = newNode; // 노드가 없으면, newNode를 right로 설정
          return this;
        }
        current = current.right; // 노드 옮기고 단계 반복
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
