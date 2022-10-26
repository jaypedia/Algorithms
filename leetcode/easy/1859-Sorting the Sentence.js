// Oct 26, 2022
// https://leetcode.com/problems/sorting-the-sentence

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const arr = [];
  s.split(' ').forEach(v => {
    const [index, word] = [v.slice(-1), v.slice(0, -1)];
    arr[index] = word;
  });
  return arr.slice(1).join(' ');
};

const sortSentence = function (s) {
  return s
    .split(' ')
    .sort((a, b) => a[a.length - 1] - b[b.length - 1])
    .map(word => word.slice(0, word.length - 1))
    .join(' ');
};
