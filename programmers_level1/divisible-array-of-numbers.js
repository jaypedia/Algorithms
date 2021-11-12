// 2021-10-10 & 2021-11-12
// 나누어 떨어지는 숫자 배열

// My Solution
function solution(arr, divisor) {
  const filtered = arr.filter(e => e % divisor === 0);
  return filtered.length ? filtered.sort((a, b) => a - b) : [-1];
}

// Another way (with map)
function solution(arr, divisor) {
  let filtered = [];
  arr.map(v => v % divisor === 0 && filtered.push(v));
  return filtered.length ? filtered.sort((a, b) => a - b) : [-1];
}
