// March 30, 2022
// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */

// https://leetcode.com/problems/valid-parentheses/discuss/728304/C%2B%2B-Easiest-solution-fully-Explained-takes-0ms-beats-100-49
var isValid = function (s) {
  const stack = [];
  for (const v of s.split('')) {
    if (v === '(' || v === '[' || v === '{') {
      stack.push(v);
      continue;
    }
    const len = stack.length;
    const top = stack[stack.length - 1];
    if (len === 0 || (top === '(' && v !== ')') || (top === '{' && v !== '}') || (top === '[' && v !== ']')) return false;
    stack.pop();
  }
  return stack.length === 0;
};

// March 31 - use Map
var isValid = function (s) {
  const map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);
  const stack = [];
  for (const v of s) {
    if (!map.has(v)) {
      stack.push(v);
      continue;
    }
    if (map.get(v) !== stack[stack.length - 1]) return false;
    stack.pop();
  }
  return stack.length === 0;
};
