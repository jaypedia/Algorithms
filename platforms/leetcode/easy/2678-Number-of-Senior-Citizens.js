/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  return details.reduce((acc, cur) => {
    const age = Number(cur.slice(-4, -2));
    if (age > 60) acc++;
    return acc;
  }, 0);
};

var countSeniors = function (details) {
  return details.filter((el) => el.slice(-4, -2) > 60).length;
};
