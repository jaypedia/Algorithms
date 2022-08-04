// 2021-11-26~27
// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 🤩 방정식처럼 접근
// a + b = target
// a = target - b
const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    // 만약 another가 map 객체 안에 있으면 정답을 리턴해 줌.
    // (in operator : returns true if the specified property is in the specified object or its prototype chain)
    if (another in map) {
      return [map[another], i];
    }
    // another가 없으면 nums의 i번째 요소를 key로, 인덱스를 value로 하여 map 객체에 저장
    map[nums[i]] = i;
  }
};

// My solution (11/27)
// 이중 for문으로 모든 경우의 수 찾기
// 인덱스 0 + 1 / 0 + 2 / 0 + 3 /1 + 2 / 1 + 3 / 2 + 3
// 이런 식으로 요소를 하나씩 돌면서 sum을 구함
// target과 일치하는 sum을 찾으면 그 값을 리턴
var twoSum2 = function (nums, target) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum === target) {
        return [i, j];
      } else {
        sum -= nums[j];
      }
    }
    sum = 0;
  }
};

// 2022.1.12 다시 풀어보기
// 소요시간 10분
// PseudoCode
// 이중 for문 돌리기(인덱스로) => 두 수의 합 => target과 비교 => 인덱스 리턴
// 시간 복잡도 : O(n^2) 완전 탐색 (Brute-Force / Exhaustive search)
const twoSum3 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// 방정식 풀이
// a + b = target, a = target - b
// 배열 안의 모든 요소들을 순회하면서 a = target - b 수행
// map에는 {i번째 요소(a) : 인덱스} 식으로 저장됨
const twoSumEquation = (arr, target) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const a = target - arr[i];
    if (a in map) return [map[a], i];
    map[arr[i]] = i;
  }
};

// O(n) : Hash
const twoSumHash = (nums, target) => {
  const numDict = nums.reduce((obj, num, index) => {
    if (obj[num]) obj[num].push(index);
    else obj[num] = [index];
    return obj;
  }, {});

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === target - num) {
      if (numDict[num].length === 1) continue;
      else return [numDict[num][0], numDict[num][1]];
    }

    if (numDict[target - num]) {
      return [...numDict[num], ...numDict[target - num]];
    }
  }
};

// Feb 10, 2022
const twoSumMap = (arr, target) => {
  const map = new Map();
  for (i = 0; i < arr.length; i++) {
    let key = target - arr[i];
    if (map.has(key)) return [map.get(key), i];
    map.set(arr[i], i);
  }
};

// Aug 4, 2022
var twoSum2 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const n = target - nums[i];
    const nIndex = nums.indexOf(n);
    if (nums.includes(n) && nIndex !== i) return [i, nIndex];
  }
};
