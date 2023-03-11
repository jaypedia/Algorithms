// March 23, 2022
// https://leetcode.com/problems/power-of-three/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  while (n >= 3) n /= 3;
  return n === 1;
};

// https://leetcode.com/problems/power-of-three/discuss/77856/1-line-java-solution-without-loop-recursion
var isPowerOfThree = function (n) {
  // 1162261467 is 3^19, 3^20 is bigger than int
  return n > 0 && 1162261467 % n === 0;
};

var isPowerOfThree = function (n) {
  return n == 1 || (n > 0 && n % 3 == 0 && isPowerOfThree(n / 3));
};
