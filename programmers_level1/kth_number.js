// 2021-10-18
// K번째 수

// My solution
function solution(array, commands) {
  let answer = [];
  let start, end, k;
  for (let i = 0; i < commands.length; i++) {
    start = commands[i][0] - 1;
    end = commands[i][1];
    k = commands[i][2] - 1;
    answer.push(array.slice(start, end).sort((a, b) => a - b)[k]);
  }
  return answer;
}

// 2022.1.19 다시풀기
// 소요시간 : 10분
function solution2(array, commands) {
  const answer = [];
  commands.forEach(v =>
    answer.push(array.slice(v[0] - 1, v[1]).sort((a, b) => a - b)[v[2] - 1])
  );
  return answer;
}

console.log(
  solution2(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
