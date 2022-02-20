// Feb 20, 2022
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */

// My first solution : using array apis
// Time Complexity
const reverseWords = function (s) {
  return s
    .split(' ')
    .map(v => v.split('').reverse().join(''))
    .join(' ');
};

// Other's solution
// Build the reversed words as if we're using a stack
// https://leetcode.com/problems/reverse-words-in-a-string-iii/discuss/102048/A-couple-of-JavaScript-O(n)-solutions
// Time Complexity
const reverseWords2 = s => {
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

console.log(reverseWords2("Let's take LeetCode contest"));
