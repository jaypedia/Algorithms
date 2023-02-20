// Oct 4~5, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  const nums = phone_number.length - 4;
  return '*'.repeat(nums) + phone_number.slice(-4);
}

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

// regular expressions
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, '*');
}

// fill(value, start, end)
// [1,2,3,4,5].fill('*', 0, 3) -> ['*', '*', '*', 4, 5]
const solution3 = (n) => [...n].fill('*', 0, n.length - 4).join('');
