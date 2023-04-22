// Apr 15, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  const wantMap = want.reduce((map, el, idx) => {
    map.set(el, number[idx]);
    return map;
  }, new Map());

  let count = 10;
  let answer = 0;

  discount.forEach((_, i) => {
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

// Apr 22, 2023
function solution(want, number, discount) {
  let count = 0;

  const isItemCountWrong = (discount10, index) => {
    const filteredItemCount = discount10.filter((item) => item === want[index]).length;
    const itemCount = number[index];
    return filteredItemCount !== itemCount;
  };

  for (let i = 0; i < discount.length - 9; i++) {
    const discount10 = discount.slice(i, i + 10);

    let flag = true;

    for (let j = 0; j < want.length; j++) {
      if (isItemCountWrong(discount10, j)) {
        flag = false;
        break;
      }
    }
    if (flag) count += 1;
  }

  return count;
}
