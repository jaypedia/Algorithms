// Aug 29, 2023
// https://leetcode.com/problems/can-place-flowers/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    const cur = flowerbed[i];
    if (cur === 1) continue;

    const left = i === 0 ? null : flowerbed[i - 1];
    const right = i === flowerbed.length - 1 ? null : flowerbed[i + 1];

    if (
      (!left && right === 0) ||
      (left === 0 && right === 0) ||
      (!right && left === 0) ||
      (!left && !right)
    ) {
      n--;
      flowerbed[i] = 1;
    }
    if (n <= 0) break;
  }
  return n <= 0;
};
