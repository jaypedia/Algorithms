// 2021-11-03
// N개의 최소공배수 (N Least Common Multiples)

function gcd(a, b) {
  if (b === 0) return a;
  return getGcd(a, a % b);
}

function solution(arr) {
  return arr.reduce((a, b) => (a * b) / getGcd(a, b));
}
