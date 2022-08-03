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

// Aug 3, 2022
// My another solution
function solution(n, arr1, arr2) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    let map = '';
    const cur1 = arr1[i].toString(2).padStart(n, 0);
    const cur2 = arr2[i].toString(2).padStart(n, 0);

    for (let j = 0; j < n; j++) {
      if (cur1[j] === '1' || cur2[j] === '1') {
        map += '#';
      } else {
        map += ' ';
      }
    }
    answer.push(map);
  }
  return answer;
}
