// Oct 5, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function solution2(arr) {
  return arr.reduce((sum, current) => sum + current, 0) / arr.length;
}
