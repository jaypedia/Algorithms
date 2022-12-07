// Dec 7, 2022
// https://school.programmers.co.kr/learn/courses/30/lessons/136798

// Test case 18, 25 시간 초과
function solution(number, limit, power) {
  let answer = 0;

  const getNumberOfDivisors = num => {
    if (num <= 1) return 1;
    let count = 2;
    for (let i = 2; i <= Math.floor(num / 2); i++) {
      if (!(num % i)) count++;
    }
    return count;
  };

  for (let i = 1; i <= number; i++) {
    const numberOfDivisors = getNumberOfDivisors(i);
    if (numberOfDivisors > limit) {
      answer += power;
    } else {
      answer += numberOfDivisors;
    }
  }

  return answer;
}
