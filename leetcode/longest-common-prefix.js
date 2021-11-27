// 2021-11-26~27

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  const standard = strs[0];
  if (strs.length === 1) return standard;

  const arr = [];
  let prefix = '';

  for (let j = 1; j < strs.length; j++) {
    for (let i = 0; i < standard.length; i++) {
      if (standard[i] === strs[j][i]) prefix += standard[i];

      if (standard[i] !== strs[j][i]) break;
    }

    arr.push(prefix);
    prefix = '';
  }

  arr.sort();

  return arr[0];
};

// const strs = ['flower', 'flow', 'flight'];
const strs = ['cir', 'car'];
console.log(longestCommonPrefix(strs)); // 'c'
