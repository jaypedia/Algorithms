// 2021-11-05
// https://www.acmicpc.net/problem/1008

// Solution 1
const fs = require('fs');

const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = Number(inputData[0]);
const B = Number(inputData[1]);

console.log(A / B);

// Solution 2
const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log(input[0] / input[1]);

// Solution 3
const readline = require('readline');

// 인터페이스 객체 생성
// process의 입출력 스트림을 input과 output에 할당
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const input = line.split(' ');
  const result = Number(input[0]) / Number(input[1]);
  console.log(result);
  rl.close();
}).on('close', () => process.exit());
