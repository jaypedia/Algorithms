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

// Other's solution 1
function adder(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

// Other's solution 2
function adder(a, b, s = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}

// Other's solution 3
function adder(a, b) {
  var result = a < b ? a : b;
  while (a != b) {
    result += a < b ? ++a : ++b;
  }
  return result;
}
