// Mar 16, 2023
// https://www.hackerrank.com/challenges/mini-max-sum

'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  const sum = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  console.log(`${sum - arr[4]} ${sum - arr[0]}`);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
