// Sep 11, 2022
// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/

// First trial: Time Limit Exceeded
var minSteps = function (s, t) {
  let answer = 0;
  const arr = s.split('');
  for (const letter of t) {
    if (arr.includes(letter)) {
      arr.splice(arr.indexOf(letter), 1);
    } else {
      answer += 1;
    }
  }
  return answer;
};

// Second trial: PASS
var minSteps = function (s, t) {
  let answer = 0;
  const map = new Map();
  for (const l of s) {
    if (map.has(l)) {
      map.set(l, map.get(l) + 1);
    } else {
      map.set(l, 1);
    }
  }

  for (const letter of t) {
    if (map.get(letter) > 0) {
      map.set(letter, map.get(letter) - 1);
    } else {
      answer += 1;
    }
  }
  return answer;
};

// Refactoring
var minSteps = function (s, t) {
  let answer = 0;
  const map = new Map();
  for (const l of s) {
    map.set(l, ~~map.get(l) + 1);
  }

  for (const letter of t) {
    if (map.get(letter) > 0) {
      map.set(letter, map.get(letter) - 1);
    } else {
      answer += 1;
    }
  }
  return answer;
};

// July 15, 2023
var minSteps = function (s, t) {
  const map = s.split('').reduce((acc, cur) => {
    acc.set(cur, ~~acc.get(cur) + 1);
    return acc;
  }, new Map());

  let count = 0;

  for (const letter of t) {
    if (map.has(letter) && map.get(letter) > 0) {
      map.set(letter, map.get(letter) - 1);
    } else {
      count++;
    }
  }

  return count;
};
