// 2021-10-22
// 숫자 문자열과 영단어

// My solution
function solution(s) {
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    // console.log('arr : ' + arr);
    answer = arr.join(i);
    // console.log('answer : ' + answer);
  }

  return Number(answer);
}

console.log(solution('23four5six7'));

// Other's solution 1
function solution(s) {
  s = s
    .replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9);
  return parseInt(s);
}

// Other's solution 2
function solution(s) {
  let charSet = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let [key, value] of Object.entries(charSet)) {
    let re = new RegExp(`${key}`, 'g');
    s = s.replace(re, value);
  }
  return parseInt(s);
}

// Other's solution 3
const digit2word = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
function solution(s) {
  return Number(
    digit2word.reduce(
      (ans, word, digit) => ans.replace(new RegExp(word, 'g'), digit),
      s
    )
  );
}
