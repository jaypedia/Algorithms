// March 15, 2022
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// My solution
var intersect = function (nums1, nums2) {
  const answer = [];
  const [small, big] = nums1.length <= nums2.length ? [nums1, nums2] : [nums2, nums1];

  small.forEach(v => {
    if (big.includes(v)) {
      answer.push(v);
      big.splice(big.indexOf(v), 1);
    }
  });
  return answer;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([1, 2], [1, 1]));
console.log(intersect([3, 1, 2], [1, 1]));
