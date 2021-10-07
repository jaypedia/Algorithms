// 2021-10-07
// 제일 작은 수 제거하기

// My Solution
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length ? arr : [-1];
}
