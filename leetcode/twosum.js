// 2021-11-26~27
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

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

    // console.log(map);
  }
  // return null;
};

const nums = [3, 2, 3];
const target = 6;
console.log(twoSum(nums, target)); // [0,2]

// ✅ My solution (11/27)
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

const nums = [3, 2, 3];
const target = 6;
console.log(twoSum2(nums, target)); // [0,2]
