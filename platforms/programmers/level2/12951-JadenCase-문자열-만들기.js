// Nov 5, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  return s
    .split(' ')
    .map((v) => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase())
    .join(' ');
}

function solution(s) {
  return s
    .split(' ')
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(' ');
}

function solution(s) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === ' ') {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}
