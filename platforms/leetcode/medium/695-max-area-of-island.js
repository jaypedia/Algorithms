// Sep 2, 2023
// https://leetcode.com/problems/max-area-of-island/

var maxAreaOfIsland = function (grid) {
  let answer = 0;
  let n = grid.length;
  let m = grid[0].length;

  const traverse = (i, j) => {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] === 0) {
      return 0;
    }

    grid[i][j] = 0;
    return 1 + traverse(i - 1, j) + traverse(i, j - 1) + traverse(i + 1, j) + traverse(i, j + 1);
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j]) {
        answer = Math.max(answer, traverse(i, j));
      }
    }
  }
  return answer;
};
