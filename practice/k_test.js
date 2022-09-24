function solution(today, terms, privacies) {
  const answer = [];
  const termObj = {};
  terms.forEach(v => {
    const [num, month] = v.split(' ');
    termObj[num] = Number(month);
  });

  const calcDiff = date => {
    const [y, m, d] = today.split('.');
    const [y2, m2, d2] = date.split('.');

    const yDiff = y - y2;
    const mDiff = m - m2;
    const dDiff = d - d2;

    return ((yDiff * 12 + mDiff) * 28 + dDiff) / 28;
  };

  privacies.forEach((v, i) => {
    const [date, term] = v.split(' ');
    const month = termObj[term];
    const diff = calcDiff(date);
    if (diff >= month) answer.push(i + 1);
  });

  return answer;
}
