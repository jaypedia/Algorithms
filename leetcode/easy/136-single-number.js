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

// Aug 2, 2022
var singleNumber = function (nums) {
  const map = new Map();
  nums.forEach(v => {
    if (map.has(v)) map.delete(v);
    else map.set(v);
  });

  return map.keys().next().value;
};

// https://leetcode.com/problems/single-number/discuss/396584/Clean-JavaScript-solution
function singleNumber(nums) {
  const map = {};
  for (let n of nums) {
    if (map[n] == null) map[n] = 0;
    map[n]++;
  }

  for (let n in map) {
    if (map[n] === 1) return Number(n);
  }
}
