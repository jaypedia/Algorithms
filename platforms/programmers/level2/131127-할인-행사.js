// Apr 15, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  const wantMap = want.reduce((map, el, idx) => {
    map.set(el, number[idx]);
    return map;
  }, new Map());

  let count = 10;
  let answer = 0;

  discount.forEach((v, i) => {
    if (discount.length - i >= 10) {
      for (let j = i; j <= i + 10; j++) {
        const cur = discount[j];
        if (!wantMap.has(cur)) break;
        if (wantMap.get(cur) <= 0) break;
        wantMap.set(cur, wantMap.get(cur) - 1);
        count -= 1;
      }

      if (count === 0) answer++;
      count = 10;
      want.forEach((v, i) => {
        wantMap.set(v, number[i]);
      });
    }
  });

  return answer;
}
