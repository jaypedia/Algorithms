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
  return newarr.length === 0 ? [-1] : newarr.sort((a, b) => a - b);
}

// Other's solution 1
// map(), && operator
function solution(arr, divisor) {
  let answer = [];
  arr.map(v => v % divisor === 0 && answer.push(v));
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

// Other's solution 2
function solution(arr, divisor) {
  var answer = [];
  for (var i = 0; i < arr.length; i++)
    if (arr[i] % divisor == 0) answer.push(arr[i]);

  if (answer.length == 0) answer = [-1];
  else
    answer = answer.sort(function (a, b) {
      return a - b;
    });
  return answer;
}

// Other's solution 3
function solution(arr, divisor) {
  var _ = arr.filter(e => !(e % divisor));
  return _[0] ? _.sort(($, _) => $ - _) : [-1];
}
