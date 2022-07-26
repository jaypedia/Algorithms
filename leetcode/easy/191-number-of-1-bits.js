// July 28, 2022
// https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// My solution
var hammingWeight = function (n) {
  const bin = n.toString(2);
  let count = 0;

  for (const el of bin) {
    if (el === '1') count++;
  }

  return count;
};

// https://leetcode.com/problems/number-of-1-bits/discuss/427069/Javascript-solution
var hammingWeight = function (n) {
  let sum = 0;

  while (n) {
    sum += n & 1;
    n = n >>> 1;
  }

  return sum;
};
