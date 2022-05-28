// May 28, 2022
// https://leetcode.com/problems/majority-element/

// My solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  const count = Math.ceil(nums.length / 2);
  let numCount = 0;
  let majority = null;

  for (let i = 0; i < nums.length; i++) {
    if (majority !== nums[i]) {
      majority = nums[i];
      numCount = 1;
    } else {
      numCount++;
    }

    if (numCount >= count) {
      return majority;
    }
  }

  return majority;
};
