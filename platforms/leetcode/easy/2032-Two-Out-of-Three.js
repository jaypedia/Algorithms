// Jan 3, 2023
// https://leetcode.com/problems/two-out-of-three/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const set3 = new Set(nums3);

  const map = [...set1, ...set2, ...set3].reduce((acc, cur) => {
    acc.set(cur, ~~acc.get(cur) + 1);
    return acc;
  }, new Map());

  const answer = [];

  for (const [key, value] of map) {
    if (value >= 2) {
      answer.push(key);
    }
  }
  return answer;
};

// https://leetcode.com/problems/two-out-of-three/solutions/1982928/very-easy-javascript-solution-with-using-very-less-space/
var twoOutOfThree = function (nums1, nums2, nums3) {
  const set = new Set(nums1);
  const res = new Set();
  const nums1Set = new Set();

  for (let num of nums2) {
    if (set.has(num)) res.add(num);
    nums1Set.add(num);
  }

  for (let num of nums3) {
    if (set.has(num) || nums1Set.has(num)) res.add(num);
  }

  return [...res];
};
