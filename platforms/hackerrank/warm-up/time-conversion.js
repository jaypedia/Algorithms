// Jan 26, 2022
// https://www.hackerrank.com/challenges/time-conversion/problem

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

function timeConversion(s) {
  const amOrPm = s.slice(-2);
  const hour = s.split(':').map((v) => parseInt(v))[0];
  const longHour = hour + 12;
  if (amOrPm === 'AM') {
    if (hour === 12) {
      return '00' + s.slice(2, -2);
    }
    return s.slice(0, -2);
  } else if (amOrPm === 'PM') {
    if (hour === 12) {
      return s.slice(0, -2);
    }
    return longHour + s.slice(2, -2);
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + '\n');

  ws.end();
}
