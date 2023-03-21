// Oct 10, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
  return s.split('').sort().reverse().join('');
}

// Oct 14, 2021
function solution(s) {
  return s
    .split('')
    .map((v) => v.charCodeAt())
    .sort((a, b) => b - a)
    .map((v) => String.fromCharCode(v))
    .join('');
}

// Other's solution 1
function solution(s) {
  return s
    .split('')
    .sort((a, b) => {
      if (a > b) return -1;
      if (b > a) return 1;
      return 0;
    })
    .join('');
}

// Other's solution 2
function solution(s) {
  return s
    .split('')
    .sort((a, b) => (a < b ? 1 : -1))
    .join('');
}
