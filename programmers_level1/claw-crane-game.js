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
