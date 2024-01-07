// Nov 14, 2022
// https://leetcode.com/problems/count-items-matching-a-rule/

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const key = { type: 0, color: 1, name: 2 };
  const keyIndex = key[ruleKey];
  let count = 0;

  items.forEach(item => {
    if (item[keyIndex] === ruleValue) {
      count++;
    }
  });

  return count;
};
