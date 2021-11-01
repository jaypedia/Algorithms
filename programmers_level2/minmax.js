// 2021-10-31~11-1
// 최댓값과 최솟값

// My solution
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

// Another way
function solution(s) {
  const arr = s.split(' ');
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let answer = min + ' ' + max;
  return answer;
}

// Other's solutions
const solution = s => {
  s = s.split(' ');
  return Math.min(...s) + ' ' + Math.max(...s);
};

function solution(s) {
  return (
    s.split(' ').sort((a, b) => a - b)[0] +
    ' ' +
    s.split(' ').sort((a, b) => a - b)[s.split(' ').length - 1]
  );
}

function solution(s) {
  var arr = s.split(' ');
  return arr
    .reduce((p, c) => [Math.min(p[0], c), Math.max(p[1], c)], [arr[0], arr[1]])
    .join(' ');
}

function solution(s) {
  let min = Math.min.apply(null, s.split(' ').map(Number));
  let max = Math.max.apply(null, s.split(' ').map(Number));
  var answer = min + ' ' + max;
  return answer;
}
