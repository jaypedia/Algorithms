// Feb 9, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  const isValid = function (s) {
    const map = new Map([
      [')', '('],
      [']', '['],
      ['}', '{'],
    ]);

    const stack = [];

    for (const v of s) {
      if (!map.has(v)) {
        stack.push(v);
        continue;
      }
      if (map.get(v) !== stack[stack.length - 1]) return false;
      stack.pop();
    }

    return stack.length === 0;
  };

  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isValid(rotated)) answer++;
  }

  return answer;
}
