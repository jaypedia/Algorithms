// 2021-10-10
// https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
  return n % 2 ? '수박'.repeat(Math.floor(n / 2)) + '수' : '수박'.repeat(n / 2);
}

// No need to use Math.floor - repeat() count will be converted to integer
function solution(n) {
  return n % 2 === 0 ? '수박'.repeat(n / 2) : '수박'.repeat(n / 2) + '수';
}

function solution(n) {
  return '수박'.repeat(n).substring(0, n);
}

const solution = (n) => {
  return '수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : '');
};

const solution = (n) => '수박'.repeat(n).slice(0, n);

function solution(n) {
  return '수박'.repeat(n / 2) + (n % 2 ? '수' : '');
}

function solution(n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += i % 2 == 0 ? '수' : '박';
  }
  return result;
}
