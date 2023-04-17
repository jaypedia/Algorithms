// Jan 24, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/138477

// Solution 1
function solution(k, score) {
  const answer = [];
  const hall = [];

  score.forEach((s, i) => {
    if (i < k) {
      hall.push(s);
      hall.sort((a, b) => b - a);
    } else {
      hall.push(s);
      hall.sort((a, b) => b - a);
      hall.pop();
    }
    answer.push(hall[hall.length - 1]);
  });

  return answer;
}

// Solution 2
function solution(k, score) {
  const stack = [];

  return score.reduce((low, cur) => {
    if (stack.length < k) {
      stack.push(cur);
      stack.sort((a, b) => b - a);
    } else {
      stack.push(cur);
      stack.sort((a, b) => b - a);
      stack.pop();
    }
    low.push(stack[stack.length - 1]);
    return low;
  }, []);
}
