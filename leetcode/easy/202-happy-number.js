// March 1, 2022
// https://leetcode.com/problems/happy-number/

//https://leetcode.com/problems/happy-number/discuss/315842/JavaScript-99-time-(pre-computed-squares)
const squares = {
  0: 0,
  1: 1,
  2: 4,
  3: 9,
  4: 16,
  5: 25,
  6: 36,
  7: 49,
  8: 64,
  9: 81,
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  /**
   * Not necessary I think, but the OJ algorithm appears to return false for non-positive numbers also.
   */
  if (n < 1) return false;

  /**
   * This set will store numbers as we create them.
   * If we create a number already in the set, we assume we're in an infinite cycle.
   */
  let set = new Set();

  while (!set.has(n)) {
    set.add(n);
    let s = n.toString();
    n = 0;
    for (let i = 0; i < s.length; ++i) {
      n += squares[s[i]];
    }
    if (n == 1) return true;
  }

  return false;
};

// https://leetcode.com/problems/happy-number/discuss/488750/Javascript-greater-full-explanation-no-strings-uses-Set()
var getDigits = num => {
  const digits = [];
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  return digits;
};

var getSquaredTotal = digits => {
  return digits.reduce((total, digit) => total + digit * digit, 0);
};

var isHappy = function (n) {
  const seen = new Set();
  while (n !== 1) {
    let digits = getDigits(n);
    n = getSquaredTotal(digits);
    if (seen.has(n)) {
      return false;
    }
    seen.add(n);
  }
  return true;
};
