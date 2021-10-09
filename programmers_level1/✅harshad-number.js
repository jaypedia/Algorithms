// 2021-10-05
// Harshad number

// My solution
function solution(arr) {
  const str = arr.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return Number(str) % sum ? false : true;
}

// Other's solution
function solution2(n) {
  return !(n % (n + '').split('').reduce((sum, current) => +sum + +current));
}
