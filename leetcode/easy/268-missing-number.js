// March 24, 2022
// https://leetcode.com/problems/missing-number/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */

// My solution
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }
  return nums.length;
};

// https://leetcode.com/problems/missing-number/discuss/388832/Javascript-easy-one
var missingNumber = function (nums) {
  let sum = nums.length;
  for (let i = 0; i < nums.length; i++) {
    sum += i - nums[i];
  }
  return sum;
};
