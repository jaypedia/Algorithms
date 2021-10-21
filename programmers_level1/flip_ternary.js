// 2021-10-21
// 3진법 뒤집기

// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후,
// 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// n은 1 이상 100,000,000 이하인 자연수입니다.

// My solution 1
function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

// My solution 2
function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
}

// Other's solution 1
function solution(n) {
  const answer = [];
  while (n !== 0) {
    answer.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return answer.reduce((acc, v, i) => acc + v * Math.pow(3, i), 0);
}

// Other's solution 2
function solution(n) {
  var answer = 0;
  let res = [];

  const run = num => {
    if (num < 3) {
      res.push(num);
      return;
    }
    res.push(num % 3);
    return run(Math.floor(num / 3));
  };

  run(n);

  return res
    .map((a, i) => a * 3 ** (res.length - 1 - i))
    .reduce((r, a) => r + a);
}
