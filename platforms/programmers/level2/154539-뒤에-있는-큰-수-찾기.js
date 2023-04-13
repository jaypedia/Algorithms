// Apr 13, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/154539

// Out of 23 test cases, 4 cases (Test 20 to Test 23) exceeded the time limit and timed out
function solution(numbers) {
  return numbers.reduce((acc, cur, idx) => {
    let element = -1;
    for (let i = idx + 1; i < numbers.length; i++) {
      const next = numbers[i];
      if (next > cur) {
        element = next;
        break;
      }
    }
    acc.push(element);
    element = -1;
    return acc;
  }, []);
}

// A solution using stack
function solution(numbers) {
  const answer = new Array(numbers.length);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }

  while (stack.length) {
    answer[stack.pop()] = -1;
  }

  return answer;
}
