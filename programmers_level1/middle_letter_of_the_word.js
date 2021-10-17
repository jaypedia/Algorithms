// 2021-10-17
// 가운데 글자 가져오기
// Write a solution that is a function that returns the middle letter of the word s.
// If the length of the word is even, just return the middle two characters.

// My solution 1
function solution(s) {
  return s.length % 2
    ? s[Math.floor(s.length / 2)]
    : s[s.length / 2 - 1] + s[s.length / 2];
}

// My solution 2
function solution(s) {
  return s.length % 2
    ? s.substr(Math.floor(s.length / 2, 1))
    : s.substr(s.length / 2 - 1, 2);
}

// My solution 3
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 ? 1 : 2);
}
