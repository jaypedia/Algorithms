// 2021-10-12
// Using Sieve of Eratosthenes to find prime numbers

// My solution 1 : the number of prime numbers
function solution(n) {
  let answer = [];
  let arr = Array.from({ length: n + 1 }, () => true);
  arr.splice(0, 2, false, false);

  for (let i = 2; i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  answer = arr.filter(v => v).length;
  return answer;
}

// My solution 2 : An array with prime numbers
function solution(n) {
  let answer = [];
  let arr = Array.from({ length: n + 1 }, () => true);
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
  return answer;
}
