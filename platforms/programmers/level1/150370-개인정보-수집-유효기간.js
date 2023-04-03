// Sep 24, 2022
// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
  const answer = [];
  const termObj = {};
  terms.forEach((v) => {
    const [num, month] = v.split(' ');
    termObj[num] = Number(month);
  });

  const calcDiff = (date) => {
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

// Jan 10, 2023
function solution(today, terms, privacies) {
  const answer = [];

  const termsMap = terms.reduce((acc, cur) => {
    const [key, value] = cur.split(' ');
    acc.set(key, Number(value));
    return acc;
  }, new Map());

  const addMonthsToDate = (date, months) => {
    let [year, month, day] = date.split('.').map(Number);
    const totalMonth = month + months;
    if (totalMonth > 12) {
      year += 1;
      month = totalMonth - 12;
    } else {
      month = totalMonth;
    }
    return [year, month, day];
  };

  const isOlderThanToday = (dateArr) => {
    const [year, month, day] = today.split('.').map(Number);
    const [year2, month2, day2] = dateArr;
    const [y, m, d] = [year - year2, month - month2, day - day2];
    const sum = (y * 12 + m) * 28 + d;
    return sum >= 0;
  };

  privacies.forEach((privacy, i) => {
    const [date, term] = privacy.split(' ');
    const months = termsMap.get(term);
    const resultDate = addMonthsToDate(date, months);
    if (isOlderThanToday(resultDate)) {
      answer.push(i + 1);
    }
  });

  return answer;
}
