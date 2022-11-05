// Nov 3, 2022
// https://leetcode.com/problems/n-th-tribonacci-number/

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const memo = [0, 1, 1, 2];

  const dp = n => {
    if (memo[n] >= 0) return memo[n];
    memo[n] = dp(n - 1) + dp(n - 2) + dp(n - 3);
    return memo[n];
  };
  return dp(n);
};
