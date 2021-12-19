// 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.
// The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index

// fs
const fs = require('fs');

// readline

// JavaScript
function solution(letter) {
  return letter.charCodeAt(0);
}

console.log(solution('A'));
