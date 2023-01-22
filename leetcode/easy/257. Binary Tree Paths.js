// Jan 21 ~ Jan 22, 2023
// https://leetcode.com/problems/binary-tree-paths/

// DFS + stack
var binaryTreePaths = function (root) {
  if (!root) return [];
  const result = [];
  const stack = [[root, '']];

  while (stack.length) {
    const [node, path] = stack.pop();
    if (node.left) stack.push([node.left, `${path}${node.val}->`]);
    if (node.right) stack.push([node.right, `${path}${node.val}->`]);
    if (!node.left && !node.right) result.push(`${path}${node.val}`);
  }
  return result;
};

// DFS + recursive
var binaryTreePaths = function (root) {
  if (!root) return [];
  const result = [];

  const dfs = (node, path, result) => {
    if (node.left) dfs(node.left, `${path}${node.val}->`, result);
    if (node.right) dfs(node.right, `${path}${node.val}->`, result);
    if (!node.left && !node.right) result.push(`${path}${node.val}`);
  };

  dfs(root, '', result);
  return result;
};

// BFS + queue
var binaryTreePaths = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [[root, '']];

  while (queue.length) {
    const [node, path] = queue.shift();
    if (node.left) queue.push([node.left, `${path}${node.val}->`]);
    if (node.right) queue.push([node.right, `${path}${node.val}->`]);
    if (!node.left && !node.right) result.push(`${path}${node.val}`);
  }
  return result;
};
