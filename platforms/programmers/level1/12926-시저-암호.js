// Oct 11, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  return s
    .split('')
    .map((v) => {
      if (v === ' ') return ' ';
      return v.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(v.charCodeAt() + n - 26)
        : String.fromCharCode(v.charCodeAt() + n);
    })
    .join('');
}
