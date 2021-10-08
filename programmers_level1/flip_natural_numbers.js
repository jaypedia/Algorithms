// 2021-10-08
// 자연수 뒤집기

// My Solution
function solution(n) {
    return (n + '')
      .split('')
      .map(v => +v)
      .reverse();
  }
