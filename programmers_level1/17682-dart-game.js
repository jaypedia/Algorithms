// March 10, 2022
// https://programmers.co.kr/learn/courses/30/lessons/17682

// My solution
const solution = dartResult => calculateScore(getResultArr(dartResult));

const getResultArr = dartResult => {
  const resultArr = [];
  while (resultArr.length < 3) {
    const score = parseInt(dartResult);
    dartResult = dartResult.slice(score.toString().length);
    const bonus = parseBonus(dartResult[0]);
    dartResult = dartResult.slice(1);
    const option = isNaN(Number(dartResult[0])) ? dartResult[0] : undefined;
    if (option) dartResult = dartResult.slice(1);
    resultArr.push([score, bonus, option]);
  }
  return resultArr;
};

const calculateScore = resultArr => {
  const totalArr = [];
  resultArr.forEach((v, i) => {
    const [score, bonus, option] = v;
    if (option === '#') {
      totalArr.push(score ** bonus * -1);
    } else if (option === '*') {
      if (i > 0) totalArr[i - 1] = totalArr[i - 1] * 2;
      totalArr.push(score ** bonus * 2);
    } else {
      totalArr.push(score ** bonus);
    }
  });
  return totalArr.reduce((a, b) => a + b);
};

const parseBonus = letter => {
  switch (letter) {
    case 'S':
      return 1;
    case 'D':
      return 2;
    case 'T':
      return 3;
  }
};

// Aug 6, 2022
function solution(dartResult) {
  const dartScore = { '#': 2, '*': -1, S: 1, D: 2, T: 3 };
  let i = 0;
  let option = null;
  let result = 0;
  while (i < dartResult.length) {
    let num = Number(dartResult[i]);
    if (!isNaN(Number(dartResult[i + 1]))) {
      num = 10;
      i++;
    }
    const bonus = dartResult[i + 1];
    option = dartResult[i + 2] === '#' || dartResult[i + 2] === '*' ? dartResult[i + 2] : null;
    console.log(num, dartScore[bonus], option);
    result += num ** dartScore[bonus] * (dartScore[option] || 1);
    if (option) i += 3;
    else i += 2;
  }
  return result;
}

console.log(solution('1S2D*3T'));
console.log(solution('1D2S3T*'));
console.log(solution('1D2S0T'));
console.log(solution('1D2S#10S'));
