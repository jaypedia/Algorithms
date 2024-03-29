// Feb 20~23, 2022
// https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  if (numbers.reduce((a, b) => a + b) === 0) return '0';

  const arr = [];

  numbers.forEach((v) => {
    const str = v.toString();
    const transformed = +str.concat(str, str, str).slice(0, 4);
    arr.push([transformed, v]);
  });

  arr.sort((a, b) => b[0] - a[0]);

  let answer = '';
  arr.reduce((_, cur) => (answer += cur[1].toString()), '');
  return answer;
}

function solution(numbers) {
  const answer = numbers
    .map((v) => v + '')
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join('');

  return answer[0] === '0' ? '0' : answer;
}

function solution(numbers) {
  const answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return answer[0] === '0' ? '0' : answer;
}
