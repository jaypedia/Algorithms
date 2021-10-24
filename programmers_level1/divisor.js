// 2021-10-24
// 약수의 개수와 덧셈

// My solution 1
function solution(left, right) {
  let answer = 0;
  let divide = 0;
  for (let i = left; i <= right; i++) {
    divide = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) divide++;
    }
    if (divide % 2 === 0) answer += i;
    else answer -= i;
  }

  return answer;
}
