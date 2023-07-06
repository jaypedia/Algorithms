// https://www.hackerrank.com/challenges/kangaroo/problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
  if (v1 <= v2) return 'NO';
  let i = 1;
  const n = (x2 - x1) / (v1 - v2);
  while (i <= n) {
    if (x1 + v1 * i === x2 + v2 * i) return 'YES';
    i++;
  }
  return 'NO';
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const x1 = parseInt(firstMultipleInput[0], 10);

  const v1 = parseInt(firstMultipleInput[1], 10);

  const x2 = parseInt(firstMultipleInput[2], 10);

  const v2 = parseInt(firstMultipleInput[3], 10);

  const result = kangaroo(x1, v1, x2, v2);

  ws.write(result + '\n');

  ws.end();
}

// 2022.1.26 Review
function kangaroo(x1, v1, x2, v2) {
  if (v1 <= v2) return 'NO';
  let x_1 = x1;
  let x_2 = x2;
  while (true) {
    x_1 += v1;
    x_2 += v2;
    if (x_1 === x_2) return 'YES';
    if (x_1 > x_2) return 'NO';
  }
}

// Algebraic solution (without loop)
function kangaroo(x1, v1, x2, v2) {
  if (v1 <= v2) return 'NO';
  const n = (x2 - x1) / (v1 - v2);
  if (Number.isInteger(n) && n > 0) return 'YES';
  else return 'NO';
}
