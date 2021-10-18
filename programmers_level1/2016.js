// 2021-10-18~19
// 2016년

// My solution
function solution(a, b) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(`2016-${a}-${b}`);
  return week[date.getDay()];
}
