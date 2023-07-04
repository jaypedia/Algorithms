// July 4, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
  let round = 1;

  const isMatch = (p1, p2) => {
    if (Math.abs(p1 - p2) !== 1) return false;
    const sorted = [p1, p2].sort((a, b) => a - b);
    if (sorted[0] % 2 === 0) return false;
    return true;
  };

  while (true) {
    if (isMatch(a, b)) return round;
    round++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
}

function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
