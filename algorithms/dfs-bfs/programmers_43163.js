// Feb 18, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/43163
// Level 3. 단어 변환

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const isConvertible = (word, element) => {
    let diffCount = 0;

    for (let i = 0; i < word.length; i++) {
      if (element[i] !== word[i]) {
        diffCount += 1;
      }
    }
    return diffCount === 1;
  };

  const bfs = () => {
    const queue = [[begin, 0]];

    while (queue.length) {
      const [word, count] = queue.shift();
      for (const element of words) {
        if (isConvertible(word, element)) {
          if (element === target) return count + 1;
          queue.push([element, count + 1]);
        }
      }
    }
    return 0;
  };

  const answer = bfs();
  return answer;
}
