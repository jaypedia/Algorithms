// Jan 4, 2023
// https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/

/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const map = num.split('').reduce((acc, cur) => {
    acc.set(cur, ~~acc.get(cur) + 1);
    return acc;
  }, new Map());

  for (let i = 0; i < num.length; i++) {
    const count = +num[i];
    const key = i.toString();
    if (~~map.get(key) !== count) return false;
  }

  return true;
};

// https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/2132635/simple-and-fast-javascript-typescript-solution/
function digitCount(num) {
  const arr = Array(num.length).fill(0);
  for (const char of num) {
    arr[Number(char)]++;
  }
  return arr.join('') === num;
}
