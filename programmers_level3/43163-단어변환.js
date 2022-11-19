// Nov 18, 2022
// https://school.programmers.co.kr/learn/courses/30/lessons/43163

// BFS
function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  let answer = 0;
  const queue = [[begin, 0]];
  const wordLength = begin.length;

  const isConvertable = (word, element) => {
    let diffCount = 0;
    for (let i = 0; i < wordLength; i++) {
      if (word[i] !== element[i]) {
        diffCount += 1;
      }
    }
    if (diffCount === 1) return true;
    return false;
  };

  const bfs = () => {
    while (queue.length) {
      const [word, count] = queue.shift();
      for (const element of words) {
        if (!isConvertable(word, element)) continue;
        if (element === target) return count + 1;
        queue.push([element, count + 1]);
      }
    }
  };

  answer = bfs();
  return answer;
}
