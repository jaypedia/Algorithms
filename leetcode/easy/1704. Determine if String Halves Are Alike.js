/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const halfLength = s.length / 2;
  const firstHalf = s.slice(0, halfLength);
  const secondHalf = s.slice(halfLength);
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  let firstVowelCount = 0;
  let secondVowelCount = 0;

  for (const letter of firstHalf) {
    if (vowels.includes(letter)) {
      firstVowelCount++;
    }
  }

  for (const letter of secondHalf) {
    if (vowels.includes(letter)) {
      secondVowelCount++;
    }
  }

  return firstVowelCount === secondVowelCount;
};

// use indexOf
var halvesAreAlike = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let count = 0;
  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.indexOf(s[i]) !== -1) {
      count++;
    }
  }
  for (let i = s.length / 2; i < s.length; i++) {
    if (vowels.indexOf(s[i]) !== -1) {
      count--;
    }
  }
  return count === 0;
};

// one line
var halvesAreAlike = (s) =>
  s
    .split('')
    .slice(0, s.length / 2)
    .reduce((v, e) => ('AEIOU'.includes(e.toUpperCase()) ? (v += 1) : v), 0) ===
  s
    .split('')
    .slice(s.length / 2)
    .reduce((v, e) => ('AEIOU'.includes(e.toUpperCase()) ? (v += 1) : v), 0);
