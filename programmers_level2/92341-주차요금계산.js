// Nov 22, 2022
// https://school.programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
  const answer = [];

  const getMinDiff = (inTime, outTime) => {
    const [inH, inM] = inTime.split(':');
    const [outH, outM] = outTime.split(':');
    const hDiff = (outH - inH) * 60;
    const mDiff = outM - inM;
    const totalDiff = hDiff + mDiff;
    return totalDiff;
  };

  const calcFee = totalMin => {
    const [defaultTime, defaultFee, unitTime, unitFee] = fees;
    if (totalMin <= defaultTime) return defaultFee;
    return defaultFee + Math.ceil((totalMin - defaultTime) / unitTime) * unitFee;
  };

  const recordArr = records
    .map(record => {
      const [time, number, status] = record.split(' ');
      return [time, number, status];
    })
    .sort((a, b) => a[1] - b[1]);

  const map = new Map();

  for (let i = 0; i < recordArr.length; i++) {
    const [inTime, number, _] = recordArr[i];
    let outTime = '23:59';
    if (recordArr[i + 1]) {
      if (recordArr[i + 1][1] === number) {
        outTime = recordArr[i + 1][0];
        i++;
      }
    }
    const timeDiff = getMinDiff(inTime, outTime);
    map.set(number, ~~map.get(number) + timeDiff);
  }

  map.forEach(v => {
    const totalFee = calcFee(v);
    answer.push(totalFee);
  });

  return answer;
}
