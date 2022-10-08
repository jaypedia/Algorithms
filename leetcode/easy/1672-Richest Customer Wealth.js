/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let answer = 0;
  for (let i = 0; i < accounts.length; i++) {
    const wealth = accounts[i].reduce((a, b) => a + b, 0);
    if (wealth >= 5000) return 5000;
    if (wealth >= answer) answer = wealth;
  }
  return answer;
};

// https://leetcode.com/problems/richest-customer-wealth/solutions/1733098/python-javascript-easy-solution-with-explanation/?q=javascript&orderBy=most_votes
//! function to find the sum of array
const sum = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const maximumWealth = accounts => {
  let wealthy_customer = 0;
  for (let balance of accounts) {
    const curr_wealth = sum(balance); // we will get total balance of the person
    wealthy_customer = Math.max(wealthy_customer, curr_wealth);
  }
  return wealthy_customer;
};
