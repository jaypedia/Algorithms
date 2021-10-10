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

// Other's solution 1
function solution(n, a = 0, b = 0) {
  return n <= a / 2 ? b : solution(n, a + 1, (b += n % a ? 0 : a));
}

// Other's solution 2
let sumDivisor = num => {
  let answer = 0,
    i = 1,
    j = num % 2 == 0 ? 1 : 2;

  for (i; i < num; i = i + j) if (num % i == 0) answer += i;

  return answer + num;
};
