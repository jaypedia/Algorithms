// Jan 1, 2023
// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  for (let i = 0; i < prices.length; i++) {
    const item = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      const next = prices[j];
      if (item < next) continue;
      prices[i] = item - next;
      break;
    }
  }
  return prices;
};

// use stack
var finalPrices = function (prices) {
  const stack = [];
  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {
      const index = stack.pop();
      prices[index] -= prices[i];
    }
    stack.push(i);
  }
  return prices;
};
