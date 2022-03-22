// March 22, 2022
// https://programmers.co.kr/learn/courses/30/lessons/42578

// My solution
function solution(clothes) {
  let answer = 0;
  const obj = {};
  clothes.forEach(v => {
    const type = v[1];
    obj[type] = (obj[type] || 0) + 1;
  });
  const typeArr = Object.values(obj);
  const one = typeArr.reduce((acc, cur) => acc + cur, 0);
  if (one === typeArr.length) {
    return 2 ** typeArr.length - 1;
  }
  answer += one;
  for (let i = 2; i <= typeArr.length; i++) {
    const comArr = getCombinations(typeArr, i);
    comArr.forEach(v => {
      answer += v.reduce((acc, cur) => acc * cur, 1);
    });
  }
  return answer;
}

const getCombinations = function (arr, selectNumber) {
  const results = [];
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map(el => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
};

console.log(
  solution([
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
);

console.log(
  solution([
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_1', 'headgear'],
    ['green_2', 'underwear'],
    ['green_3', 'socks'],
    ['green_4', 'socks'],
    ['green_5', 'socks'],
  ])
);
