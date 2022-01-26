// 2022.1.26
// Time taken : 17m

// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  const amOrPm = s.slice(-2);
  const hour = s.split(':').map(v => parseInt(v))[0];
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
