// Sep 5, 2023
// https://leetcode.com/problems/repeated-substring-pattern/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  for (let i = 1; i < s.length; i++) {
    const pattern = s.slice(0, i);
    const repeatTime = Math.ceil(s.length / i);
    if (pattern.repeat(repeatTime) === s) return true;
  }

  return false;
};
