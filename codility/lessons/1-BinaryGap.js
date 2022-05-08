// May 8, 2022

function solution(N) {
  const binaryStr = N.toString(2);
  const arr = binaryStr.split('1').map(v => v.length);
  arr.pop();
  return Math.max(...arr) === binaryStr.length - 1 ? 0 : Math.max(...arr);
}
