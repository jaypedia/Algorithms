// Oct 18, 2022
// https://leetcode.com/problems/number-of-good-pairs/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
// time O(N^2) space O(1)
var numIdenticalPairs = function (nums) {
  let count = 0;
  nums.forEach((v, i) => {
    for (let j = i + 1; j < nums.length; j++) {
      if (v === nums[j]) count++;
    }
  });
  return count;
};

// HashMap
// time O(N) space O(N)
var numIdenticalPairs = function (nums) {
  const map = {};
  let count = 0;

  for (const number of nums) {
    if (map[number]) {
      count += map[number];
      map[number] += 1;
    } else {
      map[number] = 1;
    }
  }

  return count;
};
