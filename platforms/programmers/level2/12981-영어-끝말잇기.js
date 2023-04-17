// April 11, 2022
// https://programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  const arr = [];
  let idx = 0;

  for (let i = 0; i < words.length; i++) {
    if (arr.includes(words[i])) {
      idx = i;
      break;
    }

    const lastWord = arr[arr.length - 1];

    if (lastWord && lastWord[lastWord.length - 1] !== words[i][0]) {
      idx = i;
      break;
    }

    arr.push(words[i]);
  }

  const person = idx ? (idx % n) + 1 : 0;
  const turn = idx ? Math.floor(idx / n) + 1 : 0;
  return [person, turn];
}

// Nov 3, 2022
function solution(n, words) {
  const set = new Set([words[0]]);

  for (let i = 1; i < words.length; i++) {
    if (set.has(words[i]) || words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      const turn = Math.floor(i / n);
      const person = i - turn * n;
      return [person + 1, turn + 1];
    }
    set.add(words[i]);
  }
  return [0, 0];
}
