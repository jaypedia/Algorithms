// Oct 28, 2022
// https://leetcode.com/problems/count-the-number-of-consistent-strings/

var countConsistentStrings = function (allowed, words) {
  const set = new Set(allowed);
  return words.reduce((acc, cur) => {
    return cur.split('').every(v => set.has(v)) ? ++acc : acc;
  }, 0);
};
