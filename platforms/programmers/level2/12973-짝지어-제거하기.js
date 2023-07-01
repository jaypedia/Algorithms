// April 13, 2022
// https://programmers.co.kr/learn/courses/30/lessons/12973

// Passed correctness tests, but failed efficiency tests
function solution(s) {
  const checkTwoLetters = (string) => {
    for (let i = 0; i < string.length - 1; i++) {
      if (string[i] === string[i + 1]) {
        return string[i] + string[i + 1];
      }
    }
    return -1;
  };

  while (s.length) {
    const twoLetters = checkTwoLetters(s);
    if (twoLetters < 0) return 0;
    s = s.split(twoLetters).join('');
  }
  return 1;
}

// April 16 - Use stack
function solution(s) {
  const stack = [];

  for (const letter of s) {
    if (letter === stack[stack.length - 1]) {
      stack.pop();
      continue;
    }
    stack.push(letter);
  }

  return stack.length ? 0 : 1;
}

// Review: July 1, 2023
function solution(s) {
  const stack = [];

  for (const letter of s) {
    const top = stack[stack.length - 1];
    if (top === letter) stack.pop();
    else stack.push(letter);
  }

  return stack.length === 0 ? 1 : 0;
}
