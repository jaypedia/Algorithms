// March 13, 2022
// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const origin = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = origin.split('').reverse().join('');
  return origin === reversed;
};

// https://leetcode.com/problems/valid-palindrome/discuss/554098/Simple-JavaScript-soluton
const isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
};
