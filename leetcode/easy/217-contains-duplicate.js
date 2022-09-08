// March 13, 2022
// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// My solution
var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};

// Other's solutions
// https://leetcode.com/problems/contains-duplicate/discuss/515531/Javascript-set-vs.-object
function objectSolution(nums) {
  const testObj = {};
  for (var i = 0; i < nums.length; i++) {
    const aNum = nums[i];
    if (testObj[aNum]) {
      return true;
    } else {
      testObj[aNum] = true;
    }
  }
  return false;
}

const mapSolution = nums => {
  const seen = new Map();
  for (let num = 0; num < nums.length; num++) {
    if (seen.has(nums[num])) return true;
    seen.set(nums[num]);
  }
  return false;
};

// https://leetcode.com/problems/contains-duplicate/discuss/61054/Javascript-very-fast-solution
var containsDuplicate = function (nums) {
  var obj = {};
  for (var i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;
    if (obj[nums[i]] > 1) return true;
  }
  return false;
};

// Sep 4, 2022
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
};
