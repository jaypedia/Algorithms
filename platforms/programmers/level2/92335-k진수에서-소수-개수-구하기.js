// Feb 2, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/92335

function solution(n, k) {
  const converted = n.toString(k).split('0');

  const isPrime = (number) => {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (!(number % i)) return false;
    }
    return true;
  };

  return converted.filter((c) => isPrime(c)).length;
}
