// Oct 3, 2021 & Oct 6, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((current, index) => current * (index + 1));
}

function solution(x, n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
