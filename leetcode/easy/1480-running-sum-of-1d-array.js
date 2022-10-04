// https://leetcode.com/problems/running-sum-of-1d-array/description/
// Oct 4, 2022

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const answer = [];
  let n = 0;
  nums.forEach(v => {
    n += v;
    answer.push(n);
  });
  return answer;
};

var runningSum = function (nums) {
  nums.forEach((v, i) => {
    if (!isNaN(nums[i + 1])) {
      nums[i + 1] += v;
    }
  });
  return nums;
};

var runningSum = nums => {
  nums.reduce((a, c, i, arr) => (arr[i] += a));
  return nums;
};
