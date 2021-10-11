// 2021-10-11
// 시저 암호

// My Solution
function solution(s, n) {
  return s
    .split('')
    .map(v => {
      if (v === ' ') return ' ';
      return v.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(v.charCodeAt() + n - 26)
        : String.fromCharCode(v.charCodeAt() + n);
    })
    .join('');
}
