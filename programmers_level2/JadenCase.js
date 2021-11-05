// 2021-11-05
// JadenCase String

// JadenCase : 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열

// My solution
function solution(s) {
  return s
    .split(' ')
    .map(v => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase())
    .join(' ');
}

console.log(solution('3people unFollowed me')); // 3people Unfollowed Me

// Other's solution 1
function solution(s) {
  return s
    .split(' ')
    .map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(' ');
}

// Other's solution 2
function solution(s) {
  var answer = '';
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === ' ') {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}
