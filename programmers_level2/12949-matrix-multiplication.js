// Feb 15, 2022
// 행렬의 곱셈
// https://programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const row = [];

    for (let j = 0; j < arr2[0].length; j++) {
      let el = 0;

      for (let k = 0; k < arr2.length; k++) {
        el += arr1[i][k] * arr2[k][j];
      }

      row.push(el);
    }

    answer.push(row);
  }

  return answer;
}

console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
);

console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4],
      [2, 4],
      [3, 1],
    ]
  )
);

// Matrix multiplication : 두 개의 행렬에서 한 개의 행렬을 만들어내는 이항연산
// https://ko.wikipedia.org/wiki/%ED%96%89%EB%A0%AC_%EA%B3%B1%EC%85%88

// Other's solution
function solution2(arr1, arr2) {
  return arr1.map((_, i) =>
    arr2[0].map((_, j) =>
      arr2.map((v, k) => arr1[i][k] * v[j]).reduce((acc, cur) => acc + cur, 0)
    )
  );
}

console.log(
  solution2(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4],
      [2, 4],
      [3, 1],
    ]
  )
);
