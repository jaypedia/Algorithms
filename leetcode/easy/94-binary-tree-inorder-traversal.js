// March 7, 2022
// https://leetcode.com/problems/binary-tree-inorder-traversal/

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

// Recursive solution
const inorderTraversal = root => {
  const visited = [];

  if (!root) return visited;

  const current = root;

  const traverse = node => {
    node.left && traverse(node.left);
    visited.push(node.val);
    node.right && traverse(node.right);
  };

  traverse(current);

  return visited;
};

// Iterative solution
