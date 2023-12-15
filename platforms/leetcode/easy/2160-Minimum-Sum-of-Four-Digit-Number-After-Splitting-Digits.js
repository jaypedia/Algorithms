// Oct 17, 2022
// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/description/

/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  let num1 = '';
  let num2 = '';
  const numArr = (num + '').split('');

  num1 += Math.min(...numArr);
  numArr.splice(numArr.indexOf(num1), 1);

  num2 += Math.min(...numArr);
  numArr.splice(numArr.indexOf(num2), 1);

  const digit1 = numArr.pop();
  num1 += digit1;

  const digit2 = numArr.pop();
  num2 += digit2;

  return +num1 + +num2;
};

var minimumSum = function (num) {
  const numbers = [];
  while (numbers.length < 4) {
    numbers.push(~~num % 10);
    num /= 10;
  }
  numbers.sort((a, b) => b - a);
  return numbers[0] + numbers[1] + 10 * (numbers[2] + numbers[3]);
};

// Jun 3, 2023
var minimumSum = function (num) {
  const arr = num.toString().split('').map(Number).sort();
  return (arr[0] + arr[1]) * 10 + arr[2] + arr[3];
};

// Dec 15, 2023
var minimumSum = function(num) {
  const [one, two, three, four] = num.toString().split('').sort();
  return Number(one + three) + Number(two + four)
};