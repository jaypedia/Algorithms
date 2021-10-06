// 2021-10-03 & 10-06
// x만큼 간격이 있는 n개의 숫자

// My Solution 1
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((current, index) => current * (index + 1));
}

// My Solution 2
function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
