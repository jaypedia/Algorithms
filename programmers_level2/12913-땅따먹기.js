// April 9~10, 2022
// https://programmers.co.kr/learn/courses/30/lessons/12913

// Reference: https://ssungkang.tistory.com/entry/%EB%95%85%EB%94%B0%EB%A8%B9%EA%B8%B0%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4level2
function solution(land) {
  for (let i = 0; i < land.length - 1; i++) {
    land[i + 1][0] += Math.max(land[i][1], land[i][2], land[i][3]);
    land[i + 1][1] += Math.max(land[i][0], land[i][2], land[i][3]);
    land[i + 1][2] += Math.max(land[i][0], land[i][1], land[i][3]);
    land[i + 1][3] += Math.max(land[i][0], land[i][1], land[i][2]);
  }
  return Math.max(...land[land.length - 1]);
}

solution([
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
]);

// Other's solutions
function solution(land) {
  return Math.max(
    ...land.reduce(
      (a, c) => {
        return [
          c[0] + Math.max(a[1], a[2], a[3]),
          c[1] + Math.max(a[0], a[2], a[3]),
          c[2] + Math.max(a[0], a[1], a[3]),
          c[3] + Math.max(a[0], a[1], a[2]),
        ];
      },
      [0, 0, 0, 0]
    )
  );
}
