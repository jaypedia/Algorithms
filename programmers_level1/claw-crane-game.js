// 2021-11-13
// 크레인 인형뽑기 게임

// My solution
function solution(board, moves) {
  let answer = 0;
  let dolls = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        if (dolls[dolls.length - 1] === board[j][moves[i] - 1]) {
          answer += 2;
          board[j][moves[i] - 1] = 0;
          dolls.pop();
        } else {
          dolls.push(board[j][moves[i] - 1]);
          board[j][moves[i] - 1] = 0;
        }
        break;
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);

// 2022.1.19 다시풀기 (약 2달 후)
// 소요시간 35분

// return : 바구니에 담는 과정에서 터뜨려진 인형의 개수
// 문제의 핵심 : 이차원 배열을 잘 다룰 수 있는가?

// 인형이 담길 배열이 필요하다는 생각이 듦 - 여기에 push를 해 주는 식으로 - 만약 같은 숫자가 겹치면 그 숫자를 pop
// 주어진 moves 배열을 순회 => 이것을 인덱스로 활용해서 board 배열을 또 순회
// [0][0] [1][0] [2][0]... 이런 식으로 순회. [j][moves[i] - 1] => row는 계속 바뀌고 col은 고정되어 있다.
// 0이 아닌 숫자를 만났을 때 멈추고 그 숫자를 picked에 넣는다.

function solution2(board, moves) {
  let answer = 0;
  const picked = []; // 뽑힌 인형의 번호가 들어감

  for (let i = 0; i < moves.length; i++) {
    const col = moves[i] - 1; // moves 하나 당 column은 그 컬럼으로 고정. 예를 들어 moves[i]가 1이면 컬럼은 1로 고정
    // moves[i] 를 가지고 크레인을 움직이기 시작한다.
    // row를 탐색한다. => 0이면 넘어가고 숫자면 그 숫자를 picked에 push한다. 그 후 해당 숫자는 0으로 바꿔야 한다.
    // picked 배열에 넣기 전 마지막 원소를 확인해본다. 만약 넣을 값과 마지막 값이 일치한다면 넣지 않고 answer를 증가시킨다.
    for (let row = 0; row < board.length; row++) {
      if (board[row][col]) {
        if (picked[picked.length - 1] !== board[row][col]) {
          picked.push(board[row][col]);
        } else {
          picked.pop();
          answer += 2;
        }
        board[row][col] = 0;
        break; // 이걸 한 번 했으면 다음 moves[i]로 넘어가야 한다.
      }
    }
  }

  return answer;
}

console.log(
  solution2(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4] // moves는 인덱스, column으로 활용
  )
);

// 이중 for문으로 순회하는 방식이 아닌 다른 방법이 있을까? (시간 복잡도를 줄일 수 있는)
// 약 2달 전과 비교했을 때 풀이는 동일하지만, 좀 더 단계적으로 접근하고 변수에 적절한 이름을 붙여서 해결하였다.(row, col)
