// 2021-10-10 & 11-12
// 약수의 합

// My Solution
function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (!(n % i)) sum += i;
  }
  return sum;
}

// Other's solution 1
// Recursion
function solution(n, a = 0, b = 0) {
  console.log('a : ', a, '/ b : ', b);
  return n <= a / 2 ? b : solution(n, a + 1, (b += n % a ? 0 : a));
}

// n = 5
/* //  b의 숫자가 올라가는 매커니즘 

b += (n % a) ? 0 : a

a :  0 / b :  0
a :  1 / b :  0

b += 5 % 1   b += 0 

a :  2 / b :  1
a :  3 / b :  1
a :  4 / b :  1

a :  5 / b :  1

1 += 5 % 5   => 1  true   

a :  6 / b :  6

a :  7 / b :  6
a :  8 / b :  6
a :  9 / b :  6
a :  10 / b :  6
6 */

// Other's solution 2
let sumDivisor = num => {
  let answer = 0,
    i = 1,
    j = num % 2 == 0 ? 1 : 2;

  for (i; i < num; i = i + j) if (num % i == 0) answer += i;

  return answer + num;
};
