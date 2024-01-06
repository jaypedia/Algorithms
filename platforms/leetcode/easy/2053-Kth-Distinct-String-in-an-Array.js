// Jan 18, 2023
// https://leetcode.com/problems/kth-distinct-string-in-an-array/

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const map = arr.reduce((acc, cur) => {
    acc.set(cur, ~~acc.get(cur) + 1);
    return acc;
  }, new Map());

  const store = [];

  map.forEach((value, key) => {
    if (value === 1) {
      store.push(key);
    }
  });
  return store[k - 1] || '';
};
