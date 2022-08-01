// Aug 1, 2022
// https://leetcode.com/problems/valid-sudoku

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const len = board.length;
  for (let i = 0; i < len; i++) {
    const row = new Set();
    const col = new Set();
    const box = new Set();
    for (let j = 0; j < len; j++) {
      const curRow = board[i][j];
      const curCol = board[j][i];
      const curBox = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
      if (row.has(curRow) || col.has(curCol) || box.has(curBox)) return false;
      if (!isNaN(curRow)) row.add(curRow);
      if (!isNaN(curCol)) col.add(curCol);
      if (!isNaN(curBox)) box.add(curBox);
    }
  }
  return true;
};

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

isValidSudoku(board);
