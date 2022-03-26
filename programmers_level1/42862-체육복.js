// March 26, 2022
// https://programmers.co.kr/learn/courses/30/lessons/42862
// Greedy

// My solution
function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  let answer = n - lost.length;

  lost.forEach((v, i) => {
    const idx = reserve.indexOf(v);
    if (idx >= 0) {
      answer++;
      reserve.splice(idx, 1);
      lost[i] = false;
    }
  });

  if (!reserve.length) return answer;

  lost.forEach(v => {
    if (v) {
      if (reserve.indexOf(v - 1) >= 0) {
        answer++;
        reserve.splice(reserve.indexOf(v - 1), 1);
      } else if (reserve.indexOf(v + 1) >= 0) {
        answer++;
        reserve.splice(reserve.indexOf(v + 1), 1);
      }
    }
  });
  return answer;
}

// My solution - Oct 28, 2021
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
