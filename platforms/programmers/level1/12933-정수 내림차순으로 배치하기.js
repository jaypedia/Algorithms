// Oct 8, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  return Number(
    (n + '')
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

function solution(n) {
  const newN = n + '';
  const newArr = newN.split('').sort().reverse().join('');
  return +newArr;
}
