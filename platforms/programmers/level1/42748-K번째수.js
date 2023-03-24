// Oct 18, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  const answer = [];
  let start, end, k;
  for (let i = 0; i < commands.length; i++) {
    start = commands[i][0] - 1;
    end = commands[i][1];
    k = commands[i][2] - 1;
    answer.push(array.slice(start, end).sort((a, b) => a - b)[k]);
  }
  return answer;
}

// Jan 19, 2022
function solution2(array, commands) {
  const answer = [];
  commands.forEach((v) => answer.push(array.slice(v[0] - 1, v[1]).sort((a, b) => a - b)[v[2] - 1]));
  return answer;
}
