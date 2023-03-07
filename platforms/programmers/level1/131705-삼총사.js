// Nov 3, 2022
// https://school.programmers.co.kr/learn/courses/30/lessons/131705

function solution(number) {
  let answer = 0;

  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        const sum = number[i] + number[j] + number[k];
        if (!sum) answer++;
      }
    }
  }

  return answer;
}
