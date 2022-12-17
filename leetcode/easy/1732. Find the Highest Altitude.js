// Dec 18, 2022
// https://leetcode.com/problems/find-the-highest-altitude/

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let altitude = 0;
  const altitudeArr = [0];

  gain.forEach(v => {
    altitude += v;
    altitudeArr.push(altitude);
  });

  return Math.max(...altitudeArr);
};

const largestAltitude = gain => {
  let previous = 0;
  let biggest = 0;

  for (let i = 0; i < gain.length; i += 1) {
    previous += gain[i];
    if (previous > biggest) biggest = previous;
  }

  return biggest;
};

// https://leetcode.com/problems/find-the-highest-altitude/solutions/1125910/simple-and-easy-to-understand-with-explanation/
const largestAltitude2 = gain => {
  return Math.max(...gain.reduce((acc, cv, i) => (acc.push(cv + acc[i]), acc), [0]));
};
