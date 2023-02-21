// Oct 6, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12943

// My Solution
function solution(num) {
  let answer = 0;
  while (num !== 1) {
    if (answer > 500) return -1;
    num % 2 ? (num = num * 3 + 1) : (num = num / 2);
    answer++;
  }
  return answer;
}

// Other's solution 1
function solution(num) {
  let answer = 0;
  while (num !== 1 && answer !== 500) {
    num % 2 ? (num = num * 3 + 1) : (num = num / 2);
    answer++;
  }
  return num === 1 ? answer : -1;
}

// Other's solution 2
function solution(num, count = 0) {
  return num === 1
    ? count >= 500
      ? -1
      : count
    : solution(num % 2 === 0 ? num / 2 : num * 3 + 1, ++count);
}

// Other's solution 3
const solution = (num) => collatzGuessCount(num, 0);

const collatzGuessCount = (num, acc) =>
  num === 1 ? (acc > 500 ? -1 : acc) : collatzGuessCount(processCollatz(num), acc + 1);

const processCollatz = (num) => (num % 2 === 0 ? num / 2 : num * 3 + 1);
