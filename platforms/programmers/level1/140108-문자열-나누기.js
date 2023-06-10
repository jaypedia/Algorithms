// Jan 23, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    let hitCount = 0;
    let noHitCount = 0;
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) hitCount++;
      else noHitCount++;
      if (hitCount === noHitCount || j === s.length - 1) {
        answer++;
        i = j;
        break;
      }
    }
  }

  return answer;
}

function solution(s) {
  let answer = 0;
  let count = 0;
  let letter = '';

  for (let i = 0; i < s.length; i++) {
    if (!count) {
      answer++;
      count++;
      letter = s[i];
      continue;
    }
    if (letter === s[i]) count++;
    else count--;
  }
  return answer;
}

// Jun 10, 2023
function solution(s) {
  let answer = 0;
  let firstCount = 0;

  for (let i = 0; i < s.length; i++) {
    let first = s[i];
    firstCount = 1;
    let nextCount = 0;

    for (let j = i + 1; j < s.length; j++) {
      const next = s[j];
      if (next === first) {
        firstCount++;
      } else {
        nextCount++;
      }
      i = j;
      if (firstCount === nextCount) {
        answer++;
        firstCount = 0;
        nextCount = 0;
        break;
      }
    }
  }

  return firstCount ? answer + 1 : answer;
}
