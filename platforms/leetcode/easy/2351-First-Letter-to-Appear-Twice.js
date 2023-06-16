// Dec 29, 2022
// https://leetcode.com/problems/first-letter-to-appear-twice/

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const set = new Set();

  for (const letter of s) {
    if (set.has(letter)) return letter;
    else set.add(letter);
  }
};
