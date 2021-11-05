// fs
// (1) object & key
// ||(OR) finds the first truthy value
// For each operand, converts it to boolean.
// If the result is true, stops and returns the original value of that operand.
// If all orperands have been evaluated, (i.e. all were false), returns the last operand.

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const result = {
  '1 2 3 4 5 6 7 8': 'ascending',
  '8 7 6 5 4 3 2 1': 'descending',
}['1 2 3 4 5 6 8 7'];

console.log(result || 'mixed');

// (2) for loop
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

let count = 0;
for (let i = 0; i < 7; i++) {
  if (input[i] < input[i + 1]) count++;
}

const result = {
  0: 'descending',
  7: 'ascending',
}[count];

console.log(result || 'mixed');

// JavaScript
function solution(scale) {
  switch (scale) {
    case '1 2 3 4 5 6 7 8':
      return 'ascending';
    case '8 7 6 5 4 3 2 1':
      return 'descending';
    default:
      return 'mixed';
  }
}

console.log(solution('1 2 3 4 5 6 7 8'));
console.log(solution('8 7 6 5 4 3 2 1'));
console.log(solution('8 1 7 2 6 3 5 4'));
