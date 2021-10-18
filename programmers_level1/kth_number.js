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
