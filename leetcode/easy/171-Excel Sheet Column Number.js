// Oct 23, 2022
// https://leetcode.com/problems/excel-sheet-column-number/

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const diff = 64;
  const alphaLength = 26;
  let answer = 0;
  let idx = 0;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    answer += alphaLength ** idx * (columnTitle[i].charCodeAt() - diff);
    idx++;
  }
  return answer;
};

// https://leetcode.com/problems/excel-sheet-column-number/solutions/308476
var titleToNumber = function (s) {
  let colNum = 0;
  for (let i = s.length - 1, powerOf26 = 1; i >= 0; i--, powerOf26 *= 26) {
    colNum += powerOf26 * (s.charCodeAt(i) - 64);
  }
  return colNum;
};
