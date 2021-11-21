// Binary Search Algorithm
// 2021-11-21

// 입력 : 정렬된 원소 배열
// 배열에 원하는 원소가 있으면 그 원소의 위치를 반환, 없으면 null을 반환

// 탐색을 하면서 현재 배열 중 어느 부분을 탐색해야 하는지 기억해야 함
// 처음에는 배열 전체를 탐색해야 함
// low, high는 전체 배열 중 어떤 부분을 탐색해야 하는지 알려 줌

function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;
  let mid = 0;
  let guess = 0;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    guess = arr[mid];

    if (guess === item) return mid;
    if (guess > item) high = mid - 1;
    else low = mid + 1;
  }
  return null;
}

const array1 = [1, 3, 5, 7, 9];
console.log(binarySearch(array1, 3)); // 1 (3의 배열에서의 인덱스는 1)
console.log(binarySearch(array1, -1)); // null
