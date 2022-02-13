// Feb 12, 2022

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// My solution
const searchInsert = function (nums, target) {
  let lo = 0;
  let hi = nums.length - 1;
  let mid;

  while (lo <= hi) {
    mid = lo + Math.floor((hi - lo) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) lo = mid + 1;
    if (nums[mid] > target) hi = mid - 1;
  }

  if (lo >= hi) return lo;
};

console.log(searchInsert([1, 3, 5, 6], 3)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
console.log(searchInsert([1], 0)); // 0
console.log(searchInsert([1], 2)); // 1

// Other's solutions
// https://leetcode.com/problems/search-insert-position/discuss/574073/simple-javascript-solution
var searchInsert = function (nums, target) {
  var right = nums.length - 1;
  var left = 0;
  while (left < right) {
    var mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return target > nums[left] ? left + 1 : left;
};
