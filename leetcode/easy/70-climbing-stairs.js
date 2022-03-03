// March 3, 2022
// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */

// Recursion: time limit exceeded
// O(2^n)
var climbStairs = function (n) {
  if (n <= 1) return 1;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

// Dynamic programming: O(N)
// Memoization: Top-down
var climbStairs = function (n, memo = []) {
  if (memo[n]) return memo[n];
  if (n <= 1) return 1;
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
};

var climbStairs = function (n, memo = [1, 1]) {
  if (memo[n]) return memo[n];
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
};

// Tabulation: bottom-up
var climbStairs = function (n) {
  if (n <= 1) return 1;
  const nums = [1, 1];
  for (let i = 2; i <= n; i++) {
    nums[i] = nums[i - 1] + nums[i - 2];
  }
  return nums[n];
};

// https://leetcode.com/problems/climbing-stairs/discuss/25296/3-4-short-lines-in-every-language
// Variable 'a' tells you the number of ways to reach the current step
// 'b' tells you the number of ways to reach the next step
// One step further up, the old 'a' becomes the new 'a', and the new 'b' is the old 'a + b'
// since that new step can be reached by climbing 1 step from what 'b' represented or 2 steps from what 'a' represented.
var climbStairs = function (n) {
  a = b = 1;
  while (n--) a = (b += a) - a;
  return a;
};

console.log(climbStairs(5));
