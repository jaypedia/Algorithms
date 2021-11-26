// 2021-11-26

/*
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-2**31, 2**31 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let arr = x.toString().split('');

  // 뒤의 0 잘라내기
  let i = 0;
  while (i < arr.length) {
    if (arr[arr.length - 1] === '0') {
      arr.pop();
    }
    i++;
  }

  // 부호 위치 바꿔주기
  arr = arr.reverse();
  if (arr[arr.length - 1] === '-') {
    arr.pop();
    arr.unshift('-');
  }

  const result = +arr.join('');
  return result > 2 ** 31 - 1 || result < (-2) ** 31 ? 0 : result;
};

console.log(reverse(-123));
console.log(reverse(12230020000000));
