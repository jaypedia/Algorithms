// 2021-10-08
// 정수 제곱근 판별

// My Solution
function solution(n) {
  return squareRoot(n) ? (squareRoot(n) + 1) ** 2 : -1;
}

function squareRoot(n) {
  if (n === 1) return 1; // add this condition
  for (let i = 0; i < n; i++) {
    if (i ** 2 === n) return i;
  }
}

// The answer is different because the question has been changed.
// Other's solution 1
function nextSqaure(n) {
  switch (n % Math.sqrt(n)) {
    case 0:
      return Math.pow(Math.sqrt(n) + 1, 2);
    default:
      return 'no';
  }
}

// Other's solution 2
function nextSqaure(n) {
  var result = 0;
  var n = Math.sqrt(n);
  result = Number.isInteger(n) ? Math.pow(n + 1, 2) : 'no';
  return result;
}

// Other's solution 3
function nextSqaure(n) {
  var result = 0;
  var x = 0;
  while (x * x < n) {
    x++;
  }
  if (x * x == n) {
    x++;
    result = x * x;
  } else {
    result = 'no';
  }

  return result;
}
