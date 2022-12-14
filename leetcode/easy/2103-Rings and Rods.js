// Dec 14, 2022
// https://leetcode.com/problems/rings-and-rods/

/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const arr = Array.from(Array(10), () => new Set());
  for (let i = 0; i < rings.length; i += 2) {
    const color = rings[i];
    const index = Number(rings[i + 1]);
    arr[index].add(color);
  }

  return arr.filter(v => v.size === 3).length;
};
