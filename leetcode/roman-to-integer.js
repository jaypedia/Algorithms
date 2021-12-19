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

// RegExp
var romanToInt = function (s) {
  const romanNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let elems = s.split('');
  let total = elems.reduce((pre, cur) => pre + romanNumber[cur], 0); // 우선 총합 구하기

  for (let i = 0; i < elems.length; i++) {
    // [IXC] : I, X, C중 하나라도 있는지 검사
    // 배열의 요소를 하나씩 돌면서 테스트
    // 만약 현재 요소가 I, X, C가 아닐 경우 continue로 아래 연산 하지 않고 다음 반복으로(i++)
    if (!/[IXC]/.test(elems[i])) continue;

    // 현재 요소가 I이면서 다음 요소가 V거나 X인 경우 (IV, IX인 경우 1 + 5가 아닌 -1 + 5, -1 + 10 이 되어야 함 )
    if (/[I]/.test(elems[i]) && /[VX]/.test(elems[i + 1])) {
      // 처음에 모든 요소를 더해주었으므로, 뺄 때는 x2를 해서 빼 줘야 함
      total -= romanNumber[elems[i]] * 2;
      continue;
    }
    if (/[X]/.test(elems[i]) && /[LC]/.test(elems[i + 1])) {
      total -= romanNumber[elems[i]] * 2;
      continue;
    }
    if (/[C]/.test(elems[i]) && /[DM]/.test(elems[i + 1])) {
      total -= romanNumber[elems[i]] * 2;
      continue;
    }
  }
  return total;
};
