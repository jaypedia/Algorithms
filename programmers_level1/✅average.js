// 2021-10-05
// Get the average

// My solution 1
function solution(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(solution([1, 2, 3, 4])); // 2.5

// My solution 2 (with reduce)
function solution2(arr) {
  return arr.reduce((sum, current) => sum + current, 0) / arr.length;
}

console.log(solution2([1, 2, 3, 4]));
