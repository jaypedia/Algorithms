// Dec 23, 2022
// https://leetcode.com/problems/unique-number-of-occurrences/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const obj = arr.reduce((acc, cur) => {
    acc[cur] = ~~acc[cur] + 1;
    return acc;
  }, {});

  const values = Object.values(obj);
  const set = new Set(values);
  return values.length === set.size;
};

// https://leetcode.com/problems/unique-number-of-occurrences/solutions/394398/o-n-javascript-100-better-space-and-time-using-a-hash-map-and-a-set-commented-explained/
var uniqueOccurrences = function (arr) {
  // Let's make a map to keep track of how many times each number occurs in our array
  let myMap = new Map();

  //For every number in our array using the for-of loop
  for (let num of arr) {
    //If we have the key already, we know the value is a number, so increment it by one
    if (myMap.has(num)) {
      myMap.set(num, myMap.get(num) + 1);
    } else {
      //If we dont have the key in our map...
      myMap.set(num, 1);
    }
  }
  //Make a new set and add the value of each key. If at any point we already saw the value we know the occurrences are NOT unique
  let mySet = new Set();
  //Grab the key and value of each myMap entry
  for (const val of myMap.values()) {
    //If the set already has it, return false
    if (mySet.has(val)) return false;
    //Otherwise add it
    mySet.add(val);
  }
  //If we got though the code above, return true, since the occurrences are all unique
  return true;
};
