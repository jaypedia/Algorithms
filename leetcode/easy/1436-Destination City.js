// Oct 27, 2022
// https://leetcode.com/problems/destination-city

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const set = new Set();

  paths.forEach(path => {
    path.forEach(p => {
      if (set.has(p)) set.delete(p);
      else set.add(p);
    });
  });

  for (const path of paths) {
    const [_, second] = path;
    if (set.has(second)) return second;
  }
};

// https://leetcode.com/problems/destination-city/solutions/2693776
var destCity = function (paths) {
  const hashmapStart = {};
  const hashmapEnd = {};

  for (let i = 0; i < paths.length; i++) {
    hashmapStart[paths[i][0]] = 1;
    hashmapEnd[paths[i][1]] = 1;
  }

  const array = Object.keys(hashmapEnd);
  for (let i = 0; i < array.length; i++) {
    if (!hashmapStart[array[i]]) return array[i];
  }
};
