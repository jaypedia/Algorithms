// June 11, 2022
// https://leetcode.com/problems/counting-bits/

/**
 * @param {number} n
 * @return {number[]}
 */
// My solution
var countBits = function (n) {
  if (n <= 1) return Array.from({ length: n + 1 }, (_, i) => i);

  const countOne = numStr => {
    let count = 0;
    for (const s of numStr) {
      if (s === '1') {
        count++;
      }
    }
    return count;
  };

  const answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    const count = countOne(i.toString(2));
    answer.push(count);
  }

  return answer;
};

console.log(countBits(5));
