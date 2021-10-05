// 2021-10-04~5
// 행렬의 덧셈

// My Solution
function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
  }
  return answer;
}

// Other's solution 1
function sumMatrix(A, B) {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}

// Other's solution 2
function solution2(arr1, arr2) {
  var answer = [[]];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let j = 0; j < arr1[0].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}
