// March 28, 2022
// https://programmers.co.kr/learn/courses/30/lessons/12899

// https://after-newmoon.tistory.com/59
function solution(n) {
  const arr124 = [4, 1, 2];
  let answer = '';
  while (n) {
    answer = arr124[n % 3] + answer;
    n = n % 3 ? Math.floor(n / 3) : n / 3 - 1;
  }
  return answer;
}
