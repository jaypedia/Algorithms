// Jan 28, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/150369

function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let i = n - 1;
  let j = n - 1;

  while (i >= 0 && deliveries[i] === 0) i -= 1;
  while (j >= 0 && pickups[j] === 0) j -= 1;

  while (i >= 0 || j >= 0) {
    answer += (Math.max(i, j) + 1) * 2;

    let cur = cap;

    while (i >= 0 && cur > 0) {
      if (deliveries[i] > cur) {
        deliveries[i] -= cur;
        cur = 0;
      } else {
        cur -= deliveries[i];
        deliveries[i] = 0;
        while (i >= 0 && deliveries[i] === 0) i -= 1;
      }
    }

    cur = cap;

    while (j >= 0 && cur > 0) {
      if (pickups[j] > cur) {
        pickups[j] -= cur;
        cur = 0;
      } else {
        cur -= pickups[j];
        pickups[j] = 0;
        while (j >= 0 && pickups[j] === 0) j -= 1;
      }
    }
  }
  return answer;
}
