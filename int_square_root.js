// 2021-10-08
// 정수 제곱근 판별

// My Solution
function solution(n) {
  return squareRoot(n) ? (squareRoot(n) + 1) ** 2 : -1;
}

function squareRoot(n) {
  for (let i = 0; i < n; i++) {
    if (i ** 2 === n) return i;
  }
}
