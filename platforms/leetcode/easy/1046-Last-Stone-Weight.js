// Oct 6, 2022
// https://leetcode.com/problems/last-stone-weight/description/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => a - b);
  while (stones.length >= 2) {
    const x = stones.pop();
    const y = stones.pop();
    if (x !== y) {
      const newStone = x - y;
      stones.push(newStone);
      stones.sort((a, b) => a - b);
    }
  }
  if (stones.length === 1) return stones[0];
  if (!stones.length) return 0;
};
