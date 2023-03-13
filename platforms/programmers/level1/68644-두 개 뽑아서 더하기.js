// Nov 12, 2021
// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (!answer.includes(numbers[i] + numbers[j])) {
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

// Mar 14, 2023
function solution(numbers) {
  const set = new Set();
  numbers.forEach((num, i) => {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = num + numbers[j];
      if (!set.has(sum)) {
        set.add(sum);
      }
    }
  });
  return [...set].sort((a, b) => a - b);
}
