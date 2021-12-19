/* Bubble sort
2021.12.15 

Pseudo Code

1. Start looping from the end of the array towards the beginning with a variable called i
2. Start an inner loop with a variable called j from the beginning until i - 1
3. If arr[j] is greater than arr[j+1], swap those two values!
4. Return the sorted array 

*/

// Before optimization
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log('ONE PASS COMPLETE');
  }
  return arr;
}

console.log('Result : ', bubbleSort([37, 45, 29, 8]));
