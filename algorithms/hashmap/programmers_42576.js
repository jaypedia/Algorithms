// Oct 24, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/42576
// Level 1. 완주하지 못한 선수

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

// Mar 26, 2023
function solution(participant, completion) {
  const map = participant.reduce((acc, cur) => {
    acc.set(cur, ~~acc.get(cur) + 1);
    return acc;
  }, new Map());

  completion.forEach((v) => {
    if (map.has(v)) {
      map.set(v, map.get(v) - 1);
    }
  });

  let answer = null;
  map.forEach((v, key) => {
    if (v >= 1) {
      answer = key;
    }
  });

  return answer;
}

// Mar 26, 2023
function solution(participant, completion) {
  const map = completion.reduce((acc, cur) => {
    acc.set(cur, ~~acc.get(cur) + 1);
    return acc;
  }, new Map());

  return participant.find((v) => {
    if (map.get(v) > 0) {
      map.set(v, map.get(v) - 1);
    } else {
      return true;
    }
  });
}
