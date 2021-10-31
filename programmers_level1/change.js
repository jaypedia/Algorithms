// 2021-10-31
// 대소문자 바꿔 출력하기

// My solution
function solution(s) {
  let string = s.split('');
  for (let i = 0; i < string.length; i++) {
    string[i] === string[i].toUpperCase()
      ? (string[i] = string[i].toLowerCase())
      : (string[i] = string[i].toUpperCase());
  }
  return string.join('');
}

console.log(solution('AAABBBcccddd'));

// Other solution
let a = prompt('문자열을 입력하세요.');
let b = [];
let s = '';

for (let i = 0; i < a.length; i++) {
  if (a[i] === a[i].toLowerCase()) {
    b.push(a[i].toUpperCase());
  } else {
    b.push(a[i].toLowerCase());
  }
}

for (let j = 0; j < b.length; j++) {
  s += b[j];
}

console.log(s);
