// May 28, 2023
// https://leetcode.com/problems/assign-cookies/submissions/958881331/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => b - a);

  let answer = 0;

  for (let i = 0; i < g.length; i++) {
    if (!s.length) return answer;
    const child = g[i];

    while (s.length) {
      const cookie = s.pop();
      if (child <= cookie) {
        answer++;
        break;
      } else {
        continue;
      }
    }
  }

  return answer;
};
