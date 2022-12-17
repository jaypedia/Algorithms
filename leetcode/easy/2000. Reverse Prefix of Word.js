// Dec 17, 2022
// https://leetcode.com/problems/reverse-prefix-of-word/

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  const index = word.indexOf(ch) + 1;
  if (index < 0) return word;
  const reversedPrefix = word.slice(0, index).split('').reverse().join('');
  return reversedPrefix + word.slice(index);
};

var reversePrefix = function (word, ch) {
  const index = word.indexOf(ch);
  return (
    word
      .substr(0, index + 1)
      .split('')
      .reverse()
      .join('') + word.substr(index + 1)
  );
};
