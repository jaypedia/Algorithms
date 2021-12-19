// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

const fs = require('fs');
const inputData = fs.readFileSync('/backjoon/input.txt').toString().split(' ');
let num = Number(inputData);
let star = '';
for (let i = 0; i < num; i++) {
  for (let j = 0; j <= i; j++) {
    star += '*';
  }
  star += '\n';
}

console.log(star);

// readline & repeat (수정 필요)
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stout,
});

rl.on('line', line => {
  const input = line.split(' ');
  const n = Number(input[0]);
  function solution(n) {
    for (let i = 0; i < n; i++) {
      star += '*'.repeat(i);
      star += '\n';
    }
    return star;
  }
  return solution(n);
}).on('close', () => process.exit());

// JavaScript
function star(n) {
  let star = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      star += '*';
    }
    star += '\n';
  }
  return star;
}

console.log(star(5));
