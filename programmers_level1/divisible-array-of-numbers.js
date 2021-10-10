// 2021-10-10
// 나누어 떨어지는 숫자 배열

// My Solution
function solution(arr, divisor) {
  let newarr = arr.filter(e => e % divisor === 0);
  return newarr.length === 0 ? [-1] : newarr.sort((a, b) => a - b);
}
