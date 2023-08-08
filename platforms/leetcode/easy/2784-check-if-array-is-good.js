// Aug 8, 2023
// https://leetcode.com/problems/check-if-array-is-good/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
  nums.sort((a, b) => a - b);
  const maxNum = nums.length - 1;

  const last1 = nums.pop();
  const last2 = nums.pop();

  if (last1 !== maxNum || last2 !== maxNum) return false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return false;
  }

  return true;
};
