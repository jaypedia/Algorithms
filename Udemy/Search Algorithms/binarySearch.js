// 2022.2.9

// Accepts a sorted array and a value
function BS(arr, val) {
  // Create a left pointer at the start of the array, and a right pointer at the end of the array
  let left = 0;
  let right = arr.length - 1;

  // while the left pointer comes before the right pointer
  // while(arr[middle] !== val) also works.
  while (left < right) {
    // Create a pointer in the middle
    let mid = Math.floor((left + right) / 2);

    // If you find the value you want, return the index
    if (arr[mid] === val) return mid;

    // If the value is too small, move the left pointer up
    if (arr[mid] < val) left = mid + 1;

    // If the value is too large, move the right pointer down
    if (arr[mid] > val) right = mid;
  }
  // If you never find the value, return -1
  return -1;
}

// Test Case
console.log(BS([1, 2, 3, 4, 5, 6, 7, 8], 5)); // 4
console.log(BS([1, 2, 3, 4, 5, 6, 7, 8], -100)); // -1

// Another way
function binarySearch(array, target, startIndex, endIndex) {
  if (startIndex > endIndex) return false;

  const mid = Math.floor((startIndex + endIndex) / 2);

  if (array[mid] === target) return mid;
  if (array[mid] > target) return binarySearch(array, target, startIndex, mid - 1);
  if (array[mid] < target) return binarySearch(array, target, mid + 1, endIndex);
}
