// 2021-10-08
// 자릿수 더하기

// My Solution
function solution(n) {
  return +(n + '').split('').reduce((sum, current) => +sum + +current);
}
