// Aug 13, 2022
// https://school.programmers.co.kr/learn/courses/30/lessons/60058

function solution(p) {
  if (p === '') return ''; // p가 빈 문자열이면 빈 문자열을 반환한다.
  let u, v; // u is 균형잡힌 괄호 문자열, v is 나머지 문자열(빈 문자열 될 수 있음)
  let cnt = 0;

  // 문자열 p를 순회하며 균형잡힌 문자열까지의 인덱스 i를 찾고, 0~i번째까지를 문자열 u, i~끝까지를 문자열 v로 분리한다.
  const pLength = p.length;
  for (let i = 0; i < pLength; i++) {
    p[i] === '(' ? cnt++ : cnt--; // 처음부터 순회하며 (와 )의 개수를 카운팅하고, 두 괄호의 개수가 같아지면 u와 v로 나누기
    if (cnt === 0) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);
      break;
    }
  } // p에서 균형잡힌 문자열까지 문자열 u로 선언하고, 나머지를 v로 선언한다.

  const uLength = u.length;
  for (let i = 0; i < uLength; i++) {
    u[i] === '(' ? cnt++ : cnt--;
    // cnt < 0 이면 올바른 괄호가 아니다. -> 4 과정 수행
    if (cnt < 0) {
      let str = '';
      str += `(${solution(v)})`; // v에 대해 1단계부터 재귀적으로 수행한 결과 문자열 이어 붙임.
      // 4-4) u의 첫 번째와 마지막 문자를 제거한 뒤, 남은 문자열의 괄호 방향은 뒤집어서 뒤에 붙인다.
      // 예를 들어 u = )))((( 라면 앞뒤 제거해서 ))((이 되고 이것들의 괄호 방향을 뒤집어서 (())이 된다.
      // 앞, 뒤는 신경쓰지 않아도 되므로 1부터 uLength-1까지 for문을 돌고, 1번째 인덱스부터 괄호를 뒤집어서 str에 누적시켜준다.
      for (let j = 1; j < uLength - 1; j++) {
        u[j] === '(' ? (str += ')') : (str += '(');
      }
      return str;
    }
  }

  // 문자열 u가 올바른 괄호 문자열이라면 문자열 v에 대해 1단계부터 다시 수행한다. 수행한 결과 문자열을 u에 이어 붙인 후 반환한다.
  return u + solution(v);
}
