// Dec 31, 2022
// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const answer = [];
  const length = arr.length;

  while (answer.length < length - 1) {
    arr = arr.slice(1);
    const max = Math.max(...arr);
    answer.push(max);
  }

  return [...answer, -1];
};

// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/487742/javascript-optimal-solution-w-explanation
const replaceElements = (arr) => {
  const result = new Array(arr.length);
  result[arr.length - 1] = -1;

  for (let i = arr.length - 1; i > 0; i -= 1) {
    result[i - 1] = Math.max(arr[i], result[i]);
  }

  return result;
};
