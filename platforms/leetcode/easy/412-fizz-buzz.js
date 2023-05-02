// Feb 21, 2022
// https://leetcode.com/problems/fizz-buzz/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const answer = [...Array(n)].map((_, i) => i + 1);
  let i = 0;
  while (i < n) {
    if (answer[i] % 3 === 0 && answer[i] % 5 === 0) {
      answer[i] = 'FizzBuzz';
    } else if (answer[i] % 3 === 0) {
      answer[i] = 'Fizz';
    } else if (answer[i] % 5 === 0) {
      answer[i] = 'Buzz';
    } else {
      answer[i] = (i + 1).toString();
    }
    i++;
  }
  return answer;
};

// July 18, 2022
// Naive approach
var fizzBuzz = function (n) {
  const answer = [];
  let i = 1;
  while (i <= n) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push('FizzBuzz');
    } else if (i % 3 === 0) {
      answer.push('Fizz');
    } else if (i % 5 === 0) {
      answer.push('Buzz');
    } else {
      answer.push(i + '');
    }
    i++;
  }
  return answer;
};

// https://leetcode.com/problems/fizz-buzz/discuss/89949/1-line-JavaScript-O(n)-solution/556523
var fizzBuzz = n => new Array(n).fill(0).map((_, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);

// String Concatenation
var fizzBuzz = function (n) {
  const answer = [];
  let i = 1;
  while (i <= n) {
    let current = '';
    if (i % 3 === 0) {
      current += 'Fizz';
    }
    if (i % 5 === 0) {
      current += 'Buzz';
    }
    if (!current) {
      current += i + '';
    }
    answer.push(current);
    i++;
  }
  return answer;
};

// Hash Table
// This way you can add/delete mappings to/from to the hash table
// and not worry about changing the code.
var fizzBuzz = function (n) {
  const map = new Map([
    [3, 'Fizz'],
    [5, 'Buzz'],
  ]);
  const answer = [];

  for (let i = 1; i <= n; i++) {
    let current = '';
    map.forEach((value, key) => {
      if (i % key === 0) {
        current += value;
      }
    });

    if (!current) {
      current += i + '';
    }

    answer.push(current);
  }
  return answer;
};
