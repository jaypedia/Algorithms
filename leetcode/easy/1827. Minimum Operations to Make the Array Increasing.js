// Dec 29, 2022
// https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const [first, second] = [nums[i], nums[i + 1]];
    if (first < second) continue;
    const increasedNum = first - second + 1;
    count += increasedNum;
    nums[i + 1] = second + increasedNum;
  }

  return count;
};
