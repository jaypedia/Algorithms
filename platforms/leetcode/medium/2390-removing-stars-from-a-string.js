/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const stack = [];

  for (const letter of s) {
    if (letter !== '*') {
      stack.push(letter);
    } else {
      stack.pop();
    }
  }

  return stack.join('');
};
