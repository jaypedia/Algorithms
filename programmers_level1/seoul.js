// 2021-10-13
// Find Kim in Seoul

// My Solution
function solution(seoul) {
  let answer = seoul.indexOf('Kim');
  return `김서방은 ${answer}에 있다`;
}

// My Another solution
function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') {
      return `김서방은 ${i}에 있다`;
    }
  }
}

// Other's solution 1
const solution = arr => `김서방은 ${arr.findIndex(s => s === 'Kim')}에 있다`;

// Other's solution 2
function findKim(seoul) {
  var idx = 0;

  var findSize = seoul.length;
  for (var i = 1; findSize > i; i++) {
    if (seoul[i] == 'Kim') {
      idx = i;
    }
  }
  return '김서방은 ' + idx + '에 있다';
}

// Other's solution 3
function findKim(seoul) {
  var idx = 0;
  for (var i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') {
      idx += i;
      break;
    }
  }
  return '김서방은 ' + idx + '에 있다';
}

// Other's solution 4
function findKim(seoul) {
  var idx = 0;
  for (var item of seoul) {
    if (item == 'Kim') {
      return '김서방은 ' + idx + '에 있다';
    }
    idx++;
  }
}

// Other's solution 5
function findKim(seoul) {
  var idx = 0;
  seoul.forEach((name, index) => {
    if (name === 'Kim') idx = index;
  });
  return '김서방은 ' + idx + '에 있다';
}
