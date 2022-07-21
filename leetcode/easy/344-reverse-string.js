// Feb 19, 2022
// https://leetcode.com/problems/reverse-string/

/*
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
*/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// My solution
// Time Complexity: O(n/2) => O(n)
// Space Complexity: O(1)
// Two pointers approach
var reverseString = s => {
  let left = 0; // look at the front of the array
  let right = s.length - 1; // look at the rear of the array
  let temp = '';

  while (left < right) {
    temp = s[left];
    s[left] = s[right]; // swap element in place
    s[right] = temp;
    left++;
    right--;
  }
};

// July 21, 2022
// Recursive solution
// https://leetcode.com/problems/reverse-string/discuss/305439/Javascript-Recursion
var reverseString = function (s) {
  if (!s.length) return;
  const cur = s.shift();
  reverseString(s);
  s.push(cur);
};

// Using destructuring assignment array matching available in ES6+, though not very efficient.
var reverseString = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
};

var reverseString = function (s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    const x = s[i];
    const y = s[j];
    s[i] = y;
    s[j] = x;
  }
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
