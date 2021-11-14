// 2021-11-14
// 숫자의 표현

// My solution
function solution(n) {
  let answer = 1;
  let temp = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i; j < n; j++) {
      temp += j;
      if (temp === n) {
        answer++;
        break;
      } else if (temp > n) break;
    }
    temp = 0;
  }
  return answer;
}

// Other's solution 1
// Find a number that is both odd and divisor of a given number.
// All odd numbers can be expressed as the sum of consecutive natural numbers.
function expressions(num) {
  let answer = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0 && i % 2 === 1) answer++;
  }
  return answer;
}

// Other's solution 2 - Recursion
function solution(n) {
  let answer = 0;

  function re(current, sum) {
    if (sum === n) return true;
    if (sum > n) return false;
    return re(current + 1, sum + current);
  }

  for (let i = 1; i <= n; i++) {
    if (re(i, 0)) answer++;
  }
  return answer;
}
