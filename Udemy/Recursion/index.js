// Call stack example
function takeShower() {
  return 'Showering!';
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ['Oatmeal', 'Eggs', 'Protein Shake'];
  return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log('Ok ready to go to work!');
}

wakeUp();

function sumRange(num) {
  if (num === 1) return 1; // Base case
  return num + sumRange(num - 1);
}

sumRange(4);

// 📃 Recursion practice

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

power(2, 3);

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

// Helper method recursion
function productOfArray(arr) {
  let product = 1;
  helper(arr);
  function helper(arr) {
    if (arr.length === 0) return 1;
    product *= arr[0];
    helper(arr.slice(1));
  }
  return product;
}

productOfArray([1, 2, 3]);

// Pure recursion
function productOfArray2(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}

recursiveRange(10);

// Return the nth number in Fibonacci sequence
function fib(n) {}
