// Oct 5, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/12969

// My solution
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split('');
  const a = Number(n[0]),
    b = Number(n[1]);
  let star = '';
  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      star += '*';
    }
    star += '\n';
  }
  console.log(star);
});

// Other's solution 1
// repeat
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  let row = '*'.repeat(a);
  for (let i = 0; i < b; i++) {
    row += '\n';
    console.log(row);
  }
});

// Other's solution 2
// template literals & repeat
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  const star = `${'*'.repeat(a)}\n`;
  console.log(star.repeat(b));
});

// Other's solution 3
// Array(n), fill(), join
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  console.log(Array(b).fill(Array(a).fill('*').join('')).join('\n'));
});
