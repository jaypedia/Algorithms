// Oct 15, 2022
// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/description/

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  arr.forEach((_, i) => {
    for (let j = i; j < arr.length; j += 2) {
      sum += arr.slice(i, j + 1).reduce((a, b) => a + b, 0);
    }
  });
  return sum;
};
