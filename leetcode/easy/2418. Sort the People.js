// Dec 15, 2022
// https://leetcode.com/problems/sort-the-people/

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const answer = [];
  while (answer.length < names.length) {
    const height = Math.max(...heights);
    const index = heights.indexOf(height);
    answer.push(names[index]);
    heights[index] = -1;
  }
  return answer;
};

// Use Map
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const length = heights.length;
  const map = new Map();

  for (let i = 0; i < length; i++) {
    map.set(heights[i], names[i]);
  }

  heights.sort((a, b) => b - a);

  const res = [];
  for (const height of heights) {
    res.push(map.get(height));
  }
  return res;
};
