// April 6, 2022
// https://programmers.co.kr/learn/courses/30/lessons/42883
// Greedy algorithm

function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    const c = number.charAt(i); // or number[i]
    while (stack.length && stack[stack.length - 1] < c && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(c);
  }

  stack.splice(stack.length - k, k);
  return stack.join('');
}

// 현재 해당하는 숫자를 for문 돌리는 대신 head 인덱스로 추적
function solution(number, k) {
  const stack = [];
  let head = 0;
  let del = k;

  stack.push(number[head++]);

  while (stack.length < number.length - k || head < number.length) {
    if (del && stack[stack.length - 1] < number[head]) {
      stack.pop();
      del--;
      continue;
    }
    stack.push(number[head++]);
  }

  return stack.slice(0, number.length - k).join('');
}
