// Dec 20, 2022
// https://leetcode.com/problems/maximum-69-number/

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  const str = num + '';
  const len = str.length;
  const numbers = [];

  for (let i = len - 1; i >= 0; i--) {
    const cur = +str[i];
    const calc = 3 * 10 ** (len - i - 1);
    let changedNum = 0;
    if (cur === 6) {
      changedNum = num + calc;
    } else {
      changedNum = num - calc;
    }
    if (changedNum > 10 ** 4 || changedNum < 0) continue;
    numbers.push(changedNum);
  }

  return Math.max(...numbers, num);
};
