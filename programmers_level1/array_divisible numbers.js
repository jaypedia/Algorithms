// 2021-10-16
// 나누어 떨어지는 숫자 배열
// A new array of divisible numbers

// My solution 1
function solution(arr, divisor) {
  let answer = [];
  for (let element of arr) {
    if (element % divisor === 0) answer.push(element);
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

// My solution 2
function solution(arr, divisor) {
  const newarr = arr.filter(v => v % divisor === 0);
  newarr.length === 0 ? [-1] : newarr.sort((a, b) => a - b);
}
