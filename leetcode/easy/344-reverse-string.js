// Feb 19, 2022
// https://leetcode.com/problems/reverse-string/

/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/

// My solution
// Time Complexity: O(n/2) => O(n)
// Space Complexity: O(1)
// Two pointers approach
const reverseString = s => {
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
  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
