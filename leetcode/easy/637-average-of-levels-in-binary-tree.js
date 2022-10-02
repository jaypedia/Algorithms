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
 * @return {number[]}
 */
// https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/501427/javascript-bfs-solution/?q=javascript&orderBy=most_votes
var averageOfLevels = function (root) {
  const averages = [];
  const queue = [root];

  while (queue.length) {
    let sum = 0;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    averages.push(sum / size);
  }
  return averages;
};
