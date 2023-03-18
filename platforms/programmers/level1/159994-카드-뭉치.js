// Mar 18, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  let idx1 = 0;
  let idx2 = 0;

  for (const v of goal) {
    if (idx1 < cards1.length && cards1[idx1] === v) {
      idx1++;
      continue;
    }

    if (idx2 < cards2.length && cards2[idx2] === v) {
      idx2++;
      continue;
    }

    return 'No';
  }
  return 'Yes';
}
