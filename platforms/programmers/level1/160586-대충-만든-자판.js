// Mar 24, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/160586

function solution(keymap, targets) {
  const map = new Map();

  keymap.forEach((v) => {
    for (let i = 0; i < v.length; i++) {
      const keyName = v[i];
      const count = i + 1;

      if (!map.has(keyName) || map.get(keyName) > count) {
        map.set(keyName, count);
      }
    }
  });

  return targets.reduce((acc, target) => {
    let totalCount = 0;
    for (const el of target) {
      if (!map.get(el)) {
        totalCount = -1;
        break;
      }
      totalCount += map.get(el);
    }
    acc.push(totalCount);
    return acc;
  }, []);
}
