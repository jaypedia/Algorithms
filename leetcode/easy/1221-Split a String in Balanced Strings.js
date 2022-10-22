// Oct 23, 2022
// https://leetcode.com/problems/split-a-string-in-balanced-strings

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let answer = 0;
  let rCount = 0;
  let lCount = 0;
  for (const letter of s) {
    if (letter === 'R') rCount++;
    else lCount++;
    if (rCount === lCount) {
      answer += 1;
      rCount = 0;
      lCount = 0;
    }
  }
  return answer;
};
