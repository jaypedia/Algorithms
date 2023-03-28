// Oct 16, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  const answer = [];
  for (let element of arr) {
    if (element % divisor === 0) answer.push(element);
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

function solution(arr, divisor) {
  const newArr = arr.filter((v) => v % divisor === 0);
  return newArr.length === 0 ? [-1] : newArr.sort((a, b) => a - b);
}

function solution(arr, divisor) {
  const answer = [];
  arr.map((v) => v % divisor === 0 && answer.push(v));
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

function solution(arr, divisor) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) if (arr[i] % divisor == 0) answer.push(arr[i]);

  if (answer.length == 0) answer = [-1];
  else
    answer = answer.sort(function (a, b) {
      return a - b;
    });
  return answer;
}
