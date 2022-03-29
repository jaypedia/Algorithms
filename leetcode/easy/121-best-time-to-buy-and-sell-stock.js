// March 27, 2022
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */

// My solution
var maxProfit = function (prices) {
  if (prices.length === 1) return 0;
  let left = 0;
  let right = 1;
  let maxProfit = 0;
  while (right < prices.length) {
    const profit = prices[right] - prices[left];
    if (maxProfit >= profit && prices[left] > prices[right]) {
      left = right;
    } else if (maxProfit < profit) {
      maxProfit = profit;
    }
    right++;
  }
  return maxProfit;
};

console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/1735550/Python-Javascript-Easy-solution-with-very-clear-Explanation
const maxProfit2 = prices => {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left]; // our current profit
      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};
