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

// Other's solution 1
// Array(n), fill(), join

// Ohter's solution 2
// repeat
