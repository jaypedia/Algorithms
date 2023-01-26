// Jan 26, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
  const arr1 = Array.from({ length: 10 }, (_) => 0);
  const arr2 = Array.from({ length: 10 }, (_) => 0);
  const countArr = [];

  for (const num of X) {
    arr1[num] += 1;
  }

  for (const num of Y) {
    arr2[num] += 1;
  }

  for (let i = 0; i < 10; i++) {
    countArr[i] = Math.min(arr1[i], arr2[i]);
  }

  // countArr가 1부터 9번째 요소가 모두 0이면 '0'을 리턴
  if (countArr[0] && countArr.slice(1).every((v) => v === 0)) {
    return '0';
  }

  let answer = '';

  for (let j = 9; j >= 0; j--) {
    const cur = countArr[j];
    if (cur > 0) {
      answer += (j + '').repeat(cur);
    }
  }

  return answer.length ? answer : '-1';
}
