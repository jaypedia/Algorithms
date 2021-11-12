// 2021-10-27 & 11-12
// 모의고사

// 💨💨💨 Brute-force search(exhaustive search)
// Systematically enumerating all possible candidates for the solution
// and checking whether each candidates satisfies the problem's statement
// This method is used when the simplicity of implementation is more important than speed.

// Solution 1
function solution(answers) {
  let answer = [];

  const a1 = [1, 2, 3, 4, 5];
  const a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  const a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  const a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;

  const max = Math.max(a1c, a2c, a3c);

  if (a1c === max) answer.push(1);
  if (a2c === max) answer.push(2);
  if (a3c === max) answer.push(3);

  return answer;
}

// Solution 2
function solution(answers) {
  let answer = [];
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == p1[i % p1.length]) count[0]++;
    if (answers[i] == p2[i % p2.length]) count[1]++;
    if (answers[i] == p3[i % p3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}

// Solution 3
function solution(answers) {
  const A = '12345'.split('');
  const B = '21232425'.split('');
  const C = '3311224455'.split('');

  const scores = [A, B, C]
    .map(p => {
      return answers
        .map((answer, i) => answer === Number(p[i % p.length]))
        .filter(c => c).length;
    })
    .map((score, i) => ({ id: i + 1, score }))
    .sort((a, b) => b.score - a.score);

  const ret = [];

  while (scores.length) {
    const p = scores.shift();
    if (ret[0] && ret[0].score !== p.score) break;
    ret.push(p);
  }

  return ret.map(p => p.id).sort();
}

// Solution 4
function solution(answers) {
  let answer = [];
  const user = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let point = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (user[0][i % 5] === answers[i]) point[0]++;
    if (user[1][i % 8] === answers[i]) point[1]++;
    if (user[2][i % 10] === answers[i]) point[2]++;
  }

  const max = Math.max.apply(null, point);

  for (let i = 0; i < 3; i++) {
    if (point[i] === max) answer.push(i + 1);
  }

  return answer;
}
