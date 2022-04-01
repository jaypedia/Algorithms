// March 6, 2022
// https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  let answer = '';
  let leftThumb = -1;
  let rightThumb = -1;

  numbers.forEach(num => {
    if (num % 3 === 1) {
      answer += 'L';
      leftThumb = num;
    } else if (num !== 0 && num % 3 === 0) {
      answer += 'R';
      rightThumb = num;
    } else {
      const leftDistance = checkDistance(leftThumb, num);
      const rightDistance = checkDistance(rightThumb, num);

      // console.log(leftDistance, rightDistance);
      if (leftDistance < rightDistance) {
        answer += 'L';
        leftThumb = num;
      } else if (leftDistance > rightDistance) {
        answer += 'R';
        rightThumb = num;
      } else {
        if (hand === 'left') {
          answer += 'L';
          leftThumb = num;
        } else {
          answer += 'R';
          rightThumb = num;
        }
      }
    }
  });

  return answer;
}

function checkDistance(thumb, num) {
  const distanceTable = [
    [1, 2, 3, 4],
    [2, 1, 2, 3],
    [3, 2, 1, 2],
    [4, 3, 2, 1],
  ];

  let row = 0;
  let col = 3;

  // row 설정
  if (thumb >= 4 && thumb <= 6) {
    row = 1;
  } else if (thumb >= 7) {
    row = 2;
  } else if (thumb < 0) {
    row = 3;
  }

  // col 설정 - num으로 결정됨
  if (num) {
    col = Math.floor(num / 3);
  }
  console.log(row, col);
  return distanceTable[row][col];
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
