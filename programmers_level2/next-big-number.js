// 2021-11-14
// 다음 큰 숫자

// My solution
function numberOfOne(n) {
  return n
    .toString(2)
    .split('')
    .filter(e => e === '1').length;
}

function solution(n) {
  for (let i = n + 1; ; i++) {
    if (numberOfOne(n) === numberOfOne(i)) return i;
  }
}
