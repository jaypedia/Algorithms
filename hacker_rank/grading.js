// 2021-11-19
// Grading Students

// If the difference between the grade and the next multiple of 5 is less than 3
// => Round grade up to the next multiple of 5

// If the value of grade is less than 38
// => No rounding occurs as the result will still be a failing grade

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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

// 38점 이상이면서 5로 나눴을 떄의 나머지가 3 이상이면, 그 다음 5의 배수로 반올림
function gradingStudents(grades) {
  return grades.map(v => {
    return v >= 38 && v % 5 >= 3 ? (Math.floor(v / 5) + 1) * 5 : v;
  });
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const gradesCount = parseInt(readLine().trim(), 10);

  let grades = [];

  for (let i = 0; i < gradesCount; i++) {
    const gradesItem = parseInt(readLine().trim(), 10);
    grades.push(gradesItem);
  }

  const result = gradingStudents(grades);

  ws.write(result.join('\n') + '\n');

  ws.end();
}
