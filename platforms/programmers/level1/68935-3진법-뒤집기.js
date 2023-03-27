// Oct 21, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
}

function solution(n) {
  const answer = [];

  while (n !== 0) {
    answer.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return answer.reduce((acc, v, i) => acc + v * Math.pow(3, i), 0);
}
