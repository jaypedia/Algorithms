// Dec 24, 2022
// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  const isPalindromic = str => {
    return str === str.split('').reverse().join('');
  };

  for (const word of words) {
    if (isPalindromic(word)) {
      return word;
    }
  }
  return '';
};

// Two pointers
// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/1673394/javascript-two-pointers
// Complexity: O(N + M)
function firstPalindrome(words) {
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      return words[i];
    }
  }

  return '';
}

function isPalindrome(word) {
  for (let i = 0, j = word.length - 1; i < j; i++, j--) {
    if (word[i] !== word[j]) {
      return false;
    }
  }
  return true;
}
