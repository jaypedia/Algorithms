// Oct 5, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(arr) {
  const str = arr.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return Number(str) % sum ? false : true;
}

function solution2(n) {
  return !(n % (n + '').split('').reduce((sum, current) => +sum + +current));
}
