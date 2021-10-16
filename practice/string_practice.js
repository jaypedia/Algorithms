// 2021-10-17

// [1] Uppercase to Lowercase, Lowercase to Uppercase
function solution(s) {
  let answer = '';
  for (element of s) {
    element === element.toUpperCase()
      ? (answer += element.toLowerCase())
      : (answer += element.toUpperCase());
  }
  return answer;
}

solution('JavaScript'); // jAVAsCRIPT

// [2] Find the longest string in the array
function solution(arr) {
  let answer = '';
  let max = Number.MIN_SAFE_INTEGER;
  for (element of arr) {
    if (element.length > max) {
      answer = element;
      max = element.length;
    }
  }
  return answer;
}

solution(['i', 'like', 'javascript', 'so', 'much', ' ']); // javascript
