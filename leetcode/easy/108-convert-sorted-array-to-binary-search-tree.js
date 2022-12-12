// Oct 1, 2022
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const helper = (nums, low, high) => {
    if (low > high) return null; // done

    const mid = low + (high - low) / 2;
    const node = new TreeNode(nums[mid]);
    node.left = helper(nums, low, mid - 1);
    node.right = helper(nums, mid + 1, high);
    return node;
  };

  if (!nums.length) return null;
  const head = helper(nums, 0, nums.length - 1);
  return head;
};

var sortedArrayToBST = function (nums) {
  const helper = (nums, low, high) => {
    if (low > high) return null; // done
    const mid = low + (high - low) / 2;
    return new TreeNode(nums[mid], helper(nums, low, mid - 1), helper(nums, mid + 1, high));
  };

  if (!nums.length) return null;
  return helper(nums, 0, nums.length - 1);
};
