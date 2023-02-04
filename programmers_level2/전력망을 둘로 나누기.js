// April 14~15, 2022
// https://programmers.co.kr/learn/courses/30/lessons/86971

// My attempt - Fail
function solution(n, wires) {
  const obj = {};

  wires.forEach((w) => {
    const [n1, n2] = w;
    obj[n1] = obj[n1] ? obj[n1] + 1 : 1;
    obj[n2] = obj[n2] ? obj[n2] + 1 : 1;
  });

  const maxCount = Math.max(...Object.values(obj));
  const keys = Object.keys(obj);
  const root = keys.find((key) => obj[key] === maxCount);
  delete obj[root];
  const secondMaxCount = Math.max(...Object.values(obj));
  const node = keys.find((key) => obj[key] === secondMaxCount);

  const getNodeIdx = (wires) => {
    for (let i = 0; i < wires.length; i++) {
      if (wires[i].includes(root) && wires[i].includes(node)) {
        return i;
      }
    }
  };

  const nodeIdx = getNodeIdx(wires);
  return wires.length - (2 * nodeIdx + 1);
}

// Reference: https://dev-note-97.tistory.com/308
// Review: Feb 4, 2023
function solution2(n, wires) {
  const links = {};
  wires.map((wire) => {
    const [node1, node2] = wire;
    if (!links[node1]) links[node1] = [];
    if (!links[node2]) links[node2] = [];
    links[node1].push(node2);
    links[node2].push(node1);
  });

  const countNode = (root, exception) => {
    let count = 0;
    const queue = [root];
    const visited = [];
    visited[root] = true;

    while (queue.length) {
      count++;
      const cur = queue.pop();
      links[cur].forEach((node) => {
        if (node !== exception && visited[node] === undefined) {
          visited[node] = true;
          queue.push(node);
        }
      });
    }

    return count;
  };

  let answer = 98;

  wires.map((wire) => {
    const [node1, node2] = wire;
    const diff = Math.abs(countNode(node1, node2) - countNode(node2, node1));
    answer = answer > diff ? diff : answer;
  });

  return answer;
}

console.log(
  solution2(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
