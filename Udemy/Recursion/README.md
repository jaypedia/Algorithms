# Recursion

##### 2022.1.12

---

## Objectives

- [ ] 재귀가 무엇인지 정의할 수 있고, 어떻게 쓰이는지를 안다.
- [ ] 재귀함수의 두 가지 필수 요소를 이해한다.
- [ ] 크롬 개발자 도구에서 디버깅을 더 잘 할 수 있도록 call stack을 시각화한다.
- [ ] 더 어려운 문제를 해결하기 위해 helper method recursion과 pure recursion을 사용한다.

---

## 1. What is recursion?

- A process (a function in our case) that calls itself
- 자기 자신을 호출하는 함수

### Why use recursion?

- It's everywhere!
  - JSON.parse / JSON.stringify

## 2. The call stack

##### If a recursive function is calling itself over and over again, what happens behind the scenes?

- This is important for us to understand **in order to write effective recursive code that doesn't break.**
- In almost all program languages, there is a built in data structure that manages what happens when functions are invoked.
- Any time a function is invoked, it is placed(pushed) on the top of the call stack.
- When JavaScript sees the return keyword or when the function ends, **the compiler** will remove(pop).
- When we're writing recursive functions, we're going to be working with the call stack a lot.
  - You're used to functions being pushed on the call stack and popped off when they are done
  - When we write recursive functions, **we keep pushing new functions onto the call stack.**
  - The same function over and over, and **it's waiting to be called**.

![image](https://user-images.githubusercontent.com/85419343/149121628-c519b39d-7478-40fa-b1db-3120656f2c38.png)

## 3. Recursive function

```js
function sumRange(num) {
  if (num === 1) return 1; // 1) Base case
  return num + sumRange(num - 1); // 2)  Different input
}
```

### (1) Base case

- Base case almost always involves a conditional to check for something and then it returns something.
- That's the end, the bottom of the well. (End point)
- 재귀가 멈추는 조건

### (2) Different input

- 같은 함수가 호출되더라도, 매번 다른 데이터가 입력되어야 한다.

### Example

#### Wrting Factorial Iteratively

```js
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}
```

#### Writing Factorial Recursively

```js
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
```

## 4. Common Recursion Pitfalls

### (1) No base case

### (2) Forgetting to return or returning the wrong thing

### (3) Stack overflow

- Too many functions trying to be called
- The recursion is not stopping
- Maxium call size exceeded error
  - stack의 사이즈는 정해져 있는데 base case가 없으면 재귀함수가 무한 호출되어 call stack이 꽉 차게 됨

## 5. Two design patterns of recursion

### (1) Helper method recursion

- This is commonly done when we need to complie something like an array or a list of data.

```js
function collectOddValues(arr) {
  // Main outer function - not recursive
  // If we tried to define result inside of the helper (recursive) function,
  // it would be reset to an empty array every time through.
  let result = [];

  function helper(helperInput) {
    // Inside function - recursive
    if (helperInput.length === 0) return; // Base case

    if (helperInput[0] % 2 !== 0) {
      // if it is odd
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1)); // exclude the first element
  }

  helper(arr);
  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
```

### (2) Pure recursion

- It's totally self-contained and recursive.
- We don't have some external data structure like we had before.
  - result 배열을 외부에 놓을 필요가 없어진다.

```js
function collectOddValues(arr) {
  // This array is going to be an empty array
  // every time the function is called recursively.
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  // Concatenate all the arrays at the very end into one array and return
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);
```

#### Tips for pure recursion

- For arrays, use methods like `slice`, the spread operator, and `concat` that make copies of arrays so you do not mutate them.
  - This will allow you to accumulate some sort of result.
- Strings are immutable, so you will need to use methods like `slice`, `substr`, or `substring` to make copies of strings.
- To make copies of objects, use `Object.assign` or the spread operator.

---

### Reference

https://www.udemy.com/course/best-javascript-data-structures/
