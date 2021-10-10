// 2021-10-10
// 수박수박수박수박수?

// My Solution
function solution(n) {
  return n % 2 ? '수박'.repeat(Math.floor(n / 2)) + '수' : '수박'.repeat(n / 2);
}
