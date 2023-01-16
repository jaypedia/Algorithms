// Jan 16, 2023
// https://leetcode.com/problems/count-operations-to-obtain-zero/

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
  let count = 0;

  while (num1 !== 0 && num2 !== 0) {
    if (num1 >= num2) {
      num1 = num1 - num2;
    } else {
      num2 = num2 - num1;
    }
    count++;
  }

  return count;
};

// https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/1767023
var countOperations = function (num1, num2) {
  if (num2 === 0) return 0; // done
  if (num1 < num2) countOperations(num2, num1); // reverse if num1 is small
  return (
    Math.trunc(num1 / num2) + // quotient (equals repeated subtraction amount)
    countOperations(num2, num1 % num2) // call smaller, remainder
  );
};
