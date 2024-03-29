// Feb 25, 2022
// https://programmers.co.kr/learn/courses/30/lessons/12982

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

function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  let total = 0;
  for (const cost of d) {
    if (total + cost <= budget) {
      total += cost;
      answer++;
    } else break;
  }
  return answer;
}

// Use higher-order functions
function solution(d, budget) {
  d.sort((a, b) => a - b);
  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();
  return d.length;
}

function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((acc, cur) => {
      if (cur <= budget) {
        acc++;
        budget -= cur;
      }
      return acc;
    }, 0);
}
