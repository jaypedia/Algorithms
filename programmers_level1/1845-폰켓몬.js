// March 11, 2022
// https://programmers.co.kr/learn/courses/30/lessons/1845

// My solution
function solution(nums) {
  const max = nums.length / 2;
  const set = new Set(nums);
  return set.size <= max ? set.size : max;
}

// My another solution
var solution = nums => Math.min(new Set(nums).size, nums.length / 2);

// Other's solution
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];
  return arr.length > max ? max : arr.length;
}

// Without Set (by Hemdi)
function hemdiSolution(nums) {
  const max = nums.length / 2;
  const obj = {};
  let objKeyCount;
  nums.forEach(n => (obj[n] = (obj[n] || 0) + 1));
  objKeyCount = Object.keys(obj).length;
  return objKeyCount <= max ? objKeyCount : max;
}

console.log(hemdiSolution([3, 3, 3, 2, 2, 4]));
