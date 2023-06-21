// Jan 17, 2023
// https://leetcode.com/problems/merge-similar-items/

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const map = [...items1, ...items2].reduce((acc, cur) => {
    const [value, weight] = cur;
    acc.set(value, ~~acc.get(value) + weight);
    return acc;
  }, new Map());

  return Array.from(map).sort((a, b) => a[0] - b[0]);
};

// Use Object.entries()
var mergeSimilarItems = function (items1, items2) {
  const map = {};
  const items = [...items1, ...items2];

  for (const [val, weight] of items) {
    if (map[val]) {
      map[val] += weight;
    } else {
      map[val] = weight;
    }
  }

  return Object.entries(map);
};
