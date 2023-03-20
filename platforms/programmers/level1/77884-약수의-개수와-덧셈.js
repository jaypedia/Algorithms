// Oct 24, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/77884

// Solution 1
function solution(left, right) {
  let answer = 0;
  let divide = 0;
  for (let i = left; i <= right; i++) {
    divide = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) divide++;
    }
    if (divide % 2 === 0) answer += i;
    else answer -= i;
  }

  return answer;
}

// Solution 1
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

// Solution 1
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let temp = Math.sqrt(i);
    answer += temp == parseInt(temp) ? -i : i;
  }
  return answer;
}
