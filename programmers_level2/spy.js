// 헴디와 페어프로그래밍
function solution(clothes) {
  var answer = 0;
  const clothesObj = {};
  for (el of clothes) {
    clothesObj[el[1]] = ++clothesObj[el[1]] || 1;
  }

  const clothesArr = Object.values(clothesObj);

  let count = 0;

  for (let i = 2; i < clothesArr.length - 1; i++) {
    count += (factorial(n) / factorial(n - i)) * factorial(i);
  }

  count += clothesArr.length + 1;

  return answer;
}

function factorial(curNum) {
  if (curNum === 1) return 1;
  let curValue = curNum * factorial(curNum - 1);
  return curValue;
}

solution([
  ['yellowhat', 'headgear'],
  ['bluesunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
]);
