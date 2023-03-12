// Jan 9, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  const answer = [];
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) answer.push(-1);
    else answer.push(i - map.get(s[i]));
    map.set(s[i], i);
  }

  return answer;
}
