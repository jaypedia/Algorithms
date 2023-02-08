// Feb 8, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  const vowels = 'AEIOU';
  const plus = [781, 156, 31, 6, 1];
  const len = word.length;
  let result = len;

  for (let i = 0; i < len; i++) {
    const currentLetter = word[i];
    const index = vowels.indexOf(currentLetter);
    result += plus[i] * index;
  }
  return result;
}

function solution(word) {
  return [...word].reduce((acc, cur, i) => {
    return acc + 'AEIOU'.indexOf(cur) * ~~(781 / 5 ** i) + 1;
  }, 0);
}
