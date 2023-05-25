// March 15, 2022
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function (nums1, nums2) {
  const answer = [];
  const [small, big] = nums1.length <= nums2.length ? [nums1, nums2] : [nums2, nums1];

  small.forEach((v) => {
    if (big.includes(v)) {
      answer.push(v);
      big.splice(big.indexOf(v), 1);
    }
  });
  return answer;
};

// July 13, 2022
// Using Map
// Reference: https://leetcode.com/problems/intersection-of-two-arrays-ii/discuss/242050/JavaScript-Solution-HashMap
var intersect = function (nums1, nums2) {
  const map = new Map();

  // Set the count of the elements in the map
  nums1.forEach((n) => {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  });

  const answer = [];

  nums2.forEach((n) => {
    if (map.has(n) && map.get(n) > 0) {
      answer.push(n);
      map.set(n, map.get(n) - 1); // Subtract 1 if the number is encountered in the nums2 array
    }
  });

  return answer;
};

// https://leetcode.com/problems/intersection-of-two-arrays-ii/discuss/82319/JavaScript-solution-with-reduce-and-filter
var intersect = function (nums1, nums2) {
  // track how often each number occurs in first list
  const store = nums1.reduce((map, n) => {
    map[n] = map[n] + 1 || 1;
    return map;
  }, {});

  // filter out numbers from second list based on how often they occurred in the first list
  return nums2.filter((n) => {
    if (store[n]) {
      store[n]--;
      return true;
    } else {
      return false;
    }
  });
};

// https://leetcode.com/problems/intersection-of-two-arrays-ii/discuss/1468756/Simple-Javascript-Solution
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b), nums2.sort((a, b) => a - b);

  let i = 0,
    j = 0,
    result = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      result.push(nums1[i]);
      i++;
      j++;
    }
  }

  return result;
};
