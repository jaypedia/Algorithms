// May 28, 2022
// https://leetcode.com/problems/majority-element/

// My solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  const majorityCount = Math.ceil(nums.length / 2);
  let numCount = 0;
  let majority = null;

  for (let i = 0; i < nums.length; i++) {
    if (majority !== nums[i]) {
      majority = nums[i];
      numCount = 1;
    } else {
      numCount++;
    }

    if (numCount >= majorityCount) {
      return majority;
    }
  }

  return majority;
};

// use while
const majorityElement2 = nums => {
  nums.sort((a, b) => a - b);
  const majorityCount = Math.ceil(nums.length / 2);
  let numCount = 0;
  let majority = null;
  let i = 0;

  while (numCount < majorityCount) {
    if (majority === nums[i]) {
      numCount++;
    } else {
      majority = nums[i];
      numCount = 1;
    }
    i++;
  }

  return majority;
};

// use Map
const majorityElementMap = nums => {
  const map = new Map();
  const majorityCount = Math.ceil(nums.length / 2);

  nums.forEach(n => {
    map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1);
  });

  for (const entry of map) {
    if (entry[1] >= majorityCount) {
      return entry[0];
    }
  }
};

const majorityElement3 = nums => {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

console.log(majorityElement3([3, 2, 3]));
console.log(majorityElement3([1]));
