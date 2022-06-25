// June 25, 2022
// https://leetcode.com/problems/self-dividing-numbers/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
// My solution
var selfDividingNumbers = function (left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    let isSelf = true;
    const cur = i + '';

    for (let j = 0; j < cur.length; j++) {
      if (cur[j] === '0' || i % +cur[j]) {
        isSelf = false;
        break;
      }
    }
    if (isSelf) answer.push(i);
  }

  return answer;
};

console.log(selfDividingNumbers(47, 85));
