// Nov 13, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let answer = 0;
  const dolls = [];

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

// Jan 19, 2022
function solution(board, moves) {
  let answer = 0;
  const picked = [];

  for (let i = 0; i < moves.length; i++) {
    const col = moves[i] - 1;
    for (let row = 0; row < board.length; row++) {
      if (board[row][col]) {
        if (picked[picked.length - 1] !== board[row][col]) {
          picked.push(board[row][col]);
        } else {
          picked.pop();
          answer += 2;
        }
        board[row][col] = 0;
        break;
      }
    }
  }

  return answer;
}
