// 2021-10-08
// 자릿수 더하기

// My Solution
function solution(n) {
  return +(n + '').split('').reduce((sum, current) => +sum + +current);
}

// Other's solution
function solution(n) {
  var a = (n + '').split('');
  var b = 0;
  for (var i = 0; i < a.length; ++i) {
    b += parseInt(a[i]);
  }
  return b;
}

function solution(n) {
  // 문자 풀이
  // return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)

  // 숫자풀이
  var sum = 0;

  do {
    sum += n % 10;
    n = Math.floor(n / 10);
  } while (n > 0);

  return sum;
}

function solution(n) {
  var arr = n.toString().split('');
  var sum = 0;
  arr.forEach(element => {
    sum += parseInt(element);
  });
  return sum;
}
