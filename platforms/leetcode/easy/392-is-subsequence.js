// July 31, 2023
// https://leetcode.com/problems/is-subsequence/

var isSubsequence = function (s, t) {
  let count = 0;
  let tIndex = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    for (let j = tIndex; j < t.length; j++) {
      if (t[j] === cur) {
        count++;
        tIndex = j + 1;
        break;
      }
    }
  }

  return s.length === count;
};
