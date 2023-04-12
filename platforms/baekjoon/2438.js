// Nov 5, 2021
// https://www.acmicpc.net/problem/2438

// Solution 1
const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');
const num = Number(inputData);
let star = '';
for (let i = 0; i < num; i++) {
  for (let j = 0; j <= i; j++) {
    star += '*';
  }
  star += '\n';
}

console.log(star);

// Solution 2
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stout,
});

rl.on('line', (line) => {
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

// Feb 11, 2023
const fs = require('fs');
const number = Number(fs.readFileSync('/dev/stdin').toString());

const makeStarTree = (number) => {
  let tree = '';
  for (let i = 1; i <= number; i++) {
    tree += '*'.repeat(i);
    if (i !== number) tree += '\n';
  }
  return tree;
};

const starTree = makeStarTree(number);

console.log(starTree);
