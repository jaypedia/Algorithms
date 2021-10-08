// 2021-10-08
// 정수 내림차순으로 배치하기

// My Solution
function solution(n) {
  return +(n + '')
    .split('')
    .map(v => +v)
    .sort((a, b) => b - a)
    .join('');
}
