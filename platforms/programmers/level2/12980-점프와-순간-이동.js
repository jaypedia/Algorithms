// Apr 29, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
  let ans = 0;

  while (n) {
    if (n % 2) {
      ans++;
      n--;
      continue;
    }
    n = n / 2;
  }

  return ans;
}

// May 1, 2023
function solution(n) {
  return n.toString(2).replace(/0/g, '').length;
}
