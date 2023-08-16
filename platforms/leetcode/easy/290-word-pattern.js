// Aug 16, 2023
// https://leetcode.com/problems/word-pattern

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const map = new Map();
  const set = new Set();
  const sArr = s.split(' ');

  if (pattern.length !== sArr.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i]) && !set.has(sArr[i])) {
      map.set(pattern[i], sArr[i]);
      set.add(sArr[i]);
    } else {
      if (map.get(pattern[i]) !== sArr[i]) return false;
    }
  }
  return true;
};
