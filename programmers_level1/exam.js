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

solution([1, 2, 3, 4, 5]);

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

  // const max = Math.max(...point)
  const max = Math.max.apply(null, point);

  for (let i = 0; i < 3; i++) {
    if (point[i] === max) answer.push(i + 1);
  }

  return answer;
}

// 2022.1.19 다시풀기
// 소요시간 40분

// 1번 수포자 1, 2, 3, 4, 5,
// 2번 수포자 2, 1, 2, 3, 2, 4, 2, 5,
// 3번 수포자 3, 3, 1, 1, 2, 2, 4, 4, 5, 5

function solution5(answers) {
  const answer = [];

  // 1, 2, 3번의 반복되는 답안을 우선 객체나 배열로 저장해두기?
  // 반복된다는 것을 어떻게 구현할 것인가?
  // answer의 길이가 더 길 경우 -> 다시 수포자 1번의 0번째 인덱스로 돌아가서 반복할 수 있도록

  const P = {
    A1: [1, 2, 3, 4, 5],
    A2: [2, 1, 2, 3, 2, 4, 2, 5],
    A3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };

  // 각 사람이 맞은 것만 필터링할 수 있도록 filter 메서드를 활용 - 답 자체가 필요한 것이 아닌, 맞은 개수가 필요하므로 length property 활용
  const a1 = answers.filter((v, i) => v === P.A1[i % P.A1.length]).length;
  const a2 = answers.filter((v, i) => v === P.A2[i % P.A2.length]).length;
  const a3 = answers.filter((v, i) => v === P.A3[i % P.A3.length]).length;

  const max = Math.max(a1, a2, a3);

  if (max === a1) answer.push(1);
  if (max === a2) answer.push(2);
  if (max === a3) answer.push(3);

  return answer;
}

// 이차원 배열 활용
function solution6(answers) {
  const answer = [];
  const P = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  // answers 배열 순환하면서 P에 있는 각각의 사람들의 답과 일치하는지 확인

  const count = [0, 0, 0];
  answers.forEach((v, i) => {
    P.forEach((p, j) => {
      if (v === p[i % p.length]) count[j]++;
    });
  });

  console.log(count);
  // 가장 많이 맞춘 사람 넣기 => max 구한 후 max와 같은 사람을 순서대로 answer에 pust

  const max = Math.max(...count);

  count.forEach((v, i) => {
    if (v === max) answer.push(i + 1);
  });

  return answer;
}

console.log(solution6([1, 3, 2, 4, 2]));
