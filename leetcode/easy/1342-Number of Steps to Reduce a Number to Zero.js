/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let steps = 0;
  while (num) {
    if (num % 2) num -= 1;
    else num = num / 2;
    steps++;
  }
  return steps;
};

// Recursive
var numberOfSteps = function (num) {
  const count = (num, steps) => {
    if (!num) return steps;
    if (num % 2) return count(num - 1, steps + 1);
    return count(num / 2, steps + 1);
  };

  return count(num, 0);
};
