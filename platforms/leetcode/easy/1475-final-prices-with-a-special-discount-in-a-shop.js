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

// July 15, 2023
var finalPrices = function (prices) {
  return prices.reduce((answer, cur, i, arr) => {
    let discount = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (cur >= arr[j]) {
        discount = arr[j];
        break;
      }
    }
    const price = cur - discount;
    answer.push(price);
    return answer;
  });
};

// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/1904781/javascript-monotonic-stack-with-explanation/
// utilize monotonic stack (stack with specific conditions)
var finalPrices = function (prices) {
  const stack = [];
  const result = [];

  for (let i = prices.length - 1; i >= 0; i--) {
    const currentPrice = prices[i];

    // Condition: greater than the current price
    // pop off numbers that don't satisfy the condition
    while (stack.length && stack[stack.length - 1] > currentPrice) {
      stack.pop();
    }

    const discount = stack.length ? stack[stack.length - 1] : 0;

    result[i] = currentPrice - discount;
    stack.push(currentPrice);
  }
  return result;
};

var finalPrices = function (prices) {
  const stack = [];
  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];

    while (stack.length && prices[stack[stack.length - 1]] >= currentPrice) {
      const index = stack.pop();
      prices[index] -= currentPrice;
    }
    stack.push(i);
  }

  return prices;
};
