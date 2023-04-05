// Dec 10, 2022
// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  let answer = 0;
  const obj = tangerine.reduce((acc, cur) => {
    acc[cur] = ~~acc[cur] + 1;
    return acc;
  }, {});

  const tangerineArr = Object.values(obj).sort((a, b) => a - b);

  while (k > 0) {
    const tan = tangerineArr.pop();
    k -= tan;
    answer++;
  }

  return answer;
}
