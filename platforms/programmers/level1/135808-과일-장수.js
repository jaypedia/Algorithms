// Jan 5, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/135808

// Out of 24 test cases, 5 cases (Test 11 to Test 15) exceeded the time limit and timed out
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

// All test case passed
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
