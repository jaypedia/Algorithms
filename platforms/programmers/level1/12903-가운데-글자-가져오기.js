// Oct 17, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  return s.length % 2 ? s[Math.floor(s.length / 2)] : s[s.length / 2 - 1] + s[s.length / 2];
}

function solution(s) {
  return s.length % 2 ? s.substr(Math.floor(s.length / 2, 1)) : s.substr(s.length / 2 - 1, 2);
}

function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 ? 1 : 2);
}
