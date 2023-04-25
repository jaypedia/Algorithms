// Oct 11, 2022
// https://leetcode.com/problems/jewels-and-stones/description/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const set = jewels.split('').reduce((acc, cur) => {
    acc.add(cur);
    return acc;
  }, new Set());

  let answer = 0;
  for (const stone of stones) {
    if (set.has(stone)) answer++;
  }
  return answer;
};
