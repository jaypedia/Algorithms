// Dec 7, 2022 & Jun 3, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/136798

// Test case 18, 25 Time Limit Exceeded
function solution(number, limit, power) {
  let answer = 0;

  const getNumberOfDivisors = (num) => {
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

function solution(number, limit, power) {
  let answer = 0;

  // https://www.geeksforgeeks.org/count-divisors-n-on13/
  const countDivisors = (num) => {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        if (num / i === i) count++; // If divisors are equal, count only one
        else count = count + 2; // Otherwise count both
      }
    }
    return count;
  };

  for (let i = 1; i <= number; i++) {
    const numberOfDivisors = countDivisors(i);
    if (numberOfDivisors > limit) {
      answer += power;
    } else {
      answer += numberOfDivisors;
    }
  }

  return answer;
}
