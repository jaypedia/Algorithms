// Feb 13, 2022

// Two pointers

// My solution
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return nums.map(v => v ** 2).sort((a, b) => a - b);
};

// Other's solutions

// https://leetcode.com/problems/squares-of-a-sorted-array/discuss/1102204/Javascript-Two-Pointers-O(n)
var sortedSquares = function (nums) {
  // use two pointers
  // create a new array
  const result = new Array(nums.length);
  let left = 0,
    right = nums.length - 1;

  // don't want to rearrange the array, so iterating the array in descending order
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      result[i] = nums[right] ** 2;
      right--;
    } else {
      result[i] = nums[left] ** 2;
      left++;
    }
  }

  return result;
};

// https://leetcode.com/problems/squares-of-a-sorted-array/discuss/514315/JavaScript-two-pointers-O(n)-solution
var sortedSquares = function (A) {
  const res = [];
  let i = 0;
  while (A[i] < 0) i++;
  let j = i - 1;
  while (j >= 0 || i < A.length) {
    if (i >= A.length || -A[j] <= A[i]) {
      res.push(A[j--] ** 2);
    } else {
      res.push(A[i++] ** 2);
    }
  }
  return res;
};
