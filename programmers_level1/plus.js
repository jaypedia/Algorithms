// 2021-10-20
// 음양 더하기

// My solution 1
function solution(absolutes, signs) {
  let answer = [];
  for (let i = 0; i < absolutes.length; i++) {
    answer.push(signs[i] ? absolutes[i] : absolutes[i] * -1);
  }
  return answer.reduce((cur, acc) => cur + acc);
}

console.log(solution([4, 7, 12], [true, false, true])); // 4 - 7 + 12 = 9

// My solution 2
function solution2(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}
