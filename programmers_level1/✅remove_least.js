// 2021-10-07
// 제일 작은 수 제거하기

// My Solution
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length ? arr : [-1];
}

// Other's solution 1
// Reduce & filter
function solution(arr) {
  if (arr.length <= 1) return [-1];
  let min;
  arr.reduce((acc, cur) => (min = cur > acc ? acc : cur));
  return arr.filter(e => e !== min);
}

// Ohter's solution 2
// apply & findIndex
function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }
  const minValue = Math.min.apply(null, arr);
  const index = arr.findIndex(value => value === minValue);
  arr.splice(index, 1);
  return arr;
}
