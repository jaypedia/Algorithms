// Jan 24, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  let answer = 0;

  while (a <= n) {
    const unit = Math.floor(n / a);
    answer += b * unit;
    n += unit * (b - a);
  }

  return answer;
}
