/* Insertion sort
    2021.12.15 
*/

function inSertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentVal;
  }
  return arr;
}

// console.log(inSertionSort([2, 1, 9, 76, 4]));

// let version
const insertionSort2 = arr => {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let el = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > el; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = el;
  }
  return arr;
};

console.log(insertionSort2([2, 1, 9, 76, 4]));
