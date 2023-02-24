// Dec 16, 2022
// https://leetcode.com/problems/count-asterisks/

var countAsterisks = function (s) {
  let answer = 0;

  const getAsteriskNumber = string => {
    let number = 0;
    for (const s of string) {
      if (s === '*') number++;
    }
    return number;
  };

  s.split('|').forEach((v, i) => {
    if (!(i % 2)) {
      const asteriskNumber = getAsteriskNumber(v);
      answer += asteriskNumber;
    }
  });

  return answer;
};

// https://leetcode.com/problems/count-asterisks/solutions/2208661/javascript-traffic-light/
var countAsterisks = function (s) {
  let green = true,
    count = 0;
  for (let i = 0; i < s.length; i++) {
    if (green && s[i] == '*') {
      count++;
    }
    if (s[i] == '|') {
      green = !green;
    }
  }
  return count;
};

// Use filter & Regex
const countAsterisks = s => {
  return s
    .split('|')
    .filter((_, i) => i % 2 === 0)
    .join('')
    .replace(/[a-z]/g, '').length;
};
