// 2021-10-10
// 문자열 내림차순으로 배치하기

// My Solution
function solution(s) {
  return s.split('').sort().reverse().join('');
}

// My Another Solution (2021-10-14)
function solution(s) {
  return s
    .split('')
    .map(v => v.charCodeAt())
    .sort((a, b) => b - a)
    .map(v => String.fromCharCode(v))
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
