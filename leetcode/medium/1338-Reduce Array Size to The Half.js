// Oct 7, 2022
// https://leetcode.com/problems/reduce-array-size-to-the-half/description/

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  const obj = arr.reduce((acc, cur) => {
    acc[cur] = ~~acc[cur] + 1;
    return acc;
  }, {});
  const values = Object.values(obj).sort((a, b) => a - b);
  let size = 0;
  let count = 0;
  while (arr.length / 2 > size) {
    const value = values.pop();
    size += value;
    count++;
  }
  return count;
};
