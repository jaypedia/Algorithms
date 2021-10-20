// 2021-10-20
// 음양 더하기

// My solution 1
function solution(absolutes, signs) {
  let answer = [];
  for (let i = 0; i < absolutes.length; i++) {
    answer.push(signs[i] ? absolutes[i] : absolutes[i] * -1);
  }
  return answer.reduce((sum, cur) => sum + cur);
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

// Other's solution 1
// reduce
function solution3(absolutes, signs) {
  return absolutes.reduce((sum, cur, i) => sum + cur * (signs[i] ? 1 : -1), 0);
}

// Other's solution 2
// forEach
function solution4(absolutes, signs) {
  let answer = 0;
  absolutes.forEach((v, i) => (answer += v * (signs[i] ? 1 : -1)));
  return answer;
}

// Other's solution 3
// map
function solution5(absolutes, signs) {
  let val = [];
  let answer = 0;
  absolutes.map((v, i) => val.push(signs[i] ? v : -v));
  val.map(v => (answer += v));
  return answer;
}

// Other's solution 4
// for ... in
function solution6(absolutes, signs) {
  let answer = 0;
  for (let index in absolutes) {
    if (signs[index]) answer += absolutes[index];
    else answer -= absolutes[index];
  }
  return answer;
}
