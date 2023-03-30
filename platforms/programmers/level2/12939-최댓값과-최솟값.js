// Oct 31, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12939

// Solution 1
function solution(s) {
  const arr = s.split(' ');
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(+arr[i]);
  }
  const min = Math.min(...result);
  const max = Math.max(...result);

  let answer = '';
  answer += min.toString() + ' ';
  answer += max.toString();
  return answer;
}

// Solution 2
function solution(s) {
  const arr = s.split(' ');
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let answer = min + ' ' + max;
  return answer;
}

// Solution 3
const solution = (s) => {
  s = s.split(' ');
  return Math.min(...s) + ' ' + Math.max(...s);
};

// Solution 4
function solution(s) {
  return (
    s.split(' ').sort((a, b) => a - b)[0] +
    ' ' +
    s.split(' ').sort((a, b) => a - b)[s.split(' ').length - 1]
  );
}

// Solution 5
function solution(s) {
  const arr = s.split(' ');
  return arr.reduce((p, c) => [Math.min(p[0], c), Math.max(p[1], c)], [arr[0], arr[1]]).join(' ');
}

// Solution 6
function solution(s) {
  let min = Math.min.apply(null, s.split(' ').map(Number));
  let max = Math.max.apply(null, s.split(' ').map(Number));
  return min + ' ' + max;
}
