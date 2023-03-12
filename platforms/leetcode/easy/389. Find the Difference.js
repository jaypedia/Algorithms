// Oct 30, 2022
// https://leetcode.com/problems/find-the-difference/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// use Map()
var findTheDifference = function (s, t) {
  const map = s.split('').reduce((acc, cur) => {
    acc.set(cur, ~~acc.get(cur) + 1);
    return acc;
  }, new Map());

  for (let i = 0; i < t.length; i++) {
    const alpha = t[i];
    if (map.get(alpha) && map.get(alpha) > 0) {
      map.set(alpha, map.get(alpha) - 1);
    } else {
      return alpha;
    }
  }
};

// use charCodeAt(), fromCharCode()
var findTheDifference = function (s, t) {
  const sum1 = s.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  const sum2 = t.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  return String.fromCharCode(sum2 - sum1);
};

// use replace()
var findTheDifference = function (s, t) {
  for (let letter of s) t = t.replace(letter, '');
  return t;
};
