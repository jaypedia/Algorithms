// Dec 26, 2022
// https://leetcode.com/problems/determine-color-of-a-chessboard-square/

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const number = Number(coordinates[1]);
  const letterNumber = coordinates[0].charCodeAt(0);
  const sum = number + letterNumber;

  if (sum % 2) return true;
  return false;
};

// https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/1155744/javascript-o-1-solution-1-line-w-explanation/
var squareIsWhite = (coordinates) => {
  return coordinates[0].charCodeAt(0) % 2 !== parseInt(coordinates[1]) % 2;
};
