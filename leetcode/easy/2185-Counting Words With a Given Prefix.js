// Oct 24, 2022
// https://leetcode.com/problems/counting-words-with-a-given-prefix/

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let count = 0;
  words.forEach(word => {
    count += 1;
    for (let i = 0; i < pref.length; i++) {
      if (pref[i] !== word[i]) {
        count -= 1;
        break;
      }
    }
  });
  return count;
};

var prefixCount = function (words, pref) {
  let count = 0;
  words.forEach(word => {
    word.startsWith(pref) && count++;
  });
  return count;
};

var prefixCount = function (words, pref) {
  return words.filter(word => word.startsWith(pref)).length;
};
