// 2021-11-05
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// file system module
const fs = require('fs');
const inputData = fs.readFileSync('./backjoon/input.txt').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A + B);

// readline module
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stout,
});

rl.on('line', line => {
  const input = line.split(' ');
  const result = Number(input[0]) + Number(input[1]);
  console.log(result);
  rl.close();
}).on('close', () => process.exit());
