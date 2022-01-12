// 2021-11-26~27

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  const standard = strs[0];
  if (strs.length === 1) return standard;

  const arr = [];
  let prefix = '';

  for (let j = 1; j < strs.length; j++) {
    for (let i = 0; i < standard.length; i++) {
      if (standard[i] === strs[j][i]) prefix += standard[i];

      if (standard[i] !== strs[j][i]) break;
    }

    arr.push(prefix);
    prefix = '';
  }

  arr.sort();

  return arr[0];
};

// const strs = ['flower', 'flow', 'flight'];
const strs = ['cir', 'car'];
// console.log(longestCommonPrefix(strs)); // 'c'

// 2022.1.22 다시풀기
// 소요시간 : 45분

// 2중 for
// 외부 for : 배열의 요소 순환
// 내부 for : 요소의 string 순환
// 0번째 인덱스부터 비교하여 일치하지 않는 문자일 시 해당 인덱스만큼 slice

// 배열 중 가장 긴 문자열을 answer로 지정해 두고, answer와 각각의 배열 요소들을 비교
// 'flower'와 arr[1] 비교 -> 'flower'에서 겹치는 부분 빼고 자르기

const lcp = strs => {
  if (strs.length === 1) return strs[0];
  const arr = strs.sort((a, b) => a.length - b.length);
  let answer = arr.pop(); // longest
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (answer[j] !== arr[i][j]) {
        answer = answer.slice(0, j);
      }
    }
  }
  return answer;
};

console.log(lcp(['', 'f']));

// Tried Debugging
