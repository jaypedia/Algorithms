// Apr 8, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
  const answer = [];

  const map = name.reduce((acc, cur, idx) => {
    acc.set(cur, yearning[idx]);
    return acc;
  }, new Map());

  photo.forEach((list) => {
    const score = list.reduce((acc, cur) => {
      acc += ~~map.get(cur);
      return acc;
    }, 0);
    answer.push(score);
  });

  return answer;
}

function solution(name, yearning, photo) {
  const map = name.reduce((acc, cur, idx) => {
    acc.set(cur, yearning[idx]);
    return acc;
  }, new Map());

  return photo.map((list) => {
    return list.reduce((acc, cur) => {
      acc += ~~map.get(cur);
      return acc;
    }, 0);
  });
}
