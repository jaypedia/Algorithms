// 2022.2.8

// Binary Search
// When elements are sorted, we are able to take the previlege of this extra information to bring down the search time to O(log n)
// That is a huge performance improvement.
// The reason behind this huge performance increase is because for each search iterations,
// we are able to cut the elements we will be looking at in half.
// Fewer elements to look at === faster search time
// And this all comes from the simple fact that in a sorted list,
// everything to the right of n will be greater or equal to it, and vice versa.
// Reference : https://leetcode.com/problems/binary-search/discuss/423162/Binary-Search-101

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// O(n)
const searchOn = function (nums, target) {
  return nums.indexOf(target);
};

// O(log n) : iterative
const searchIter = function (nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo + 1) / 2);
    if (target < nums[mid]) hi = mid - 1;
    else lo = mid;
  }
  return nums[lo] === target ? lo : -1;
};

// O(log n) : recursive
// By Hoi (CodeSquad)
const searchRecur = (nums, target) => {
  const BS = (lo, hi) => {
    if (lo > hi) return -1;

    const mid = lo + Math.floor((hi - lo) / 2);
    let result;

    if (nums[mid] > target) {
      result = BS(lo, hi - 1);
    } else if (nums[mid] < target) {
      result = BS(mid + 1, hi);
    } else {
      return mid;
    }

    return result;
  };

  return BS(0, nums.length - 1);
};

console.log(searchRecur([-1, 0, 3, 5, 9, 12], 9)); // 4
