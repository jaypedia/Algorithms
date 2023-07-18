// July 18, 2023
// https://leetcode.com/problems/next-greater-element-i/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  return nums1.reduce((result, cur) => {
    const curIndex = nums2.indexOf(cur);
    for (let i = curIndex + 1; i < nums2.length; i++) {
      if (cur < nums2[i]) {
        result.push(nums2[i]);
        return result;
      }
    }
    result.push(-1);
    return result;
  }, []);
};
