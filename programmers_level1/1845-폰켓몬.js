// March 11, 2022
// https://programmers.co.kr/learn/courses/30/lessons/1845

// My solution
function solution(nums) {
  const max = nums.length / 2;
  const set = new Set(nums);
  return set.size <= max ? set.size : max;
}

// Other's solution
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];
  return arr.length > max ? max : arr.length;
}
