// Oct 19, 2022
// https://leetcode.com/problems/flipping-an-image/

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  const answer = Array.from(Array(image.length), () => []);

  image.forEach((v, i) => {
    for (let j = v.length - 1; j >= 0; j--) {
      if (!v[j]) {
        answer[i].push(1);
      } else {
        answer[i].push(0);
      }
    }
  });

  return answer;
};

var flipAndInvertImage = function (A) {
  return A.map(row => row.reverse().map(num => num ^ 1));
};
