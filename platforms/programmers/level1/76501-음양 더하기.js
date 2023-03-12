// Oct 20, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  const answer = [];
  for (let i = 0; i < absolutes.length; i++) {
    answer.push(signs[i] ? absolutes[i] : absolutes[i] * -1);
  }
  return answer.reduce((sum, cur) => sum + cur);
}

function solution2(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}

function solution3(absolutes, signs) {
  return absolutes.reduce((sum, cur, i) => sum + cur * (signs[i] ? 1 : -1), 0);
}

function solution4(absolutes, signs) {
  let answer = 0;
  absolutes.forEach((v, i) => (answer += v * (signs[i] ? 1 : -1)));
  return answer;
}

function solution5(absolutes, signs) {
  const val = [];
  let answer = 0;
  absolutes.map((v, i) => val.push(signs[i] ? v : -v));
  val.map((v) => (answer += v));
  return answer;
}

function solution6(absolutes, signs) {
  let answer = 0;
  for (let index in absolutes) {
    if (signs[index]) answer += absolutes[index];
    else answer -= absolutes[index];
  }
  return answer;
}
