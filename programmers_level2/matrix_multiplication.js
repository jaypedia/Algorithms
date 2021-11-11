// 2021-11-07~08
// 행렬의 곱셈

function solution(arr1, arr2) {
  let answer = [];
  arr1.forEach(v => answer.push(Array(arr2[0].length).fill(0)));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      for (let k = 0; k < arr2.length; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return answer;
}

// 행렬의 곱셈은 앞의 행렬의 행과 뒤의 행렬의 열끼리 곱한 후 더한 것
// 3중 for문
function solution(A, B) {
  let answer = [];

  for (let i = 0; i < A.length; i++) {
    // 행렬 A의 행에 접근한다.
    const row = A[i]; // 중첩된 배열이니까 이런 식으로
    answer.push([]); // 빈 배열을 푸쉬

    // 행렬 B의 열에 접근해서 곱하기
    for (let j = 0; j < B[0].length; j++) {
      let sum = 0;

      // B는 열을 고정해 놓고 행을 이동
      for (let k = 0; k < B.length; k++) {
        sum += row[k] * B[k][j];
      }
      answer[i].push(sum);
    }
  }
  return answer;
}

function solution(arr1, arr2) {
  var answer = [];
  for (let j = 0; j < arr2[0].length; j++) {
    for (let i = 0; i < arr1.length; i++) {
      let total = 0;
      arr1[i].forEach((e, idx) => {
        total += e * arr2[idx][j];
      });
      if (answer[i]) answer[i].push(total);
      else answer.push([total]);
    }
  }
  return answer;
}

function solution(arr1, arr2) {
  return arr1.map(row =>
    arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0))
  );
}

function solution(arr1, arr2) {
  return Array(arr1.length)
    .fill()
    .map((r, i) =>
      Array(arr2[0].length)
        .fill()
        .map((v, j) => arr1[i].reduce((a, c, k) => a + c * arr2[k][j], 0))
    );
}
