// 2022-01-05
// 저항

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stout,
});

const colors = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
let count = 0;
const colorArr = [];

rl.on('line', line => {
  count++;
  colorArr.push(line);
  if (count === 3) rl.close();
}).on('close', () => {
  console.log(+calculateResistorValues(colorArr));
  process.exit();
});

const calculateResistorValues = arr =>
  colors.indexOf(arr[0]).toString() +
  colors.indexOf(arr[1]).toString() * 10 ** colors.indexOf(arr[2]);
