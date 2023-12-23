// Feb 20, 2022
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  return s
    .split(' ')
    .map((v) => v.split('').reverse().join(''))
    .join(' ');
};

// Build the reversed words as if we're using a stack
// https://leetcode.com/problems/reverse-words-in-a-string-iii/discuss/102048/A-couple-of-JavaScript-O(n)-solutions
const reverseWords2 = (s) => {
  let res = '';
  let word = '';
  for (let c of s) {
    if (c === ' ') {
      res += word + c;
      word = '';
    } else {
      word = c + word;
    }
  }
  return res + word;
};
