// Jan 28, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  let answer = 0;
  const temp = [];

  ingredient.forEach((v) => {
    temp.push(v);
    const len = temp.length;
    if (
      len >= 4 &&
      temp[len - 4] === 1 &&
      temp[len - 3] === 2 &&
      temp[len - 2] === 3 &&
      temp[len - 1] === 1
    ) {
      answer++;
      temp.splice(-4);
    }
  });

  return answer;
}
