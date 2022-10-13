// July 12, 2022
// https://programmers.co.kr/skill_checks

// Level 1
function solution(arr) {
  const answer = [];

  arr.forEach(v => {
    if (answer[answer.length - 1] !== v) {
      answer.push(v);
    }
  });

  return answer;
}

function solution(num) {
  return num % 2 ? 'Odd' : 'Even';
}

// Level 2
function solution(s) {
  const stack = [];

  for (const p of s) {
    stack.push(p);
    if (p === ')' && stack.length - 2 >= 0 && stack[stack.length - 2] === '(') {
      stack.pop();
      stack.pop();
    }
  }

  return !stack.length;
}

// Aug 5, 2022
// Level 2
function solution(n, k) {
  function isPrimeNumber(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
      if (!(n % i)) return false;
    }
    return true;
  }

  const split = n.toString(k).split('0');
  let answer = 0;
  for (const v of split) {
    const cur = Number(v);
    if (isPrimeNumber(cur)) answer++;
  }
  return answer;
}

// Oct 13, 2022
// Level 2
function solution(n) {
  let answer = 1;
  const max = Math.ceil(n / 2);

  for (let i = 1; i < max; i++) {
    let num = 0;
    for (let j = i; j <= max; j++) {
      num += j;
      if (num === n) answer++;
      if (num > n) break;
    }
  }
  return answer;
}

function solution(s) {
  const isValid = function (s) {
    const map = new Map([
      [')', '('],
      [']', '['],
      ['}', '{'],
    ]);
    const stack = [];
    for (const v of s) {
      if (!map.has(v)) {
        stack.push(v);
        continue;
      }
      if (map.get(v) !== stack[stack.length - 1]) return false;
      stack.pop();
    }
    return stack.length === 0;
  };

  let answer = 0;
  if (isValid(s)) answer++;
  for (let i = 1; i < s.length; i++) {
    const newS = s.slice(i) + s.slice(0, i);
    if (isValid(newS)) answer++;
  }
  return answer;
}
