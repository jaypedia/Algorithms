// March 17, 2022
// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */

// https://leetcode.com/problems/pascals-triangle/discuss/153969/Concise-JavaScript-solution
function calculatePascal(numRows) {
  const pascal = [[1]];

  for (let i = 1; i < numRows; i++) {
    const prev = pascal[pascal.length - 1];
    const shiftLeft = [...prev, 0];
    const shiftRight = [0, ...prev];
    const cur = shiftLeft.map((v, i) => v + shiftRight[i]);
    pascal.push(cur);
  }
  return pascal;
}

console.log(calculatePascal(5));
