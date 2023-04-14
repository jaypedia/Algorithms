// Apr 14, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/132265

// Out of 20 test cases, only 2 passed and the rest timed out
function solution(topping) {
  let answer = 0;

  topping.forEach((_, index) => {
    const set1 = new Set();
    const set2 = new Set();
    if (index <= topping.length - 1) {
      for (let i = 0; i <= index; i++) {
        set1.add(topping[i]);
      }

      for (let j = index + 1; j < topping.length; j++) {
        set2.add(topping[j]);
      }

      if (set1.size === set2.size) answer++;
    }
  });

  return answer;
}

function solution(topping) {
  const map = topping.reduce((acc, cur) => {
    acc.set(cur, { visited: false, count: ~~acc.get(cur)?.count + 1 });
    return acc;
  }, new Map());

  let answer = 0;
  let [person1, person2] = [0, map.size];

  topping.forEach((v) => {
    const currentTopping = map.get(v);

    if (currentTopping.visited === false) {
      currentTopping.visited = true;
      person1++;
    }

    if (currentTopping.count >= 1) {
      currentTopping.count--;
      if (currentTopping.count === 0) person2--;
    }

    map.set(v, currentTopping);

    if (person1 === person2) answer++;
  });

  return answer;
}
