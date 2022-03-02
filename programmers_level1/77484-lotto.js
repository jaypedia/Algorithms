// Feb 25, 2022
// 로또의 최고 순위와 최저 순위
// https://programmers.co.kr/learn/courses/30/lessons/77484

// My solution
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

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));

// Other's solutions

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  const minCount = lottos.filter(v => win_nums.includes(v)).length;
  const zeroCount = lottos.filter(v => !v).length;
  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}

function solution(lottos, win_nums) {
  const answer = [];
  const min = lottos.filter(n => win_nums.includes(n)).length;
  const max = lottos.filter(n => n === 0).length + min;

  max > 1 ? answer.push(7 - max) : answer.push(6);
  min > 1 ? answer.push(7 - min) : answer.push(6);

  return answer;
}
