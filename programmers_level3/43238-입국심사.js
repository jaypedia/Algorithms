// Nov 15, 2022
// https://school.programmers.co.kr/learn/courses/30/lessons/43238

function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 1;
  let right = n * times[times.length - 1];
  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let peopleCount = 0;

    times.forEach(time => {
      peopleCount += Math.floor(mid / time);
      if (peopleCount >= n) {
        answer = Math.min(mid, answer);
      }
    });

    if (peopleCount >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}
