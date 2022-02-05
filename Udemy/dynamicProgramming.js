// 2022.2.5~6

// Plain old recursion
// Short and compact, but really inefficient.
// O(2^n)
function fibonacci(n) {
  if (n <= 2) return 1; // base case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// What can we improve?
// We are repeating things over and over.
// => What if we could "REMEMBER" old values?
// => Using past knowledge to make solving a funture problem easier!
// => Solving each of subproblems "JUST ONCE" and "STORING THEIR SOLUTIONS"

// [1] MEMOIZATION : TOP-DOWN
// Storing the results of expensive function calls
// and returning the cached result when the same inputs occur again
// O(N)
function fib(n, memo = []) {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

function fib2(n, memo = [null, 1, 1]) {
  if (memo[n]) return memo[n];
  const res = fib2(n - 1, memo) + fib2(n - 2, memo);
  memo[n] = res;
  return res;
}

// [2] TABULATION : BOTTOM-UP
// Storing the result of a previous result in a 'TABLE' (usually an array)
// Usually done using iteration
// Better space complexity can be achieved using tabulation
// O(N)
function fib3(n) {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
