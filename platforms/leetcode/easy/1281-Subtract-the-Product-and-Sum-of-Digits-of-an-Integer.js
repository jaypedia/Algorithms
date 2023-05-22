// Oct 16, 2022
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description/

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const arr = (n + '').split('');
  const product = arr.reduce((acc, cur) => acc * cur);
  const sum = arr.reduce((acc, cur) => +acc + +cur, 0);
  return product - sum;
};

// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/2658290/js-very-easy-and-very-fast/
var subtractProductAndSum = function (n) {
  n = String(n);
  let sum = 0;
  let product = 1;

  for (let i = 0; i < n.length; i++) {
    sum += Number(n[i]);
    product *= Number(n[i]);
  }

  return product - sum;
};
