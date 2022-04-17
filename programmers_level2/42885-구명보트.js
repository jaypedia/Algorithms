// April 16~17, 2022
// https://programmers.co.kr/learn/courses/30/lessons/42885

// My solution
function solution(people, limit) {
  let answer = 0;
  let weight = 0;
  people.sort((a, b) => a - b);

  while (people.length) {
    weight += people.pop();
    if (weight + people[0] <= limit) {
      weight += people.shift();
    }
    answer++;
    weight = 0;
  }

  return answer;
}
