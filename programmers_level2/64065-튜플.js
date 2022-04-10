// April 10, 2022
// https://programmers.co.kr/learn/courses/30/lessons/64065

// My solution
function solution(s) {
  const answer = [];
  const arr = s
    .slice(2, -2)
    .split('},{')
    .map(v => v.split(','))
    .map(v => v.map(Number)); // [ [ 2 ], [ 2, 1 ], [ 2, 1, 3 ], [ 2, 1, 3, 4 ] ]

  arr.sort((a, b) => a.length - b.length);
  answer.push(arr[0][0]);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!answer.includes(arr[i][j])) answer.push(arr[i][j]);
    }
  }

  return answer;
}

solution('{{2},{2,1},{2,1,3},{2,1,3,4}}');
solution('{{4,2,3},{3},{2,3,4,1},{2,3}}');

// Hoi's solution
function solution(s) {
  s = s.replace('{{', '');
  s = s.replace('}}', '');

  const arr = s.split('},{').sort((a, b) => a.length - b.length);
  return arr.reduce(
    (acc, cur) => {
      const num = cur
        .split(',')
        .map(Number)
        .filter(num => !acc[1].has(num))[0];
      acc[0].push(num);
      acc[1].add(num);
      return acc;
    },
    [[], new Set()]
  )[0];
}
