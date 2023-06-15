// Dec 22, 2022
// https://leetcode.com/problems/delete-greatest-value-in-each-row/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  const sortedGrid = grid.map(g => g.sort((a, b) => a - b));
  const innerLength = grid[0].length;
  const max = [];

  while (max.length < innerLength) {
    let tempMaxArr = [];
    sortedGrid.forEach(g => {
      const curMax = g.pop();
      tempMaxArr.push(curMax);
    });
    const tempMax = Math.max(...tempMaxArr);
    max.push(tempMax);
    tempMaxArr = [];
  }
  return max.reduce((a, b) => a + b, 0);
};

// https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2901675/short-javascript-solution/
var deleteGreatestValue = function (grid) {
  grid.forEach(row => row.sort((a, b) => a - b));
  let sum = 0;

  while (grid[0].length) {
    let column = [];
    for (let row of grid) column.push(row.pop());
    sum += Math.max(...column);
  }

  return sum;
};
