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

// July 20, 2022
var firstUniqChar = s => {
  const map = new Map();

  for (const c of s) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
};

var firstUniqChar = s => {
  const map = [...s].reduce((acc, cur) => {
    if (acc.has(cur)) acc.set(cur, acc.get(cur) + 1);
    else acc.set(cur, 1);
    return acc;
  }, new Map());

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
};
