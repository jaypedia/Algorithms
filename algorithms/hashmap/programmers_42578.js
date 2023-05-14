// Feb 18, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/42578
// Level 2. 위장

function solution(clothes) {
  const map = clothes.reduce((map, cur) => {
    const [clothesName, type] = cur;
    if (map.has(type)) {
      map.set(type, [...map.get(type), clothesName]);
      return map;
    }
    map.set(type, [clothesName]);
    return map;
  }, new Map());

  let answer = 1;
  map.forEach((value) => {
    answer *= value.length + 1;
  });
  return answer - 1;
}

// March 22, 2022
function solution(clothes) {
  let answer = 0;
  const obj = {};

  clothes.forEach((v) => {
    const type = v[1];
    obj[type] = (obj[type] || 0) + 1;
  });

  const typeArr = Object.values(obj);
  const one = typeArr.reduce((acc, cur) => acc + cur, 0);

  if (one === typeArr.length) {
    return 2 ** typeArr.length - 1;
  }

  answer += one;

  const getCombinations = function (arr, selectNumber) {
    const results = [];
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });
    return results;
  };

  for (let i = 2; i <= typeArr.length; i++) {
    const comArr = getCombinations(typeArr, i);
    comArr.forEach((v) => {
      answer += v.reduce((acc, cur) => acc * cur, 1);
    });
  }

  return answer;
}
