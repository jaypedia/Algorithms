// Feb 17, 2022
// https://leetcode.com/problems/move-zeroes/

// Note that you must do this in-place without making a copy of the array.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Time Limit Exceeded
const moveZeroes = nums => {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    if (nums[left] > 0) {
      left++;
      continue;
    }

    if (nums[left] === 0) {
      nums[nums.length] = 0;
      nums.splice(left, 1);
      right--;
    }
  }
  return nums;
};

const moveZeroes2 = nums => {
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[current++] = nums[i];
    }
  }

  for (let i = current; i < nums.length; i++) {
    nums[i] = 0;
  }
};

// Aug 9, 2022
var moveZeroes3 = function (nums) {
  if (nums.length <= 1) return nums;
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) continue;
    [nums[idx], nums[i]] = [nums[i], nums[idx]];
    idx++;
  }
};

var moveZeroes4 = function (nums) {
  let j = 0; // nonzero count, 0의 위치(0의 인덱스)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // swap elements
      [nums[j], nums[i]] = [nums[i], nums[j]];
      j++;
    }
  }
};

moveZeroes4([0, 1, 0, 3, 12]);
