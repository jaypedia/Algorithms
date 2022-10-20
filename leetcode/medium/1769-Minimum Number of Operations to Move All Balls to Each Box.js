// Oct 20, 2022
// https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const ballBox = [];
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] === '1') {
      ballBox.push(i);
    }
  }

  const answer = [];
  for (let i = 0; i < boxes.length; i++) {
    let count = 0;
    ballBox.forEach(v => {
      count += Math.abs(v - i);
    });
    answer.push(count);
  }
  return answer;
};
