// Jan 21~22, 2023
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
