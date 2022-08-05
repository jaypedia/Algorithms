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
