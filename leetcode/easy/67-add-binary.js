// March 29, 2022
// https://leetcode.com/problems/add-binary/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// My attempt : 194 / 294 test cases passed.
var addBinary = function (a, b) {
  const sum = parseInt(a, 2) + parseInt(b, 2);
  return sum.toString(2);
};

// Use BigInt()
// https://leetcode.com/problems/add-binary/discuss/385148/Simple-JavaScript-solution-using-BigInt
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
var addBinary = function (a, b) {
  const aBin = `0b${a}`;
  const bBin = `0b${b}`;
  const sum = BigInt(aBin) + BigInt(bBin);
  return sum.toString(2);
};

var addBinary = (a, b) => (BigInt(`0B${a}`) + BigInt(`0B${b}`)).toString(2);

// Without inbuilt methods
// https://leetcode.com/problems/add-binary/discuss/577148/simple-javascript-solution
var addBinary = (a, b) => {
  // Truth Table
  // 1st + 2nd + carry = sum, new carry, decimal sum
  //   0 +  0  + 0 = 0, 0 (0)
  //   0 +  0  + 1 = 1, 0 (1)
  //   0 +  1  + 1 = 0, 1 (2)
  //   1 +  1  + 1 = 1, 1 (3)

  let carry = 0;
  let result = '';

  let len1 = a.length - 1;
  let len2 = b.length - 1;

  for (; len1 >= 0 || len2 >= 0 || carry > 0; len1--, len2--) {
    let sum = (+a[len1] || 0) + (+b[len2] || 0) + carry;
    if (sum > 1) {
      sum = sum % 2;
      carry = 1;
    } else {
      carry = 0;
    }
    result = `${sum}${result}`;
  }
  return result;
};
