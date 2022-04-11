// April 11, 2022
// https://programmers.co.kr/learn/courses/30/lessons/12981

// My solution
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

console.log(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'])); // [3,3]
console.log(solution(3, ['tank', 'kick', 'know', 'Lheel', 'land', 'dream', 'mother', 'robot', 'tank'])); // [1,2]
console.log(
  solution(5, [
    'hello',
    'observe',
    'effect',
    'take',
    'either',
    'recognize',
    'encourage',
    'ensure',
    'establish',
    'hang',
    'gather',
    'refer',
    'reference',
    'estimate',
    'executive',
  ])
); // [0,0]
