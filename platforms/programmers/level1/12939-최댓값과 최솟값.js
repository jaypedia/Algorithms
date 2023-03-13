// Oct 31, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  const arr = s.split(' ');
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(+arr[i]);
  }

  const min = Math.min(...result);
  const max = Math.max(...result);

  let answer = '';
  answer += min.toString() + ' ';
  answer += max.toString();
  return answer;
}

// Mar 14, 2023
function solution(s) {
  const arr = s
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  return `${arr[0]} ${arr[arr.length - 1]}`;
}
