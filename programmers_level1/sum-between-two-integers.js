// 2021-10-10
// 두 정수 사이의 합

// My Solution
function solution(a, b) {
  let sum = 0;
  if (a <= b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  }

  return sum;
}
