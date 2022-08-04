// 2021-11-26
// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  return x === +x.toString().split('').reverse().join('') ? true : false;
};

// 2022.1.12 다시풀기 - 소요시간 5분
const isPalindrome = int => {
  return int === +int.toString().split('').reverse().join('');
};

// 2022.1.13 - spread operator
const isPalindrome = x => {
  return x + '' === [...(x + '')].reverse().join('');
};

// 2022.8.4
var isPalindrome = function (x) {
  return x + '' === (x + '').split('').reverse().join('');
};

// Recursive solution
// https://leetcode.com/problems/palindrome-number/discuss/467842/javascript
var isPalindrome = function (x) {
  const s = x.toString();
  if (s.length === 1) return true;
  const start = s[0];
  const end = s[s.length - 1];
  if (start !== end) return false;
  if (s.length === 2) return true;
  const subStr = s.substring(1, s.length - 1);
  return isPalindrome(subStr);
};
