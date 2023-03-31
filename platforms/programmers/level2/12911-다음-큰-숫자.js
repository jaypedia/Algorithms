// Nov 14, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12911

// Solution 1
function solution(n) {
  function numberOfOne(n) {
    return n
      .toString(2)
      .split('')
      .filter((e) => e === '1').length;
  }

  for (let i = n + 1; ; i++) {
    if (numberOfOne(n) === numberOfOne(i)) return i;
  }
}

// Solution 2
function solution(n) {
  function one(n) {
    return n.toString(2).match(/1/g).length;
  }

  let i = n + 1;
  while (one(n) !== one(i)) {
    i++;
  }
  return i;
}

// Solution 3
function solution(n, a = n + 1) {
  function one(n) {
    return n.toString(2).match(/1/g).length;
  }

  return one(n) === one(a) ? a : solution(n, a + 1);
}
