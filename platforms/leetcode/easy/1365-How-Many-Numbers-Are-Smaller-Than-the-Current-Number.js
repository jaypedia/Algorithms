// Oct 14, 2022
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const answer = [];
  nums.forEach(num => {
    let count = 0;
    nums.forEach(v => {
      if (v < num) {
        count++;
      }
    });
    answer.push(count);
  });
  return answer;
};

// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/2684266/js-very-easy-and-very-fast-with-hashmap/
var smallerNumbersThanCurrent = function (nums) {
  const hashmap = new Map();
  const array = [...nums].sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (!hashmap.has(array[i])) hashmap.set(array[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = hashmap.get(nums[i]);
  }

  return nums;
};
