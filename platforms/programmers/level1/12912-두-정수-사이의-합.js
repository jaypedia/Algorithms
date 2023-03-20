// Oct 10, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12912

// Solution 1
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

// Solution 2
function solution(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

// Solution 3
function solution(a, b, s = 0) {
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}

// Solution 4
function solution(a, b) {
  let result = a < b ? a : b;
  while (a != b) {
    result += a < b ? ++a : ++b;
  }
  return result;
}
