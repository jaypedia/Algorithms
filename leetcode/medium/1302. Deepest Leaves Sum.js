// Jan 21~25, 2023
// https://leetcode.com/problems/deepest-leaves-sum/

// BFS
var deepestLeavesSum = function (root) {
  if (!root) return 0;
  const queue = [root];
  let sum = 0;

  while (queue.length) {
    const size = queue.length;
    sum = 0;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return sum;
};

// DFS
var deepestLeavesSum = function (root) {
  if (!root) return 0;
  let sum = 0;
  let maxLevel = 0;

  const calculateSumAtLevel = (node, level) => {
    if (!node) return;
    if (level > maxLevel) {
      sum = 0;
      maxLevel = level;
    }
    if (level === maxLevel) {
      sum += node.val;
    }

    calculateSumAtLevel(node.left, level + 1);
    calculateSumAtLevel(node.right, level + 1);
  };
  calculateSumAtLevel(root, 0);
  return sum;
};
