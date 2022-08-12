// Aug 12, 2022
// https://school.programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
  if (s.length === 1) return 1;
  const stringLengths = [];

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let count = 1;
    let compressed = '';

    for (let j = 0; j < s.length; j++) {
      const current = s.slice(j * i, i * (j + 1));
      const next = s.slice(i * (j + 1), i * (j + 2));

      if (current === next) {
        count++;
      } else {
        compressed += count > 1 ? count + current : current;
        count = 1;
      }
    }
    stringLengths.push(compressed.length);
  }
  return Math.min(...stringLengths);
}
