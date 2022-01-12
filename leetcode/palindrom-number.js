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

// 2022.1.12 다시풀기 - 소요시간 5분
const isPalindrome = int => {
  return int === +int.toString().split('').reverse().join('');
};
