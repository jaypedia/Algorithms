// Jan 19, 2023
// https://leetcode.com/problems/longest-subsequence-with-limited-sum/

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  const answer = [];
  nums.sort((a, b) => a - b);
  queries.forEach((query) => {
    let count = 0;
    let sum = 0;
    for (const num of nums) {
      if (sum + num <= query) {
        sum += num;
        count++;
      }
    }
    answer.push(count);
  });
  return answer;
};
