// March 17, 2022
// https://leetcode.com/problems/first-unique-character-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */
// Make an object from array using reduce
// const obj = s.split('').reduce((acc, cur, i) => {
//   return { ...acc, [cur]: i };
// }, {});

// My solution
var firstUniqChar = function (s) {
  const obj = {};
  const arr = s.split('');
  const check = [];

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(obj[arr[i]]) && !check.includes(arr[i])) {
      check.push(arr[i]);
      obj[arr[i]] = i;
    } else {
      delete obj[arr[i]];
    }
  }

  if (!Object.keys(obj).length) return -1;

  return Math.min(...Object.values(obj));
};

console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));
console.log(firstUniqChar('aadadaad'));
