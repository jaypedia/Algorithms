// April 14~15, 2022
// https://programmers.co.kr/learn/courses/30/lessons/86971

// My attempt - Fail
function solution(n, wires) {
  const obj = {};

  wires.forEach(w => {
    const [n1, n2] = w;
    obj[n1] = obj[n1] ? obj[n1] + 1 : 1;
    obj[n2] = obj[n2] ? obj[n2] + 1 : 1;
  });

  const maxCount = Math.max(...Object.values(obj));
  const keys = Object.keys(obj);
  const root = keys.find(key => obj[key] === maxCount);
  delete obj[root];
  const secondMaxCount = Math.max(...Object.values(obj));
  const node = keys.find(key => obj[key] === secondMaxCount);

  const getNodeIdx = wires => {
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
function solution2(n, wires) {
  const makeLinksObj = wires => {
    const links = {};
    wires.map(w => {
      const [a, b] = w;
      if (!links[a]) links[a] = [];
      if (!links[b]) links[b] = [];
      links[a].push(b);
      links[b].push(a);
    });
    return links;
  };

  const searchTree = (root, exception) => {
    let count = 0;
    const queue = [root];
    const visited = [];
    visited[root] = true;

    while (queue.length) {
      const cur = queue.pop();
      links[cur].map(next => {
        if (next !== exception && !visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      });
      count++;
    }

    return count;
  };

  const links = makeLinksObj(wires);
  console.log(links);
  let answer = 98;
  wires.map((w, _) => {
    const [a, b] = w;
    const dif = Math.abs(searchTree(a, b) - searchTree(b, a));
    answer = answer > dif ? dif : answer;
  });
  return answer;
}

console.log(
  solution2(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
);
