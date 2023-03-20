// Oct 18, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(`2016-${a}-${b}`);
  return week[date.getDay()];
}

// Nov 12, 2021
function solution(a, b) {
  const date = new Date(`${a}/${b}/2016`);
  return date.toString().slice(0, 3).toUpperCase();
}

function getDayName(a, b) {
  const date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}
