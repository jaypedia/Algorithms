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
