// 2021-11-14 & 11-21
// 다음 큰 숫자

// My solution
function numberOfOne(n) {
  return n
    .toString(2)
    .split('')
    .filter(e => e === '1').length;
}

function solution(n) {
  for (let i = n + 1; ; i++) {
    if (numberOfOne(n) === numberOfOne(i)) return i;
  }
}

// Use Regex and while
function one(n) {
  return n.toString(2).match(/1/g).length;
}

function nextBig(n) {
  let i = n + 1;
  while (one(n) !== one(i)) {
    i++;
  }
  return i;
}

// Recursive function
function solution(n, a = n + 1) {
  return one(n) === one(a) ? a : solution(n, a + 1);
}
