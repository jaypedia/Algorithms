// Oct 8, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  return (n + '').split('').reduce((acc, cur) => +acc + +cur, 0);
}
