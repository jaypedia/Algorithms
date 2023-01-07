// Jan 7, 2022
// https://leetcode.com/problems/n-queens/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const answer = [];

  const printChess = (arr) => {
    return arr.slice(1).map((v) => {
      let board = '';
      for (let i = 0; i < n; i++) {
        if (i === v - 1) {
          board += 'Q';
        } else {
          board += '.';
        }
      }
      return board;
    });
  };

  const dfs = (arr, row) => {
    if (row === n) {
      answer.push(printChess(arr));
    } else {
      for (let i = 1; i <= n; i++) {
        arr[row + 1] = i;
        if (isValid(arr, row + 1)) {
          dfs(arr, row + 1);
        }
      }
    }
  };

  const isValid = (arr, row) => {
    for (let i = 1; i < row; i++) {
      if (arr[i] === arr[row]) return false;
      if (Math.abs(arr[i] - arr[row]) === Math.abs(i - row)) return false;
    }
    return true;
  };

  for (let i = 1; i <= n; i++) {
    const arr = new Array(n + 1).fill(0);
    arr[1] = i;
    dfs(arr, 1);
  }

  return answer;
};
