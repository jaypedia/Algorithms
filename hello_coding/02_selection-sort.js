// Selection sort Algorithm
// 2021-11-22

// 배열을 작은 정수에서 큰 정수 순서로 정렬하는 코드

// 우선 배열에서 가장 작은 원소 찾기 - 중첩 함수로도 가능
function findSmallest(arr) {
  let smallest = arr[0];
  let smallest_index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
}

// console.log(findSmallest([5, 3, 6, 2, 10]));

function selectionSort(arr) {
  let newArr = [];
  let smallest_index = null;
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    smallest_index = findSmallest(arr); // 최소 인덱스 찾기
    newArr.push(arr[smallest_index]); // 최소 인덱스 해당하는 값을 newArr에 푸시
    arr.splice(smallest_index, 1);
    // console.log('arr : ', arr);
  }
  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
