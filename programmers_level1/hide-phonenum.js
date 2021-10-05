// 2021-10-04~05
// 핸드폰 번호 가리기

// My solution
function solution(phone_number) {
  const arr = phone_number.split('');
  const sliced = arr.slice(-4);
  const rest = arr.slice(0, -4);
  const answer = rest
    .map(() => '*')
    .concat(sliced)
    .join('');
  return answer;
}

console.log(solution('01012345678')); // *******5678

// Other's solution 1
// repeat & substring
function solution2(phone_number) {
  const answer = phone_number.length - 4;
  return '*'.repeat(answer) + phone_number.substring(answer);
}

// Other's solution 2
// regular expressions
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, '*');
}

// Other's solution 3
// repeat & slice
function hide_numbers2(s) {
  var result = '*'.repeat(s.length - 4) + s.slice(-4);
  return result;
}

// Other's solution 4
// spread operator & fill & join
const solution3 = n => [...n].fill('*', 0, n.length - 4).join('');
