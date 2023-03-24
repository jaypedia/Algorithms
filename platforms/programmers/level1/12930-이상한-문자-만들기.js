// Jan 19, 2022
// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  let answer = '';
  s.split(' ').forEach((v, i) => {
    for (let i = 0; i < v.length; i++) {
      if (!(i % 2)) {
        answer += v[i].toUpperCase();
      } else {
        answer += v[i].toLowerCase();
      }
    }
    answer += ' ';
  });
  answer = answer.slice(0, -1);
  return answer;
}

function solution2(s) {
  return s
    .split(' ')
    .map((word) => {
      let result = '';
      for (let i = 0; i < word.length; i++) {
        if (i % 2) {
          result += word[i].toLowerCase();
        } else {
          result += word[i].toUpperCase();
        }
      }
      return result;
    })
    .join(' ');
}

function solution3(s) {
  return s
    .split(' ')
    .map((word) => {
      let result = '';
      for (let i = 0; i < word.length; i++) {
        result += i % 2 ? word[i].toLowerCase() : word[i].toUpperCase();
      }
      return result;
    })
    .join(' ');
}
