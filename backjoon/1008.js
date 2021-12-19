// 두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.

const fs = require('fs');
const inputData = fs.readFileSync('dev/stdin').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A / B);

// Another way
const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
console.log(input[0] / input[1]);

// Other solution : readline
// readline 모듈을 import
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
}).on('close', function () {
  process.exit();
});
