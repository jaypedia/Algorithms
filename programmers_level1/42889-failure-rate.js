// Feb 25, 2022
// 실패율
// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  var rateArr = [];
  let numerator = 0; // 분자
  let denominator = 0; // 분모
  let acc = 0; // 누적 개수
  let i = 1;
  while (i <= N) {
    denominator = stages.length - acc;
    numerator = stages.filter(stage => stage === i).length;
    acc += numerator;
    const failureRate = numerator ? numerator / denominator : 0;
    rateArr.push(failureRate);
    i++;
  }

  const answer = [];

  i = 0;
  while (i < rateArr.length) {
    const rank = rateArr.indexOf(Math.max(...rateArr));
    answer.push(rank + 1);
    rateArr[rank] = -1;
    i++;
  }

  return answer;
}

solution(4, [4, 4, 4, 4, 4]);
solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
