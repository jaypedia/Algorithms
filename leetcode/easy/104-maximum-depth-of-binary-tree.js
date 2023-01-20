/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/1161927/Javascript-or-queue-or-BFS
var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let layers = 0;
  let node = root;

  while (queue.length) {
    let curLevelLen = queue.length;
    for (var i = 0; i < curLevelLen; i++) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    layers++;
  }
  return layers;
};

// By Morning Algo
var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [[root, 1]];
  let node, depth;

  while (queue.length) {
    [node, depth] = queue.shift();
    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }
  return depth;
};

// Jan 20, 2023
// use DFS
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
