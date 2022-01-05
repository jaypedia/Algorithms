// 2022-01-05
// 분산처리

/*
[INPUT]
입력의 첫 줄에는 테스트 케이스의 개수 T가 주어진다. 
그 다음 줄부터 각각의 테스트 케이스에 대해 정수 a와 b가 주어진다. 
(1 ≤ a < 100, 1 ≤ b < 1,000,000)

[OUTPUT]
각 테스트 케이스에 대해 마지막 데이터가 처리되는 컴퓨터의 번호를 출력한다.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stout,
});

let t = -1;
let count = 0;
const answer = [];

rl.on('line', line => {
  if (t < 0) {
    t = parseInt(line);
  } else {
    count++;
    const [a, b] = line.split(' ').map(v => +v);
    const lastDigit = getLastDigit(a, b);
    answer.push(lastDigit);
    if (count === t) rl.close();
  }
}).on('close', () => {
  answer.map(v => console.log(+v));
  process.exit();
});

function getLastDigit(a, b) {
  if (!(a % 10)) return 10;

  const A = a.toString().split('').pop();

  if (A === '1' || A === '5' || A === '6') return A;

  const B = b % 4 ? b % 4 : (b % 4) + 4;

  const lastDigit = (a ** B).toString().split('').pop();

  return lastDigit;
}
