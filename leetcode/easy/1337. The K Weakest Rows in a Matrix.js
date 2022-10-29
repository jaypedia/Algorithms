// Oct 29, 2022
// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/

// Use Binary Search
var kWeakestRows = function (mat, k) {
  const soldiers = mat.map((row, i) => [i, getSoldierCount(row)]);

  return soldiers
    .sort((a, b) => a[1] - b[1] || a[0] - b[0])
    .slice(0, k)
    .map(v => v[0]);

  function getSoldierCount(row) {
    let l = 0;
    let h = row.length - 1;

    while (l <= h) {
      const mid = Math.floor((l + h) / 2);
      if (row[mid] === 1 && (row[mid + 1] === 0 || mid === row.length - 1)) {
        return mid + 1;
      } else if (row[mid] === 0) {
        h = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return 0;
  }
};

var kWeakestRows = function (mat, k) {
  const soldiers = mat.map((row, i) => [i, row.filter(Number).length]);

  return soldiers
    .sort((a, b) => a[1] - b[1] || a[0] - b[0])
    .slice(0, k)
    .map(v => v[0]);
};
