// Feb 25, 2022
// 예산
// https://programmers.co.kr/learn/courses/30/lessons/12982

// My solution
function solution(d, budget) {
  let count = 0;
  let money = 0;

  d.sort((a, b) => a - b);

  while (money + d[count] <= budget) {
    money += d[count];
    count++;
  }
  return count;
}

// Use Higher-order function

function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}

const solution = (d, b) =>
  d.sort((a, b) => a - b).filter(x => (b - x >= 0 ? ((b = b - x), 1) : 0))
    .length;
