// Oct 21, 2022
// https://leetcode.com/problems/shuffle-string/

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const len = s.length;
  let answer = '';
  let curIdx = 0;
  while (answer.length !== len) {
    indices.forEach((v, i) => {
      if (v === curIdx) {
        answer += s[i];
      }
    });
    curIdx++;
  }
  return answer;
};
