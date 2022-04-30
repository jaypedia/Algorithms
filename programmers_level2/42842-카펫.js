// May 1, 2022
// https://programmers.co.kr/learn/courses/30/lessons/42842

// My solution - 20 min
function solution(brown, yellow) {
  const total = brown + yellow;

  for (let i = 3; i <= total; i++) {
    const num = total / i;
    if (!Number.isInteger(num)) continue;

    const yellowCount = total - (num * 2 + (i - 2) * 2);

    if (yellowCount === yellow) {
      return [total / i, i];
    }
  }
}
