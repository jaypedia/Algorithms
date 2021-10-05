// 2021-10-04~05
// 핸드폰 번호 가리기

// My solution
function solution(phone_number) {
  const arr = phone_number.split('');
  const sliced = arr.slice(-4);
  const rest = arr.slice(0, -4);
  const answer = rest
    .map(() => '*')
    .concat(sliced)
    .join('');
  return answer;
}

console.log(solution('01012345678')); // *******5678
