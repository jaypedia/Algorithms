// 2021-11-26

/*
Given an integer x, return true if x is palindrome integer
An integer is a palindrome when it reads the same backward as forward. 
For example, 121 is palindrome while 123 is not.
*/

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  return x === +x.toString().split('').reverse().join('') ? true : false;
};
