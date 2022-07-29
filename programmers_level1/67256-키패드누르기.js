// March 6, 2022
// https://programmers.co.kr/learn/courses/30/lessons/67256

// My attempt
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

// July 24, 2022
function solution(numbers, hand) {
  const coords = [
    [1, 0],
    [0, 3],
    [1, 3],
    [2, 3],
    [0, 2],
    [1, 2],
    [2, 2],
    [0, 1],
    [1, 1],
    [2, 1],
    [0, 0],
    [1, 0],
    [2, 0],
  ];

  let left = 10;
  let right = 12;

  const setLeft = number => {
    left = number;
    return 'L';
  };

  const setRight = number => {
    right = number;
    return 'R';
  };

  return numbers.reduce((result, number) => {
    if ([1, 4, 7].includes(number)) return result + setLeft(number);
    if ([3, 6, 9].includes(number)) return result + setRight(number);
    const diffLeft = distance(coords[number], coords[left]);
    const diffRight = distance(coords[number], coords[right]);
    if (diffLeft < diffRight) return result + setLeft(number);
    if (diffRight < diffLeft) return result + setRight(number);
    if (hand === 'left') return result + setLeft(number);
    return result + setRight(number);
  }, '');
}

// 맨해튼 거리 |x1 - x2| + |y1 - y2|
function distance([x1, y1], [x2, y2]) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}
