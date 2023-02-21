// Oct 13, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12919

function solution(seoul) {
  const answer = seoul.indexOf('Kim');
  return `김서방은 ${answer}에 있다`;
}

function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') {
      return `김서방은 ${i}에 있다`;
    }
  }
}

const solution = (arr) => `김서방은 ${arr.findIndex((s) => s === 'Kim')}에 있다`;

function findKim(seoul) {
  let idx = 0;
  seoul.forEach((name, index) => {
    if (name === 'Kim') idx = index;
  });
  return '김서방은 ' + idx + '에 있다';
}
