// Nov 11, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  let answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[A.length - i - 1];
  }

  return answer;
}

function solution2(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((acc, cur, i) => acc + cur * B[i], 0);
}
