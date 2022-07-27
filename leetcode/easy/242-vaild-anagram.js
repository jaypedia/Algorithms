// July 27, 2022
// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// My solution
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = [...s].reduce((acc, cur) => {
    acc.set(cur, (acc.get(cur) || 0) + 1);
    return acc;
  }, new Map());

  for (const el of t) {
    if (!map.get(el)) return false;
    map.set(el, map.get(el) - 1);
  }
  return true;
};

// https://leetcode.com/problems/valid-anagram/discuss/66527/A-few-JavaScript-solutions
// Minified version
var isAnagram = function (s, t, m = {}) {
  for (let c of s) m[c] = (m[c] || 0) + 1;
  for (let c of t) if (!m[c]--) return false;
  return Object.values(m).every(v => !v);
};

// One-liner (log n times slower) using sort
var isAnagram = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
};

// https://leetcode.com/problems/valid-anagram/discuss/66810/JavaScript-solution
var isAnagram = function (s, t) {
  const obj = {};
  s.split('').map(v => (obj[v] = (obj[v] || 0) + 1));
  t.split('').map(v => (obj[v] = (obj[v] || 0) - 1));
  return Object.keys(obj).every(v => obj[v] === 0);
};
