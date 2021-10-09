// 2021-10-10
// 약수의 합

// My Solution
function solution(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}

// Other's solution
