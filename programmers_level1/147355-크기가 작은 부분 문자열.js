// Dec 30, 2022
// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
  let answer = 0;
  const len = p.length;
  const num = Number(p);

  for (let i = 0; i <= t.length - len; i++) {
    let str = t[i];
    let j = i + 1;
    while (str.length < len) {
      str += t[j];
      j++;
    }
    if (Number(str) <= num) {
      answer += 1;
    }
  }

  return answer;
}

// use slice method
function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);
    if (+p >= +value) count++;
  }
  return count;
}
