// 2021-11-11
// 최솟값 만들기

// My solution
function solution(A, B) {
  let answer = 0;

  const Aarr = A.sort((a, b) => a - b);
  const Barr = B.sort((a, b) => a - b);

  for (let i = 0; i < Aarr.length; i++) {
    answer += Aarr[i] * Barr[Aarr.length - i - 1];
  }

  return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4])); // 29

// Another solution - Refactoring
// reduce
function solution2(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((acc, cur, i) => acc + cur * B[i], 0);
}

console.log(solution2([1, 4, 2], [5, 4, 4])); // 29
