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

// 2021-10-10
// My solution - refactoring
function solution(a, b) {
  return [gcd(a, b), lcm(a, b)];
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  if (b === 0) return a;
  return a > b ? gcd(b, a % b) : gcd(a, b % a);
}

// Other's solution 1
function greatestCommonDivisor(a, b) {
  return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
}
function leastCommonMultipleOfTwo(a, b) {
  return (a * b) / greatestCommonDivisor(a, b);
}
function gcdlcm(a, b) {
  return [greatestCommonDivisor(a, b), leastCommonMultipleOfTwo(a, b)];
}

// Other's solution 2
function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}

// Other's solution 3
function gcdlcm(a, b) {
  var gcd = function (b, a) {
    var r = b % a;
    return r ? gcd(a, r) : a;
  };
  return [gcd(b, a), (b * a) / gcd(b, a)];
}
