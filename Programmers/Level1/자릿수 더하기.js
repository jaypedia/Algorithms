// 2021-10-08
// https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  return (n + '').split('').reduce((acc, cur) => +acc + +cur, 0);
}
