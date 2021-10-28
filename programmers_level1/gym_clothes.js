// 2021-10-28
// 체육복

function solution(n, lost, reserve) {
  let answer = 0;

  let hasClothes = new Array(n).fill(1);

  for (let i = 0; i < lost.length; i++) {
    hasClothes[lost[i] - 1]--;
  }

  for (let i = 0; i < reserve.length; i++) {
    hasClothes[reserve[i] - 1]++;
  }

  for (let i = 0; i < hasClothes.length; i++) {
    if (hasClothes[i] === 0) {
      if (hasClothes[i - 1] === 2) {
        hasClothes[i]++;
        hasClothes[i - 1]--;
      } else if (hasClothes[i + 1] === 2) {
        hasClothes[i]++;
        hasClothes[i + 1]--;
      }
    }

    if (hasClothes[i] >= 1) answer++;
  }
  return answer;
}
