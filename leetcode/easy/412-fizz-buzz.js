// Feb 21, 2022
// https://leetcode.com/problems/fizz-buzz/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const answer = [...Array(n)].map((_, i) => i + 1);
  let i = 0;
  while (i < n) {
    if (answer[i] % 3 === 0 && answer[i] % 5 === 0) {
      answer[i] = 'FizzBuzz';
    } else if (answer[i] % 3 === 0) {
      answer[i] = 'Fizz';
    } else if (answer[i] % 5 === 0) {
      answer[i] = 'Buzz';
    } else {
      answer[i] = (i + 1).toString();
    }
    i++;
  }
  return answer;
};
