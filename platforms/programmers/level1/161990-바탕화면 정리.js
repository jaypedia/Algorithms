// Mar 12, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/161990

function solution(wallpaper) {
  const rowIdxArr = [];
  const colIdxArr = [];

  wallpaper.forEach((row, rowIdx) => {
    for (let colIdx = 0; colIdx < row.length; colIdx++) {
      if (row[colIdx] === '#') {
        rowIdxArr.push(rowIdx);
        colIdxArr.push(colIdx);
      }
    }
  });

  const rowMin = Math.min(...rowIdxArr);
  const rowMax = Math.max(...rowIdxArr) + 1;
  const colMin = Math.min(...colIdxArr);
  const colMax = Math.max(...colIdxArr) + 1;

  return [rowMin, colMin, rowMax, colMax];
}
