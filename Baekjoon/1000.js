// 2021-11-05
// https://www.acmicpc.net/problem/1000

// Solution 1. file system module
const fs = require('fs');

const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = Number(inputData[0]);
const B = Number(inputData[1]);

console.log(A + B);

// Solution 2. readline module
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stout,
});

rl.on('line', (line) => {
  const input = line.split(' ');
  const result = Number(input[0]) + Number(input[1]);
  console.log(result);
  rl.close();
}).on('close', () => process.exit());
