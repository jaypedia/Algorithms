// 2021-10-31~11-1
// 최댓값과 최솟값

function solution(s) {
  const arr = s.split(' ');
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(+arr[i]);
  }
  const min = Math.min(...result);
  const max = Math.max(...result);

  let answer = '';
  answer += min.toString() + ' ';
  answer += max.toString();
  return answer;
}

console.log(solution('-1 -2 -3 -4')); // -4 -1
