// 2021-11-27

/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = function (s) {
  const romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const strArr = s.split(''); // ['M', 'C', 'M', 'X', 'C', 'I', 'V'];
  const numArr = [];
  let pre = 0;

  for (element of strArr) {
    element = romanToInt[element];
    numArr.push(element); // [1000, 100, 1000, 10, 100, 1, 5];
  }

  return numArr.reduceRight((acc, cur) => {
    pre <= cur ? (acc += cur) : (acc -= cur);
    pre = cur;
    return acc;
  }, 0);
};

console.log(romanToInt('MCMXCIV')); // 1994
console.log(romanToInt('III')); // 3
