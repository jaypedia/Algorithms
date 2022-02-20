// Feb 21, 2022
// https://leetcode.com/problems/single-number/

/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];

  nums.sort((a, b) => a - b);

  while (nums.length > 1) {
    const cur = nums.pop();
    if (cur === nums[nums.length - 1]) {
      nums.pop();
    } else {
      return cur;
    }
  }
  return nums[0];
};

console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([1, 3, 1, -1, 3]));
