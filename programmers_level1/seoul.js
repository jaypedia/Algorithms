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
