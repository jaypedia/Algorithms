// Dec 21, 2022
// https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  return rectangles
    .map(rec => Math.min(...rec))
    .sort((a, b) => b - a)
    .filter((e, _, a) => a[0] === e).length;
};

var countGoodRectangles = function (rectangles) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < rectangles.length; i++) {
    let minSide = Math.min(rectangles[i][0], rectangles[i][1]);

    if (minSide > max) {
      count = 0;
      max = minSide;
    }

    if (minSide === max) count++;
  }

  return count;
};
