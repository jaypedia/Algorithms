// April 4, 2022
// https://leetcode.com/problems/range-sum-of-bst/

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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let answer = 0;
  let current = root;

  const traverse = node => {
    if (n >= low && n <= high) answer += node.val;
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(current);

  return answer;
};

// https://leetcode.com/problems/range-sum-of-bst/discuss/374212/Javascript-solution
var rangeSumBST = (root, low, high) => {
  if (!root) return 0;
  else if (root.val < low) return rangeSumBST(root.right, low, high);
  else if (root.val > high) return rangeSumBST(root.left, low, high);
  else return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};

// Sep 28, 2022
// Queue
var rangeSumBST = function (root, low, high) {
  let answer = 0;
  let node = root;
  const queue = [];
  queue.push(node);

  while (queue.length) {
    node = queue.shift();
    if (node.val >= low && node.val <= high) {
      answer += node.val;
    }
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return answer;
};
