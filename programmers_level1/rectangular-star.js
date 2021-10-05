// 2021-10-05
// 직사각형 별찍기

// My solution
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
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

// My another solution - Square star (정사각형 별찍기)
function solution(n) {
  let star = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      star += '*';
    }
    star += '\n';
  }
  return star;
}

console.log(solution(3));

// Ohter's solution 1
// repeat
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  let row = '*'.repeat(a);
  for (let i = 0; i < b; i++) {
    row += '\n';
    console.log(row);
  }
});

// Ohter's solution 2
// template literals & repeat
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  const star = `${'*'.repeat(a)}\n`;
  console.log(star.repeat(b));
});

// Other's solution 3
// Array(n), fill(), join
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  console.log(Array(b).fill(Array(a).fill('*').join('')).join('\n'));
});
