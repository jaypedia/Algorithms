// Jan 21, 2023
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
