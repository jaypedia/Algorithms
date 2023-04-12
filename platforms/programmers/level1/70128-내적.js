// Oct 20, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/70128

// a와 b의 내적 : a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] (n은 a, b의 길이)

function solution(a, b) {
  return a.map((v, i) => v * b[i]).reduce((a, b) => a + b);
}

// Apr 12, 2023
function solution(a, b) {
  return a.reduce((acc, cur, i) => (acc += cur * b[i]), 0);
}
