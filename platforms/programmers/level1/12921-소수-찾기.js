// Oct 12, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12921

// Using Sieve of Eratosthenes to find prime numbers

function solution(n) {
  const arr = Array.from({ length: n + 1 }, () => true);
  arr.splice(0, 2, false, false);

  for (let i = 2; i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr.filter((v) => v).length;
}

function solution(n) {
  const answer = [];
  const arr = Array.from({ length: n + 1 }, () => true);
  arr.splice(0, 2, false, false);

  for (let i = 2; i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) answer.push(i);
  }
  return answer.length;
}

function solution(n) {
  const arr = Array.from({ length: n + 1 }, () => true);
  arr.splice(0, 2, false, false);

  for (let i = 2; i < n + 1; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.filter((v) => v).length;
}
