// 2021-11-14
// 숫자의 표현

// My solution
function solution(n) {
  let answer = 1;
  let temp = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i; j < n; j++) {
      temp += j;
      if (temp === n) {
        answer++;
        break;
      } else if (temp > n) break;
    }
    temp = 0;
  }
  return answer;
}
