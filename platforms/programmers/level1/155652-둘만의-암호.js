// Apr 1, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(strings, skip, index) {
  const alphabetSet = new Set('abcdefghijklmnopqrstuvwxyz');
  [...skip].forEach((val) => alphabetSet.delete(val));
  const arr = [...alphabet];

  let answer = '';

  for (const string of strings) {
    const newIdx = (arr.indexOf(string) + index) % arr.length;
    answer += arr[newIdx];
  }

  return answer;
}
