// May 21, 2022
// https://leetcode.com/problems/plus-one/

var plusOne = function (digits) {
  let idx = digits.length - 1;

  while (idx + 1) {
    if (digits[idx] !== 9) {
      digits[idx] += 1;
      return digits;
    }

    digits[idx] = 0;
    idx -= 1;

    if (idx < 0) {
      digits.unshift(1);
      return digits;
    }
  }
};

// Other's solution
var plusOne = function (digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  digits.unshift(1);
  return digits;
};
