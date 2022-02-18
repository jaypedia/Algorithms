// Feb 18, 2022
// H-index
// https://programmers.co.kr/learn/courses/30/lessons/42747

// My solution
function solution(citations) {
  let hIdx = citations.length;
  const arr = citations.sort((a, b) => b - a);

  while (hIdx >= 1) {
    if (arr[hIdx - 1] >= hIdx) return hIdx;
    hIdx--;
  }

  return hIdx;
}

console.log(solution([3, 0, 6, 1, 5]));

// Other's solution
const solution = citations =>
  citations.sort((a, b) => b - a).filter((el, idx) => el >= idx + 1).length;
