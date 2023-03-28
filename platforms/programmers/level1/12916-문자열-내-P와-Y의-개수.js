// Oct 9, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12916

const solution = (s) => (s.match(/p/gi) || []).length === (s.match(/y/gi) || []).length;

function solution(s) {
  return s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length;
}
