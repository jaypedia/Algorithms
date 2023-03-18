// Feb 25, 2022
// https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  let i = 0;
  let count = 0; // 번호 일치하는 개수 카운트
  let zeros = 0; // 0의 개수 카운트
  while (i < lottos.length) {
    if (lottos[i] === 0) {
      zeros++;
      i++;
      continue;
    }
    if (win_nums.includes(lottos[i])) count++;
    i++;
  }

  const rank = [6, 6, 5, 4, 3, 2, 1];

  return [rank[count + zeros], rank[count]]; // [최고 순위, 최저 순위]
}

// Another solution 1
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  const minCount = lottos.filter((v) => win_nums.includes(v)).length;
  const zeroCount = lottos.filter((v) => !v).length;
  const maxCount = minCount + zeroCount;
  return [rank[maxCount], rank[minCount]];
}

// Another solution 2
function solution(lottos, win_nums) {
  const answer = [];
  const min = lottos.filter((n) => win_nums.includes(n)).length;
  const max = lottos.filter((n) => n === 0).length + min;
  max > 1 ? answer.push(7 - max) : answer.push(6);
  min > 1 ? answer.push(7 - min) : answer.push(6);
  return answer;
}

// Aug 6, 2022
function solution(lottos, win_nums) {
  const lotto = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
  let zeroCount = 0;
  let winCount = 0;
  lottos.forEach((l) => {
    if (l === 0) zeroCount++;
    if (win_nums.includes(l)) winCount++;
  });
  return [lotto[winCount + zeroCount], lotto[winCount]];
}
