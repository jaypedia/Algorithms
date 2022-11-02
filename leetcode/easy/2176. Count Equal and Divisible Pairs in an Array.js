// Nov 2, 2022
// https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
  let count = 0;
  nums.forEach((v, i) => {
    for (let j = i + 1; j < nums.length; j++) {
      if (v === nums[j] && (i * j) % k === 0) {
        count++;
      }
    }
  });
  return count;
};
