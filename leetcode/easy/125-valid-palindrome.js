// March 13, 2022
// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */

// My solution
var isPalindrome = function (s) {
  const origin = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = origin.split('').reverse().join('');
  return origin === reversed;
};

console.log(isPalindrome('aA : aaB'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('0P'));

// Other's solutions
// https://leetcode.com/problems/valid-palindrome/discuss/554098/Simple-JavaScript-soluton
// Two variables in a loop
const isPalindrome = s => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
};
