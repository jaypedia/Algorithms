// March 19, 2022
// https://programmers.co.kr/learn/courses/30/lessons/42586
// Level 2. 기능개발

function solution(progresses, speeds) {
  const getRemainingDays = (progresses, speeds) => {
    const remainingDays = [];
    let n = 0;
    progresses.forEach((v, i) => {
      while (v < 100) {
        v += speeds[i];
        n++;
      }
      remainingDays.push(n);
      n = 0;
    });
    return remainingDays;
  };

  const arr = getRemainingDays(progresses, speeds);
  let deployNum = 1;
  const answer = [];

  while (arr.length) {
    const cur = arr.shift();
    while (true) {
      if (arr[0] <= cur) {
        arr.shift();
        deployNum++;
      } else break;
    }
    answer.push(deployNum);
    deployNum = 1;
  }
  return answer;
}
