// 2021-10-06
// Greatest Common Divisor & Lowest Common Multiple

// My Solution
// Euclidean algorithm
function solution(n, m) {
  let gcd = calc_gcd(n, m);
  let lcm = (n * m) / gcd;

  return [gcd, lcm];
}

function calc_gcd(n, m) {
  if (m === 0) return n;
  return n > m ? calc_gcd(m, n % m) : calc_gcd(n, m % n);
}
