// Apr 22, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/172927

function solution(picks, minerals) {
  let answer = 0;

  const picksLength = picks.reduce((a, b) => a + b, 0) * 5;
  const maxMinerals = Math.min(picksLength, minerals.length);

  const stack = [];

  for (let i = 0; i < maxMinerals; i += 5) {
    const obj = { sum: 0, dia: 0, iron: 0, stone: 0 };
    for (let j = i; j < Math.min(i + 5, maxMinerals); j++) {
      if (minerals[j] === 'diamond') {
        obj.dia += 1;
        obj.iron += 5;
        obj.stone += 25;
      }

      if (minerals[j] === 'iron') {
        obj.dia += 1;
        obj.iron += 1;
        obj.stone += 5;
      }

      if (minerals[j] === 'stone') {
        obj.dia += 1;
        obj.iron += 1;
        obj.stone += 1;
      }
    }
    obj.sum += obj.dia + obj.iron + obj.stone;
    stack.push(obj);
  }

  stack.sort((a, b) => a.sum - b.sum);

  const pickMap = { dia: picks[0], iron: picks[1], stone: picks[2] };

  while (stack.length) {
    const { dia, iron, stone } = stack.pop();
    if (pickMap.dia) {
      answer += dia;
      pickMap.dia -= 1;
      continue;
    }
    if (pickMap.iron) {
      answer += iron;
      pickMap.iron -= 1;
      continue;
    }
    if (pickMap.stone) {
      answer += stone;
      pickMap.stone -= 1;
    }
  }

  return answer;
}
