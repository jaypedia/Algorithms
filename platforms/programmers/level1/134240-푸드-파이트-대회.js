// Jan 6, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/134240/

function solution(food) {
  let answer = '';

  for (let i = 1; i < food.length; i++) {
    const count = Math.floor(food[i] / 2);
    answer += i.toString().repeat(count);
  }

  const reversed = answer.split('').reverse().join('');
  return answer + '0' + reversed;
}
