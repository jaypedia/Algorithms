// Oct 12, 2022
// https://leetcode.com/problems/goal-parser-interpretation/description/

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let answer = '';
  for (let i = 0; i < command.length; ) {
    if (command[i] === 'G') {
      answer += 'G';
      i++;
      continue;
    }
    if (command[i + 1] === ')') {
      answer += 'o';
      i += 2;
      continue;
    }
    answer += 'al';
    i += 4;
  }
  return answer;
};

// June 25, 2023
var interpret = function (command) {
  return command.split('()').join('o').split('(al)').join('al');
};
