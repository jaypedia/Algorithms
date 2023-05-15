// Feb 26, 2022
// https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  // 1,2단계
  let newId = new_id.toLowerCase().replace(/[^\w\.\-\_]/g, '');
  // 3단계: 마침표 2번 이상 연속된 것 마침표 1개로 치환
  const arr = newId.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '.' && arr[i + 1] === '.') {
      arr.splice(i, 1);
      i--;
    }
  }
  newId = arr.join('');
  // 4단계 : 처음, 끝에 있는 마침표 제거
  if (newId[0] === '.') newId = newId.slice(1);
  if (newId[newId.length - 1] === '.') newId = newId.substr(0, newId.length - 1);
  // 5단계
  if (newId === '') newId = 'a';
  // 6단계
  if (newId.length >= 16) newId = newId.slice(0, 15);
  if (newId[14] === '.') newId = newId.substr(0, newId.length - 1);
  // 7단계
  if (newId.length <= 2) {
    while (newId.length < 3) {
      newId += newId[newId.length - 1];
    }
  }

  return newId;
}

// Use Regular Expression
function solution(newId) {
  const answer = newId
    .toLowerCase()
    .replace(/[^\w._-]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

// Use padEnd() method
function solution(newId) {
  const answer = newId
    .toLowerCase()
    .replace(/[^\w._-]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .padEnd(1, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');

  return answer.padEnd(3, answer[answer.length - 1]);
}

// Use match() method
function solution(newId) {
  return newId
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .match(/^.{0,14}[^.]/)[0]
    .replace(/^(.)$/, '$1$1$1')
    .replace(/^(.)(.)$/, '$1$2$2');
}
