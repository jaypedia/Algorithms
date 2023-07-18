// July 18, 2023
// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const set = new Set();
  const result = [];
  nums.forEach((num) => {
    if (set.has(num)) {
      result.push(num);
    } else {
      set.add(num);
    }
  });
  return result;
};
