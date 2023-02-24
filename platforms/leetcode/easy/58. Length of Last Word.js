// Jun 19, 2022
// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim();
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') count++;
    else break;
  }
  return count;
};

// Sep 7, 2022
var lengthOfLastWord = function (s) {
  const arr = s.split(' ');
  for (let i = arr.length - 1; i >= 0; i--) {
    const len = arr[i].length;
    if (len) return len;
  }
};
