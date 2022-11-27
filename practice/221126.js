function solution(flowers) {
  const SET = new Set();

  flowers.forEach(flower => {
    const [start, end] = flower;
    for (let i = start; i < end; i++) {
      SET.add(i);
    }
  });

  return SET.size;
}

function solution(id_list, k) {
  let answer = 0;
  const map = new Map();

  id_list.forEach(idList => {
    const idArr = idList.split(' ');
    const idSet = new Set(idArr);
    idSet.forEach(id => {
      map.set(id, ~~map.get(id) + 1);
      if (map.get(id) <= k) answer++;
    });
  });

  return answer;
}

function solution(s, times) {
  const dateSet = new Set();
  let current = s;

  const calcTime = (current, time) => {
    let [Y, M, D, H, m, S] = current.split(':').map(Number);
    const [day, hour, min, sec] = time.split(':').map(Number);
    S += sec;
    if (S >= 60) {
      m += 1;
      S -= 60;
    }
    m += min;
    if (m >= 60) {
      H += 1;
      m -= 60;
    }
    H += hour;
    if (H >= 24) {
      D += 1;
      H -= 24;
    }
    D += day;
    if (D >= 31) {
      M += 1;
      D -= 30;
    }
    if (M >= 13) {
      Y += 1;
      M -= 12;
    }
    return [Y, M, D, H, m, S].map(v => (v + '').padStart(2, '0')).join(':');
  };

  const sliceTime = time => {
    return time.slice(0, 10);
  };

  dateSet.add(sliceTime(current));

  times.forEach(time => {
    current = calcTime(current, time);
    const slicedTime = sliceTime(current);
    dateSet.add(slicedTime);
  });

  const calcDuration = (startDate, endDate) => {
    const [y1, m1, d1] = startDate.split(':').map(Number);
    const [y2, m2, d2] = endDate.split(':').map(Number);
    const yDiff = y2 - y1;
    const mDiff = m2 - m1;
    const dDiff = d2 - d1;
    return yDiff * 360 + mDiff * 30 + dDiff + 1;
  };

  const isSuccessSave = () => {
    const arr = Array.from(dateSet);
    for (let i = 0; i < arr.length - 1; i++) {
      const [y1, m1, d1] = arr[i].split(':').map(Number);
      const [y2, m2, d2] = arr[i + 1].split(':').map(Number);
      const yDiff = y2 - y1;
      const mDiff = m2 - m1;
      const dDiff = d2 - d1;

      if (dDiff === 1 && mDiff === 0 && yDiff === 0) continue;
      if (dDiff === -29 && mDiff === 1 && yDiff === 0) continue;
      if (dDiff === -29 && mDiff === -11 && yDiff === 1) continue;
      else return 0;
    }
    return 1;
  };

  return [isSuccessSave(), calcDuration(s, current)];
}
