// Jan 2, 2023
// https://leetcode.com/problems/maximum-units-on-a-truck/

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let answer = 0;
  boxTypes.sort((a, b) => b[1] - a[1]);
  let count = 0;
  for (let i = 0; i < boxTypes.length; i++) {
    const [box, unit] = boxTypes[i];
    for (let j = 0; j < box; j++) {
      if (count < truckSize) {
        answer += unit;
        count++;
      } else break;
    }
  }

  return answer;
};
