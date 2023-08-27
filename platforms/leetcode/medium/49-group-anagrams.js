// Aug 26, 2023
// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

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

var groupAnagrams = function (strs) {
  if (strs.length <= 1) return [strs];

  const answer = [];

  while (strs.length >= 1) {
    const cur = strs.pop();
    if (strs.length) {
      const group = strs.filter((str) => {
        return isAnagram(str, cur);
      });

      answer.push([cur, ...group]);

      strs = strs.filter((str) => {
        return !isAnagram(str, cur);
      });
    } else {
      answer.push([cur]);
    }
  }

  return answer;
};

var groupAnagrams = function (strs) {
  /* sort each string, use that as key in map and when new sorted string matches a key we add it to that */
  const map = {};

  for (const str of strs) {
    const sorted = str.split('').sort().join('');

    if (!map[sorted]) {
      map[sorted] = [str];
    } else {
      map[sorted].push(str);
    }
  }

  return Object.values(map);
};
