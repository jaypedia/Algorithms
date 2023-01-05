// Jan 5, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/135808

// 테스트케이스 24개 중 11~15 시간 초과
function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);

  while (m <= score.length) {
    const arr = score.splice(0, m);
    const min = Math.min(...arr);
    answer += min * m;
  }

  return answer;
}

// 바꿔서 통과한 풀이
function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  let index = 0;

  while (index + m <= score.length) {
    const arr = score.slice(index, m + index);
    const min = arr[m - 1];
    answer += min * m;
    index += m;
  }

  return answer;
}
