// Sep 28, 2022
// https://leetcode.com/problems/concatenation-of-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const answer = nums;
  nums.forEach(v => answer.push(v));
  return answer;
};

// https://leetcode.com/problems/concatenation-of-array/discuss/1369400/JavaScript-or-one-liner
var getConcatenation = function (nums) {
  // spread the nums array twice and return it
  return [...nums, ...nums];
};

// https://leetcode.com/problems/concatenation-of-array/discuss/1381624/Javascript-simple-array-creation-97-faster
var getConcatenation = function (nums) {
  let n = nums.length;

  // create return array ans of length 2n
  let ans = new Array(2 * n);

  for (let i = 0; i < n; i++) {
    // ans[i] == nums[i] and ans[i + n] == nums[i]
    ans[i] = ans[i + n] = nums[i];
  }
  return ans;
};
