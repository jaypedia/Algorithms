// Mar 12, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/161989

function solution(n, m, section) {
  let answer = 0;
  let paintCount = 0;

  for (let i = section[0]; i <= section[section.length - 1]; i++) {
    if (paintCount >= 1 && paintCount < m) {
      paintCount++;
      continue;
    }

    if (section.includes(i)) {
      paintCount = 1;
      answer++;
    }
  }
  return answer;
}
