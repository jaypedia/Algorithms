// Dec 27, 2022
// https://leetcode.com/problems/sum-of-unique-elements/

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const map = nums.reduce((acc, cur) => {
    acc.set(cur, ~~acc.get(cur) + 1);
    return acc;
  }, new Map());

  let sum = 0;

  for (const [key, value] of map) {
    if (value === 1) {
      sum += key;
    }
  }
  return sum;
};

// https://leetcode.com/problems/sum-of-unique-elements/solutions/1058287
const sumOfUnique = (nums) => {
  let map = {},
    calc = 0;

  nums.forEach((item) => (map[item] = ~~map[item] + 1));
  Object.keys(map)
    .filter((key) => map[key] === 1)
    .map((i) => (calc += +i));

  return calc;
};
