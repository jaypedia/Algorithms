// Oct 7, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length ? arr : [-1];
}

function solution(arr) {
  if (arr.length <= 1) return [-1];
  let min;
  arr.reduce((acc, cur) => (min = cur > acc ? acc : cur));
  return arr.filter((e) => e !== min);
}

function solution(arr) {
  if (arr.length === 1) return [-1];
  const minValue = Math.min.apply(null, arr);
  const index = arr.findIndex((value) => value === minValue);
  arr.splice(index, 1);
  return arr;
}
