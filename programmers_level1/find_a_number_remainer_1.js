// 2021-10-17
// Find a number whose remainder is 1

// My solution
function solution(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}

// Other's solution 1
function solution(n) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (answer > 0) {
      break;
    }

    if (n % i == 1) {
      answer = i;
    }
  }

  return answer;
}

// Other's solution 2
function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) return x;
  }
}

// Other's solution 3
function solution(n) {
  let answer = 1;
  while (n % answer != 1) answer++;
  return answer;
}
