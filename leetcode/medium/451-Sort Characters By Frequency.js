// Oct 8, 2022
// https://leetcode.com/problems/sort-characters-by-frequency/submissions/817910039/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const obj = s.split('').reduce((acc, cur) => {
    acc[cur] = ~~acc[cur] + 1;
    return acc;
  }, {});

  const values = Object.values(obj).sort((a, b) => b - a);
  let answer = '';
  values.forEach(v => {
    for (const letter in obj) {
      const current = obj[letter];
      if (v === current) {
        answer += letter.repeat(v);
        delete obj[letter];
        break;
      }
    }
  });
  return answer;
};
