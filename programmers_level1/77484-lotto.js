// Feb 25, 2022
// 로또의 최고 순위와 최저 순위
// https://programmers.co.kr/learn/courses/30/lessons/77484

// My solution
function solution(lottos, win_nums) {
  let i = 0;
  let count = 0;
  let zeros = 0;
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

  return [rank[count + zeros], rank[count]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
