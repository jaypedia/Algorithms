// 2021-10-28
// 체육복

function solution(n, lost, reserve) {
  let answer = 0;

  let hasClothes = new Array(n).fill(1);

  for (let i = 0; i < lost.length; i++) {
    hasClothes[lost[i] - 1]--;
  }

  for (let i = 0; i < reserve.length; i++) {
    hasClothes[reserve[i] - 1]++;
  }

  for (let i = 0; i < hasClothes.length; i++) {
    if (hasClothes[i] === 0) {
      if (hasClothes[i - 1] === 2) {
        hasClothes[i]++;
        hasClothes[i - 1]--;
      } else if (hasClothes[i + 1] === 2) {
        hasClothes[i]++;
        hasClothes[i + 1]--;
      }
    }

    if (hasClothes[i] >= 1) answer++;
  }
  return answer;
}

function solution(n, lost, reserve) {
  return (
    n -
    lost.filter(a => {
      const b = reserve.find(r => Math.abs(r - a) <= 1);
      if (!b) return true;
      reserve = reserve.filter(r => r !== b);
    }).length
  );
}

function solution(n, lost, reserve) {
  let tmp = reserve.slice();

  for (let i in tmp) {
    let key = lost.indexOf(tmp[i]);

    if (key != -1) {
      lost.splice(key, 1);
      reserve.splice(reserve.indexOf(tmp[i]), 1);
    }
  }

  for (let i of reserve) {
    let key = lost.includes(i - 1) ? lost.indexOf(i - 1) : lost.indexOf(i + 1);

    if (key != -1) {
      lost.splice(key, 1);
    }
  }

  return n - lost.length;
}

function solution(n, lost, reserve) {
  const students = {};
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }
  lost.forEach(number => (students[number] -= 1));
  reserve.forEach(number => (students[number] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
    }
  }
  for (let key in students) {
    if (students[key] >= 1) {
      answer++;
    }
  }
  return answer;
}

function solution(n, lost, reserve) {
  const actualReserve = reserve.filter(el => lost.indexOf(el) === -1);
  const actualLost = lost.filter(el => reserve.indexOf(el) === -1);

  const set = Array.apply(undefined, new Array(n)).map((el, i) =>
    actualLost.indexOf(i + 1) === -1 ? true : false
  );

  for (let hero of actualReserve) {
    if (set[hero - 1 - 1] === false) {
      set[hero - 1 - 1] = true;
    } else if (set[hero - 1 + 1] === false) {
      set[hero - 1 + 1] = true;
    }
  }
  console.log(actualReserve, set, set.filter(el => el).length);
  return set.filter(el => el).length;
}
