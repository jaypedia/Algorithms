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

// My another solution
var missingNumber = function (nums) {
  const sum = nums.reduce((acc, cur, idx) => acc + cur - idx, 0);
  return nums.length - sum;
};

// 1부터 N까지 자연수의 합 공식 이용 : (N * (N+1)) / 2
var missingNumber = function (nums) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  const len = nums.length;
  const originalSum = (len * (len + 1)) / 2;
  return originalSum - sum;
};

// Aug 1, 2022
var missingNumber = function (nums) {
  let sum = 0;
  for (let i = 1; i <= nums.length; i++) {
    sum += i;
  }
  return sum - nums.reduce((acc, cur) => (acc += cur), 0);
};
