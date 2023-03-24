// Oct 10, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (!(n % i)) sum += i;
  }
  return sum;
}
