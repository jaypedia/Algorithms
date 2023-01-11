// Jan 11, 2023
// https://leetcode.com/problems/divide-array-into-equal-pairs/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i += 2) {
    if (nums[i] !== nums[i + 1]) return false;
  }
  return true;
};

// Use map
var divideArray = function (nums) {
  const numMap = new Map();
  for (const num of nums) {
    numMap.has(num) ? numMap.delete(num) : numMap.set(num, true);
  }
  return numMap.size === 0;
};
