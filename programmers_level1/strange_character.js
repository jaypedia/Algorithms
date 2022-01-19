// 2022.1.19
// 이상한 문자 만들기
// 소요시간 : 1H

// 각 단어는 하나 이상의 공백 문자로 구분됨 - 문자열 전체가 아닌 단어별로 짝/홀수 인덱스 판단
// 각 단어의 짝수번째 알파벳은 대문자로 - 첫 번째 글짜는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리
// 홀수번째 알파벳은 소문자로

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

console.log(solution('try hello world')); // "TrY HeLlO WoRlD"

function solution2(s) {
  return s
    .split(' ')
    .map(word => {
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

// console.log(solution2('try   hello world'));

function solution3(s) {
  return s
    .split(' ')
    .map(word => {
      let result = '';
      for (let i = 0; i < word.length; i++) {
        result += i % 2 ? word[i].toLowerCase() : word[i].toUpperCase();
      }
      return result;
    })
    .join(' ');
}

// console.log(solution3('try   hello world'));
