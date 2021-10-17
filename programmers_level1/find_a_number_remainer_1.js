// 2021-10-17
// Find a number whose remainder is 1

// My solution
function solution(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}
