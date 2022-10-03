// Oct 3, 2022

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const max1 = Math.max(...nums);
  nums.splice(nums.indexOf(max1), 1);
  const max2 = Math.max(...nums);
  return (max1 - 1) * (max2 - 1);
};

var maxProduct = function (nums) {
  nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);
};
