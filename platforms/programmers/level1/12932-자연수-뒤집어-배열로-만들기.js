// Oct 8, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  return (n + '')
    .split('')
    .map((v) => +v)
    .reverse();
}

function solution(n) {
  const arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}

function solution(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map((o) => (o = parseInt(o)));
}

function solution(n) {
  const answer = [];
  n = n + '';
  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(Number(n[i]));
  }
  return answer;
}
