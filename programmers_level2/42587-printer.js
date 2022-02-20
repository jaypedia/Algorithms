// Feb 19 ~ 20, 2022
// https://programmers.co.kr/learn/courses/30/lessons/42587

// My solution (2/20 6:05 PM)
function solution(priorities, location) {
  const docArr = [...Array(priorities.length)].map((_, i) => i + 1);
  const printed = [];

  while (priorities.length !== 0) {
    const curPrio = priorities.shift();
    const curDoc = docArr.shift();

    if (curPrio < Math.max(...priorities)) {
      priorities.push(curPrio);
      docArr.push(curDoc);
    } else {
      printed.push(curDoc);
    }
  }

  return printed.indexOf(location + 1) + 1;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
console.log(solution([2, 4, 8, 2, 9, 3, 3], 2)); // 2
console.log(solution([2, 4, 8, 2, 9, 3, 3], 4)); // 1
