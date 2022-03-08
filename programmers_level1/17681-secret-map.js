// March 8, 2022
// 비밀지도
// https://programmers.co.kr/learn/courses/30/lessons/17681

// My solution
function solution(n, arr1, arr2) {
  const answer = [];
  let row = '';
  const array1 = getBinary(arr1);
  const array2 = getBinary(arr2);

  for (let i = 0; i < n; i++) {
    row = '';
    for (let j = 0; j < n; j++) {
      if (array1[i][j] === '0' && array2[i][j] === '0') {
        row += ' ';
      } else if (array1[i][j] === '1' || array2[i][j] === '1') {
        row += '#';
      }
    }
    answer.push(row);
  }
  return answer;
}

const getBinary = arr => {
  const array = [];
  arr.map((num, i) => {
    array[i] = num.toString(2).padStart(arr.length, '0');
  });
  return array;
};

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
