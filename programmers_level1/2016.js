// 2021-10-18~19
// 2016년

// My solution
function solution(a, b) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(`2016-${a}-${b}`);
  return week[date.getDay()];
}

// My Second Solution (2021-11-12)
function solution(a, b) {
  const date = new Date(`${a}/${b}/2016`);
  return date.toString().slice(0, 3).toUpperCase();
}

// Other's solution
// a - 1 ? the index of the array
function getDayName(a, b) {
  var date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}

// Without Date
